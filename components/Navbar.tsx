import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image src="/logo.png" alt="logo" height={100} width={100} />
                  {/* <img
                      className="block lg:hidden h-8 w-auto"
                      src="/logo.svg"
                      alt="Logo"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/logo.svg"
                      alt="Logo"
                    /> */}
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <div className="ml-6 flex">
                <Link href="/about">
                  <div className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                    About
                  </div>
                </Link>
                <Link href="/projects">
                  <div className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                    Projects
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar