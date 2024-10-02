/*
  Warnings:

  - A unique constraint covering the columns `[urlId]` on the table `Analytics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Analytics_urlId_key" ON "Analytics"("urlId");
