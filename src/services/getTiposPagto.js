import { getLoggedUser } from "./getLoggedUser";

export default async function getTiposPagto(consult) {
    const loggedUser = await getLoggedUser();

    let mockData = [
        {
            "desFpg": "Duplicata",
            "codFpg": "1"
        },
        {
            "desFpg": "Depósito",
            "codFpg": "2"
        },
        {
            "desFpg": "Cheque",
            "codFpg": "3"
        },
        {
            "desFpg": "Dinheiro",
            "codFpg": "4"
        },
        {
            "desFpg": "Exportação/Importação",
            "codFpg": "5"
        },
        {
            "desFpg": "Cartão BNDES",
            "codFpg": "6"
        },
        {
            "desFpg": "Debito Conta Corrente",
            "codFpg": "7"
        },
        {
            "desFpg": "DDA",
            "codFpg": "8"
        },
        {
            "desFpg": "Duplicata Aguardando Valor Mín",
            "codFpg": "10"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarFormaPag",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroFormaPag: consult
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

    mockData.map(data => data.filtro = `${data.codFpg} - ${data.desFpg}`);
    // return mockData;
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json()
        resultado.map(data => data.filtro = `${data.codFpg} - ${data.desFpg}`);
        return resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}