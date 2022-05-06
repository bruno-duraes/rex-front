import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { AddBudgetPage } from "./pages/AddBudgetPage";
import { ConsultPage } from "./pages/ConsultPage";

export function App() {
    const addBudgetPage = { name: 'AddBudgetPage', render: <AddBudgetPage /> }
    const consultPage = { name: 'ConsultPage', render: <ConsultPage /> }
    const [renderState, setRenderState] = useState(consultPage);
    function renderButtonBar() {
        if (renderState.name == 'ConsultPage') {
            return (
                <>
                    <div className="mr-2">
                        <Button
                            label={<label className="text-white cursor-pointer">Novo Pedido</label>}
                            icon='pi pi-plus'
                            className="p-button-raised flex align-items-center"
                            style={{
                                background: 'none',
                                border: '2px solid white'
                            }}
                            onClick={() => setRenderState(addBudgetPage)}
                        />
                    </div>
                </>
            )
        } else {
            return (
                <div className="mr-2">
                    <Button
                        label={<label className="text-white cursor-pointer">Voltar</label>}
                        icon='pi pi-arrow-left'
                        className="p-button-raised flex align-items-center"
                        style={{
                            background: 'none',
                            border: '2px solid white'
                        }}
                        onClick={() => setRenderState(consultPage)}
                    />
                </div>
            )
        }
    }

    return (
        <>
            <div className="flex p-2 w-ful" style={{ background: '#337597' }} >
                {renderButtonBar()}
            </div>
            <div className="container p-3 surface-200">
                <Card>
                    {renderState.render}
                </Card>
            </div>
        </>
    )
}