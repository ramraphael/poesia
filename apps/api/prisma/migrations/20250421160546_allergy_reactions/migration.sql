/*
  Warnings:

  - The `reactions` column on the `Allergy` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AllergyReaction" AS ENUM ('HIVES', 'RASH', 'SWELLING');

-- AlterTable
ALTER TABLE "Allergy" DROP COLUMN "reactions",
ADD COLUMN     "reactions" "AllergyReaction"[];
