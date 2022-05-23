import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { getMockItems } from '../services/getMockItems';
import { dateISOLocale } from '../utils/dateISOLocale';
import { Datepicker } from './Datepicker';
import { RequiredFlag } from './RequiredFlag';

export function Modal({ budgetItems, setBudgetItems, visible, setVisible, clientName, deadline }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [faixa, setFaixa] = useState(null);
    const [faixaSol, setFaixaSol] = useState(null);
    const [selectedItemFinish, setSelectedItemFinish] = useState(null);
    // const [date, setDate] = useState(new Date());
    const [dateDelivery, setDateDelivery] = useState(deadline ? new Date(deadline) : null);
    const [pedidoOrdem, setPedidoOrdem] = useState('');
    const [sequency, setSequency] = useState('');
    const [codProCli, setCodProCli] = useState('');
    const [selectedTransaction, setSelectedTransaction] = useState({ label: '90150 - Orçamento Indústria' });
    const [note, setNote] = useState('');
    const [depPadrao, setDepPadrao] = useState(false);
    const [depCliente, setDepCliente] = useState(false);
    const [lastProduct, setLastProduct] = useState('');
    const [filterCod, setFilterCod] = useState('codigoRex');
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const toast = useRef(null);
    const item = useRef(null);
    const [validation, setValidation] = useState({ item: '', quantia: '' });

    let items = getMockItems();

    function resetModal() {
        setFaixa(null);
        setDepPadrao(false);
        setDepCliente(false)
        // setDateDelivery(null);
        setSelectedItemFinish(null);
        setSelectedItem(null);
        setQuantity(null);
    }
    function addItem() {
        const item = {
            codigo: selectedItem.codigoRex,
            descricao: selectedItem.descricacao,
            quantidade: quantity,
            un: selectedItem.un,
            precoBruto: selectedItem.preco_bruto,
            precoFinal: selectedItem.preco_bruto,
            totalProduto: (quantity * faixa).toFixed(2),
            peso: selectedItem.peso_bruto,
            media: (selectedItem.peso_bruto * quantity).toFixed(2),
            faixaSelecionada: faixa,
            acabamentoSelecionado: selectedItemFinish,
            data: dateISOLocale(new Date(selectedItem.data.split('/').reverse().join('/'))),
            entrega: dateDelivery ? dateISOLocale(dateDelivery) : null,
            pedidoOrdem: pedidoOrdem,
            sequencia: sequency,
            codProCli: codProCli,
            transacao: selectedTransaction.label,
            observacao: note,
            depCliente: depCliente,
            depPadrao: depPadrao,
            itemSelecionado: selectedItem
        };
        let budgetItemsCopy = Array.from(budgetItems);
        budgetItemsCopy.push(item);
        setBudgetItems(budgetItemsCopy);
        setLastProduct(selectedItem.codigoRex);
        toast.current.show({ severity: 'success', summary: 'Produto Adicionado!', detail: `Código do Produto N°${selectedItem.codigoRex}`, life: 5000 });
        // setVisible(false);
        resetModal();
    }
    function searchItem(e) {
        let query = e.query;
        let _filteredItems = [];
        if (filterCod == 'codigoRex') {
            for (const [i, p] of items.entries()) {
                if (p.codigoRex.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                    _filteredItems.push(p);
                }
            }
        } else if (filterCod == 'codigoCliente') {
            for (const [i, p] of items.entries()) {
                if (p.codigoCliente.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                    _filteredItems.push(p);
                }
            }
        }
        setFilteredItems(_filteredItems);
    }
    return (
        <>
            <Toast ref={toast} position='bottom-right' />
            <Sidebar
                fullScreen
                blockScroll
                className='surface-100'
                showCloseIcon={false}
                visible={visible}
            >
                <div className='grid mt-1'>
                    <div className='col-12 lg:col-3 flex justify-content-center align-items-center'>
                        <RadioButton
                            inputId='codigo-rex'
                            name='filter-cod'
                            value={'codigoRex'}
                            onChange={e => setFilterCod(e.value)}
                            checked={filterCod == 'codigoRex'}
                            className='mr-1 cursor-pointer'
                        />
                        <label className='cursor-pointer' htmlFor='codigo-rex'>Código Rex</label>
                        <RadioButton
                            name='filter-code'
                            value={'codigoCliente'}
                            onChange={e => setFilterCod(e.value)}
                            checked={filterCod == 'codigoCliente'}
                            inputId='codigo-cliente'
                            className='ml-2 mr-1'
                        />
                        <label className='cursor-pointer' htmlFor='codigo-cliente'>Cliente</label>
                    </div>
                    <div className='col-12 lg:col-5 flex align-items-center'>
                        <div className='flex flex-column'>
                            <span className='font-medium mb-1 text-sm'>Cliente: {clientName}</span>
                            <span className='font-semibold text-xs'>Ultimo Produto Incluído: {lastProduct}</span>
                        </div>
                    </div>
                    <div className='col-6 lg:col-2'>
                        <Button label='Adicionar Item' onClick={() => addItem()} className='w-full p-button-raised p-button-success font-semibold' />
                    </div>
                    <div className='col-6 lg:w-9rem'>
                        <Button label='Cancelar' onClick={() => setVisible(false)} className='w-full p-button-raised p-button-secondary font-semibold' />
                    </div>
                </div>
                <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 py-2 bg-white'>
                    <div className='grid flex align-items-end'>
                        <div className=' col-6 lg:w-5rem'>
                            <label htmlFor='selectItem'>
                                Código
                            </label>
                            <AutoComplete
                                ref={item}
                                value={selectedItem}
                                suggestions={filteredItems}
                                completeMethod={searchItem}
                                field={filterCod == 'codigoRex' ? 'codigoRex' : filterCod == 'codigoCliente' ? 'codigoCliente' : undefined}
                                onChange={e => setSelectedItem(e.value)}
                                id='selectItem'
                                className='w-full'
                                inputClassName={`w-full p-inputtext-sm p-1 ${validation.item}`}
                            />
                        </div>
                        <div className=' col-6 lg:w-5rem'>
                            <label htmlFor='itemQuantia'>Quantia</label>
                            <RequiredFlag />
                            <InputNumber
                                inputId='itemQuantia'
                                className='w-full'
                                inputClassName={`w-full p-inputtext-sm ${validation.quantia} p-1`}
                                mode='decimal'
                                minFractionDigits={2}
                                maxFractionDigits={2}
                                value={quantity}
                                onChange={e => setQuantity(e.value)}
                            />
                        </div>
                        <div className=' col-6 lg:w-4rem text-center'>
                            <label htmlFor='itemNn'>UN</label>
                            <InputText
                                id='itemUn'
                                value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                readOnly
                                className='w-full p-inputtext-sm'
                            />
                        </div>
                        <div className=' col lg:col-1'>
                            <label htmlFor='itemPrecoBruto'>Preco Bruto</label>
                            <InputNumber
                                inputId='' id='itemPrecoBruto'
                                value={selectedItem && selectedItem.preco_bruto ? selectedItem.preco_bruto : null}
                                readOnly
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm'
                                mode='decimal'
                                maxFractionDigits={2}
                                minFractionDigits={2}
                            />
                        </div>
                        <div className=' col-6 lg:w-6rem'>
                            <label className='cursor-pointer' htmlFor='faixa1'>Faixa 1</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    inputId='faixa1'
                                    value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.faixa_1 ? selectedItem.faixa_1 : null)}
                                />
                                <InputNumber
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-0 '
                                    className='w-full'
                                    value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : null}
                                    htmlFor='faixa1'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className=' col-6 lg:w-6rem'>
                            <label className='cursor-pointer flex align-items-center' htmlFor='faixa2'>Faixa 2</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    inputId='faixa2'
                                    value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.faixa_2 ? selectedItem.faixa_2 : 0)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-0'
                                    value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : null}
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:w-6rem'>
                            <label className='cursor-pointer' htmlFor='faixa2'>Faixa 3</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='faixa3'
                                    value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.faixa_3 ? selectedItem.faixa_3 : null)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-0'
                                    value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : null}
                                    htmlFor='faixa3'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:w-6rem'>
                            <label className='cursor-pointer' htmlFor='faixa4'>Faixa 4</label>
                            <div className=' flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='faixa4'
                                    value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.faixa_4 ? selectedItem.faixa_4 : null)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-0'
                                    value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : null}
                                    htmlFor='faixa4'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:col-1'>
                            <label className='cursor-pointer' htmlFor='solicitado'>Solicitado</label>
                            <div className=' flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='solicitado'
                                    value={faixaSol}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === faixaSol ? true : false}
                                />
                                <InputNumber
                                    className=' w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-0'
                                    value={faixaSol}
                                    onChange={e => setFaixaSol(e.value)}
                                    htmlFor='solicitado'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                />
                            </div>
                        </div>
                        <div className=' col-6 lg:col-1'>
                            <label className='cursor-pointer' htmlFor='itemTotal'>Total</label>
                            <InputNumber
                                inputStyle={{ fontWeight: '700' }}
                                className='w-full'
                                inputClassName='w-full cursor-pointer p-inputtext-sm p-1'
                                value={faixa * quantity}
                                htmlFor='itemTotal'
                                mode='decimal'
                                maxFractionDigits={2}
                                minFractionDigits={2}
                                readOnly
                            />
                        </div>
                        <div className=' col-6 lg:w-5rem'>
                            <label>Média KG</label>
                            <InputNumber
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm p-1'
                                mode='decimal'
                                readOnly
                                maxFractionDigits={2}
                                minFractionDigits={2}
                                value={selectedItem && selectedItem.peso_bruto && quantity ? quantity * selectedItem.peso_bruto : null}
                            />
                        </div>
                        <div className=' col-6 lg:col-1'>
                            <label>Ultimo Preco</label>
                            <InputNumber
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm'
                                readOnly
                                value={selectedItem && selectedItem.ultimoPreco ? selectedItem.ultimoPreco : null}
                                mode='decimal'
                                maxFractionDigits={2}
                                minFractionDigits={2}
                            />
                        </div>
                        <div className=' col-6 lg:w-7rem'>
                            <label>Data</label>
                            {/* {selectedItem && selectedItem.data ? console.log(new Date(selectedItem.data.split('/').reverse().join('/'))) : null} */}
                            <Datepicker initialDate={selectedItem && selectedItem.data ? new Date(selectedItem.data.split('/').reverse().join('/')) : null} readonly removeBtn />
                        </div>
                    </div>
                    <div className='grid pt-2'>
                        <div className=' col-6 lg:w-10rem'>
                            <label>Entrega</label>
                            <Datepicker initialDate={dateDelivery} onChange={e => setDateDelivery(e.value)} />
                        </div>
                        <div className=' col-6 lg:w-8rem'>
                            <label>Pedido/Ordem</label>
                            <InputText className='w-full p-inputtext-sm' value={pedidoOrdem} onChange={e => setPedidoOrdem(e.target.value)} />
                        </div>
                        <div className=' col-6 lg:w-8rem'>
                            <label>Sequencia</label>
                            <InputText className='w-full p-inputtext-sm' value={sequency} onChange={e => setSequency(e.target.value)} />
                        </div>
                        <div className=' col-6 lg:w-8rem'>
                            <label>Cod Pro Cli</label>
                            <InputText className='w-full p-inputtext-sm' value={codProCli} onChange={e => setCodProCli(e.target.value)} />
                        </div>
                        <div className=' col-12 lg:col-3'>
                            <label>Transação</label>
                            <Dropdown
                                optionLabel='label'
                                options={[
                                    { label: 'Tipo 1' },
                                    { label: 'Tipo 2' },
                                    { label: '90150 - Orçamento Indústria' }
                                ]}
                                value={selectedTransaction}
                                disabled
                                className='w-full p-inputtext-sm'
                                onchange={e => setSelectedTransaction(e.value)}
                            />
                        </div>
                        <div className='flex flex-row col-12 lg:col-3'>
                            <InputTextarea
                                className='w-full text-sm'
                                placeholder='Observações'
                                rows={2}
                                autoResize
                                value={note}
                                onChange={e => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 pb-2 pt-3 my-2 bg-white'>
                    <div className='grid'>
                        <div className='col-12 lg:col-10'>
                            <div className='grid item-descricao'>
                                <div className='col-1 text-right'>
                                    <label className='text-sm'>Descrição:</label>
                                </div>
                                <div className='col-11'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm text-base '
                                        value={selectedItem && selectedItem.descricacao ? selectedItem.descricacao : ''}
                                    />
                                </div>
                                <div className='col-1 text-right text-xs'>
                                    <label>Cód REX:</label>
                                </div>
                                <div className='col-11 lg:col-2'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm '
                                        value={selectedItem && selectedItem.codigoRex ? selectedItem.codigoRex : ''}
                                    />
                                </div>
                                <div className='col-1 text-right'>
                                    <label>Cód ERP:</label>
                                </div>
                                <div className='field col-11 lg:col-2'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.codigoSap ? selectedItem.codigoSap : ''}
                                    />
                                </div>
                                <div className='col-1 text-right'>
                                    <label>Peso:</label>
                                </div>
                                <div className='field col-12 lg:col-2'>
                                    <InputNumber
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='decimal'
                                        suffix='kg'
                                        maxFractionDigits={2}
                                        minFractionDigits={2}
                                        value={selectedItem && selectedItem.peso_bruto ? selectedItem.peso_bruto : ''}
                                    />
                                </div>
                                <div className='col-1 text-right'>
                                    <label>Preço:</label>
                                </div>
                                <div className='field col-12 lg:col-2'>
                                    <InputNumber
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='currency'
                                        currency='BRL'
                                        value={selectedItem && selectedItem.preco_bruto ? selectedItem.preco_bruto : ''}
                                    />
                                </div>
                                <div className='col-1 text-right '>
                                    <label htmlFor='itemUnidade'>Unidade:</label>
                                </div>
                                <div className='field col-12 lg:col-1'>
                                    <InputText
                                        id='itemUnidade'
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                    />
                                </div>
                                <div className=' col-2 text-right'>
                                    <label htmlFor='itemQtiaEmbalada'>Qtia Embalada:</label>
                                </div>
                                <div className='field col-12 lg:col-2'>
                                    <InputNumber
                                        inputId='itemQtiaEmbalada'
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='decimal'
                                        maxFractionDigits={2}
                                        minFractionDigits={2}
                                        value={selectedItem && selectedItem.qtia_embalada ? selectedItem.qtia_embalada : ''}
                                    />
                                </div>
                                <div className='col-1 text-right'>
                                    <label htmlFor='itemDerivacao'>Derivação:</label>
                                </div>
                                <div className='field col-12 lg:col-5'>
                                    <InputText
                                        readOnly
                                        id='itemDerivacao'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.derivacao ? selectedItem.derivacao : ''}
                                    />
                                </div>
                                <div className='col-1 text-right'>
                                    <label htmlFor='itemEmbalagem'>Embalagem:</label>
                                </div>
                                <div className='field col-12 lg:col-4'>
                                    <InputText
                                        readOnly
                                        id='itemEmbalagem'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.embalagem ? selectedItem.embalagem : ''}
                                    />
                                </div>
                                <div className='col-2 text-right'>
                                    <label htmlFor='itemClassFiscal'>Classificação Fiscal:</label>
                                </div>
                                <div className='field col-12 lg:col-4'>
                                    <InputText
                                        readOnly
                                        id='itemClassFiscal'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.class_fiscal ? selectedItem.class_fiscal : ''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 lg:col-2 flex align-items-center justify-content-center flex-column'>
                            <label>Curva</label>
                            <span
                                className={`font-semibold text-7xl ${selectedItem ? (selectedItem.curva == 'A' ? 'text-blue-500' : selectedItem.curva == 'B' ? 'text-green-500' : selectedItem.curva == 'C' ? 'text-pink-500' : null) : null}`}>
                                {selectedItem && selectedItem.curva ? selectedItem.curva : ''}
                            </span>
                        </div>
                    </div>
                </div>

                <DataTable
                    header={<span className='text-700 text-sm'>Depósitos</span>}
                    showGridlines
                    emptyMessage='Nenhum Produto Selecionado'
                    selectionMode='single'
                    selection={selectedDeposit}
                    onSelectionChange={e => setSelectedDeposit(e.value)}
                    className='mb-3 tabela'
                    value={selectedItem && selectedItem.depositos ? selectedItem.depositos : null}
                >
                    <Column field='dep' headerClassName='text-700 text-sm' header='Dep' />
                    <Column field='cod' headerClassName='text-700 text-sm' header='Cod' />
                    <Column field='estoque' headerClassName='text-700 text-sm' header='Estoque' />
                    <Column field='resPedidos' headerClassName='text-700 text-sm' header='Res. Pedidos' />
                    <Column field='resPreFatura' headerClassName='text-700 text-sm' header='Res. Pré-Fatura' />
                    <Column field='totalOP' headerClassName='text-700 text-sm' header='Total em OP' />
                    <Column field='saldo' headerClassName='text-700 text-sm' body={({ saldo }) => <span style={{ color: `${saldo <= 0 ? 'red' : null}` }}>{saldo}</span>} header='Saldo' />
                </DataTable>

                <DataTable
                    header={<span className='text-700 text-sm'>Saldos dos Acabamentos do Produto</span>}
                    emptyMessage='Nenhum Produto Selecionado'
                    showGridlines
                    selectionMode='single'
                    className='tabela'
                    selection={selectedItemFinish}
                    onSelectionChange={e => setSelectedItemFinish(e.value)}
                    value={selectedItem && selectedItem.acabamentos ? selectedItem.acabamentos : null}
                    responsiveLayout='stack' >
                    <Column headerClassName='text-700 text-sm' field='ref' header='Ref' />
                    <Column headerClassName='text-700 text-sm' field='acabamento' header='Acabamento' />
                    <Column headerClassName='text-700 text-sm' field='total_disponivel' header='Total Disponível' />
                    <Column headerClassName='text-700 text-sm' field='estoque_terc' header='Estoque Terceiros' />
                    <Column headerClassName='text-700 text-sm' field='total_pedidos' header='Total Pedidos' />
                    <Column headerClassName='text-700 text-sm' field='total_prefaturas' header='Total Pré-Faturas' />
                    <Column headerClassName='text-700 text-sm' field='total_ordens' header='Total Ordens' />
                    <Column headerClassName='text-700 text-sm' field='estoque_sc' header='Estoque SC' />
                </DataTable>

                <DataTable
                    header={<span className='text-700 text-sm'>Produtos do Orçamento/Pedido</span>}
                    emptyMessage='Nenhum Produto Incluído'
                    className='mt-3'
                    showGridlines
                    value={budgetItems}
                >
                    <Column headerClassName='text-700 text-sm' body={(_, { rowIndex }) => rowIndex + 1} header='Seq'></Column>
                    <Column headerClassName='text-700 text-sm' field='codigo' header='Cod'></Column>
                    <Column headerClassName='text-700 text-sm' field='descricao' header='Descrição'></Column>
                    <Column headerClassName='text-700 text-sm' field='quantidade' header='Quantia'></Column>
                    <Column headerClassName='text-700 text-sm' field='un' header='UN'></Column>
                    <Column headerClassName='text-700 text-sm' field='precoBruto' header='Preço Bruto' body={({ precoBruto }) => precoBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></Column>
                    <Column headerClassName='text-700 text-sm' field='precoFinal' header='Preço Final' body={({ precoFinal }) => precoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></Column>
                    <Column headerClassName='text-700 text-sm' field='totalProduto' body={({ totalProduto }) => parseFloat(totalProduto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} header='Tot Produto'></Column>
                    <Column headerClassName='text-700 text-sm' field='peso' header='Peso'></Column>
                    <Column headerClassName='text-700 text-sm' field='media' header='Média'></Column>
                    <Column headerClassName='text-700 text-sm' field='apro_ger' header='Apro. Ger'></Column>
                    <Column headerClassName='text-700 text-sm' field='apro_dir' header='Apro. Dir'></Column>
                </DataTable>
            </Sidebar>
        </>
    )
}