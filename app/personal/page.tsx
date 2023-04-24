'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Home | Rhesa Davinanto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Hi, Rhesa Davinanto.
            <br />
            <span className="text-indigo-600">Fullstack Developer</span>
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Im passionate about building web applications using the latest
            technologies. With experience in both front-end and back-end
            development, I can turn your ideas into high-quality software.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block text-white bg-indigo-600 py-3 px-8 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </main>

    </div>
  );
};

export default page;
