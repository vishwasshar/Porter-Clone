import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import "@/app/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
