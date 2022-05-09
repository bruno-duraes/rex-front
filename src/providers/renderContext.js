import React, { useState } from "react";
import { ConsultPage } from "../pages/ConsultPage";

export const RenderContext = React.createContext({});

export const RenderProvider = (props) => {
    const [render, setRender] = useState({
        name: "ConsultPage",
        render: <ConsultPage />
    })

    return (
        <RenderContext.Provider value={{ render, setRender }}>
            {props.children}
        </RenderContext.Provider>
    )
}