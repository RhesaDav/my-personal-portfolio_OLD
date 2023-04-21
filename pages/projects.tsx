import Head from 'next/head';
import Image from 'next/image';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects - My Portfolio</title>
        <meta
          name="description"
          content="See my latest projects and what I'm currently working on"
        />
      </Head>

      <section className="bg-gray-100 py-12">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* project 1 */}
            <div className="bg-white rounded-md overflow-hidden shadow-lg">
                <Image
                width={100}
                height={100}
                className="w-full object-cover object-center h-64"
                src="/project1/001.png"
                alt='1'
                />
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">
                  This is a project that I developed for a client in the
                  e-commerce industry. It is built with Next.js and utilizes a
                  headless CMS for content management. The site is optimized for
                  performance and includes various features such as dynamic
                  filtering, lazy loading, and server-side rendering.
                </p>
                <a
                  href="#"
                  className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* project 2 */}
            <div className="bg-white rounded-md overflow-hidden shadow-lg">
            <Image
                width={100}
                height={100}
                className="w-full object-cover object-center h-64"
                src="/project1/002.png"
                alt='2'
                />
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">Project 2</h3>
                <p className="text-gray-600 mb-4">
                  This is a personal project that I developed to learn more
                  about React and Redux. It is a simple task management app
                  that allows users to add, edit, and delete tasks. It also
                  includes a feature for filtering tasks based on their status.
                  The app is built with Create React App and utilizes Firebase
                  for authentication and data storage.
                </p>
                <a
                  href="#"
                  className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* project 3 */}
            <div className="bg-white rounded-md overflow-hidden shadow-lg">
            <Image
                width={100}
                height={100}
                className="w-full object-cover object-center h-64"
                src="/project1/003.png"
                alt='3'
                />
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">Project 3</h3>
                <p className="text-gray-600 mb-4">
                  This is a project that I developed for a local nonprofit
                  organization. It is built with WordPress and includes various
                  customizations such as a custom theme, custom post types, and
                  custom fields. The site is optimized for search engines and
                  includes various features such as a donation system and an
                  events calendar.
                </p>
               
                <a
              href="#"
              className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
);
};

export default Projects;