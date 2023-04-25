"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Here you can do your API request
      // Example: const response = await fetch("your-api-url/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // Here you can check the response status and do the necessary actions
      // Example: const data = await response.json();
      // if (response.ok) {
      //   setIsLoading(false);
      //   router.push("/dashboard");
      // } else {
      //   setIsLoading(false);
      //   setError(data.message);
      // }

      setIsLoading(false);
      router.push("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dashboard | Rhesa Davonanto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isLoading && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
