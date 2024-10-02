/*
  Warnings:

  - You are about to drop the column `city` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `Analytics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "city",
DROP COLUMN "userAgent";
