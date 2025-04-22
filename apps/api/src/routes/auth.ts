import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

const router = Router();
const prisma = new PrismaClient();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
  phoneNumber: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { email, password, name, phoneNumber } = registerSchema.parse(
      req.body
    );

    // Check if user already exists
    const existingUser = await prisma.account.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const account = await prisma.account.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phoneNumber,
      },
    });

    // Generate JWT
    const token = jwt.sign(
      { sub: account.id, email: account.email },
      process.env.JWT_KEY || "your-secret-key",
      { expiresIn: "1d" }
    );

    // Remove password from response
    const { password: _, ...result } = account;

    res.json({
      ...result,
      accessToken: token,
    });
  } catch (error) {
    console.error("Error in /auth/register route", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Find user
    const account = await prisma.account.findUnique({
      where: { email },
    });

    if (!account) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { sub: account.id, email: account.email },
      process.env.JWT_KEY || "your-secret-key",
      { expiresIn: "1d" }
    );

    res.json({ accessToken: token });
  } catch (error) {
    console.error("Error in /auth/register route", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
