import App from "./client/App";

let React = require("react");
const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);