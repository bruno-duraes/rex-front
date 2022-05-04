import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import { Datepicker } from '../components/Datepicker';
import { RequiredFlag } from '../components/RequiredFlag';

export function AddBudgetPage() {
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
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null)
    const [selectedRep, setSelectedRep] = useState(null)
    const [selectedTrasaction, setSelectedTransactions] = useState(null)
    const [selectedConvenyor, setSelectedConvenyor] = useState(null)
    const [selectedReDispatch, setSelectedReDispatch] = useState(null)
    const [selectedPaymentCond, setSelectedPaymentCond] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [selectedPaymentType, setSelectedPaymentType] = useState(null)
    const [freight, setFreight] = useState(null)
    const [priceFreight, setPriceFreight] = useState(null)
    const [minValue, setMinValue] = useState(null)
    const [minValueDup, setMinValueDup] = useState(null)
    const [budgetValidity, setBudgetValidity] = useState(null)
    return (
        <>
            <div className="grid">
                <div className='col-2 mb-2'>
                    <label htmlFor='emissao'>Emissão</label>
                    <Datepicker id='emissao' />
                </div>
            </div >
            <div className='grid mb-2'>
                <div className="col">
                    <label htmlFor='budgetNum'>Usuário <RequiredFlag /></label>
                    <Dropdown
                        id='budgetNum'
                        className='w-full'
                        filter value={selectedUser}
                        options={users}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedUser(e.value)}
                    />
                </div>
                <div className="col-8">
                    <label htmlFor='cliente'>Cliente</label>
                    <Dropdown
                        id='cliente'
                        className='w-full'
                        filter value={selectedClient}
                        options={clients}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedClient(e.value)}
                    />
                </div>
            </div>
            <div className='grid '>
                <div className='col'>
                    <label htmlFor='obsCliente'>Observação do Cliente</label>
                    <InputTextarea id='obsCliente' className='w-full' rows={4} autoResize />
                </div>
            </div>
            <div className='grid mb-2'>
                <div className='col flex justify-content-between'>
                    <Button label='Pedidos em Aberto' />
                    <Button label='Titulos em Aberto' />
                </div>
            </div>
            <div className='grid'>
                <div className='col-2 flex flex-column'>
                    <label htmlFor='numPed'>N° Ped/Oc Cli</label>
                    <InputText id='numPed' />
                </div>
                <div className='col-2 flex flex-column'>
                    <label htmlFor='entrega'>Entrega</label>
                    <Datepicker id='entrega' />
                </div>
                <div className='col flex flex-column'>
                    <label htmlFor='representante'>Representante</label>
                    <Dropdown
                        id='representante'
                        className='w-full'
                        filter value={selectedRep}
                        options={representatives}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedRep(e.value)}
                    />
                </div>
            </div>
            <div className='grid'>
                <div className='col'>
                    <label htmlFor='transacao'>Transação</label>
                    <Dropdown
                        id='transacao'
                        className='w-full'
                        filter value={selectedTrasaction}
                        options={transactions}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedTransactions(e.value)}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='transportador'>Transportador</label>
                    <Dropdown
                        id='transportador'
                        className='w-full'
                        filter value={selectedConvenyor}
                        options={convenyors}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedConvenyor(e.value)}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='redespacho'>Redespacho</label>
                    <Dropdown
                        id='redespacho'
                        className='w-full'
                        filter value={selectedReDispatch}
                        options={reDispatches}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedReDispatch(e.value)}
                    />
                </div>
            </div>
            <div className='grid'>
                <div className='col'>
                    <label htmlFor='condPagto'>Condição do Pagamento</label>
                    <Dropdown
                        id='condPagto'
                        className='w-full'
                        filter value={selectedPaymentCond}
                        options={paymentConditions}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedPaymentCond(e.value)}
                    />
                </div>
                <div className='col-2'>
                    <label htmlFor='moeda'>Moeda</label>
                    <Dropdown
                        id='moeda'
                        className='w-full'
                        value={selectedCurrency}
                        options={currencies}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedCurrency(e.value)}
                    />
                </div>
                <div className='col'>
                    <label htmlFor='tipoPagto'>Tipo de Pagamento</label>
                    <Dropdown
                        id='tipoPagto'
                        className='w-full'
                        value={selectedPaymentType}
                        options={paymentTypes}
                        optionLabel={'name'}
                        filterBy='name'
                        onChange={(e) => setSelectedPaymentType(e.value)}
                    />
                </div>
            </div>
            <div className='grid'>
                <div className='col-1 flex flex-column mr-3'>
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
                <div className='col-2'>
                    <label htmlFor='freightValue'>Valor do Frete</label>
                    <InputNumber
                        inputId='freightValue'
                        value={priceFreight}
                        onValueChange={(e) => setPriceFreight(e.value)}
                        mode='currency'
                        currency='USD'
                        locale='en-US'
                    />
                </div>
                <div className='col-2'>
                    <label htmlFor='valorMinimo'>Valor Minimo</label>
                    <InputNumber
                        inputId='valorMinimo'
                        value={minValue}
                        onValueChange={(e) => setMinValue(e.value)}
                        mode='currency'
                        currency='USD'
                        locale='en-US'
                    />
                </div>
                <div className='col-2'>
                    <label htmlFor='valorMinimoDuplicata'>Valor Minimo Duplicata</label>
                    <InputNumber
                        inputId='valorMinimoDuplicata'
                        value={minValueDup}
                        onValueChange={(e) => setMinValueDup(e.value)}
                        mode='currency'
                        currency='USD'
                        locale='en-US'
                    />
                </div>
                <div className='col-2'>
                    <label htmlFor='budgetValidity'>Validade do Orçamento</label>
                    <InputNumber
                        inputId='budgetValidity'
                        value={budgetValidity}
                        onValueChange={(e) => setBudgetValidity(e.value)}
                        suffix=' dias'
                    />
                </div>
            </div>
        </>
    )
}