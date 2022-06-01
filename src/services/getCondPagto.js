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
        },
        {
            "desCpg": "30/45/75/90",
            "codCpg": "079"
        },
        {
            "desCpg": "36/56/76",
            "codCpg": "078"
        },
        {
            "desCpg": "21/28/35/42",
            "codCpg": "080"
        },
        {
            "desCpg": "07",
            "codCpg": "081"
        },
        {
            "desCpg": "45/60",
            "codCpg": "082"
        },
        {
            "desCpg": "35/70/105",
            "codCpg": "083"
        },
        {
            "desCpg": "42/49/56/63",
            "codCpg": "084"
        },
        {
            "desCpg": "7/14/28",
            "codCpg": "193"
        },
        {
            "desCpg": "35/46/61/75/90",
            "codCpg": "201"
        },
        {
            "desCpg": "30/58/87",
            "codCpg": "200"
        },
        {
            "desCpg": "25/35",
            "codCpg": "007"
        },
        {
            "desCpg": "30",
            "codCpg": "005"
        },
        {
            "desCpg": "14/28",
            "codCpg": "009"
        },
        {
            "desCpg": "21/28/35",
            "codCpg": "008"
        },
        {
            "desCpg": "30/35",
            "codCpg": "010"
        },
        {
            "desCpg": "30/35/40",
            "codCpg": "011"
        },
        {
            "desCpg": "35/40/45",
            "codCpg": "012"
        },
        {
            "desCpg": "40",
            "codCpg": "013"
        },
        {
            "desCpg": "45",
            "codCpg": "014"
        },
        {
            "desCpg": "21/35",
            "codCpg": "015"
        },
        {
            "desCpg": "35",
            "codCpg": "016"
        },
        {
            "desCpg": "28/35",
            "codCpg": "017"
        },
        {
            "desCpg": "20/30/40",
            "codCpg": "018"
        },
        {
            "desCpg": "25/30",
            "codCpg": "019"
        },
        {
            "desCpg": "75/90",
            "codCpg": "020"
        },
        {
            "desCpg": "30/45",
            "codCpg": "022"
        },
        {
            "desCpg": "25/32",
            "codCpg": "023"
        },
        {
            "desCpg": "25",
            "codCpg": "025"
        },
        {
            "desCpg": "28/42/56/70",
            "codCpg": "026"
        },
        {
            "desCpg": "30/60",
            "codCpg": "027"
        },
        {
            "desCpg": "28/30/32",
            "codCpg": "028"
        },
        {
            "desCpg": "90/120/150/180/210",
            "codCpg": "029"
        },
        {
            "desCpg": "28/32",
            "codCpg": "030"
        },
        {
            "desCpg": "25/35/45",
            "codCpg": "032"
        },
        {
            "desCpg": "15/30/45",
            "codCpg": "033"
        },
        {
            "desCpg": "30/40",
            "codCpg": "034"
        },
        {
            "desCpg": "60",
            "codCpg": "036"
        },
        {
            "desCpg": "60/90/120",
            "codCpg": "048"
        },
        {
            "desCpg": "50",
            "codCpg": "038"
        },
        {
            "desCpg": "40/50/60",
            "codCpg": "039"
        },
        {
            "desCpg": "50/60/70",
            "codCpg": "040"
        },
        {
            "desCpg": "35/45",
            "codCpg": "041"
        },
        {
            "desCpg": "28/42/56",
            "codCpg": "042"
        },
        {
            "desCpg": "90",
            "codCpg": "043"
        },
        {
            "desCpg": "25/35/42",
            "codCpg": "044"
        },
        {
            "desCpg": "20/40",
            "codCpg": "024"
        },
        {
            "desCpg": "30/45/60",
            "codCpg": "037"
        },
        {
            "desCpg": "20/40/60",
            "codCpg": "046"
        },
        {
            "desCpg": "42/56/82",
            "codCpg": "047"
        },
        {
            "desCpg": "42",
            "codCpg": "049"
        },
        {
            "desCpg": "90/120/150/180",
            "codCpg": "050"
        },
        {
            "desCpg": "120",
            "codCpg": "051"
        },
        {
            "desCpg": "28/42",
            "codCpg": "052"
        },
        {
            "desCpg": "35/49/63/77/91",
            "codCpg": "053"
        },
        {
            "desCpg": "90/120/150",
            "codCpg": "054"
        },
        {
            "desCpg": "60/90/120/150",
            "codCpg": "055"
        },
        {
            "desCpg": "56",
            "codCpg": "056"
        },
        {
            "desCpg": "Antecipado",
            "codCpg": "057"
        },
        {
            "desCpg": "45/60/75",
            "codCpg": "058"
        },
        {
            "desCpg": "Pagtos diversos",
            "codCpg": "059"
        },
        {
            "desCpg": "45/75",
            "codCpg": "060"
        },
        {
            "desCpg": "55/60/65",
            "codCpg": "061"
        },
        {
            "desCpg": "30/90",
            "codCpg": "062"
        },
        {
            "desCpg": "42/56",
            "codCpg": "063"
        },
        {
            "desCpg": "28/42/56/62",
            "codCpg": "086"
        },
        {
            "desCpg": "21/42",
            "codCpg": "087"
        },
        {
            "desCpg": "35/45/55",
            "codCpg": "088"
        },
        {
            "desCpg": "35/42",
            "codCpg": "089"
        },
        {
            "desCpg": "20/30/40/50",
            "codCpg": "090"
        },
        {
            "desCpg": "21/35/49/63",
            "codCpg": "091"
        },
        {
            "desCpg": "30/60/90/120/150",
            "codCpg": "092"
        },
        {
            "desCpg": "42/49/56",
            "codCpg": "093"
        },
        {
            "desCpg": "28/45",
            "codCpg": "094"
        },
        {
            "desCpg": "A Vista - Antecipado",
            "codCpg": "000"
        },
        {
            "desCpg": "30/50/70",
            "codCpg": "095"
        },
        {
            "desCpg": "28/35/49",
            "codCpg": "096"
        },
        {
            "desCpg": "30/60/90/120/150/180",
            "codCpg": "097"
        },
        {
            "desCpg": "35/42/49/56",
            "codCpg": "098"
        },
        {
            "desCpg": "20/25/30/35/40/45",
            "codCpg": "099"
        },
        {
            "desCpg": "32/42/52",
            "codCpg": "100"
        },
        {
            "desCpg": "28/42/56/70/84",
            "codCpg": "101"
        },
        {
            "desCpg": "28/35/49/56/63",
            "codCpg": "102"
        },
        {
            "desCpg": "40/50",
            "codCpg": "103"
        },
        {
            "desCpg": "28/35/42/56",
            "codCpg": "104"
        },
        {
            "desCpg": "75",
            "codCpg": "105"
        },
        {
            "desCpg": "28/35/42/49/56/63",
            "codCpg": "106"
        },
        {
            "desCpg": "60/75/90",
            "codCpg": "107"
        },
        {
            "desCpg": "60/90",
            "codCpg": "108"
        },
        {
            "desCpg": "40/50/60/70/80",
            "codCpg": "109"
        },
        {
            "desCpg": "45/90",
            "codCpg": "110"
        },
        {
            "desCpg": "30/45/60/75/90/105",
            "codCpg": "111"
        },
        {
            "desCpg": "35/49/56",
            "codCpg": "112"
        },
        {
            "desCpg": "37/44/51",
            "codCpg": "113"
        },
        {
            "desCpg": "45/70/90",
            "codCpg": "114"
        },
        {
            "desCpg": "35/42/60",
            "codCpg": "115"
        },
        {
            "desCpg": "45/60/75/90/105",
            "codCpg": "116"
        },
        {
            "desCpg": "45/55/65",
            "codCpg": "117"
        },
        {
            "desCpg": "14",
            "codCpg": "118"
        },
        {
            "desCpg": "30/60/90/105",
            "codCpg": "119"
        },
        {
            "desCpg": "30/45/60/75",
            "codCpg": "120"
        },
        {
            "desCpg": "60/90/120/150/180",
            "codCpg": "121"
        },
        {
            "desCpg": "60/90",
            "codCpg": "122"
        },
        {
            "desCpg": "42/77/112",
            "codCpg": "123"
        },
        {
            "desCpg": "45/75/105",
            "codCpg": "130"
        },
        {
            "desCpg": "30/45/60/75/90/105/120",
            "codCpg": "131"
        },
        {
            "desCpg": "30/45/90",
            "codCpg": "132"
        },
        {
            "desCpg": "63",
            "codCpg": "133"
        },
        {
            "desCpg": "45/60/90/120/150",
            "codCpg": "134"
        },
        {
            "desCpg": "15",
            "codCpg": "135"
        },
        {
            "desCpg": "30/60/75/90",
            "codCpg": "136"
        },
        {
            "desCpg": "30/40/50/60/70/80/90",
            "codCpg": "137"
        },
        {
            "desCpg": "45/60/75/90",
            "codCpg": "138"
        },
        {
            "desCpg": "80/90/100",
            "codCpg": "139"
        },
        {
            "desCpg": "45/60/90",
            "codCpg": "140"
        },
        {
            "desCpg": "30/75/105",
            "codCpg": "141"
        },
        {
            "desCpg": "21/49",
            "codCpg": "142"
        },
        {
            "desCpg": "40/60",
            "codCpg": "143"
        },
        {
            "desCpg": "28/56/91",
            "codCpg": "144"
        },
        {
            "desCpg": "A VISTA/60/90/120/150",
            "codCpg": "045"
        },
        {
            "desCpg": "63",
            "codCpg": "064"
        },
        {
            "desCpg": "30/40/50/60",
            "codCpg": "065"
        },
        {
            "desCpg": "30/60/90/120",
            "codCpg": "066"
        },
        {
            "desCpg": "35/42/49",
            "codCpg": "067"
        },
        {
            "desCpg": "30/50/70/90",
            "codCpg": "069"
        },
        {
            "desCpg": "30/45/60/75",
            "codCpg": "070"
        },
        {
            "desCpg": "21/28/35/42/49",
            "codCpg": "071"
        },
        {
            "desCpg": "28/56/84",
            "codCpg": "072"
        },
        {
            "desCpg": "30/40/50/60/70",
            "codCpg": "073"
        },
        {
            "desCpg": "30/50",
            "codCpg": "074"
        },
        {
            "desCpg": "28/56",
            "codCpg": "075"
        },
        {
            "desCpg": "35/65/95/125/135",
            "codCpg": "145"
        },
        {
            "desCpg": "35/60",
            "codCpg": "146"
        },
        {
            "desCpg": "30/60/75/90/120",
            "codCpg": "147"
        },
        {
            "desCpg": "28/56/84/112",
            "codCpg": "157"
        },
        {
            "desCpg": "30/40/50/60/70/80/90/100/110",
            "codCpg": "177"
        },
        {
            "desCpg": "30/60/90/105/120",
            "codCpg": "190"
        },
        {
            "desCpg": "teste",
            "codCpg": "999"
        },
        {
            "desCpg": "Apresentacao",
            "codCpg": "002"
        },
        {
            "desCpg": "30/60/90/120 COM IPI EM CADA PARCELA",
            "codCpg": "176"
        },
        {
            "desCpg": "20 dias fora mês",
            "codCpg": "191"
        },
        {
            "desCpg": "Dia 10 (Comissões)",
            "codCpg": "150"
        },
        {
            "desCpg": "7/14/21/28",
            "codCpg": "148"
        },
        {
            "desCpg": "15/30/60/90",
            "codCpg": "195"
        },
        {
            "desCpg": "50/70 dias",
            "codCpg": "151"
        },
        {
            "desCpg": "28/42/56/84",
            "codCpg": "196"
        },
        {
            "desCpg": "28/56/74",
            "codCpg": "178"
        },
        {
            "desCpg": "28/42/63",
            "codCpg": "197"
        },
        {
            "desCpg": "10 dias",
            "codCpg": "198"
        },
        {
            "desCpg": "45/49/56/63 dias",
            "codCpg": "199"
        },
        {
            "desCpg": "45/63/70/77/84/91/98/105",
            "codCpg": "202"
        },
        {
            "desCpg": "30/40/50/60/70/90",
            "codCpg": "203"
        },
        {
            "desCpg": "20/30",
            "codCpg": "204"
        },
        {
            "desCpg": "30/40/50/60/70/80/90/100/110/120",
            "codCpg": "205"
        },
        {
            "desCpg": "45/63/70/77/84/91/98/105/115",
            "codCpg": "206"
        },
        {
            "desCpg": "28/56 - media direta",
            "codCpg": "075-1"
        },
        {
            "desCpg": "30/60 media direta",
            "codCpg": "027-1"
        },
        {
            "desCpg": "42/56/70 dias",
            "codCpg": "207"
        },
        {
            "desCpg": "35/42/56/70/84 dias",
            "codCpg": "208"
        },
        {
            "desCpg": "30/45/63/70/77/84/91/98/105/112/119",
            "codCpg": "209"
        },
        {
            "desCpg": "21/42/56/70 dias",
            "codCpg": "210"
        },
        {
            "desCpg": "42/56/70/84",
            "codCpg": "211"
        },
        {
            "desCpg": "30/75/90",
            "codCpg": "212"
        },
        {
            "desCpg": "30/75/90",
            "codCpg": "213"
        },
        {
            "desCpg": "28/42/56/70/84/98/112",
            "codCpg": "214"
        },
        {
            "desCpg": "33/42/56/70/84",
            "codCpg": "215"
        },
        {
            "desCpg": "28/42/56/70/84/98",
            "codCpg": "216"
        },
        {
            "desCpg": "28/35/42/56/70/84",
            "codCpg": "217"
        },
        {
            "desCpg": "28/45/56",
            "codCpg": "218"
        },
        {
            "desCpg": "60/70/80/90/100",
            "codCpg": "219"
        },
        {
            "desCpg": "50/60/90",
            "codCpg": "220"
        },
        {
            "desCpg": "28/56/84/105",
            "codCpg": "221"
        },
        {
            "desCpg": "28/42/56/70/84/98",
            "codCpg": "222"
        },
        {
            "desCpg": "28/56/70/84",
            "codCpg": "223"
        },
        {
            "desCpg": "28/56/84/112/140",
            "codCpg": "224"
        },
        {
            "desCpg": "56/86",
            "codCpg": "075-2"
        },
        {
            "desCpg": "28/42 média direta",
            "codCpg": "052-1"
        },
        {
            "desCpg": "30/60/90 - Média direta",
            "codCpg": "031-1"
        },
        {
            "desCpg": "35/60/90",
            "codCpg": "225"
        },
        {
            "desCpg": "30/45/75/105",
            "codCpg": "226"
        },
        {
            "desCpg": "45/60/75/90/105/120",
            "codCpg": "228"
        },
        {
            "desCpg": "20 dias",
            "codCpg": "229"
        },
        {
            "desCpg": "14/21/28",
            "codCpg": "230"
        },
        {
            "desCpg": "51/65/94",
            "codCpg": "231"
        },
        {
            "desCpg": "21/28 dias",
            "codCpg": "149"
        },
        {
            "desCpg": "48/76/104/132",
            "codCpg": "227"
        },
        {
            "desCpg": "A Vista/30/60",
            "codCpg": "035"
        },
        {
            "desCpg": "36/66/96",
            "codCpg": "232"
        },
        {
            "desCpg": "35/56/84",
            "codCpg": "233"
        },
        {
            "desCpg": "Avista/28/56/84",
            "codCpg": "180"
        },
        {
            "desCpg": "28/42/56/84/112",
            "codCpg": "158"
        },
        {
            "desCpg": "25/50",
            "codCpg": "160"
        },
        {
            "desCpg": "21/28",
            "codCpg": "124"
        },
        {
            "desCpg": "20/40/60/90",
            "codCpg": "161"
        },
        {
            "desCpg": "15/30",
            "codCpg": "234"
        },
        {
            "desCpg": "14/21",
            "codCpg": "125"
        },
        {
            "desCpg": "56/84",
            "codCpg": "152"
        },
        {
            "desCpg": "A Vista/21/28/35",
            "codCpg": "181"
        },
        {
            "desCpg": "25/50",
            "codCpg": "126"
        }
    ]

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {
            idCvtccnpj: loggedUser.cId,
            numreg: 750,
            pRotina: "filtrarCondPag",
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

    mockData.map(data => data.filtro = `${data.codCpg} - ${data.desCpg}`);
    // return mockData;
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json();
        resultado.map(data => data.filtro = `${data.codCpg} - ${data.desCpg}`);
        return resultado;
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}