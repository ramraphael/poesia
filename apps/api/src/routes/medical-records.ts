import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();

// Validation schemas
const createVaccineSchema = z.object({
  name: z.string().min(1),
  date: z.string().date(),
});

const createAllergySchema = z.object({
  name: z.string().min(1),
  severity: z.enum(["MILD", "SEVERE"]),
  reactions: z.array(z.enum(["HIVES", "RASH", "SWELLING"])).optional(),
});

const createLabReportSchema = z.object({
  name: z.string().min(1),
  dosage: z.string().min(1),
  instructions: z.string().min(1),
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

// Middleware to check if pet belongs to the authenticated user
const checkPetOwnership = async (req: any, res: any, next: any) => {
  try {
    const { petId } = req.params;

    const pet = await prisma.pet.findFirst({
      where: {
        id: petId,
        accountId: req.user.sub,
      },
    });

    if (!pet) {
      return res.status(404).json({ error: "Pet not found or unauthorized" });
    }

    next();
  } catch (error) {
    console.error("Error in checkPetOwnership middleware", error);
    res.status(500).json({ error: "Failed to verify pet ownership" });
  }
};

// ===== VACCINE ROUTES =====

// Create a new vaccine for a pet
router.post(
  "/pets/:petId/vaccines",
  authenticateToken,
  checkPetOwnership,
  async (req: any, res) => {
    try {
      const { petId } = req.params;
      const { name, date } = createVaccineSchema.parse(req.body);

      const vaccine = await prisma.vaccine.create({
        data: {
          name,
          date: new Date(date),
          petId,
        },
      });

      res.status(201).json(vaccine);
    } catch (error) {
      console.error(
        "Error in POST /medical-records/pets/:petId/vaccines route",
        error
      );
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Failed to create vaccine record" });
    }
  }
);

// Delete a vaccine
router.delete("/vaccines/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    // Check if vaccine exists and belongs to the user's pet
    const vaccine = await prisma.vaccine.findFirst({
      where: {
        id,
      },
      include: {
        pet: true,
      },
    });

    if (!vaccine) {
      return res.status(404).json({ error: "Vaccine record not found" });
    }

    if (vaccine.pet.accountId !== req.user.sub) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this vaccine record" });
    }

    // Delete the vaccine
    await prisma.vaccine.delete({
      where: {
        id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error in DELETE /medical-records/vaccines/:id route", error);
    res.status(500).json({ error: "Failed to delete vaccine record" });
  }
});

// ===== ALLERGY ROUTES =====

// Create a new allergy for a pet
router.post(
  "/pets/:petId/allergies",
  authenticateToken,
  checkPetOwnership,
  async (req: any, res) => {
    try {
      const { petId } = req.params;
      const { name, severity, reactions } = createAllergySchema.parse(req.body);

      const allergy = await prisma.allergy.create({
        data: {
          name,
          severity,
          petId,
          reactions,
        },
      });

      res.status(201).json(allergy);
    } catch (error) {
      console.error(
        "Error in POST /medical-records/pets/:petId/allergies route",
        error
      );
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Failed to create allergy record" });
    }
  }
);

// Delete an allergy
router.delete("/allergies/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    // Check if allergy exists and belongs to the user's pet
    const allergy = await prisma.allergy.findFirst({
      where: {
        id,
      },
      include: {
        pet: true,
      },
    });

    if (!allergy) {
      return res.status(404).json({ error: "Allergy record not found" });
    }

    if (allergy.pet.accountId !== req.user.sub) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this allergy record" });
    }

    // Delete the allergy
    await prisma.allergy.delete({
      where: {
        id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error(
      "Error in DELETE /medical-records/allergies/:id route",
      error
    );
    res.status(500).json({ error: "Failed to delete allergy record" });
  }
});

// ===== LAB REPORT ROUTES =====

// Create a new lab report for a pet
router.post(
  "/pets/:petId/labs",
  authenticateToken,
  checkPetOwnership,
  async (req: any, res) => {
    try {
      const { petId } = req.params;
      const { name, dosage, instructions } = createLabReportSchema.parse(
        req.body
      );

      const labReport = await prisma.labReport.create({
        data: {
          name,
          dosage,
          instructions,
          petId,
        },
      });

      res.status(201).json(labReport);
    } catch (error) {
      console.error(
        "Error in POST /medical-records/pets/:petId/labs route",
        error
      );
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Failed to create lab report" });
    }
  }
);

// Delete a lab report
router.delete("/labs/:id", authenticateToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    // Check if lab report exists and belongs to the user's pet
    const labReport = await prisma.labReport.findFirst({
      where: {
        id,
      },
      include: {
        pet: true,
      },
    });

    if (!labReport) {
      return res.status(404).json({ error: "Lab report not found" });
    }

    if (labReport.pet.accountId !== req.user.sub) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this lab report" });
    }

    // Delete the lab report
    await prisma.labReport.delete({
      where: {
        id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error in DELETE /medical-records/labs/:id route", error);
    res.status(500).json({ error: "Failed to delete lab report" });
  }
});

export default router;
