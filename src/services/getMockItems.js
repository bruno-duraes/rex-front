export function getMockItems() {
    let items = [
        {
            label: '001-Item X',
            un: 'UN',
            preco_bruto: 17.78,
            faixa_1: 17.56,
            faixa_2: 17.90,
            faixa_3: 18.01,
            faixa_4: 18.15,
            peso_bruto: 12.87,
            descricacao: 'Produto X',
            codigoRex: '123-X',
            codigoSap: 'S-321-X',
            qtia_embalada: 5,
            embalagem: 'Caixa de Papelão N° 60',
            estoquePadrao: 975,
            estoqueCliente: 0,
            acabamentos: [
                {
                    ref: 1123,
                    acabamento: 'Energecido de Tempera (Oxidado)',
                    total_disponivel: 16,
                    estoque_terc: 0,
                    total_pedidos: 2,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                },
                {
                    ref: 21123,
                    acabamento: 'Zincado Branco',
                    total_disponivel: 0,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                },
            ]
        },
        {
            label: '002-Item Y',
            un: 'LT',
            preco_bruto: 25.00,
            faixa_1: 26.00,
            faixa_2: 26.25,
            faixa_3: 25.89,
            faixa_4: 26.78,
            peso_bruto: 7.45,
            descricacao: 'Produto Y',
            codigoRex: '123-Y',
            codigoSap: 'S-321-Y',
            qtia_embalada: 6,
            embalagem: 'Caixa de Papelão N° 48',
            estoquePadrao: 56,
            estoqueCliente: 12,
            acabamentos: [
                {
                    ref: 41123,
                    acabamento: 'Bicromatizado',
                    total_disponivel: 35,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 2
                },
                {
                    ref: 61123,
                    acabamento: 'Zincado Preto',
                    total_disponivel: 2,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                }
            ]
        },
        {
            label: '003-Item Z',
            un: 'CX',
            preco_bruto: 10.75,
            faixa_1: 11.00,
            faixa_2: 12.05,
            faixa_3: 11.87,
            faixa_4: 11.25,
            peso_bruto: 0.15,
            descricacao: 'Produto Z',
            codigoRex: '123-Z',
            codigoSap: 'S-321-Z',
            qtia_embalada: 7,
            embalagem: 'Caixa de Papelão N° 50',
            estoquePadrao: 0,
            estoqueCliente: 36,
            acabamentos: [
                {
                    ref: 21123,
                    acabamento: 'Zincado Branco',
                    total_disponivel: 0,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                },
                {
                    ref: 61123,
                    acabamento: 'Zincado Preto',
                    total_disponivel: 0,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                },
                {
                    ref: 61123,
                    acabamento: 'Zincado Ferro Amarelo',
                    total_disponivel: 3,
                    estoque_terc: 0,
                    total_pedidos: 0,
                    total_prefaturas: 0,
                    total_ordens: 0,
                    estoque_sc: 0
                },
            ]
        },
    ];

    return items
}