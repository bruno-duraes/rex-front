import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import { Datepicker } from '../components/Datepicker';
import { Divider } from '../components/Divider';
import { Modal } from '../components/Modal';
import { RequiredFlag } from '../components/RequiredFlag';

export function ViewPage({ data }) {
    const users = [
        { name: 'User 01' },
        { name: 'User 02' },
        { name: 'User 03' },
    ];
    const clients = [
        { name: 'Client 01' },
        { name: 'Client 02' },
        { name: 'Client 03' },
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
    console.log(new Date(data.entrega.split('/').reverse().join('-')))

    const [selectedUser, setSelectedUser] = useState({ name: data.usuario });
    const [selectedClient, setSelectedClient] = useState({ name: data.cliente });
    const [selectedRep, setSelectedRep] = useState({ name: data.representante });
    const [selectedTrasaction, setSelectedTransactions] = useState({ name: data.transacao });
    const [selectedConvenyor, setSelectedConvenyor] = useState({ name: data.transportador });
    const [selectedReDispatch, setSelectedReDispatch] = useState({ name: data.redespacho });
    const [selectedPaymentCond, setSelectedPaymentCond] = useState({ name: data.condPagamento });
    const [selectedCurrency, setSelectedCurrency] = useState({ name: data.moeda });
    const [selectedPaymentType, setSelectedPaymentType] = useState({ name: data.tipoPagto });
    const [freight, setFreight] = useState(data.frete);
    const [priceFreight, setPriceFreight] = useState({ name: data.valorFrete });
    const [minValue, setMinValue] = useState(data.valorMin);
    const [minValueDup, setMinValueDup] = useState(data.valorMinDuplicata);
    const [budgetValidity, setBudgetValidity] = useState(data.validadeOrcamento);
    const [checkEmiteCert, setCheckEmiteCert] = useState(data.emiteCertificado);
    const [checkEmitePPAP, setCheckEmitePPAP] = useState(data.emitePAPP);
    const [checkMantemSaldo, setCheckMantemSaldo] = useState(data.mantemSaldo);
    const [checkAceitaParcial, setCheckAceitaParcial] = useState(data.aceitaParcial);
    const [modalVisible, setModalVisible] = useState(false);
    const [emissao, setEmissao] = useState(new Date(data.emissao.spli('/').reverse().join('-')));
    const [entrega, setEntrega] = useState(new Date(data.entrega));
    const [products, setProducts] = useState(data.itens);
    const [obsCliente, setObsCliente] = useState(data.obsCliente);
    const [nPed_OcCli, setNPed_OcCli] = useState(data.nPed_OcCli);

    function saveOrder() {
        function validProp(p) {
            return p ? p.name : ''
        }
        let valorTotal = priceFreight;
        for (const [i, { totalProduto }] of products.entries()) {
            valorTotal += totalProduto;
        }
        let order = {
            numero: Math.floor(Math.random() * (9999 - 1000)) + 1000,
            emissao: emissao ? emissao.toLocaleDateString() : '',
            usuario: validProp(selectedUser),
            cliente: validProp(selectedClient),
            obsCliente: obsCliente,
            nPed_OcCli: nPed_OcCli,
            entrega: entrega ? entrega.toLocaleDateString() : '',
            representante: validProp(selectedRep),
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
            alert('Pedido Gravado com Sucesso!');
        } else {
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            alert('Pedido Gravado com Sucesso!');
        }
    }

    return (
        <>
            <Modal visible={modalVisible} setVisible={setModalVisible} budgetItems={products} setBudgetItems={setProducts} />
            <div className='grid'>
                <div className='col-10'></div>
                <div className='col-12 lg:col-2 flex justify-content-end'>
                    <Button
                        label='Salvar'
                        onClick={() => saveOrder()}
                        className='p-button-success w-full font-normal font-semibold'
                    />
                </div>
            </div>
            <div className="grid">
                <div className='field col-12 md:col-2 mb-2'>
                    < label htmlFor='emissao' > Emissão</label >
                    <Datepicker id='emissao' initialDate={emissao} onChange={(e) => setEmissao(e.value)} />
                </div >
            </div >
            <div className='grid mb-2'>
                <div className="field col">
                    <label htmlFor='budgetNum'>Usuário</label>
                    <RequiredFlag />
                    <Dropdown
                        id='budgetNum'
                        className='w-full p-inputtext-sm'
                        filter
                        value={selectedUser}
                        options={users}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedUser(e.value)}
                    />
                </div>
                <div className="field col-12 md:col-8">
                    <label htmlFor='cliente'>Cliente </label>
                    <RequiredFlag />
                    <Dropdown
                        id='cliente'
                        className='w-full p-inputtext-sm'
                        filter
                        value={selectedClient}
                        options={clients}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedClient(e.value)}
                    />
                </div>
            </div>
            <div className='grid '>
                <div className='field col-12 md:col'>
                    <label htmlFor='obsCliente'>Observação do Cliente</label>
                    <InputTextarea
                        id='obsCliente'
                        className='w-full'
                        rows={4}
                        autoResize
                        value={obsCliente}
                        onChange={e => setObsCliente(e.value)}
                    />
                </div>
            </div>
            <div className='grid mb-2'>
                <div className='col flex justify-content-between'>
                    <Button iconPos='right' icon='pi pi-search' label='Pedidos em Aberto' />
                    <Button iconPos='right' icon='pi pi-search' label='Titulos em Aberto' />
                </div>
            </div>
            <div className='grid'>
                <div className='field col-12 md:col-2 flex flex-column'>
                    <label htmlFor='numPed'>N° Ped/Oc Cli</label>
                    <InputText
                        id='numPed'
                        className='p-inputtext-sm'
                        value={nPed_OcCli}
                        onChange={e => setNPed_OcCli(e.value)}
                    />
                </div>
                <div className='field col-12 md:col-2 flex flex-column'>
                    <label htmlFor='entrega'>Entrega</label>
                    <Datepicker id='entrega' value={entrega} onChange={e => setEntrega(e.value)} />
                </div>
                <div className='field col'>
                    <label htmlFor='representante'>Representante</label>
                    <RequiredFlag />
                    <Dropdown
                        id='representante'
                        className='w-full p-inputtext-sm'
                        filter value={selectedRep}
                        options={representatives}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedRep(e.value)}
                    />
                </div>
            </div>
            <div className='grid'>
                <div className='field col-12 md:col-4'>
                    <label htmlFor='transacao'>Transação</label>
                    <Dropdown
                        id='transacao'
                        className='w-full p-inputtext-sm'
                        filter value={selectedTrasaction}
                        options={transactions}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedTransactions(e.value)}
                    />
                </div>
                <div className='field col-12 md:col-4'>
                    <label htmlFor='transportador'>Transportador</label>
                    <Dropdown
                        id='transportador'
                        className='w-full p-inputtext-sm'
                        filter value={selectedConvenyor}
                        options={convenyors}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedConvenyor(e.value)}
                    />
                </div>
                <div className='field col-12 md:col-4'>
                    <label htmlFor='redespacho'>Redespacho</label>
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
            </div>
            <div className='grid'>
                <div className='field col-12 md:col-5'>
                    <label htmlFor='condPagto'>Condição do Pagamento</label>
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
                <div className='field col-12 md:col-2'>
                    <label htmlFor='moeda'>Moeda</label>
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
                <div className='field col-12 md:col-5'>
                    <label htmlFor='tipoPagto'>Tipo de Pagamento</label>
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
            </div>
            <div className='grid formgrid'>
                <div className='field col-12 md:col-1 flex flex-column mr-3'>
                    <label>Frete</label>
                    <div className='mt-2 flex align-items-center '>
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
                <div className='field col-12 md:col-2 flex flex-column'>
                    <label htmlFor='freightValue'>Valor do Frete</label>
                    <InputNumber
                        size={1}
                        inputId='freightValue'
                        inputClassName='p-inputtext-sm'
                        value={priceFreight}
                        onValueChange={(e) => setPriceFreight(e.value)}
                        mode='decimal'
                        maxFractionDigits={2}
                        minFractionDigits={2}
                    />
                </div>
                <div className='field col-12 md:col-2 flex flex-column'>
                    <label htmlFor='valorMinimo'>Valor Minimo</label>
                    <InputNumber
                        size={1}
                        inputId='valorMinimo'
                        inputClassName='p-inputtext-sm'
                        value={minValue}
                        onValueChange={(e) => setMinValue(e.value)}
                        mode='currency'
                        currency='USD'
                        locale='en-US'
                    />
                </div>
                <div className='field col-12 md:col-2 flex flex-column' >
                    <label htmlFor='valorMinimoDuplicata'>Valor Minimo Duplicata</label>
                    <InputNumber
                        size={1}
                        inputClassName='p-inputtext-sm'
                        inputId='valorMinimoDuplicata'
                        value={minValueDup}
                        onValueChange={(e) => setMinValueDup(e.value)}
                        mode='currency'
                        currency='USD'
                        locale='en-US'
                    />
                </div>
                <div className='field col-12 md:col-2 flex flex-column'>
                    <label htmlFor='validadeOrcamento'>Validade do Orçamento</label>
                    <InputNumber
                        size={1}
                        inputClassName='p-inputtext-sm'
                        inputId='validadeOrcamento'
                        value={budgetValidity}
                        onValueChange={(e) => setBudgetValidity(e.value)}
                        suffix=' dias'
                    />
                </div>
            </div>
            <div className='grid flex flex-wrap '>
                <div className='col-12 md:col-2'>
                    <Checkbox
                        inputId='emiteCert'
                        checked={checkEmiteCert}
                        onChange={e => setCheckEmiteCert(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='emiteCert' className='cursor-pointer'>Emite Certificado</label>
                </div>
                <div className='col-12 md:col-2'>
                    <Checkbox
                        inputId='emitePPAP'
                        checked={checkEmitePPAP}
                        onChange={e => setCheckEmitePPAP(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='emitePPAP' className='cursor-pointer'>Emite PPAP</label>
                </div>
                <div className='col-12 md:col-2'>
                    <Checkbox
                        inputId='mantemSaldo'
                        checked={checkMantemSaldo}
                        onChange={e => setCheckMantemSaldo(e.checked)}
                        className='mr-2'
                    />
                    <label htmlFor='mantemSaldo' className='cursor-pointer'>Mantém Saldo</label>
                </div>
                <div className='col-12 md:col-2'>
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
            <div className='w-full'>
                <Button
                    className='w-full'
                    label={<span className='font-semibold'>Adicionar Item</span>}
                    onClick={() => setModalVisible(true)}
                />
            </div>
            <div className='mt-3'>
                <DataTable
                    header={<span className='text-700 text-sm'>Produtos do Orçamento/Pedido</span>}
                    value={products}
                    responsiveLayout="stack"
                    showGridlines
                    className='relative'
                >
                    <Column headerClassName='text-700 text-sm' field='seq' header='Seq'></Column>
                    <Column headerClassName='text-700 text-sm' field='codigo' header='Cod'></Column>
                    <Column headerClassName='text-700 text-sm' field='descricao' header='Descrição'></Column>
                    <Column headerClassName='text-700 text-sm' field='quantidade' header='Quantia'></Column>
                    <Column headerClassName='text-700 text-sm' field='un' header='UN'></Column>
                    <Column headerClassName='text-700 text-sm' field='precoBruto' header='Preço Bruto'></Column>
                    <Column headerClassName='text-700 text-sm' field='precoFinal' header='Preço Final'></Column>
                    <Column headerClassName='text-700 text-sm' field='totalProduto' header='Tot Produto'></Column>
                    <Column headerClassName='text-700 text-sm' field='peso' header='Peso'></Column>
                    <Column headerClassName='text-700 text-sm' field='media' header='Média'></Column>
                    <Column headerClassName='text-700 text-sm' field='apro_ger' header='Apro. Ger'></Column>
                    <Column headerClassName='text-700 text-sm' field='apro_dir' header='Apro. Dir'></Column>
                    <Column
                        body={(_, r) => (
                            <i
                                className='pi pi-ban font-bold cursor-pointer'
                                onClick={() => {
                                    let productsCopy = Array.from(products);
                                    productsCopy.splice(r.rowIndex, 1);
                                    setProducts(productsCopy);
                                }}
                                style={{ color: '#bf2e2e' }}
                            ></i>
                        )}
                    ></Column>
                </DataTable>
            </div>

        </>
    )
}