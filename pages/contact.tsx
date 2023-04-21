import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - My Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me through this contact form"
        />
      </Head>

      <section className="bg-gray-100 py-12">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8">
            Fill out the form below to send me a message and I will get back to
            you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
