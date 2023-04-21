import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Portfolio</title>
        <meta
          name="description"
          content="Learn more about me and my skills as a fullstack developer."
        />
      </Head>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
                width={100}
                height={100}
                className="w-full rounded-md"
                src="/profile/me.JPG"
                alt='1'
                />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="mb-4">
                Hi there, I am John Doe. I am a fullstack developer with over 5
                years of experience in building web applications using various
                technologies such as React, Node.js, and MongoDB.
              </p>
              <p className="mb-4">
                I am passionate about creating efficient, scalable, and
                user-friendly web applications that meet the needs of both
                clients and end-users. I believe that the best way to achieve
                this is through collaboration, communication, and continuous
                learning.
              </p>
              <p className="mb-4">
                When I am not coding, I enjoy hiking, reading, and playing video
                games. If you did like to learn more about me or my work, feel
                free to get in touch!
              </p>
              <a
                href="#"
                className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
