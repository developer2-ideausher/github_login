"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      <h1 className="text-3xl font-bold text-gray-800 mt-6">Welcome to Our App</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        This is the main landing page. You can log in or sign up to continue.
      </p>
      
      <div className="mt-6 flex gap-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link href="/signin">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
