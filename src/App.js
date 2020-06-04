import React from "react";
import "./styles.css";

export default function App() {
  return (
    <form>
      <span className="formtext">Provide Some Text</span>
      <input text="text" placeholder="Some Text" required />
      <button>Submit</button>
    </form>
  );
}
