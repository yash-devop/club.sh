-- CreateTable
CREATE TABLE "ClickEvents" (
    "id" TEXT NOT NULL,
    "devices" INTEGER NOT NULL,
    "browser" INTEGER NOT NULL,
    "os" INTEGER NOT NULL,
    "referrer" INTEGER NOT NULL,
    "country" INTEGER NOT NULL,
    "analyticsId" TEXT NOT NULL,

    CONSTRAINT "ClickEvents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClickEvents_analyticsId_key" ON "ClickEvents"("analyticsId");

-- AddForeignKey
ALTER TABLE "ClickEvents" ADD CONSTRAINT "ClickEvents_analyticsId_fkey" FOREIGN KEY ("analyticsId") REFERENCES "Analytics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
