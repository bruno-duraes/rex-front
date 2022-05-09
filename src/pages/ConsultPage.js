import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useContext, useState } from 'react';
import { RenderContext } from '../providers/renderContext';
import { getMockOrders } from '../services/getMockOrders';
import { ViewPage } from './ViewPage';

export function ConsultPage() {
    let orders = getMockOrders()
    const [orcamentos, setOrcamentos] = useState(orders)
    const { setRender } = useContext(RenderContext);

    function statusTemplate(rowData) {
        if (rowData.status == true) {
            return (
                <i className='pi pi-circle-fill' style={{ color: '#4fd54f' }}></i>
            )
        } else {
            return (
                <i className='pi pi-circle-fill' style={{ color: '#d54f4f' }}></i>
            )
        }
    }
    function operationsTemplate(rowData, r) {
        return (
            <div className=' flex justify-content-center'>
                <i
                    className='pi pi-eye mr-3 font-medium text-xl cursor-pointer'
                    style={{ color: '#337597' }}
                    onClick={() => setRender({ name: 'ViewPage', render: <ViewPage /> })}
                ></i>
                <i
                    className='pi pi-ban font-medium text-xl cursor-pointer'
                    style={{ color: '#337597' }}
                    onClick={() => {
                        if (!rowData.status) {
                            let orders = JSON.parse(localStorage.getItem('orders'));
                            orders.splice(r.rowIndex, 1)
                            localStorage.setItem('orders', JSON.stringify(orders));
                            setOrcamentos(orders)
                        }

                    }}
                ></i>
            </div>
        )
    }
    return (
        <>
            <DataTable
                header={<span className='text-700'>Orçamentos/Pedidos</span>}
                value={orcamentos}
                emptyMessage={'Nenhum pedido Encontrado'}
            >
                <Column bodyClassName='w-1rem text-center' body={statusTemplate} header='Status'></Column>
                <Column headerClassName='text-700 text-sm' bodyClassName='w-2rem' field='numero' header='Numero'></Column>
                <Column headerClassName='text-700 text-sm' bodyClassName='w-8rem' field='pedCliente' header='Ped Cliente'></Column>
                <Column headerClassName='text-700 text-sm' field='entrega' header='Data'></Column>
                <Column headerClassName='text-700 text-sm' field='valorTotal' header='Valor'></Column>
                <Column headerClassName='text-700 text-sm' field='cliente' header='Cliente'></Column>
                <Column headerClassName='text-700 text-sm' field='representante' header='Representante'></Column>
                <Column bodyClassName='w-8rem' body={operationsTemplate} ></Column>
            </DataTable>
        </>
    );
}