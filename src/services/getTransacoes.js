import { getLoggedUser } from "./getLoggedUser";

export default async function getTransacoes(consult) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "codExterno": "90150",
            "nome": "Orçamento Indústria"
        },
        {
            "codExterno": "90151",
            "nome": "Orçamento Comércio"
        },
        {
            "codExterno": "90155",
            "nome": "Orçamento Consumo (IPI na Base de ICMS)"
        },
        {
            "codExterno": "90166",
            "nome": "Orçamento IPI Suspenso e ICMS Diferido"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarTransacao",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroTns: consult
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
        let request = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let response = await request.json()
        return response.resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}