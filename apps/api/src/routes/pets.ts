import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();

// Validation schemas
const createPetSchema = z.object({
  name: z.string().min(1),
  species: z.enum(["DOG", "CAT", "BIRD"]),
  breed: z.string().optional(),
  birthDate: z.string().date(),
});

const updatePetSchema = z.object({
  name: z.string().min(1).optional(),
  species: z.enum(["DOG", "CAT", "BIRD"]).optional(),
  breed: z.string().optional(),
  birthDate: z.string().date(),
});

// Middleware to verify JWT token
const authenticateToken = async (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_KEY || "your-secret-key"
    ) as any;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

// Get all pets for the authenticated user
router.get("/", authenticateToken, async (req: any, res) => {
  try {
    const pets = await prisma.pet.findMany({
      where: {
        accountId: req.user.sub,
      },
      include: {
        vaccines: true,
        allergies: true,
        labs: true,
      },
    });

    res.json(pets);
  } catch (error) {
    console.error("Error in GET /pets route", error);
    res.status(500).json({ error: "Failed to fetch pets" });
  }
});

// Get a single pet by ID
router.get("/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    const pet = await prisma.pet.findFirst({
      where: {
        id,
        accountId: req.user.sub,
      },
      include: {
        vaccines: true,
        allergies: true,
        labs: true,
      },
    });

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    res.json(pet);
  } catch (error) {
    console.error("Error in GET /pets/:id route", error);
    res.status(500).json({ error: "Failed to fetch pet" });
  }
});

// Create a new pet for the authenticated user
router.post("/", authenticateToken, async (req: any, res) => {
  try {
    const { name, species, breed, birthDate } = createPetSchema.parse(req.body);

    const pet = await prisma.pet.create({
      data: {
        name,
        species,
        breed,
        birthDate: birthDate ? new Date(birthDate) : null,
        accountId: req.user.sub,
      },
    });

    res.status(201).json(pet);
  } catch (error) {
    console.error("Error in POST /pets route", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: "Failed to create pet" });
  }
});

// Update a pet
router.patch("/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;
    const updateData = updatePetSchema.parse(req.body);

    // Check if pet exists and belongs to the user
    const existingPet = await prisma.pet.findFirst({
      where: {
        id,
        accountId: req.user.sub,
      },
    });

    if (!existingPet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    // Prepare update data
    const data: any = { ...updateData };
    if (data.birthDate) {
      data.birthDate = new Date(data.birthDate);
    }

    // Update the pet
    const updatedPet = await prisma.pet.update({
      where: {
        id,
      },
      data,
    });

    res.json(updatedPet);
  } catch (error) {
    console.error("Error in PATCH /pets/:id route", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: "Failed to update pet" });
  }
});

// Delete a pet
router.delete("/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    // Check if pet exists and belongs to the user
    const pet = await prisma.pet.findFirst({
      where: {
        id,
        accountId: req.user.sub,
      },
    });

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    // Delete the pet
    await prisma.pet.delete({
      where: {
        id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error in DELETE /pets/:id route", error);
    res.status(500).json({ error: "Failed to delete pet" });
  }
});

export default router;
