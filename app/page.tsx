'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to my page!</h1>
      <p className="text-lg text-gray-500 mb-8">
        Click the button below to go to my personal page.
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href='/personal'
      >
        Go to Personal Page
      </Link>
    </div>
  );
};

export default page;
