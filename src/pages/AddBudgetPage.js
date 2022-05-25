import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { useContext, useEffect, useState } from 'react';
import { Datepicker } from '../components/Datepicker';
import { Divider } from '../components/Divider';
import { Modal } from '../components/Modal';
import { ModalEditItem } from '../components/ModalEditItem';
import { RequiredFlag } from '../components/RequiredFlag';
import { RenderContext } from '../providers/renderContext';
import { getLoggedUser } from '../services/getLoggedUser';
import { dateISOLocale } from '../utils/dateISOLocale';
import { ConsultPage } from './ConsultPage';

export function AddBudgetPage() {
    const users = [
        { name: 'User 01' },
        { name: 'User 02' },
        { name: 'User 03' },
    ];
    const clients = [
        { name: 'Client 01', vendedor: 'Vendedor Interno A', representante: 'Representante A' },
        { name: 'Client 02', vendedor: 'Vendedor Interno B', representante: 'Representante B' },
        { name: 'Client 03', vendedor: 'Vendedor Interno C', representante: 'Representante C' },
    ];
    const representatives = [
        { name: 'Representante 01' },
        { name: 'Representante 02' },
        { name: 'Representante 03' },
    ];
    const transactions = [
        { name: 'Transação X' },
        { name: 'Transação Y' },
        { name: 'Transação Z' },
    ];
    const convenyors = [
        { name: 'Transportador X' },
        { name: 'Transportador Y' },
        { name: 'Transportador Z' },
    ];
    const reDispatches = [
        { name: 'Redespacho X' },
        { name: 'Redespacho Y' },
        { name: 'Redespacho Z' },
    ];
    const paymentConditions = [
        { name: 'Condição de Pagamento X' },
        { name: 'Condição de Pagamento Y' },
        { name: 'Condição de Pagamento Z' },
    ];
    const currencies = [
        { name: '1 - Real | R$' },
        { name: '2 - Ufir | Ufir' },
        { name: '3 - Dolar | U$' },
        { name: '4 - Euro | €' },
    ];
    const paymentTypes = [
        { name: '1 - Duplicata' },
        { name: '2 - Depósito' },
        { name: '3 - Cheque' },
        { name: '4 - Dinheiro' },
        { name: '5 - EXP' },
        { name: '6 - Cartão' },
        { name: '7 - Deb c/c' },
        { name: '8 - DDA' },
        { name: '10 - Dupli' },
    ];

    let loggedUser = getLoggedUser();
    const [loggedUserName, setLoggedUserName] = useState(loggedUser.rNome);
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedRep, setSelectedRep] = useState(null);
    const [selectedTrasaction, setSelectedTransactions] = useState(null);
    const [selectedConvenyor, setSelectedConvenyor] = useState(null);
    const [selectedReDispatch, setSelectedReDispatch] = useState(null);
    const [selectedPaymentCond, setSelectedPaymentCond] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState({ name: '1 - Real | R$' });
    const [selectedPaymentType, setSelectedPaymentType] = useState(null);
    const [freight, setFreight] = useState('Cif');
    const [priceFreight, setPriceFreight] = useState(null);
    const [minValue, setMinValue] = useState(1000);
    const [minValueDup, setMinValueDup] = useState(750);
    const [budgetValidity, setBudgetValidity] = useState(17);
    const [checkEmiteCert, setCheckEmiteCert] = useState(false);
    const [checkEmitePPAP, setCheckEmitePPAP] = useState(false);
    const [checkMantemSaldo, setCheckMantemSaldo] = useState(false);
    const [checkAceitaParcial, setCheckAceitaParcial] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [emissao, setEmissao] = useState(new Date());
    const [entrega, setEntrega] = useState(null);
    const [products, setProducts] = useState([]);
    const [obsCliente, setObsCliente] = useState('');
    const [nPed_OcCli, setNPed_OcCli] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const [editItemVisible, setEditItemVisible] = useState(false);
    const [tableTotal, setTableTotal] = useState('0,00');
    const [invalidState, setInvalidState] = useState({});
    const { setRender, globalToast } = useContext(RenderContext);

    useEffect(() => {
        if (products.length > 0) {
            let v = 0;
            for (const [i, { totalProduto }] of products.entries()) {
                v += parseFloat(totalProduto);
            }
            setTableTotal(v);
        }
    }, [products])

    function saveOrder() {
        function validProp(p) {
            return p ? p.name : ''
        }

        let valorTotal = 0;
        if (priceFreight > 0) {
            valorTotal = priceFreight;
        }
        for (const [i, { totalProduto }] of products.entries()) {
            valorTotal = parseFloat(valorTotal) + parseFloat(totalProduto);
        }

        if (
            !selectedClient ||
            !selectedTrasaction ||
            !selectedConvenyor ||
            !entrega
        ) {
            let erros = '';
            if (!selectedClient) {
                erros += '• Cliente \n';
                setInvalidState(state => ({ ...state, cliente: true }))
            } else {
                setInvalidState(state => ({ ...state, cliente: false }))
            };
            if (!selectedTrasaction) {
                erros += '• Transação\n ';
                setInvalidState(state => ({ ...state, transacao: true }));
            } else {
                setInvalidState(state => ({ ...state, transacao: false }))
            };
            if (!selectedConvenyor) {
                erros += '• Transportador\n ';
                setInvalidState(state => ({ ...state, transportador: true }))
            } else {
                setInvalidState(state => ({ ...state, transportador: false }))
            };
            if (!entrega) {
                erros += '• Entrega\n';
                setInvalidState(state => ({ ...state, entrega: true }))
            } else {
                setInvalidState(state => ({ ...state, entrega: false }))
            };
            console.log(erros)
            globalToast.current.show({ severity: 'error', summary: 'Campos Obrigátorios', detail: erros, life: 5000 })
            throw new Error('invalid form')
        }

        let order = {
            numero: Math.floor(Math.random() * (9999 - 1000)) + 1000,
            emissao: emissao ? dateISOLocale(emissao) : null,
            usuario: loggedUserName,
            cliente: validProp(selectedClient),
            obsCliente: obsCliente,
            nPed_OcCli: nPed_OcCli,
            entrega: entrega ? dateISOLocale(entrega) : null,
            representante: selectedClient.representante,
            transacao: validProp(selectedTrasaction),
            transportador: validProp(selectedConvenyor),
            redespacho: validProp(selectedReDispatch),
            condPagamento: validProp(selectedPaymentCond),
            moeda: validProp(selectedCurrency),
            tipoPagto: validProp(selectedPaymentType),
            frete: freight,
            valorFrete: priceFreight,
            valorMin: minValue,
            valorMinDuplicata: minValueDup,
            validadeOrcamento: budgetValidity,
            emiteCertificado: checkEmiteCert,
            emitePAPP: checkEmitePPAP,
            mantemSaldo: checkMantemSaldo,
            aceitaParcial: checkAceitaParcial,
            valorTotal: valorTotal,
            itens: products
        }

        let orders = JSON.parse(localStorage.getItem('orders'));
        if (!orders) {
            localStorage.setItem('orders', JSON.stringify([order]));
            globalToast.current.show({ severity: 'success', summary: 'Pedido Criado Com Sucesso!', detail: `Pedido N°${order.numero}`, life: 6000 });
        } else {
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            globalToast.current.show({ severity: 'success', summary: 'Pedido Criado Com Sucesso!', detail: `Pedido N°${order.numero}`, life: 6000 });
        }
    }

    return (
        <div>
            <ModalEditItem
                index={editItem && editItem.index ? editItem.index : null}
                item={editItem && editItem.item ? editItem.item : null}
                visible={editItemVisible}
                setVisible={setEditItemVisible}
                changeItems={setProducts}
                budgetItems={products}
                clientName={selectedClient ? selectedClient.name : undefined}
                deadline={entrega ? entrega : null}
            />
            <Modal
                visible={modalVisible}
                setVisible={setModalVisible}
                budgetItems={products}
                setBudgetItems={setProducts}
                clientName={selectedClient ? selectedClient.name : undefined}
                deadline={entrega ? entrega : null}
            />

            <div className='grid mb-3 pb-1' style={{ borderBottom: 'solid 1px #ced4da' }}>
                <div className='col-12 lg:col-1'>
                    <Button
                        label='Salvar'
                        type='submit'
                        onClick={() => {
                            saveOrder();
                            setRender({ name: 'ConsultPage', render: <ConsultPage /> });
                        }}
                        className='p-button-success w-full font-normal font-semibold'
                    />
                </div>
            </div>

            <div className="grid mb-2">
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    < label htmlFor='emissao'>Emissão: </label>
                </div>
                <div className='col-8 lg:col-5'>
                    <Datepicker id='emissao' readonly={true} initialDate={emissao} onChange={(e) => setEmissao(e.value)} className='w-8rem' />
                </div >
                <div className='col-3 lg:col-1 text-right bg-label'>
                    <RequiredFlag />
                    <label htmlFor='budgetNum'>Usuário:</label>
                </div>
                <div className="col-9 lg:col-4">
                    <InputText
                        readOnly
                        value={loggedUserName}
                        className='w-full p-inputtext-sm'
                    />
                </div>
            </div>

            <div className="grid mb-2">
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <RequiredFlag />
                    <label htmlFor='cliente'>Cliente:</label>
                </div>
                <div className="col-9 md:col-5">
                    <Dropdown
                        id='cliente'
                        className={`w-full p-inputtext-sm ${invalidState.cliente ? 'p-invalid' : ''}`}
                        filter
                        value={selectedClient}
                        options={clients}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedClient(e.value)}
                    />
                </div>
                <div className='col-3 lg:col-2 text-right bg-label'>
                    <label>Vendedor Interno:</label>
                </div>
                <div className='col-9 lg:col-3'>
                    <InputText
                        id='numPed'
                        className='p-inputtext-sm w-full'
                        readOnly
                        value={selectedClient && selectedClient.vendedor ? selectedClient.vendedor : undefined}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label htmlFor='obsCliente'>
                        Observação <br />
                        do Cliente:
                    </label>
                </div>
                <div className='col-9 md:col-10'>
                    <InputTextarea
                        id='obsCliente'
                        className='w-full text-sm'
                        rows={2}
                        autoResize
                        value={obsCliente}
                        onChange={e => setObsCliente(e.target.value)}
                    />
                </div>
                <div className='lg:w-10rem'></div>
                <div className='col-12 lg:col-10 flex justify-content-between'>
                    <Button iconPos='right' icon='pi pi-search lg:text-base text-xs' label='Pedidos em Aberto' className='lg:text-base text-xs' />
                    <Button iconPos='right' icon='pi pi-search lg:text-base text-xs' label='Titulos em Aberto' className='lg:text-base text-xs' />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label htmlFor='numPed'>N° Ped/Oc Cli:</label>
                </div>
                <div className='col-9 md:col-2 flex align-items-center '>
                    <InputText
                        id='numPed'
                        className='p-inputtext-sm w-full'
                        value={nPed_OcCli}
                        onChange={e => setNPed_OcCli(e.target.value)}
                    />
                </div>
                <div className='col-12 lg:col-3 py-0 lg:col-offset-5 flex lg:justify-content-end'>
                    <div className='text-right w-6rem bg-label mr-2'>
                        <label className='p-2' htmlFor='entrega'><RequiredFlag />Entrega:</label>
                    </div>
                    <div className='flex align-items-center'>
                        <Datepicker id='entrega' initialDate={entrega} onChange={e => setEntrega(e.value)} className={`lg:w-8rem ${invalidState.entrega ? 'p-invalid' : ''}`} />
                    </div>
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label' style={{ wordBreak: 'break-all' }}>
                    <label htmlFor='representante'>Representante:</label>
                </div>
                <div className='col-9 lg:col-4 flex align-items-center'>
                    <InputText
                        readOnly
                        value={selectedClient && selectedClient.representante ? selectedClient.representante : undefined}
                        className='w-full p-inputtext-sm'
                    />
                </div>
                <div className='col-3 lg:col-1 text-right bg-label'>
                    <RequiredFlag />
                    <label htmlFor='transacao'>Transação:</label>
                </div>
                <div className='col-9 md:col-5'>
                    <Dropdown
                        id='transacao'
                        className={`w-full p-inputtext-sm ${invalidState.transacao ? 'p-invalid' : ''}`}
                        filter value={selectedTrasaction}
                        options={transactions}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedTransactions(e.value)}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label' style={{ wordBreak: 'break-all' }}>
                    <RequiredFlag />
                    <label htmlFor='transportador'>Transportador:</label>
                </div>
                <div className='col-9 lg:col-4 flex align-items-center'>
                    <Dropdown
                        id='transportador'
                        className={
                            `w-full p-inputtext-sm ${invalidState.transportador ? 'p-invalid' : ''}`
                        }
                        filter value={selectedConvenyor}
                        options={convenyors}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedConvenyor(e.value)}
                    />
                </div>
                <div className='col-3 lg:col-1 text-right bg-label' >
                    <label htmlFor='redespacho'>Redespacho:</label>
                </div>
                <div className='col-9 lg:col-5'>
                    <Dropdown
                        id='redespacho'
                        className='w-full p-inputtext-sm'
                        filter value={selectedReDispatch}
                        options={reDispatches}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedReDispatch(e.value)}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <RequiredFlag />
                    <label htmlFor='condPagto'>Cond. Pagto:</label>
                </div>
                <div className='col-9 lg:col-5 flex align-items-center'>
                    <Dropdown
                        id='condPagto'
                        className='w-full p-inputtext-sm'
                        filter value={selectedPaymentCond}
                        options={paymentConditions}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedPaymentCond(e.value)}
                    />
                </div>
                <div className='col-3 lg:col-1 flex align-items-center justify-content-end text-right bg-label'>
                    <RequiredFlag />
                    <label htmlFor='moeda'>Moeda:</label>
                </div>
                <div className='col-9 lg:col-4 flex align-items-center'>
                    <Dropdown
                        id='moeda'
                        className='w-full p-inputtext-sm'
                        value={selectedCurrency}
                        options={currencies}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedCurrency(e.value)}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label htmlFor='tipoPagto'>Tipo de Pagamento:</label>
                </div>
                <div className='col-9 lg:col-10'>
                    <Dropdown
                        id='tipoPagto'
                        className='w-full p-inputtext-sm'
                        value={selectedPaymentType}
                        options={paymentTypes}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedPaymentType(e.value)}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label>Frete:</label>
                </div>
                <div className='col-9 lg:col-2'>
                    <div className='flex align-items-center'>
                        <RadioButton
                            inputId='cif'
                            className='mr-1'
                            name='frete'
                            value='Cif'
                            checked={freight === 'Cif'}
                            onChange={(e) => setFreight(e.value)}
                        />
                        <label htmlFor='cif' className='font-bold mr-2 cursor-pointer'>Cif</label>
                        <RadioButton
                            inputId='fob'
                            className='mr-1 ml-2'
                            name='frete'
                            value='Fob'
                            checked={freight === 'Fob'}
                            onChange={(e) => setFreight(e.value)}
                        />
                        <label htmlFor='fob' className='font-bold cursor-pointer'>Fob</label>
                    </div>
                </div>
                <div className='col-3 lg:col-2 lg:col-offset-5 text-right bg-label'>
                    <label htmlFor='freightValue'>Valor do Frete:</label>
                </div>
                <div className='col-9 lg:col-1 flex align-items-center'>
                    <InputNumber
                        size={1}
                        inputId='freightValue'
                        className='w-full'
                        inputClassName='p-inputtext-sm w-full'
                        value={priceFreight}
                        onValueChange={(e) => setPriceFreight(e.value)}
                        mode='decimal'
                        maxFractionDigits={2}
                        minFractionDigits={2}
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label htmlFor='valorMinimo'>Valor Minimo:</label>
                </div>
                <div className='col-9 lg:col-2 flex align-items-center'>
                    <InputNumber
                        inputId='valorMinimo'
                        className='w-full'
                        inputClassName='p-inputtext-sm w-full'
                        value={minValue}
                        onValueChange={(e) => setMinValue(e.value)}
                        mode='decimal'
                        prefix='R$ '
                        minFractionDigits={2}
                        maxFractionDigits={2}
                    />
                </div>
                <div className='col-3 lg:col-2 text-right bg-label'>
                    <label htmlFor='valorMinimoDuplicata'>Valor Minimo Duplicata:</label>
                </div>
                <div className='col-9 lg:col-2 flex align-items-center' >
                    <InputNumber
                        className='w-full'
                        inputClassName='p-inputtext-sm w-full'
                        inputId='valorMinimoDuplicata'
                        value={minValueDup}
                        onValueChange={(e) => setMinValueDup(e.value)}
                        mode='decimal'
                        prefix='R$ '
                        minFractionDigits={2}
                        maxFractionDigits={2}
                    />
                </div>
                <div className='col-3 lg:col-2 text-right bg-label'>
                    <label htmlFor='validadeOrcamento'>Validade do Orçamento:</label>
                </div>
                <div className='col-9 lg:col-2 flex align-items-center'>
                    <InputNumber
                        className='w-full'
                        inputClassName='w-full p-inputtext-sm'
                        inputId='validadeOrcamento'
                        value={budgetValidity}
                        onValueChange={(e) => setBudgetValidity(e.value)}
                        suffix=' dias'
                    />
                </div>
                <div className='col-3 lg:w-10rem text-right bg-label'>
                    <label>Opções:</label>
                </div>
                <div className='col-9 lg:col-2 '>
                    <Checkbox
                        inputId='emiteCert'
                        checked={checkEmiteCert}
                        onChange={e => setCheckEmiteCert(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='emiteCert' className='cursor-pointer'>Emite Certificado</label>
                </div>
                <div className='col-9 col-offset-3 lg:col-offset-0 lg:col-3 lg:flex justify-content-center align-items-center'>
                    <Checkbox
                        inputId='emitePPAP'
                        checked={checkEmitePPAP}
                        onChange={e => setCheckEmitePPAP(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='emitePPAP' className='cursor-pointer'>Emite PPAP</label>
                </div>
                <div className='col-12 col-offset-3 lg:col-offset-0 lg:col-3 lg:flex justify-content-center align-items-center '>
                    <Checkbox
                        inputId='mantemSaldo'
                        checked={checkMantemSaldo}
                        onChange={e => setCheckMantemSaldo(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='mantemSaldo' className='cursor-pointer'>Mantém Saldo</label>
                </div>
                <div className='col-12 col-offset-3 lg:col-offset-0 lg:col-2 lg:flex justify-content-end align-items-center'>
                    <Checkbox
                        inputId='aceitaParcial'
                        checked={checkAceitaParcial}
                        onChange={e => setCheckAceitaParcial(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='aceitaParcial' className='cursor-pointer'>Aceita Parcial</label>
                </div>
            </div>
            <Divider icon={'fa-solid fa-cart-plus'} label='Items do Pedido' />
            <div className='w-full my-2'>
                <Button
                    className='w-full p-button-raised'
                    disabled={!selectedClient || !selectedTrasaction || !selectedConvenyor || !entrega ? true : false}
                    label={<span className='font-semibold'>Adicionar Item</span>}
                    onClick={() => setModalVisible(true)}
                />
            </div>
            <div>
                <DataTable
                    header={
                        <div className='flex justify-content-between text-700 text-sm'>
                            <span>Produtos do Orçamento/Pedido</span>
                            <span>Total dos Produtos: {tableTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                    }
                    value={products}
                    responsiveLayout="stack"
                    showGridlines
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
                    <Column
                        headerClassName='text-700 text-sm'
                        header='Operações'
                        body={(item, r) => {
                            const [popupRemoveItem, setPopupRemoveItem] = useState(false);
                            return (
                                <>
                                    <ConfirmPopup
                                        onHide={() => setPopupRemoveItem(false)}
                                        target={document.getElementById(`remove-item-${r.rowIndex}`)}
                                        visible={popupRemoveItem}
                                        acceptLabel='Sim'
                                        rejectLabel='Não'
                                        acceptClassName='p-button-danger p-button-raised'
                                        rejectClassName='p-button-raised p-button-outlined'
                                        icon='pi pi-exclamation-triangle'
                                        message={<span className='font-semibold'>Deseja remover esse item?</span>}
                                        accept={() => {
                                            let productsCopy = Array.from(products);
                                            productsCopy.splice(r.rowIndex, 1);
                                            setProducts(productsCopy);
                                            setPopupRemoveItem(false)
                                        }}
                                        reject={() => setPopupRemoveItem(false)}
                                    />
                                    <div className='flex justify-content-center align-items-center'>
                                        <i
                                            id={`remove-item-${r.rowIndex}`}
                                            className='fa-solid fa-pen-to-square mr-2 font-bold cursor-pointer text-xl'
                                            onClick={() => {
                                                setEditItem({ item: item, index: r.rowIndex });
                                                setEditItemVisible(true);
                                            }}
                                            style={{ color: '#006991' }}
                                        ></i>
                                        <i
                                            id={`remove-item-${r.rowIndex}`}
                                            className='pi pi-ban font-bold cursor-pointer text-xl'
                                            onClick={() => setPopupRemoveItem(true)}
                                            style={{ color: '#bf2e2e' }}
                                        ></i>
                                    </div>
                                </>
                            )
                        }}
                    ></Column>
                </DataTable>
            </div >

        </div>
    )
}