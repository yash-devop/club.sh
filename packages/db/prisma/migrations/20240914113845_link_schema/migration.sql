-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "url" VARCHAR NOT NULL,
    "shortCode" TEXT NOT NULL,
    "title" TEXT,
    "description" VARCHAR(280),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
