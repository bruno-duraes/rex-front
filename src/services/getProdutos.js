import { getLoggedUser } from "./getLoggedUser";

export default async function getProdutos(consult) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 70",
            "codExterno": "10160221200030",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "30.50",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "235.58",
            "valorFaixa1": "200.59",
            "valorFaixa2": "197.58",
            "valorFaixa3": "194.61",
            "valorFaixa4": "191.70",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "30,50",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "30,50"
                }
            ],
            "acabamento": [
                {
                    "codigo": "61400",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 75",
            "codExterno": "10160221200031",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "17.50",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "242.39",
            "valorFaixa1": "206.39",
            "valorFaixa2": "203.29",
            "valorFaixa3": "200.24",
            "valorFaixa4": "197.24",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "17,50",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "17,50"
                }
            ],
            "acabamento": [
                {
                    "codigo": "62801",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 80",
            "codExterno": "10160221200032",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "10.50",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "256.46",
            "valorFaixa1": "218.37",
            "valorFaixa2": "215.09",
            "valorFaixa3": "211.86",
            "valorFaixa4": "208.69",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "10,50",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "10,50"
                }
            ],
            "acabamento": [
                {
                    "codigo": "62803",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Metrico Classe 10.9 RP    MA 16 - 2.00 X 130",
            "codExterno": "10030822413038",
            "codVariacao": "02",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "19.40",
            "codTpr": "2018",
            "msgErro": "Item fora de linha, vender somente o estoque",
            "tipoErro": "AVISA",
            "preco": "868.54",
            "valorFaixa1": "771.70",
            "valorFaixa2": "760.12",
            "valorFaixa3": "748.72",
            "valorFaixa4": "737.49",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "19,40",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "19,40"
                }
            ],
            "acabamento": [
                {
                    "codigo": "12067",
                    "derivacao": "[25] Organo Metálico Grau A C/Selante Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                },
                {
                    "codigo": "82887",
                    "derivacao": "[03] Zincado Branco",
                    "matriz": "0,07",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,07"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 90",
            "codExterno": "10160221200034",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "19.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "280.66",
            "valorFaixa1": "238.97",
            "valorFaixa2": "235.39",
            "valorFaixa3": "231.86",
            "valorFaixa4": "228.38",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "19,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "19,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "62808",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 100",
            "codExterno": "10160221200035",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "8.50",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "305.99",
            "valorFaixa1": "260.54",
            "valorFaixa2": "256.63",
            "valorFaixa3": "252.78",
            "valorFaixa4": "248.99",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "8,50",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "8,50"
                }
            ],
            "acabamento": [
                {
                    "codigo": "62033",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 110",
            "codExterno": "10160221200036",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "10.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "344.53",
            "valorFaixa1": "293.35",
            "valorFaixa2": "288.95",
            "valorFaixa3": "284.62",
            "valorFaixa4": "280.35",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "10,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "10,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "62381",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Soberba Grau 2 RP    1/2 pol. X 120",
            "codExterno": "10160221200037",
            "codVariacao": "03",
            "unimed": "CT",
            "datEnt": "27/05/2022",
            "qtdeEstoque": "17.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "375.31",
            "valorFaixa1": "319.56",
            "valorFaixa2": "314.77",
            "valorFaixa3": "310.05",
            "valorFaixa4": "305.40",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "17,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "17,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "72393",
                    "derivacao": "[07] Zincado a Fogo",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                },
                {
                    "codigo": "62393",
                    "derivacao": "[06] Zincado Preto",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        },
        {
            "nome": "Parafuso Sextavado Metrico Classe 10.9 RP    MA 16 - 2.00 X 140",
            "codExterno": "10030822413039",
            "codVariacao": "02",
            "unimed": "CT",
            "datEnt": "26/06/2022",
            "qtdeEstoque": "0.00",
            "codTpr": "2018",
            "msgErro": "Item fora de linha, vender somente o estoque",
            "tipoErro": "AVISA",
            "preco": "937.49",
            "valorFaixa1": "832.96",
            "valorFaixa2": "820.47",
            "valorFaixa3": "808.16",
            "valorFaixa4": "796.04",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "0,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "0,00"
                }
            ],
            "acabamento": []
        },
        {
            "nome": "Parafuso Sextavado Metrico Classe 10.9 RP    MA 16 - 2.00 X 160",
            "codExterno": "10030822413041",
            "codVariacao": "02",
            "unimed": "CT",
            "datEnt": "26/06/2022",
            "qtdeEstoque": "0.00",
            "codTpr": "2018",
            "msgErro": "Item fora de linha, vender somente o estoque",
            "tipoErro": "AVISA",
            "preco": "1088.33",
            "valorFaixa1": "966.98",
            "valorFaixa2": "952.48",
            "valorFaixa3": "938.19",
            "valorFaixa4": "924.12",
            "depositos": [
                {
                    "deposito": "[004] - Depósito de Acabados",
                    "estoque": "0,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "0,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "12039",
                    "derivacao": "[25] Organo Metálico Grau A C/Selante Preto",
                    "matriz": "11,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "11,00"
                },
                {
                    "codigo": "28955",
                    "derivacao": "[03] Zincado Branco",
                    "matriz": "0,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "0,00"
                }
            ]
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarProduto",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroProd: consult
                }
            }
        }
    );

    let config = {
        method: 'POST',
        headers: headers,
        body: raw,
        redirect: 'follow'
    };

    return mockData
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json();
        return resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}