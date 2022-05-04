import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import '../index.css';
import { Datepicker } from './Datepicker';

export function Modal() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [faixa, setFaixa] = useState(null);
    const [faixaSol, setFaixaSol] = useState(null);
    let items = [
        {
            label: 'Item X',
            un: 'UN',
            preco_bruto: 17.78,
            faixa_1: 17.56,
            faixa_2: 17.90,
            faixa_3: 18.01,
            faixa_4: 18.15,
            peso_bruto: 12.87,
            descricacao: 'Produto X',
            codigoRex: '123-X',
            codigoSap: 'S-321-X'
        },
        {
            label: 'Item Y',
            un: 'LT',
            preco_bruto: 25.00,
            faixa_1: 26.00,
            faixa_2: 26.25,
            faixa_3: 25.89,
            faixa_4: 26.78,
            peso_bruto: 7.45,
            descricacao: 'Produto Y',
            codigoRex: '123-Y',
            codigoSap: 'S-321-Y'
        },
        {
            label: 'Item Z',
            un: 'CX',
            preco_bruto: 10.75,
            faixa_1: 11.00,
            faixa_2: 12.05,
            faixa_3: 11.87,
            faixa_4: 11.25,
            peso_bruto: 0.15,
            descricacao: 'Produto Z',
            codigoRex: '123-Z',
            codigoSap: 'S-321-Z'
        },
    ]
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
            <Dialog
                maximizable
                draggable={false}
                resizable={false}
                position='top'
                header='Inclusão do Produto no Orçamento/Pedido'
                contentClassName='surface-200'
                visible={true}
                style={{ width: '95%' }}
                footer={<Button onClick={() => console.log(faixa)} label='Adicionar Item' className='p-button-raised' />}
            >
                <Card title='Selecione o Item'>
                    <div className='grid formgrid'>
                        <div className='field col-12 md:col-8'>
                            <label htmlFor='selectItem'>Item</label>
                            <AutoComplete
                                value={selectedItem}
                                suggestions={filteredItems}
                                completeMethod={searchItem}
                                field='label'
                                onChange={e => setSelectedItem(e.value)}
                                id='selectItem'
                                className='w-full'
                                inputClassName='w-full p-inputtext-sm'
                            />
                        </div>
                        <div className='field col-3 md:col-1'>
                            <label htmlFor='itemQuantia'>Quantia</label>
                            <InputNumber
                                inputId='itemQuantia'
                                className='w-full'
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
                                        htmlFor='faixa2'
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
                            <Datepicker initialDate={new Date()} />
                        </div>
                        <div className='field col-6 lg:col-2'>
                            <label>Entrega</label>
                            <Datepicker />
                        </div>
                        <div className='field col-6 lg:col-2'>
                            <label>Pedido/Ordem</label>
                            <InputText className='w-full p-inputtext-sm' />
                        </div>
                        <div className='field col-6 lg:col-2'>
                            <label>Sequencia</label>
                            <InputText className='w-full p-inputtext-sm' />
                        </div>
                        <div className='field col-6 lg:col-2'>
                            <label>Cod Pro Cli</label>
                            <InputText className='w-full p-inputtext-sm' />
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
                                value={{ label: '90150 - Orçamento Indústria' }}
                                disabled
                                className='w-full p-inputtext-sm'
                            />
                        </div>
                        <div className='field col-12 lg:col-6'>
                            <label>Observação</label>
                            <InputTextarea className='w-full' rows={4} autoResize />
                        </div>
                    </div>
                </Card>
                <Card title='Detalhes' className='mt-5'>
                    <div className='grid'>
                        <div className='field col-12 lg:col-6'>
                            <label>Descrição</label>
                            <InputText
                                readOnly
                                className='w-full p-inputtext-sm'
                                value={selectedItem && selectedItem.descricacao ? selectedItem.descricacao : ''}
                            />
                        </div>
                        <div className='field col-12 lg:col-3'>
                            <label>Cód REX</label>
                            <InputText
                                readOnly
                                className='w-full p-inputtext-sm'
                                value={selectedItem && selectedItem.codigoRex ? selectedItem.codigoRex : ''}
                            />
                        </div>
                        <div className='field col-12 lg:col-3'>
                            <label>Cód Sapiens</label>
                            <InputText
                                readOnly
                                className='w-full p-inputtext-sm'
                                value={selectedItem && selectedItem.codigoSap ? selectedItem.codigoSap : ''}
                            />
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='field col'>
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
                    </div>
                </Card>
            </Dialog>
        </>
    )
}