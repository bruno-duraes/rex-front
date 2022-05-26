import { getLoggedUser } from "./getLoggedUser";

export default async function getCliente(consult) {
    const loggedUser = getLoggedUser();

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

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

    try {
        let request = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let response = await request.json()
        return response.resultado
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}