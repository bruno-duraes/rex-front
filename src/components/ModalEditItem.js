import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
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

export function ModalEditItem({ item, budgetItems, changeItems, index, visible, setVisible, clientName }) {
    if (item) {
        const [selectedItem, setSelectedItem] = useState(item.itemSelecionado);
        const [filteredItems, setFilteredItems] = useState(null);
        const [quantity, setQuantity] = useState(item.quantidade);
        const [faixa, setFaixa] = useState(item.faixaSelecionada);
        const [faixaSol, setFaixaSol] = useState(item.faixaSol ? item.faixaSol : null);
        const [selectedItemFinish, setSelectedItemFinish] = useState(item.acabamentoSelecionado);
        const [date, setDate] = useState(new Date(item.data));
        const [dateDelivery, setDateDelivery] = useState(new Date(item.entrega));
        const [pedidoOrdem, setPedidoOrdem] = useState(item.pedidoOrdem);
        const [sequency, setSequency] = useState(item.sequencia ? item.sequencia : '');
        const [codProCli, setCodProCli] = useState(item.codProCli ? item.codProCli : '');
        const [selectedTransaction, setSelectedTransaction] = useState({ label: item.transacao });
        const [note, setNote] = useState(item.observacao ? item.observacao : '');
        const [depPadrao, setDepPadrao] = useState(item.depPadrao);
        const [depCliente, setDepCliente] = useState(item.depCliente);
        let [validation] = useState({ item: '', quantia: '' });
        let items = getMockItems();
        const toast = useRef(null);
        function resetModal() {
            setFaixa(null);
            setDepPadrao(false);
            setDepCliente(false)
            setDateDelivery(null);
            setSelectedItemFinish(null);
            setSelectedItem(null);
            setQuantity(null);
        }

        function saveChanges() {
            let item = {
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
                data: dateISOLocale(date),
                entrega: dateDelivery ? dateISOLocale(dateDelivery) : null,
                pedidoOrdem: pedidoOrdem,
                sequencia: sequency,
                codProCli: codProCli,
                transação: selectedTransaction.label,
                observacao: note,
                depCliente: depCliente,
                depPadrao: depPadrao,
            };

            let budgetItemsCopy = Array.from(budgetItems);
            budgetItemsCopy.splice(index, 1, item);
            changeItems(budgetItemsCopy);
            toast.current.show({ severity: 'success', summary: 'Alterações Salvas!', detail: `Código do Produto N°${selectedItem.codigoRex}`, life: 5000 });
            setVisible(false);
            resetModal();
        }
        function searchItem(e) {
            let query = e.query;
            let _filteredItems = [];
            for (const [i, p] of items.entries()) {
                if (p.label.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                    _filteredItems.push(p);
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
                    <div className='grid mt-1 flex justify-content-center'>
                        <div className='col-12 lg:col-8 flex align-items-center'>
                            <div className='flex flex-column'>
                                <span className='font-semibold mb-1 text-sm'>Cliente: {clientName}</span>
                            </div>
                        </div>
                        <div className='col-6 lg:col-2'>
                            <Button label='Salvar Alterações' onClick={() => saveChanges()} className='w-full p-button-raised p-button-success font-semibold' />
                        </div>
                        <div className='col-6 lg:w-9rem' >
                            <Button label='Cancelar' onClick={() => setVisible(false)} className='w-full p-button-raised p-button-secondary font-semibold' />
                        </div>
                    </div>
                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 py-2 bg-white'>
                        <div className='grid'>
                            <div className='field col-6 lg:w-5rem'>
                                <label htmlFor='selectItem'>Código</label>
                                <RequiredFlag />
                                <AutoComplete
                                    ref={item}
                                    value={selectedItem}
                                    suggestions={filteredItems}
                                    completeMethod={searchItem}
                                    field={'codigoRex'}
                                    onChange={e => setSelectedItem(e.value)}
                                    id='selectItem'
                                    className='w-full'
                                    inputClassName={`w-full p-inputtext-sm p-1 ${validation.item}`}
                                />
                            </div>
                            <div className='field col-6 lg:w-5rem'>
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
                            <div className='field col-6 lg:w-4rem text-center'>
                                <label htmlFor='itemNn'>UN</label>
                                <InputText
                                    id='itemUn'
                                    value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                />
                            </div>
                            <div className='field col lg:col-1'>
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
                            <div className='field col-6 lg:w-6rem'>
                                <div className='flex align-items-center mb-1'>
                                    <RadioButton
                                        className='mr-1'
                                        name='faixa'
                                        inputId='faixa1'
                                        value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : 0}
                                        onChange={e => setFaixa(e.value)}
                                        checked={faixa && faixa === (selectedItem.faixa_1 ? selectedItem.faixa_1 : null)}
                                    />
                                    <label className='cursor-pointer' htmlFor='faixa1'>Faixa 1</label>
                                </div>
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm'
                                    value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : null}
                                    htmlFor='faixa1'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                            <div className='field col-6 lg:w-6rem'>
                                <div className='flex flex-row mb-1'>
                                    <RadioButton
                                        className='mr-1'
                                        name='faixa'
                                        inputId='faixa2'
                                        value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : 0}
                                        onChange={e => setFaixa(e.value)}
                                        checked={faixa && faixa === (selectedItem.faixa_2 ? selectedItem.faixa_2 : 0)}
                                    />
                                    <label className='cursor-pointer flex align-items-center' htmlFor='faixa2'>Faixa 2</label>
                                </div>
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm'
                                    value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : null}
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                            <div className='col-6 lg:w-6rem'>
                                <div className='flex align-items-center mb-1'>
                                    <RadioButton
                                        className='mr-1'
                                        name='faixa'
                                        id='faixa3'
                                        value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : 0}
                                        onChange={e => setFaixa(e.value)}
                                        checked={faixa && faixa === (selectedItem.faixa_3 ? selectedItem.faixa_3 : null)}
                                    />
                                    <label className='cursor-pointer' htmlFor='faixa2'>Faixa 3</label>
                                </div>
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm'
                                    value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : null}
                                    htmlFor='faixa3'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                            <div className='col-6 lg:w-6rem'>
                                <div className=' flex align-items-center mb-1'>
                                    <RadioButton
                                        className='mr-1'
                                        name='faixa'
                                        id='faixa4'
                                        value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : 0}
                                        onChange={e => setFaixa(e.value)}
                                        checked={faixa && faixa === (selectedItem.faixa_4 ? selectedItem.faixa_4 : null)}
                                    />
                                    <label className='cursor-pointer' htmlFor='faixa4'>Faixa 4</label>
                                </div>
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm'
                                    value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : null}
                                    htmlFor='faixa4'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    readOnly
                                />
                            </div>
                            <div className='col-6 lg:col-1'>
                                <div className=' flex align-items-center mb-1'>
                                    <RadioButton
                                        className=''
                                        name='faixa'
                                        id='solicitado'
                                        value={faixaSol}
                                        onChange={e => setFaixa(e.value)}
                                        checked={faixa && faixa === faixaSol ? true : false}
                                    />
                                    <label className='cursor-pointer' htmlFor='solicitado'>Solicitado</label>
                                </div>
                                <InputNumber
                                    className=' w-full'
                                    inputClassName='w-full cursor-pointer p-inputtext-sm'
                                    value={faixaSol}
                                    onChange={e => setFaixaSol(e.value)}
                                    htmlFor='solicitado'
                                    mode='decimal'
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                />
                            </div>
                            <div className='field col-6 lg:col-1'>
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
                            <div className='field col-6 lg:col-1'>
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
                            <div className='field col-6 lg:w-5rem'>
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
                            <div className='field col-6 lg:w-7rem'>
                                <label>Data</label>
                                <Datepicker initialDate={date} readonly removeBtn />
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='field col-6 lg:w-7rem'>
                                <label>Entrega</label>
                                <Datepicker initialDate={dateDelivery} readonly removeBtn />
                            </div>
                            <div className='field col-6 lg:w-8rem'>
                                <label>Pedido/Ordem</label>
                                <InputText className='w-full p-inputtext-sm' value={pedidoOrdem} onChange={e => setPedidoOrdem(e.target.value)} />
                            </div>
                            <div className='field col-6 lg:w-8rem'>
                                <label>Sequencia</label>
                                <InputText className='w-full p-inputtext-sm' value={sequency} onChange={e => setSequency(e.target.value)} />
                            </div>
                            <div className='field col-6 lg:w-8rem'>
                                <label>Cod Pro Cli</label>
                                <InputText className='w-full p-inputtext-sm' value={codProCli} onChange={e => setCodProCli(e.target.value)} />
                            </div>
                            <div className='field col-12 lg:col-3'>
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
                        </div>
                        <div className='grid'>
                            <div className='flex flex-row col-12 lg:col-6'>
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

                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 py-2 my-2 bg-white'>
                        <div className='grid'>
                            <div className='col-12 lg:col-10'>
                                <div className='grid'>
                                    <div className='field col-12'>
                                        <label>Descrição</label>
                                        <InputText
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.descricacao ? selectedItem.descricacao : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label>Cód REX</label>
                                        <InputText
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.codigoRex ? selectedItem.codigoRex : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label>Cód Sapiens</label>
                                        <InputText
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.codigoSap ? selectedItem.codigoSap : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label>Peso</label>
                                        <InputNumber
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            inputClassName='w-full'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            value={selectedItem && selectedItem.peso_bruto ? selectedItem.peso_bruto : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label>Preço</label>
                                        <InputNumber
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            inputClassName='w-full'
                                            mode='currency'
                                            currency='BRL'
                                            value={selectedItem && selectedItem.preco_bruto ? selectedItem.preco_bruto : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label htmlFor='itemUnidade'>Unidade</label>
                                        <InputText
                                            id='itemUnidade'
                                            readOnly
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2 py-0'>
                                        <label htmlFor='itemQtiaEmbalada'>Qtia Embalada</label>
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
                                    <div className='field col-12 lg:col-4 '>
                                        <label htmlFor='itemDerivacao'>Derivação</label>
                                        <InputText
                                            readOnly
                                            id='itemDerivacao'
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.derivacao ? selectedItem.derivacao : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-4 '>
                                        <label htmlFor='itemEmbalagem'>Embalagem</label>
                                        <InputText
                                            readOnly
                                            id='itemEmbalagem'
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.embalagem ? selectedItem.embalagem : ''}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-4 '>
                                        <label htmlFor='itemClassFiscal'>Classificação Fiscal</label>
                                        <InputText
                                            readOnly
                                            id='itemClassFiscal'
                                            className='w-full p-inputtext-sm'
                                            value={selectedItem && selectedItem.class_fiscal ? selectedItem.class_fiscal : ''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 lg:col-2 flex align-items-center justify-content-center'>
                                <span
                                    className={`font-semibold text-8xl ${selectedItem ? (selectedItem.curva == 'A' ? 'text-blue-500' : selectedItem.curva == 'B' ? 'text-green-500' : selectedItem.curva == 'C' ? 'text-pink-500' : null) : null}`}>
                                    {selectedItem && selectedItem.curva ? selectedItem.curva : ''}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='px-3 py-2 mb-2 bg-white'>
                        <div className='grid'>
                            <div className='col-6 lg:col-12 pb-0'>
                                <div className='grid flex align-items-center'>
                                    <div className='flex flex-row col-12 lg:col-2 w-10rem'>
                                        <label htmlFor='itemDepPadrao'>Dep Padrão: 004</label>
                                        <Checkbox
                                            id='itemDepPadrao'
                                            className='ml-2'
                                            checked={depPadrao}
                                            onChange={e => setDepPadrao(e.checked)}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='estoquePadrao'>Em Estoque</label>
                                        <InputNumber
                                            inputId='estoquePadrao'
                                            className='w-full'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={selectedItem && selectedItem.estoquePadrao ? selectedItem.estoquePadrao : 0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='resPedidosPadrao'>Res. Pedidos</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='resPedidosPadrao'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='resPreFaturaPadrao'>Res. Pré-Fatura</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='resPreFaturaPadrao'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='totalEmOpPadrao'>Total em OP</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='totalEmOpPadrao'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='saldoPadrao'>Saldo</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='saldoPadrao'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-12 py-0'>
                                <div className='grid flex align-items-center'>
                                    <div className='col-12 lg:col-2 w-10rem'>
                                        <label htmlFor='depCliente'>Dep Cliente: 573</label>
                                        <Checkbox
                                            id='depCliente'
                                            className='ml-2'
                                            checked={depCliente}
                                            onChange={e => setDepCliente(e.checked)}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='estoqueCliente'>Em Estoque</label>
                                        <InputNumber
                                            inputId='estoqueCliente'
                                            className='w-full'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={selectedItem && selectedItem.estoqueCliente ? selectedItem.estoqueCliente : 0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='resPedidosCliente'>Res. Pedidos</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='resPedidosCliente'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='resPreFaturaCliente'>Res. Pré-Fatura</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='resPreFaturaCliente'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='totalEmOpCliente'>Total em OP</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='totalEmOpCliente'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                    <div className='field col-12 lg:col-2'>
                                        <label htmlFor='saldoCliente'>Saldo</label>
                                        <InputNumber
                                            className='w-full'
                                            inputId='saldoCliente'
                                            inputClassName='w-full p-inputtext-sm'
                                            mode='decimal'
                                            maxFractionDigits={2}
                                            minFractionDigits={2}
                                            readOnly
                                            value={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DataTable
                        tableStyle={{ background: 'blue' }}
                        header={<span className='text-700 text-sm'>Saldos dos Acabamentos do Produto</span>}
                        emptyMessage='Nenhum Produto Selecionado'
                        showGridlines
                        selectionMode='single'
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
                </Sidebar>
            </>
        )
    }
}