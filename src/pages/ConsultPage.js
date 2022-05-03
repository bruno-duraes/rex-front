import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';

export function ConsultPage() {
    const [orcamentos, setOrcamentos] = useState([{}])
    const columns = [
        { field: 'status', header: 'Status' },
        { field: 'numero', header: 'Numero' },
        { field: 'pedCliente', header: 'Ped Cliente' },
        { field: 'data', header: 'Data' },
        { field: 'valor', header: 'Valor' },
        { field: 'Cliente', header: 'Cliente' },
        { field: 'representante', header: 'Vendedor/Representante' }
    ];

    return (
        <>
            <DataTable value={orcamentos}>
                {
                    columns.map((c, i) =>
                        <>
                            <Column key={c.field} field={c.field} header={'bta'} />
                        </>
                    )
                }
            </DataTable>
        </>
    );
}