import Head from "next/head";

const dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dashboard | Rhesa Davonanto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <h1>Dashboard</h1>
      </main>

    </div>
  );
};

export default dashboard;
