/*
  Warnings:

  - Added the required column `urlId` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytics" ADD COLUMN     "urlId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Analytics_id_urlId_idx" ON "Analytics"("id", "urlId");

-- AddForeignKey
ALTER TABLE "Analytics" ADD CONSTRAINT "Analytics_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
