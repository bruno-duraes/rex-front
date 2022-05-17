import React, { useRef, useState } from "react";
import { ConsultPage } from "../pages/ConsultPage";

export const RenderContext = React.createContext({});

export const RenderProvider = (props) => {
    const [render, setRender] = useState({
        name: "ConsultPage",
        render: <ConsultPage />
    })
    const globalToast = useRef(null);

    return (
        <RenderContext.Provider value={{ render, setRender, globalToast }}>
            {props.children}
        </RenderContext.Provider>
    )
}