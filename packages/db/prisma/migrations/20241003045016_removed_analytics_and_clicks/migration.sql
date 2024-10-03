/*
  Warnings:

  - You are about to drop the `Analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClickEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_urlId_fkey";

-- DropForeignKey
ALTER TABLE "ClickEvents" DROP CONSTRAINT "ClickEvents_analyticsId_fkey";

-- DropTable
DROP TABLE "Analytics";

-- DropTable
DROP TABLE "ClickEvents";
