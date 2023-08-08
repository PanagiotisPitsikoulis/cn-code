import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FC = () => {
  return <div>Hello from React!</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
