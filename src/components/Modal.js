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
import { useEffect, useRef, useState } from 'react';
import getProdutos from '../services/getProdutos';
import getTransacoes from '../services/getTransacoes';
import { Datepicker } from './Datepicker';
import { RequiredFlag } from './RequiredFlag';

export function Modal({ budgetItems, setBudgetItems, visible, setVisible, client, deadline, transaction, item, setItem }) {
    const [selectedItem, setSelectedItem] = useState(item ? item.itemSelecionado : null);
    const [searchItemQuery, setSearchItemQuery] = useState(item ? item.itemSelecionado.codRex : null);
    const [searchItemLoading, setSearchItemLoading] = useState(false);
    const [quantity, setQuantity] = useState(item ? item.quantidade : null);
    const [faixa, setFaixa] = useState(item ? item.faixa : null);
    const [faixaSol, setFaixaSol] = useState(item ? item.valorNegociado : 0);
    const [dateDelivery, setDateDelivery] = useState(deadline);
    const [pedidoOrdem, setPedidoOrdem] = useState('');
    const [sequency, setSequency] = useState('');
    const [codProCli, setCodProCli] = useState('');
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [note, setNote] = useState(item ? item.opcaoDescAcresc : null);
    const [lastProduct, setLastProduct] = useState('');
    const [filterCod, setFilterCod] = useState('codRex');
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const toast = useRef(null);
    const [validation, setValidation] = useState({ item: '', quantia: '' });

    // Inicializa????o
    useEffect(() => {
        getTransacoes('').then(data => setTransactions(data));
        setSelectedTransaction(transaction);

        if (item) {
            setFaixa(item.valorFaixa.toFixed(2))
            setSelectedItem(item.itemSelecionado)
            setSearchItemQuery(item.itemSelecionado.codRex)
            setQuantity(item.quantidade)
        }
        if (visible == false) {
            resetModal();
            setItem(null);
        }
    }, [visible, transaction])

    useEffect(() => {
        setDateDelivery(deadline);
    }, [deadline])

    function resetModal() {
        setSelectedItem(null);
        setFaixa(null);
        setFaixaSol(null)
        setQuantity(null);
        setSearchItemQuery('');
    }

    async function changeItem() {
        const _item = {
            codExterno: selectedItem.codExterno,
            codTpr: selectedItem.codTpr,
            codVariacao: selectedItem.codVariacao,
            descricao: selectedItem.nome,
            estoque: selectedDeposit.disponivel,
            hashDoc: '',
            opcaoDescAcresc: note,
            precoTabela: parseFloat(selectedItem.preco),
            prevEntregaItem: dateDelivery.toLocaleDateString('pt-BR'),
            quantidade: quantity,
            unidMedida: selectedItem.unimed,
            valorFaixa: faixa == 'solicitado' ? parseFloat(faixaSol) : parseFloat(faixa),
            valorFaixa1: parseFloat(selectedItem.valorFaixa1),
            valorFaixa2: parseFloat(selectedItem.valorFaixa2),
            valorFaixa3: parseFloat(selectedItem.valorFaixa3),
            valorFaixa4: parseFloat(selectedItem.valorFaixa4),
            valorNegociado: !faixaSol ? 0 : parseFloat(faixaSol),
            valorTotalItem: quantity * (faixa == 'solicitado' ? faixaSol : faixa),
            itemSelecionado: {
                ...selectedItem
            }
        };
        if (item) {
            let budgetItemsCopy = Array.from(budgetItems);
            budgetItemsCopy.splice(item.index, 1, _item);
            setBudgetItems(budgetItemsCopy);
            setVisible(false);
            toast.current.show({ severity: 'success', summary: 'Altera????es Salvas!', detail: `C??digo do Produto N??${selectedItem.codRex}`, life: 5000 });
        } else {
            setBudgetItems((state) => ([...state, _item]));
            setLastProduct(selectedItem.codRex);
            toast.current.show({ severity: 'success', summary: 'Produto Adicionado!', detail: `C??digo do Produto N??${selectedItem.codRex}`, life: 5000 });
            resetModal();
        }
    }

    function searchItem(cod = searchItemQuery) {
        let tipoBusca = filterCod == 'codRex' ? 'R' : '';
        if (searchItemQuery || cod) {
            setSearchItemLoading(true);
            getProdutos(cod, tipoBusca, client?.codExterno, selectedTransaction.codExterno).then(data => {
                if (data.length > 0) {
                    setSelectedItem(data[0]);
                } else {
                    toast.current.show({ severity: 'warn', summary: 'Nenhum Produto Encontrado!', life: 5000 });
                }
            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                setSearchItemLoading(false);
            });
        }
    }
    useEffect(() => {
        if (selectedItem?.depositos?.length == 1) {
            let depDefault = selectedItem.depositos.filter(({ codDeposito }) => codDeposito == '004')[0]
            setSelectedDeposit(depDefault)
        } else if (selectedItem?.depositos?.length > 1) {
            let depDefault = selectedItem.depositos.filter(({ codDeposito }) => codDeposito != '004')[0]
            setSelectedDeposit(depDefault)
        }
    }, [selectedItem])

    return (
        <>
            <Toast ref={toast} position='top-right' />
            <Sidebar
                fullScreen
                blockScroll
                className='surface-100'
                showCloseIcon={false}
                visible={visible}
            >
                <div className='grid my-1 flex justify-content-between'>
                    {
                        !item &&
                        <div className='col-12 lg:col-3 flex justify-content-center align-items-center'>
                            <RadioButton
                                inputId='codigo-rex'
                                name='filter-cod'
                                value={'codRex'}
                                onChange={e => setFilterCod(e.value)}
                                checked={filterCod == 'codRex'}
                                className='mr-1 cursor-pointer'
                            />
                            <label className='cursor-pointer' htmlFor='codigo-rex'>C??digo Rex</label>
                            <RadioButton
                                name='filter-code'
                                value={'codExterno'}
                                onChange={e => setFilterCod(e.value)}
                                checked={filterCod == 'codExterno'}
                                inputId='codigo-cliente'
                                className='ml-2 mr-1'
                            />
                            <label className='cursor-pointer' htmlFor='codigo-cliente'>Cliente</label>
                        </div>
                    }
                    <div className='col-12 lg:col-5 flex align-items-center'>
                        <div className='flex flex-column'>
                            <span className='font-medium mb-1 text-sm'>
                                <span className='font-semibold text-xs'>Cliente: </span>{client?.nome}
                            </span>
                            {
                                !item &&
                                <span className='font-semibold text-xs'>Ultimo Produto Inclu??do: {lastProduct}</span>
                            }
                        </div>
                    </div>
                    <div className='col-6 lg:w-17rem flex justify-content-end'>
                        {
                            item
                                ?
                                <Button label='Salvar Altera????es' onClick={() => changeItem()} className=' h-2rem p-button-raised font-semibold' />
                                :
                                <Button label='Adicionar Item' onClick={() => changeItem()} className=' h-2rem p-button-raised  font-semibold' />
                        }
                        <Button label='Cancelar' onClick={() => setVisible(false)} className='ml-1 h-2rem p-button-raised p-button-secondary font-semibold' />
                    </div>
                </div>
                <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 py-2 bg-white'>
                    <div className='grid flex align-items-end'>
                        <div className=' col-6 lg:w-5rem'>
                            <label htmlFor='selectItem'>C??digo</label>
                            <span className='p-input-icon-right'>
                                {
                                    searchItemLoading &&
                                    <i className="pi pi-spin pi-spinner" />
                                }
                                <InputText
                                    value={searchItemQuery}
                                    inputMode='numeric'
                                    className='w-full p-inputtext-sm p-1 text-xs'
                                    onChange={e => setSearchItemQuery(e.target.value)}
                                    onBlur={() => !selectedItem ? searchItem() : null}
                                    onKeyDown={({ key }) => {
                                        if (key == 'Enter') {
                                            document.querySelector('#itemQuantia').focus()
                                        }
                                    }}
                                    onFocus={() => {
                                        if (selectedItem) {
                                            resetModal();
                                        }
                                    }}
                                />
                            </span>
                            {/* <AutoComplete
                                ref={item}
                                value={selectedItem}
                                suggestions={filteredItems}
                                completeMethod={searchItem}
                                field={filterCod == 'codRex' ? 'codRex' : 'filtro'}
                                onChange={(e) => setSelectedItem(e.value)}
                                id='selectItem'
                                className='w-full'
                                inputClassName={`w-full p-inputtext-sm p-1 ${validation.item}`}
                            /> */}
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
                                value={selectedItem && selectedItem.unimed ? selectedItem.unimed : ''}
                                readOnly
                                className='w-full p-inputtext-sm'
                            />
                        </div>
                        <div className=' col lg:col-1'>
                            <label htmlFor='itemPrecoBruto'>Preco Bruto</label>
                            <InputNumber
                                inputId='' id='itemPrecoBruto'
                                value={selectedItem && selectedItem.preco ? selectedItem.preco : null}
                                readOnly
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm'
                                mode='decimal'
                                maxFractionDigits={2}
                                minFractionDigits={2}
                            />
                        </div>
                        <div className=' col-6 lg:w-7rem'>
                            <label className='cursor-pointer' htmlFor='faixa1'>Faixa 1</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    inputId='faixa1'
                                    value={selectedItem && selectedItem.valorFaixa1 ? selectedItem.valorFaixa1 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.valorFaixa1 ? selectedItem.valorFaixa1 : null)}
                                />
                                <InputNumber
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-1 '
                                    className='w-full'
                                    value={selectedItem && selectedItem.valorFaixa1 ? selectedItem.valorFaixa1 : null}
                                    htmlFor='faixa1'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className=' col-6 lg:w-7rem'>
                            <label className='cursor-pointer flex align-items-center' htmlFor='faixa2'>Faixa 2</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    inputId='faixa2'
                                    value={selectedItem && selectedItem.valorFaixa2 ? selectedItem.valorFaixa2 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.valorFaixa2 ? selectedItem.valorFaixa2 : 0)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-1'
                                    value={selectedItem && selectedItem.valorFaixa2 ? selectedItem.valorFaixa2 : null}
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:w-7rem'>
                            <label className='cursor-pointer' htmlFor='faixa2'>Faixa 3</label>
                            <div className='flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='faixa3'
                                    value={selectedItem && selectedItem.valorFaixa3 ? selectedItem.valorFaixa3 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.valorFaixa3 ? selectedItem.valorFaixa3 : null)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-1'
                                    value={selectedItem && selectedItem.valorFaixa3 ? selectedItem.valorFaixa3 : null}
                                    htmlFor='faixa3'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:w-7rem'>
                            <label className='cursor-pointer' htmlFor='faixa4'>Faixa 4</label>
                            <div className=' flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='faixa4'
                                    value={selectedItem && selectedItem.valorFaixa4 ? selectedItem.valorFaixa4 : 0}
                                    onChange={e => setFaixa(e.value)}
                                    checked={faixa && faixa === (selectedItem.valorFaixa4 ? selectedItem.valorFaixa4 : null)}
                                />
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-1'
                                    value={selectedItem && selectedItem.valorFaixa4 ? selectedItem.valorFaixa4 : null}
                                    htmlFor='faixa4'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-6 lg:w-7rem'>
                            <label className='cursor-pointer' htmlFor='solicitado'>Solicitado</label>
                            <div className=' flex flex-row'>
                                <RadioButton
                                    className='mr-1'
                                    name='faixa'
                                    id='solicitado'
                                    value={faixaSol}
                                    onChange={e => {
                                        setFaixa('solicitado')
                                        setTimeout(() => {
                                            document.querySelector('#valorSolicitado').focus()
                                        });
                                    }}
                                    checked={faixa == 'solicitado'}
                                />
                                <InputNumber
                                    className=' w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm px-1'
                                    value={faixaSol}
                                    max={99999.99}
                                    inputId='valorSolicitado'
                                    onChange={e => setFaixaSol(e.value)}
                                    htmlFor='solicitado'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                />
                            </div>
                        </div>
                        <div className=' col-6 lg:w-5rem px-1'>
                            <label className='cursor-pointer' htmlFor='itemTotal'>Total</label>
                            <InputNumber
                                inputStyle={{ fontWeight: '700' }}
                                className='w-full'
                                max={999999.99}
                                inputClassName='w-full cursor-pointer p-inputtext-sm p-1'
                                value={faixa == 'solicitado' ? faixaSol * quantity : faixa * quantity}
                                htmlFor='itemTotal'
                                mode='decimal'
                                maxFractionDigits={2}
                                minFractionDigits={2}
                                readOnly
                            />
                        </div>
                        <div className=' col-6 lg:w-5rem'>
                            <label>M??dia KG</label>
                            <InputNumber
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm p-1'
                                mode='decimal'
                                readOnly
                                maxFractionDigits={2}
                                minFractionDigits={2}
                                value={
                                    selectedItem && selectedItem.peso && quantity && (faixa == 'solicitado' ? faixaSol > 0 : faixa)
                                        ?
                                        quantity * selectedItem.peso / (faixa == 'solicitado' ? parseFloat(faixaSol) : faixa)
                                        :
                                        null
                                }
                            />
                        </div>
                        <div className=' col-6 lg:w-5rem px-0'>
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
                        <div className=' col-6 lg:w-5rem'>
                            <label>Data</label>
                            <Datepicker initialDate={selectedItem && selectedItem.datEnt ? new Date(selectedItem.datEnt.split('/').reverse().join('/')) : null} readonly removeBtn inputClassName='text-left p-0' />
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
                            <label>Transa????o</label>
                            <Dropdown
                                optionLabel='filtro'
                                options={transactions}
                                value={selectedTransaction}
                                className='w-full p-inputtext-sm'
                                onchange={e => setSelectedTransaction(e.value)}
                            />
                        </div>
                        <div className='flex flex-row col-12 lg:col-3'>
                            <InputTextarea
                                className='w-full text-sm'
                                placeholder='Observa????es'
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
                                <div className='col-3 lg:col-1 text-right'>
                                    <label className='text-sm'>Descri????o:</label>
                                </div>
                                <div className='col-9 lg:col-11'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm text-base '
                                        value={selectedItem && selectedItem.nome ? selectedItem.nome : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right text-xs'>
                                    <label>C??d REX:</label>
                                </div>
                                <div className='col-9 lg:col-2'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm '
                                        value={selectedItem && selectedItem.codRex ? selectedItem.codRex : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right'>
                                    <label>C??d ERP:</label>
                                </div>
                                <div className='col-9 lg:col-2'>
                                    <InputText
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        value={
                                            selectedItem && selectedItem.codExterno
                                                ?
                                                `${selectedItem.codExterno}-${selectedItem.codVariacao}`
                                                :
                                                ''
                                        }
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right'>
                                    <label>Peso:</label>
                                </div>
                                <div className='col-9 lg:col-2'>
                                    <InputNumber
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='decimal'
                                        suffix='kg'
                                        maxFractionDigits={2}
                                        minFractionDigits={2}
                                        value={selectedItem && selectedItem.peso ? selectedItem.peso : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right'>
                                    <label>Pre??o:</label>
                                </div>
                                <div className='col-9 lg:col-2'>
                                    <InputNumber
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='currency'
                                        currency='BRL'
                                        value={selectedItem && selectedItem.preco ? selectedItem.preco : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right '>
                                    <label htmlFor='itemUnidade'>Unidade:</label>
                                </div>
                                <div className='col-9 lg:col-1'>
                                    <InputText
                                        id='itemUnidade'
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.unimed ? selectedItem.unimed : ''}
                                    />
                                </div>
                                <div className='col-4 lg:col-2 text-right'>
                                    <label htmlFor='itemQtiaEmbalada'>Qtia Embalada:</label>
                                </div>
                                <div className='col-8 lg:col-2'>
                                    <InputNumber
                                        inputId='itemQtiaEmbalada'
                                        readOnly
                                        className='w-full p-inputtext-sm'
                                        inputClassName='w-full'
                                        mode='decimal'
                                        maxFractionDigits={2}
                                        minFractionDigits={2}
                                        value={selectedItem && selectedItem.qtdEmbalagem ? selectedItem.qtdEmbalagem : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right'>
                                    <label htmlFor='itemDerivacao'>Deriva????o:</label>
                                </div>
                                <div className='col-9 lg:col-5'>
                                    <InputText
                                        readOnly
                                        id='itemDerivacao'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.desVariacao ? selectedItem.desVariacao : ''}
                                    />
                                </div>
                                <div className='col-3 lg:col-1 text-right'>
                                    <label htmlFor='itemEmbalagem'>Embalagem:</label>
                                </div>
                                <div className='col-9 lg:col-4'>
                                    <InputText
                                        readOnly
                                        id='itemEmbalagem'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.desEmbalagem ? selectedItem.desEmbalagem : ''}
                                    />
                                </div>
                                <div className='col-5 lg:col-2 text-right'>
                                    <label htmlFor='itemClassFiscal'>Classifica????o Fiscal:</label>
                                </div>
                                <div className='col-7 lg:col-4'>
                                    <InputText
                                        readOnly
                                        id='itemClassFiscal'
                                        className='w-full p-inputtext-sm'
                                        value={selectedItem && selectedItem.clasFiscal ? selectedItem.clasFiscal : ''}
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
                    header={<span className='text-700 text-sm'>Dep??sitos</span>}
                    showGridlines
                    emptyMessage='Nenhum Produto Selecionado'
                    selectionMode='single'
                    selection={selectedDeposit}
                    onSelectionChange={e => setSelectedDeposit(e.value)}
                    className='mb-3 tabela'
                    value={selectedItem && selectedItem.depositos ? selectedItem.depositos : null}
                >
                    <Column field='codDeposito' headerClassName='text-700 text-sm' header='Cod' />
                    <Column field='nomDeposito' headerClassName='text-700 text-sm' header='Dep' />
                    <Column field='estoque' headerClassName='text-700 text-sm' header='Estoque' />
                    <Column field='reserva' headerClassName='text-700 text-sm' header='Res. Pedidos' />
                    <Column field='prefatura' headerClassName='text-700 text-sm' header='Res. Pr??-Fatura' />
                    <Column field='disponivel' headerClassName='text-700 text-sm' header='Total em OP' />
                    <Column headerClassName='text-700 text-sm' header='Saldo' body={({ estoque, reserva, prefatura }) => {
                        let saldo = parseFloat(estoque.replace(',', '.')) + parseFloat(reserva.replace(',', '.')) + parseFloat(prefatura.replace(',', '.'));
                        return (
                            <span style={{ color: `${saldo <= 0 ? 'red' : ''}` }}>
                                {saldo}
                            </span>
                        )
                    }}
                    />
                </DataTable>

                <DataTable
                    header={<span className='text-700 text-sm'>Saldos dos Acabamentos do Produto</span>}
                    emptyMessage='Nenhum Produto Selecionado'
                    showGridlines
                    selectionMode='single'
                    className='tabela'
                    loading={searchItemLoading}
                    onSelectionChange={(e) => {
                        setSearchItemQuery(e.value.codigo);
                        searchItem(e.value.codigo);
                        document.querySelector('#itemQuantia').focus();
                    }}
                    value={selectedItem && selectedItem.acabamento ? selectedItem.acabamento : null}
                    responsiveLayout='stack' >
                    <Column headerClassName='text-700 text-sm' field='codigo' header='Ref' />
                    <Column headerClassName='text-700 text-sm' field='desDerivacao' header='Acabamento' />
                    <Column headerClassName='text-700 text-sm' field='matriz' header='Estoque SC' />
                    <Column headerClassName='text-700 text-sm' field='mg' header='Estoque Terceiros' />
                    <Column headerClassName='text-700 text-sm' field='resPedidos' header='Total Pedidos' />
                    <Column headerClassName='text-700 text-sm' field='resPreFat' header='Total Pr??-Faturas' />
                    <Column headerClassName='text-700 text-sm' field='disponivel' header='Total Ordens' />
                    <Column headerClassName='text-700 text-sm' field='disponivel' header='Total Dispon??vel' />
                </DataTable>

                <DataTable
                    header={<span className='text-700 text-sm'>Produtos do Or??amento/Pedido</span>}
                    emptyMessage='Nenhum Produto Inclu??do'
                    className='mt-3'
                    showGridlines
                    value={budgetItems}
                    loading={searchItemLoading}
                >
                    <Column headerClassName='text-700 text-sm' body={(_, { rowIndex }) => rowIndex + 1} header='Seq'></Column>
                    <Column headerClassName='text-700 text-sm' field='itemSelecionado.codRex' header='Cod'></Column>
                    <Column headerClassName='text-700 text-sm' field='descricao' header='Descri????o'></Column>
                    <Column headerClassName='text-700 text-sm' field='quantidade' header='Quantia'></Column>
                    <Column headerClassName='text-700 text-sm' field='unidMedida' header='UN'></Column>
                    <Column headerClassName='text-700 text-sm' field='precoTabela' header='Pre??o Bruto' body={({ precoTabela }) => precoTabela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></Column>
                    <Column headerClassName='text-700 text-sm' field='valorFaixa' header='Pre??o Final' body={({ valorFaixa }) => valorFaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></Column>
                    <Column headerClassName='text-700 text-sm' field='valorTotalItem' body={({ valorTotalItem }) => valorTotalItem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} header='Tot Produto'></Column>
                    <Column headerClassName='text-700 text-sm' field='itemSelecionado.peso' header='Peso'></Column>
                    <Column headerClassName='text-700 text-sm' body={({ quantidade, itemSelecionado }) => (quantidade * itemSelecionado.peso).toFixed(2)} header='M??dia'></Column>
                    <Column headerClassName='text-700 text-sm' header='Apro. Ger'></Column>
                    <Column headerClassName='text-700 text-sm' header='Apro. Dir'></Column>
                </DataTable>
            </Sidebar>
        </>
    )
}