import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
