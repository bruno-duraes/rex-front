import { getLoggedUser } from "./getLoggedUser";

export default async function getProdutos(consult, tipoBusca) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°1 Rosca Autoatarraxante    5,5 X 7/8 pol.",
            "codExterno": "51040232000011",
            "codRex": "13519",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/06/2022",
            "qtdeEstoque": "441.14",
            "peso": "0.60",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "44.85",
            "valorFaixa1": "27.50",
            "valorFaixa2": "27.08",
            "valorFaixa3": "26.68",
            "valorFaixa4": "26.28",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "441,14",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "441,14"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31012",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
                    "matriz": "48,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "48,00"
                }
            ]
        },
        {
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°1 Rosca Autoatarraxante    6,3 X 7/8 pol.",
            "codExterno": "51040232300011",
            "codRex": "13520",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/06/2022",
            "qtdeEstoque": "1426.44",
            "peso": "0.65",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "48.68",
            "valorFaixa1": "29.84",
            "valorFaixa2": "29.40",
            "valorFaixa3": "28.96",
            "valorFaixa4": "28.52",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "1.426,44",
                    "reserva": "0,00",
                    "prefatura": "1.000,00",
                    "disponivel": "426,44"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31002",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    6,3 X 1.1/2 pol.",
            "codExterno": "51040132300014",
            "codRex": "13517",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "0.00",
            "peso": "0.95",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "70.95",
            "valorFaixa1": "43.50",
            "valorFaixa2": "42.84",
            "valorFaixa3": "42.20",
            "valorFaixa4": "41.57",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "0,00",
                    "reserva": "10,00",
                    "prefatura": "0,00",
                    "disponivel": "10,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31000",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
                    "matriz": "254,00",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "254,00"
                }
            ]
        },
        {
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    6,3 X 1 pol.",
            "codExterno": "51040132300012",
            "codRex": "13516",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "404.30",
            "peso": "0.71",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "53.10",
            "valorFaixa1": "32.55",
            "valorFaixa2": "32.07",
            "valorFaixa3": "31.58",
            "valorFaixa4": "31.11",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "404,30",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "404,30"
                }
            ],
            "acabamento": [
                {
                    "codigo": "30973",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    6,3 X 3/4 pol.",
            "codExterno": "51040132300010",
            "codRex": "13515",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "0.00",
            "peso": "0.60",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "45.30",
            "valorFaixa1": "27.77",
            "valorFaixa2": "27.36",
            "valorFaixa3": "26.94",
            "valorFaixa4": "26.54",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "0,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "0,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "30971",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    5,5 X 2 pol.",
            "codExterno": "51040132000016",
            "codRex": "12672",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "176.00",
            "peso": "0.88",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "66.30",
            "valorFaixa1": "40.65",
            "valorFaixa2": "40.04",
            "valorFaixa3": "39.44",
            "valorFaixa4": "38.84",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "176,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "176,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31011",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    5,5 X 1.1/2 pol.",
            "codExterno": "51040132000014",
            "codRex": "12671",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "562.00",
            "peso": "0.74",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "55.58",
            "valorFaixa1": "34.07",
            "valorFaixa2": "33.56",
            "valorFaixa3": "33.06",
            "valorFaixa4": "32.56",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "562,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "562,00"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31010",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    5,5 X 1 pol.",
            "codExterno": "51040132000012",
            "codRex": "12670",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "818.21",
            "peso": "0.64",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "44.85",
            "valorFaixa1": "27.50",
            "valorFaixa2": "27.08",
            "valorFaixa3": "26.68",
            "valorFaixa4": "26.28",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "818,21",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "818,21"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31009",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
                    "matriz": "1,20",
                    "mg": "0,00",
                    "consignado": "0,00",
                    "resPedidos": "0,00",
                    "resPreFat": "0,00",
                    "disponivel": "1,20"
                }
            ]
        },
        {
            "nome": "Parafuso Autobrocante C/Arruela de Vedação Ponta N°3 Rosca Autoatarraxante    5,5 X 3/4 pol.",
            "codExterno": "51040132000010",
            "codRex": "12669",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "101.76",
            "peso": "0.52",
            "qtdEmbalagem": "2.00",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "",
            "tipoErro": "LIBERA",
            "preco": "39.15",
            "valorFaixa1": "24.00",
            "valorFaixa2": "23.64",
            "valorFaixa3": "23.29",
            "valorFaixa4": "22.94",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "101,76",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "101,76"
                }
            ],
            "acabamento": [
                {
                    "codigo": "31008",
                    "codDerivacao": "13",
                    "desDerivacao": "Organo Metálico Grau A",
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
            "nome": "Parafuso Flangeado Esferico Classe 10.9    MB 14 - 1.50 X 18.5",
            "codExterno": "11260802311082",
            "codRex": "88353",
            "codVariacao": "03",
            "desVariacao": "Zincado Branco",
            "unimed": "CT",
            "datEnt": "01/07/2022",
            "qtdeEstoque": "0.00",
            "peso": "6.20",
            "qtdEmbalagem": "0.50",
            "codEmbalagem": "1",
            "desEmbalagem": "Caixa(s)",
            "clasFiscal": "73181400",
            "curva": "A",
            "ultimoPreco": "0.00",
            "codTpr": "2018",
            "msgErro": "Item fora de linha, vender somente o estoque",
            "tipoErro": "AVISA",
            "preco": "527.00",
            "valorFaixa1": "323.09",
            "valorFaixa2": "318.24",
            "valorFaixa3": "313.47",
            "valorFaixa4": "308.76",
            "depositos": [
                {
                    "codDeposito": "004",
                    "nomDeposito": "Depósito de Acabados",
                    "estoque": "0,00",
                    "reserva": "0,00",
                    "prefatura": "0,00",
                    "disponivel": "0,00"
                }
            ],
            "acabamento": []
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
                    filtroProd: consult,
                    tipoBusca: tipoBusca
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
    // return mockData
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json();
        return resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}