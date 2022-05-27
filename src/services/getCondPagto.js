import { getLoggedUser } from "./getLoggedUser";

export default async function getCondPagto(consult) {
    let loggedUser = await getLoggedUser();

    let mockData = [
        {
            "desCpg": "A Vista",
            "codCpg": "001"
        },
        {
            "desCpg": "30/60/90",
            "codCpg": "031"
        },
        {
            "desCpg": "21",
            "codCpg": "003"
        },
        {
            "desCpg": "A vista 7 dias",
            "codCpg": "156"
        },
        {
            "desCpg": "30/45/60/75/90",
            "codCpg": "068"
        },
        {
            "desCpg": "28/35/42/49/56",
            "codCpg": "085"
        },
        {
            "desCpg": "28",
            "codCpg": "004"
        },
        {
            "desCpg": "28/35/42",
            "codCpg": "021"
        },
        {
            "desCpg": "30/42/49/56",
            "codCpg": "076"
        },
        {
            "desCpg": "28/35/42/49",
            "codCpg": "077"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarCondPagto",
            pCodCli: loggedUser.rId,
            pFilter: {
                filtro: {
                    filtroCondPag: consult
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

    mockData.map(data => data.filtro = `${data.codCpg} - ${data.desCpg}`)
    return mockData
    try {
        let request = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let response = await request.json()
        return response.resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}