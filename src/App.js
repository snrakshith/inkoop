import React from "react";
import Shows from "./pages/Shows";
import AboutMe from "./utils/AboutMe";

const App = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfd2ec",
      }}
    >
      <header
        style={{
          marginTop: "25px",
          color: "#1864b1",
        }}
      >
        <h2>Welcome to The Rick and Morty Show</h2>
      </header>
      <main>
        <Shows />
      </main>
      {/* About Me */}
      <footer style={{ marginTop: "10px", width: "60%" }}>
        <AboutMe />
      </footer>
    </div>
  );
};

export default App;
