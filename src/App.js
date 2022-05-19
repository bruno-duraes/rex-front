import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { useContext, useEffect, useState } from "react";
import { AddBudgetPage } from "./pages/AddBudgetPage";
import { ConsultPage } from "./pages/ConsultPage";
import { RenderContext } from "./providers/renderContext";

export function App() {
    const { render, setRender, globalToast } = useContext(RenderContext);
    const [renderState, setRenderState] = useState(render);
    useEffect(() => {
        setRenderState(render)
    }, [render]);
    function renderButtonBar() {
        if (renderState.name == 'ConsultPage') {
            return (
                <>
                    <div className="mr-2">
                        <Button
                            label={<label className="text-white cursor-pointer">Novo Pedido</label>}
                            icon='pi pi-plus'
                            className="p-button-raised flex align-items-center btn"
                            style={{
                                background: 'none',
                                border: '2px solid white'
                            }}
                            onClick={() => setRender({ name: 'AddBudgetPage', render: <AddBudgetPage /> })}
                        />
                    </div>
                </>
            )
        } else {
            return (
                <div className="mr-2">
                    <Button
                        label={<label className="text-white cursor-pointer btn">Voltar</label>}
                        icon='pi pi-arrow-left'
                        className="p-button-raised flex align-items-center"
                        style={{
                            background: 'none',
                            border: '2px solid white'
                        }}
                        onClick={() => setRender({ name: 'ConsultPage', render: <ConsultPage /> })}
                    />
                </div>
            )
        }
    }

    return (
        <>
            <Toast ref={globalToast} />
            <div className="flex p-2 w-ful" style={{ background: '#337597' }} >
                {renderButtonBar()}
            </div>
            <div className="container p-2 surface-200">
                <Card className="p-0">
                    {renderState.render}
                </Card>
            </div>
        </>
    )
}