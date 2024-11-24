import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex justify-center items-center">
        <Image
          className=" "
          src="/meeting.svg"
          height={400}
          width={400}
          alt="bannerImage"
        />

        <div className="flex justify-center items-center flex-col">
          <h1
            className="text-6xl md:text-7xl lg:text-9xl font-medium 
       bg-gradient-to-r from-pink-500 to bg-purple-700  bg-clip-text text-center text-transparent"
          >
            Clash
          </h1>
          <p className=" text-pink-700 text-center text-2xl md:text-3xl lg:text-4xl font-normal">
            Discover the better choice, together
          </p>

          <Link href="/login">
            <Button  variant={"destructive"} className="mt-3">Start Here </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
