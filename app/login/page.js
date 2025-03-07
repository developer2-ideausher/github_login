"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import Link from "next/link";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export default function Login() {
  const router = useRouter(); // Router instance for redirection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login success:", userCredential.user);
      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  // GitHub Login
  const signinWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub login success:", result.user);
      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      setError("GitHub sign-in failed");
      console.error("GitHub sign-in error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          onClick={signinWithGithub}
          className="w-full flex items-center justify-center bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Login with GitHub
        </button>

        <p className="text-center mt-4 text-gray-600">
          New here?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
