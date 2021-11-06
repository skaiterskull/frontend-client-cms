import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main
        className="bg-light"
        style={{ minHeight: "92.6vh", paddingTop: "5rem" }}
      >
        {children}
      </main>
      <footer className="bg-dark p-4 text-light d-flex justify-content-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
