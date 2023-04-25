"use client";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container px-10">{children}</div>
      <Footer />
    </div>
  );
}
