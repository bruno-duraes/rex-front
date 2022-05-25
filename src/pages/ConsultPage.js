import { Column } from 'primereact/column';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import React, { useContext, useEffect, useState } from 'react';
import { RenderContext } from '../providers/renderContext';
import { getMockOrders } from '../services/getMockOrders';
import { ViewPage } from './ViewPage';

export function ConsultPage() {

    let orders = getMockOrders();

    const [orcamentos, setOrcamentos] = useState(orders);
    const [filters, setFilters] = useState(null)
    const [loading, setLoading] = useState(true)
    const { setRender } = useContext(RenderContext);
    const [statusFilter, setStatusFilter] = useState('Todos');
    const [selectedUser, setSelectedUser] = useState({ name: 'Todos' });
    const options = [
        { icon: 'pi pi-circle ml-2', value: 'Todos', color: '#FFFF' },
        { icon: 'pi pi-circle-fill ml-2', value: 'Pedidos', color: '#4fd54f' },
        { icon: 'pi pi-circle-fill ml-2', value: 'Orçamentos', color: '#d54f4f' }
    ];

    useEffect(() => {
        let status = statusFilter ? statusFilter.toLocaleLowerCase() : null;
        if (status == 'pedidos') {
            let filtered = orders.filter(p => p.status)
            setOrcamentos(filtered);
        } else if (status == 'orçamentos') {
            let filtered = orders.filter(p => !p.status)
            setOrcamentos(filtered);
        } else {
            setOrcamentos(orders)
        }
    }, [statusFilter]);

    useEffect(() => {
        if (selectedUser && selectedUser.name !== 'Todos') {
            let filtered = orders.filter(({ usuario }) => usuario == selectedUser.name)
            setOrcamentos(filtered);
        } else {
            setOrcamentos(orders);
        }
    }, [selectedUser])

    function statusTemplate(rowData, { rowIndex }) {
        if (rowData.status == true) {
            return (
                <i className='pi pi-circle-fill' style={{ color: '#4fd54f' }}
                    onDoubleClick={() => {
                        let ordersCopy = Array.from(orcamentos);
                        ordersCopy[rowIndex].status = false;
                        localStorage.setItem('orders', JSON.stringify(ordersCopy));
                        setOrcamentos(ordersCopy);
                    }}></i>
            )
        } else {
            return (
                <i className='pi pi-circle-fill' style={{ color: '#d54f4f' }}
                    onDoubleClick={() => {
                        let ordersCopy = Array.from(orcamentos);
                        ordersCopy[rowIndex].status = true;
                        localStorage.setItem('orders', JSON.stringify(ordersCopy));
                        setOrcamentos(ordersCopy);
                    }}></i>
            )
        }
    };
    function operationsTemplate(rowData, r) {
        const [popupVisible, setPopupVisible] = useState(false)
        const [popupEditVisible, setPopupEditVisible] = useState(false)
        return (
            <div className=' flex justify-content-center align-items-center'>
                <ConfirmPopup
                    onHide={() => setPopupVisible(false)}
                    target={document.getElementById(`remove-order-${r.rowIndex}`)}
                    visible={popupVisible}
                    acceptLabel='Sim'
                    rejectLabel='Não'
                    acceptClassName='p-button-danger p-button-raised'
                    rejectClassName='p-button-raised p-button-outlined'
                    icon='pi pi-exclamation-triangle'
                    message={<span className='font-semibold'>Deseja remover esse item?</span>}
                    accept={() => {
                        let orders = JSON.parse(localStorage.getItem('orders'));
                        orders.splice(r.rowIndex, 1)
                        localStorage.setItem('orders', JSON.stringify(orders));
                        setOrcamentos(orders)
                        setPopupVisible(false)
                    }}
                    reject={() => setPopupVisible(false)}
                />
                <ConfirmPopup
                    onHide={() => setPopupEditVisible(false)}
                    target={document.getElementById(`editar-pedido-${r.rowIndex}`)}
                    visible={popupEditVisible}
                    acceptLabel='Sim'
                    rejectLabel='Não'
                    acceptClassName='p-button-danger p-button-raised'
                    rejectClassName='p-button-raised p-button-outlined'
                    icon="fa-solid fa-circle-question"
                    message={<span className='font-semibold'>Deseja editar esse item ?</span>}
                    accept={() => {
                        setRender({ name: 'ViewPage', render: <ViewPage data={rowData} index={r.rowIndex} /> })
                    }}
                    reject={() => setPopupEditVisible(false)}
                />
                <i
                    id={`editar-pedido-${r.rowIndex}`}
                    className='fa-solid fa-pen-to-square mr-2 font-medium text-xl cursor-pointer'
                    style={{ color: '#337597' }}
                    onClick={() => setPopupEditVisible(true)}
                ></i>
                <i
                    id={`remove-order-${r.rowIndex}`}
                    className='pi pi-ban font-medium text-xl cursor-pointer'
                    style={{ color: '#337597' }}
                    onClick={() => {
                        if (!rowData.status) {
                            setPopupVisible(true)
                        }

                    }}
                ></i>
            </div>
        )
    };

    return (
        <>
            <DataTable
                header={
                    <>
                        <div className='grid'>
                            <div className='col-12'>
                                <span className='text-700 w-full'>Orçamentos/Pedidos</span>
                            </div>
                        </div>
                        <div className='grid align-items-center justify-content-between'>
                            <div className='pt-3'>
                                <SelectButton
                                    options={options}
                                    value={statusFilter}
                                    onChange={e => setStatusFilter(e.value)}
                                    itemTemplate={(opt) => (
                                        <div className='flex align-items-center'>
                                            <label className='text-white cursor-pointer'>{opt.value}</label>
                                            <i className={opt.icon} style={{ color: opt.color }}></i>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className='field w-20rem'>
                                <label>Usuário</label>
                                <Dropdown
                                    className='w-full'
                                    filter
                                    filterBy='name'
                                    value={selectedUser}
                                    onChange={(e) => setSelectedUser(e.value)}
                                    optionLabel='name'
                                    options={[
                                        { name: 'Todos' },
                                        { name: 'User 01' },
                                        { name: 'User 02' },
                                        { name: 'User 03' },
                                    ]} />
                            </div>
                        </div>
                        {/* <div className='grid flex align-items-center '>
                            <Button icon="pi pi-filter-slash" label="Clear" className="mt-3 p-button-outlined btn-outlined" />
                        </div> */}
                    </>
                }
                value={orcamentos}
                paginator
                rows={10}
                filters={filters}
                showGridlines
                responsiveLayout='scroll'
                removableSort
                filterDisplay='menu'
                emptyMessage={'Nenhum pedido Encontrado'}
            >
                <Column
                    bodyClassName='w-1rem text-center'
                    headerClassName='text-700 text-sm'
                    body={statusTemplate}
                    header='Status'
                />
                <Column
                    sortable
                    filter
                    filte
                    headerClassName='text-700 text-sm'
                    className='text-center'
                    field='numero'
                    header='Numero'
                />
                <Column
                    sortable
                    filter
                    headerClassName='text-700 text-sm'
                    field='pedCliente'
                    header='Ped Cliente'
                />
                <Column
                    filter
                    sortable
                    headerClassName='text-700 text-sm'
                    className='text-center'
                    field='emissao'
                    body={({ emissao }) => new Date(emissao).toLocaleDateString()}
                    header='Data'
                    dataType='date'
                />
                <Column
                    headerClassName='text-700 text-sm'
                    body={(({ valorTotal }) => valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}
                    bodyClassName='text-center'
                    sortable
                    filter
                    field='valorTotal'
                    header='Valor'
                    dataType='numeric'
                />
                <Column
                    sortable
                    filter
                    headerClassName='text-700 text-sm'
                    bodyStyle={{ wordBreak: 'break-all' }}
                    field='cliente'
                    header='Cliente'
                />
                <Column
                    filter
                    sortable
                    headerClassName='text-700 text-sm'
                    bodyStyle={{ wordBreak: 'break-all' }}
                    field='representante'
                    header='Representante'
                />
                <Column
                    bodyClassName='w-8rem'
                    headerClassName='text-700 text-sm'
                    header='Operações'
                    body={operationsTemplate}
                />
            </DataTable>
        </>
    );
}