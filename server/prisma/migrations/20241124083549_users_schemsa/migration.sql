-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "password_reset_token" TEXT,
    "token_send_at" TIMESTAMP(3),
    "email_verified_at" TIMESTAMP(3),
    "email_verified_verified" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
