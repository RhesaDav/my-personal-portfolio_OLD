const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-6">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
          <a href="#" className="hover:text-gray-500">
            About
          </a>
          <a href="#" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#" className="hover:text-gray-500">
            Contact
          </a>
        </div>
        <p className="text-center mt-4">
          &copy; 2023 My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
