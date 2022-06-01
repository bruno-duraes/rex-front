import { getLoggedUser } from "./getLoggedUser";

export default async function getCliente(consult) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "codExterno": "1429",
            "nome": "1429 - Bemar Com.Ferramentas e Parafusos Ltda - EPP",
            "endCli": "Av.Guapira",
            "codCpg": "004",
            "desCpg": "28",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "S",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "148",
            "nomVen": "Joice Witte",
            "codRep": "96",
            "nomRep": "Marcos Estefani - Representacoes",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        },
        {
            "codExterno": "50901",
            "nome": "50901 - Bemec Comercial Ltda",
            "endCli": "Rua Caldas Da Rainha",
            "codCpg": "004",
            "desCpg": "28",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "S",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "142",
            "nomVen": "Gabriela Cristina da Silva Costa",
            "codRep": "191",
            "nomRep": "Lilia Andreia de Oliveira ME",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90150",
            "nomeTns": "Orçamento Industria"
        },
        {
            "codExterno": "5623",
            "nome": "5623 - Bencao Com.de Material de Construcao Ltda",
            "endCli": "Rua Johannes Janzen-Colonia Witmarsum",
            "codCpg": "004",
            "desCpg": "28",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "S",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "147",
            "nomVen": "Jassanan Aparecida Bonetti",
            "codRep": "197",
            "nomRep": "Guilherme Rech Bessi",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        },
        {
            "codExterno": "11149",
            "nome": "11149 - Berlinerluft Do Brasil Ind.e Com.Ltda",
            "endCli": "Rua Visconde De Sao Leopoldo",
            "codCpg": "004",
            "desCpg": "28",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "S",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "138",
            "nomVen": "Eliane Teske",
            "codRep": "20",
            "nomRep": "PTL Pecas Tecnicas Ltda",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90150",
            "nomeTns": "Orçamento Industria"
        },
        {
            "codExterno": "11485",
            "nome": "11485 - Bernardes e Coco Ltda",
            "endCli": "Av.Brasil",
            "codCpg": "004",
            "desCpg": "28",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "S",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "147",
            "nomVen": "Jassanan Aparecida Bonetti",
            "codRep": "77",
            "nomRep": "Claudiomar Gandorfo Representacoes Ltda ME",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        },
        {
            "codExterno": "4724",
            "nome": "4724 - Casa do Parafuso Aracaju Ltda",
            "endCli": "Av.Dr.Carlos Firpo",
            "codCpg": "001",
            "desCpg": "A Vista",
            "codFpg": "2",
            "desFpg": "Depósito",
            "acePar": "N",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "142",
            "nomVen": "Gabriela Cristina da Silva Costa",
            "codRep": "199",
            "nomRep": "Vendas Diretas R2",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        },
        {
            "codExterno": "16399",
            "nome": "16399 - Casanova Ind.Com.Toldos e Esq.Ferro e Alum.Ld",
            "endCli": "Av.Presidente Rosevelt",
            "codCpg": "031",
            "desCpg": "30/60/90",
            "codFpg": "2",
            "desFpg": "Depósito",
            "acePar": "N",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "131",
            "nomVen": "Abel Walzburger",
            "codRep": "33",
            "nomRep": "Richter Promocoes Ltda",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90150",
            "nomeTns": "Orçamento Industria"
        },
        {
            "codExterno": "16517",
            "nome": "16517 - Agricase Equipamentos Agricolas Ltda",
            "endCli": "Rod. Br 163",
            "codCpg": "001",
            "desCpg": "A Vista",
            "codFpg": "2",
            "desFpg": "Depósito",
            "acePar": "N",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "147",
            "nomVen": "Jassanan Aparecida Bonetti",
            "codRep": "77",
            "nomRep": "Claudiomar Gandorfo Representacoes Ltda ME",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        },
        {
            "codExterno": "17428",
            "nome": "17428 - Fabbof Industria Metalurgica Ltda",
            "endCli": "Rua Vitorio Lazzaretti",
            "codCpg": "031",
            "desCpg": "30/60/90",
            "codFpg": "1",
            "desFpg": "Duplicata",
            "acePar": "N",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "138",
            "nomVen": "Eliane Teske",
            "codRep": "16",
            "nomRep": "AP ZENATO SERVICOS ADMINISTRATIVOS LTDA - ME",
            "codTra": "3",
            "nomTra": "Rexfix Industria de Fixadores Metalicos LTDA",
            "codTns": "90150",
            "nomeTns": "Orçamento Industria"
        },
        {
            "codExterno": "17516",
            "nome": "17516 - MM Escapamentos Ltda",
            "endCli": "Rua Almirante Tamandare",
            "codCpg": "001",
            "desCpg": "A Vista",
            "codFpg": "2",
            "desFpg": "Depósito",
            "acePar": "N",
            "emiCer": "N",
            "emiPPA": "N",
            "manSal": "N",
            "codVen": "",
            "nomVen": "",
            "codRep": "198",
            "nomRep": "Vendas Direta R1 (RS/SC/PR)",
            "codTra": "0",
            "nomTra": "",
            "codTns": "90151",
            "nomeTns": "Orçamento Comercio"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarCliente",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroCliente: consult
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
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config);
        let { resultado } = await response.json();
        return resultado;
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}