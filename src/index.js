import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { render } from "react-dom";
import '../node_modules/primeflex/primeflex.css';
import { App } from "./App";
import "./index.css";

render(
    <>
        <App />
    </>
    , document.querySelector('#root')
);