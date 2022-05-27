import { getLoggedUser } from "./getLoggedUser";

export default async function getTransportadoras(consult) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "nome": "Projesan",
            "codExterno": "26"
        },
        {
            "nome": "Bebber",
            "codExterno": "27"
        },
        {
            "nome": "Alfa",
            "codExterno": "28"
        },
        {
            "nome": "Reunidas",
            "codExterno": "29"
        },
        {
            "nome": "Blumeterra",
            "codExterno": "30"
        },
        {
            "nome": "Bauer",
            "codExterno": "31"
        },
        {
            "nome": "IPS",
            "codExterno": "32"
        },
        {
            "nome": "Transportes OP LTDA",
            "codExterno": "41"
        },
        {
            "nome": "Wilson",
            "codExterno": "42"
        },
        {
            "nome": "Industrial Rex Ltda",
            "codExterno": "1"
        }, {
            "nome": "Rexfix Industria de Fixadores Metalicos LTDA",
            "codExterno": "3"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarTransportadora",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroTra: consult
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

    mockData.map(data => data.filtro = `${data.codExterno} - ${data.nome}`)
    return mockData
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json()
        resultado.map(data => data.filtro = `${data.codExterno} - ${data.nome}`)
        return resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}