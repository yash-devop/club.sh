-- CreateTable
CREATE TABLE "Analytics" (
    "id" TEXT NOT NULL,
    "browser" VARCHAR,
    "devices" TEXT,
    "os" TEXT,
    "referrer" TEXT,
    "userAgent" TEXT,
    "country" TEXT,
    "city" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);
