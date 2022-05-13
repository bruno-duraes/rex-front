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

export function ModalEditItem({ item, budgetItems, changeItems, index, visible, setVisible }) {
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
                <Toast ref={toast} />
                <Sidebar
                    icons={
                        <>
                            <Button label='Salvar Alterações' onClick={() => saveChanges()} className='p-button-raised p-button-info mr-3 font-semibold' />
                            <Button label='Cancelar' onClick={() => setVisible(false)} className='p-button-raised p-button-secondary font-semibold' />
                        </>
                    }
                    fullScreen
                    blockScroll
                    className='surface-100'
                    showCloseIcon={false}
                    visible={visible}
                >
                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='p-5 mb-3 bg-white'>
                        <div className='grid '>
                            <div className='field col-12 md:col-8'>
                                <label htmlFor='selectItem'>Item</label>
                                <RequiredFlag />
                                <AutoComplete
                                    value={selectedItem}
                                    suggestions={filteredItems}
                                    completeMethod={searchItem}
                                    field='label'
                                    onChange={e => setSelectedItem(e.value)}
                                    id='selectItem'
                                    className='w-full'
                                    inputClassName={`w-full p-inputtext-sm ${validation.item}`}
                                />
                            </div>
                            <div className='field col-3 md:col-1'>
                                <label htmlFor='itemQuantia'>Quantia</label>
                                <RequiredFlag />
                                <InputNumber
                                    inputId='itemQuantia'
                                    className={`w-full ${validation.quantia}`}
                                    inputClassName='w-full p-inputtext-sm'
                                    mode='decimal'
                                    minFractionDigits={2}
                                    maxFractionDigits={2}
                                    value={quantity}
                                    onChange={e => setQuantity(e.value)}
                                />
                            </div>
                            <div className='field col-3 md:col-1'>
                                <label htmlFor='itemNn'>UN</label>
                                <InputText
                                    id='itemUn'
                                    value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                />
                            </div>
                            <div className='field col md:col-2'>
                                <label htmlFor='itemPrecoBruto'>Preco Bruto</label>
                                <InputNumber
                                    inputId='' id='itemPrecoBruto'
                                    value={selectedItem && selectedItem.preco_bruto ? selectedItem.preco_bruto : null}
                                    readOnly
                                    className='w-full'
                                    inputClassName='w-full p-inputtext-sm'
                                    prefix='R$ '
                                />
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='faixa1'>Faixa 1</label>
                                    <div className='flex align-items-center mt-2'>
                                        <RadioButton
                                            name='faixa'
                                            id='faixa1'
                                            value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : 0}
                                            onChange={e => setFaixa(e.value)}
                                            checked={faixa && faixa === (selectedItem.faixa_1 ? selectedItem.faixa_1 : null)}
                                        />
                                        <InputNumber
                                            className='ml-2 w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={selectedItem && selectedItem.faixa_1 ? selectedItem.faixa_1 : null}
                                            htmlFor='faixa1'
                                            mode='currency'
                                            currency='BRL'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='faixa2'>Faixa 2</label>
                                    <div className='flex align-items-center mt-2'>
                                        <RadioButton
                                            name='faixa'
                                            id='faixa2'
                                            value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : 0}
                                            onChange={e => setFaixa(e.value)}
                                            checked={faixa && faixa === (selectedItem.faixa_2 ? selectedItem.faixa_2 : 0)}
                                        />
                                        <InputNumber
                                            className='ml-2 w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={selectedItem && selectedItem.faixa_2 ? selectedItem.faixa_2 : null}
                                            mode='currency'
                                            currency='BRL'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='faixa2'>Faixa 3</label>
                                    <div className='flex align-items-center mt-2'>
                                        <RadioButton
                                            name='faixa'
                                            id='faixa3'
                                            value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : 0}
                                            onChange={e => setFaixa(e.value)}
                                            checked={faixa && faixa === (selectedItem.faixa_3 ? selectedItem.faixa_3 : null)}
                                        />
                                        <InputNumber
                                            className='ml-2 w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={selectedItem && selectedItem.faixa_3 ? selectedItem.faixa_3 : null}
                                            htmlFor='faixa3'
                                            mode='currency'
                                            currency='BRL'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='faixa4'>Faixa 4</label>
                                    <div className='flex align-items-center mt-2'>
                                        <RadioButton
                                            name='faixa'
                                            id='faixa4'
                                            value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : 0}
                                            onChange={e => setFaixa(e.value)}
                                            checked={faixa && faixa === (selectedItem.faixa_4 ? selectedItem.faixa_4 : null)}
                                        />
                                        <InputNumber
                                            className='ml-2 w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={selectedItem && selectedItem.faixa_4 ? selectedItem.faixa_4 : null}
                                            htmlFor='faixa4'
                                            mode='currency'
                                            currency='BRL'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='solicitado'>Solicitado</label>
                                    <div className='flex align-items-center mt-2'>
                                        <RadioButton
                                            name='faixa'
                                            id='solicitado'
                                            value={faixaSol}
                                            onChange={e => setFaixa(e.value)}
                                            checked={faixa && faixa === faixaSol ? true : false}
                                        />
                                        <InputNumber
                                            className='ml-2 w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={faixaSol}
                                            onChange={e => setFaixaSol(e.value)}
                                            htmlFor='solicitado'
                                            mode='currency'
                                            currency='BRL'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 lg:col-2'>
                                <div className=' flex flex-column'>
                                    <label className='cursor-pointer' htmlFor='itemTotal'>Total</label>
                                    <div className='flex align-items-center mt-2'>
                                        <InputNumber
                                            inputStyle={{ fontWeight: '700' }}
                                            className='w-full'
                                            inputClassName='w-full cursor-pointer p-inputtext-sm'
                                            value={faixa * quantity}
                                            htmlFor='itemTotal'
                                            mode='currency'
                                            currency='BRL'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='field col-6 lg:col-2'>
                                <label>Média KG</label>
                                <InputNumber
                                    className='w-full'
                                    inputClassName='w-full p-inputtext-sm'
                                    suffix=' kg'
                                    mode='decimal'
                                    readOnly
                                    maxFractionDigits={2}
                                    minFractionDigits={2}
                                    value={selectedItem && selectedItem.peso_bruto && quantity ? quantity * selectedItem.peso_bruto : null}
                                />
                            </div>
                            <div className='field col-6 lg:col-2'>
                                <label>Data</label>
                                <Datepicker initialDate={date} onChange={e => setDate(e.value)} />
                            </div>
                            <div className='field col-6 lg:col-2'>
                                <label>Entrega</label>
                                <Datepicker initialDate={dateDelivery} onChange={e => setDateDelivery(e.value)} />
                            </div>
                            <div className='field col-6 lg:col-2'>
                                <label>Pedido/Ordem</label>
                                <InputText className='w-full p-inputtext-sm' value={pedidoOrdem} onChange={e => setPedidoOrdem(e.target.value)} />
                            </div>
                            <div className='field col-6 lg:col-2'>
                                <label>Sequencia</label>
                                <InputText className='w-full p-inputtext-sm' value={sequency} onChange={e => setSequency(e.target.value)} />
                            </div>
                            <div className='field col-6 lg:col-2'>
                                <label>Cod Pro Cli</label>
                                <InputText className='w-full p-inputtext-sm' value={codProCli} onChange={e => setCodProCli(e.target.value)} />
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='field col-12 lg:col-6'>
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
                            <div className='field col-12 lg:col-6'>
                                <label>Observação</label>
                                <InputTextarea
                                    className='w-full'
                                    rows={4}
                                    autoResize
                                    value={note}
                                    onChange={e => setNote(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='p-5 mb-3 bg-white'>
                        <div className='grid'>
                            <div className='field col'>
                                <label>Descrição</label>
                                <InputText
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.descricacao ? selectedItem.descricacao : ''}
                                />
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='field col-12 lg:col-2'>
                                <label>Cód REX</label>
                                <InputText
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.codigoRex ? selectedItem.codigoRex : ''}
                                />
                            </div>
                            <div className='field col-12 lg:col-2'>
                                <label>Cód Sapiens</label>
                                <InputText
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.codigoSap ? selectedItem.codigoSap : ''}
                                />
                            </div>
                            <div className='field col-12 lg:col-2'>
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
                            <div className='field col-12 lg:col-2'>
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
                            <div className='field col-12 lg:col-2'>
                                <label htmlFor='itemUnidade'>Unidade</label>
                                <InputText
                                    id='itemUnidade'
                                    readOnly
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.un ? selectedItem.un : ''}
                                />
                            </div>
                            <div className='field col-12 lg:col-2'>
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
                        </div>
                        <div className='grid'>
                            <div className='field col-12 lg:col-4'>
                                <label htmlFor='itemDerivacao'>Derivação</label>
                                <InputText
                                    readOnly
                                    id='itemDerivacao'
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.derivacao ? selectedItem.derivacao : ''}
                                />
                            </div>
                            <div className='field col-12 lg:col-4'>
                                <label htmlFor='itemEmbalagem'>Embalagem</label>
                                <InputText
                                    readOnly
                                    id='itemEmbalagem'
                                    className='w-full p-inputtext-sm'
                                    value={selectedItem && selectedItem.embalagem ? selectedItem.embalagem : ''}
                                />
                            </div>
                            <div className='field col-12 lg:col-4'>
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

                    <div style={{ border: 'solid 1px #9E9E9E', borderRadius: '3px' }} className='p-5 mb-3 bg-white'>
                        <div className='grid'>
                            <div className='col-6 lg:col-12'>
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
                            <div className='col-6 lg:col-12'>
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