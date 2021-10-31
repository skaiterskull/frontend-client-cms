import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main style={{ minHeight: "92.6vh" }}>{children}</main>
      <footer className="bg-dark p-4 text-light d-flex justify-content-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
