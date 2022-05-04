import 'primeflex/primeflex.css';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { render } from "react-dom";
import { App } from "./App";
import "./index.css";

render(
    <>
        <App />
    </>
    , document.querySelector('#root')
);