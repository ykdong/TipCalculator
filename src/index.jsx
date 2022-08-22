import React from "react";
import Calculator from './Calculator.jsx';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const App = () => {
    return <Calculator />
}

root.render(<App />);