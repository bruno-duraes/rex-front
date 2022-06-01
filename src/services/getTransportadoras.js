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
        },
        {
            "nome": "Nelson",
            "codExterno": "2"
        },
        {
            "nome": "Rexfix",
            "codExterno": "3"
        },
        {
            "nome": "Schreiber",
            "codExterno": "4"
        },
        {
            "nome": "Solidez Transportes LTDA",
            "codExterno": "46"
        },
        {
            "nome": "Sicall Cargas E Encomendas LTDA - EPP",
            "codExterno": "47"
        },
        {
            "nome": "Expresso BR Transportes E Logistica LTDA",
            "codExterno": "48"
        },
        {
            "nome": "Transporte Itapirense Bertini LTDA",
            "codExterno": "49"
        },
        {
            "nome": "Rodonaves Transportes E Encomendas LTDA",
            "codExterno": "50"
        },
        {
            "nome": "Flexa De Ouro Transportes Rodoviarios LTDA",
            "codExterno": "51"
        },
        {
            "nome": "Piccoli Transportes LTDA EPP",
            "codExterno": "52"
        },
        {
            "nome": "Setex Do Brasil LTDA - ME",
            "codExterno": "53"
        },
        {
            "nome": "Lagoinha Transporte",
            "codExterno": "54"
        },
        {
            "nome": "Transportadora Pontual LTDA",
            "codExterno": "55"
        },
        {
            "nome": "Conexao Brasil Servicos E Transportes LTDA - EPP",
            "codExterno": "56"
        },
        {
            "nome": "Trans Bernardes Cargas E Encomendas LTDA",
            "codExterno": "57"
        },
        {
            "nome": "Expresso Dalva LTDA",
            "codExterno": "73"
        },
        {
            "nome": "AM Jumbo Cargo Transportes Rodoviarios E Logistica",
            "codExterno": "74"
        },
        {
            "nome": "Tecnolog Transporte Rodo-Aereo E Logistica ltda",
            "codExterno": "75"
        },
        {
            "nome": "N Pimenta E Filhos Transportes LTDA - EPP",
            "codExterno": "76"
        },
        {
            "nome": "Romadeli Transportes LTDA",
            "codExterno": "77"
        },
        {
            "nome": "Trans Cachoeiro Transporte De Cargas LTDA",
            "codExterno": "78"
        },
        {
            "nome": "Tutto",
            "codExterno": "79"
        },
        {
            "nome": "Boss Express Cargas E Encomendas LTDA",
            "codExterno": "88"
        },
        {
            "nome": "BV Transportes LTDA - EPP",
            "codExterno": "90"
        },
        {
            "nome": "Franca Express Transportes",
            "codExterno": "92"
        },
        {
            "nome": "AWA Transportes Rodoviarios Campinas LTDA",
            "codExterno": "94"
        },
        {
            "nome": "Alpheu Transportes LTDA-EPP",
            "codExterno": "96"
        },
        {
            "nome": "Transportes Rodor LTDA",
            "codExterno": "98"
        },
        {
            "nome": "TEC Transportes Encomendas E Cargas LTDA",
            "codExterno": "101"
        },
        {
            "nome": "Eureka Transportes LTDA",
            "codExterno": "103"
        },
        {
            "nome": "Uniao Transportes Ltda",
            "codExterno": "105"
        },
        {
            "nome": "Transchico",
            "codExterno": "108"
        },
        {
            "nome": "Transperola Transportes Rodoviarios LTDA",
            "codExterno": "110"
        },
        {
            "nome": "Rodomago Transportes LTDA - EPP",
            "codExterno": "112"
        },
        {
            "nome": "Alex Transportes",
            "codExterno": "114"
        },
        {
            "nome": "Transmetello Log.e Transp.Rod.",
            "codExterno": "115"
        },
        {
            "nome": "Brasinet Express",
            "codExterno": "116"
        },
        {
            "nome": "Braspress Transportes Urgentes",
            "codExterno": "117"
        },
        {
            "nome": "Danubio Azul Transportes de Cargas e Encomendas",
            "codExterno": "118"
        },
        {
            "nome": "Jortek Transportes e Logistica",
            "codExterno": "119"
        },
        {
            "nome": "Plimor",
            "codExterno": "10"
        },
        {
            "nome": "Vento Log",
            "codExterno": "11"
        },
        {
            "nome": "Voo Terrestre",
            "codExterno": "33"
        },
        {
            "nome": "Expresso Miranda",
            "codExterno": "34"
        },
        {
            "nome": "Star Zink",
            "codExterno": "35"
        },
        {
            "nome": "Bravo Log",
            "codExterno": "36"
        },
        {
            "nome": "Tw",
            "codExterno": "37"
        },
        {
            "nome": "MTR",
            "codExterno": "38"
        },
        {
            "nome": "Rodonaves (BLUMENAU)",
            "codExterno": "39"
        },
        {
            "nome": "Nascisul",
            "codExterno": "40"
        },
        {
            "nome": "DESTINATARIO",
            "codExterno": "43"
        },
        {
            "nome": "TRANSPORTADORA TSG",
            "codExterno": "44"
        },
        {
            "nome": "Timely",
            "codExterno": "45"
        },
        {
            "nome": "Rapido 90Transportes",
            "codExterno": "123"
        },
        {
            "nome": "Rodoviario N.Sra das Gracas",
            "codExterno": "124"
        },
        {
            "nome": "Super Cargo Transportes",
            "codExterno": "125"
        },
        {
            "nome": "Solida Transportes",
            "codExterno": "126"
        },
        {
            "nome": "Rapido Roraima",
            "codExterno": "127"
        },
        {
            "nome": "Transcompras-Transp. e Compras",
            "codExterno": "128"
        },
        {
            "nome": "Ziyad Trandportes",
            "codExterno": "129"
        },
        {
            "nome": "Transwago Transp.",
            "codExterno": "130"
        },
        {
            "nome": "Rapido Transpaulo",
            "codExterno": "131"
        },
        {
            "nome": "Brasil  Logistica LTDA",
            "codExterno": "132"
        },
        {
            "nome": "Ultrapress Cargas",
            "codExterno": "133"
        },
        {
            "nome": "Transpam Transportes",
            "codExterno": "134"
        },
        {
            "nome": "Moacir Berlanda",
            "codExterno": "135"
        },
        {
            "nome": "Tallog Transportes Armazenagem e Logistica",
            "codExterno": "136"
        },
        {
            "nome": "Serfel",
            "codExterno": "137"
        },
        {
            "nome": "Sinil",
            "codExterno": "12"
        },
        {
            "nome": "Ouro Negro",
            "codExterno": "13"
        },
        {
            "nome": "Joinvilense",
            "codExterno": "14"
        },
        {
            "nome": "E S Logistica",
            "codExterno": "15"
        },
        {
            "nome": "Mkraft",
            "codExterno": "16"
        },
        {
            "nome": "Web Express",
            "codExterno": "17"
        },
        {
            "nome": "Transmagna",
            "codExterno": "18"
        },
        {
            "nome": "Gamper",
            "codExterno": "19"
        },
        {
            "nome": "Exata Cargo",
            "codExterno": "20"
        },
        {
            "nome": "Expresso Sao Miguel",
            "codExterno": "21"
        },
        {
            "nome": "Alianca",
            "codExterno": "22"
        },
        {
            "nome": "JL",
            "codExterno": "23"
        },
        {
            "nome": "Merini",
            "codExterno": "24"
        },
        {
            "nome": "Sociesc",
            "codExterno": "25"
        },
        {
            "nome": "Reis Transportes",
            "codExterno": "58"
        },
        {
            "nome": "SDS Transportes",
            "codExterno": "59"
        },
        {
            "nome": "R G Osasco",
            "codExterno": "60"
        },
        {
            "nome": "Sorriso Transportes",
            "codExterno": "61"
        },
        {
            "nome": "Serlog",
            "codExterno": "62"
        },
        {
            "nome": "Mult Cargas",
            "codExterno": "63"
        },
        {
            "nome": "KM Transportes",
            "codExterno": "64"
        },
        {
            "nome": "Sua Magestade Transp.",
            "codExterno": "65"
        },
        {
            "nome": "TML Logistica",
            "codExterno": "66"
        },
        {
            "nome": "Transventura",
            "codExterno": "67"
        },
        {
            "nome": "M G Transportes",
            "codExterno": "81"
        },
        {
            "nome": "Transpress Transporte",
            "codExterno": "82"
        },
        {
            "nome": "Yano Transportes",
            "codExterno": "83"
        },
        {
            "nome": "Transportadora Jotafazio",
            "codExterno": "68"
        },
        {
            "nome": "Alta Zona da Mata",
            "codExterno": "69"
        },
        {
            "nome": "Nitrans Logistica",
            "codExterno": "70"
        },
        {
            "nome": "Speed Work",
            "codExterno": "71"
        },
        {
            "nome": "Udilog Transporte",
            "codExterno": "72"
        },
        {
            "nome": "Bento Belem",
            "codExterno": "80"
        },
        {
            "nome": "Transportes Via Satelite",
            "codExterno": "84"
        },
        {
            "nome": "Rapido Transpaulo",
            "codExterno": "85"
        },
        {
            "nome": "Carvalima Transportes",
            "codExterno": "86"
        },
        {
            "nome": "Hanah Express",
            "codExterno": "87"
        },
        {
            "nome": "H.D. Log Transportes",
            "codExterno": "89"
        },
        {
            "nome": "Viacao Motta",
            "codExterno": "91"
        },
        {
            "nome": "Transportadora Cristina",
            "codExterno": "93"
        },
        {
            "nome": "Via Expressa Transporte Urgente e Logistica",
            "codExterno": "95"
        },
        {
            "nome": "Nacional Expresso",
            "codExterno": "97"
        },
        {
            "nome": "Expresso Sofia",
            "codExterno": "99"
        },
        {
            "nome": "Transmatral Transportes",
            "codExterno": "100"
        },
        {
            "nome": "Viacao Garcia",
            "codExterno": "102"
        },
        {
            "nome": "Metatron",
            "codExterno": "104"
        },
        {
            "nome": "Generoso Transportes",
            "codExterno": "106"
        },
        {
            "nome": "Lastro Transportes",
            "codExterno": "107"
        },
        {
            "nome": "Transpioneira Transportes e Logistica",
            "codExterno": "109"
        },
        {
            "nome": "Tocantins Transportes e Logistica",
            "codExterno": "111"
        },
        {
            "nome": "Rodo Express",
            "codExterno": "113"
        },
        {
            "nome": "Leandro Transportes e Encomendas de Cargas",
            "codExterno": "120"
        },
        {
            "nome": "Integracao Transportes",
            "codExterno": "121"
        },
        {
            "nome": "Mirim do Sul",
            "codExterno": "122"
        },
        {
            "nome": "Lem Transportes",
            "codExterno": "239"
        },
        {
            "nome": "Expresso Sulmatogrossense",
            "codExterno": "240"
        },
        {
            "nome": "Transportes J E Campo Grande",
            "codExterno": "292"
        },
        {
            "nome": "Transportadora Ajato Vale",
            "codExterno": "293"
        },
        {
            "nome": "Trans New ABC Transportadora",
            "codExterno": "296"
        },
        {
            "nome": "Sao Geraldo",
            "codExterno": "304"
        },
        {
            "nome": "Transportadora Sao Joao Ltda EPP",
            "codExterno": "314"
        },
        {
            "nome": "Transporte Genebra",
            "codExterno": "315"
        },
        {
            "nome": "Lava Jato e Transportadora Lions",
            "codExterno": "324"
        },
        {
            "nome": "Transmesquita",
            "codExterno": "325"
        },
        {
            "nome": "Transportadora Circuito das Aguas",
            "codExterno": "326"
        },
        {
            "nome": "Rapido Sete Lagos Logistica",
            "codExterno": "327"
        },
        {
            "nome": "Dromo Express",
            "codExterno": "328"
        },
        {
            "nome": "Lidertur",
            "codExterno": "329"
        },
        {
            "nome": "Data Transportes e Logistica",
            "codExterno": "330"
        },
        {
            "nome": "TRAGA TRANSPORTES",
            "codExterno": "331"
        },
        {
            "nome": "R.Gama Transportes de Cargas Rodoviarias",
            "codExterno": "332"
        },
        {
            "nome": "JC Thedin Transportes",
            "codExterno": "333"
        },
        {
            "nome": "Transportadora J.D.F.",
            "codExterno": "334"
        },
        {
            "nome": "Rodoshark Transporte e Logistica",
            "codExterno": "335"
        },
        {
            "nome": "Marsul",
            "codExterno": "336"
        },
        {
            "nome": "Empresa de Transportes Martins",
            "codExterno": "337"
        },
        {
            "nome": "Central Felix Logistica e Transportes",
            "codExterno": "338"
        },
        {
            "nome": "Tabajara Logistica",
            "codExterno": "339"
        },
        {
            "nome": "Empresa de Transportes Pajucara",
            "codExterno": "340"
        },
        {
            "nome": "Transportadora Fiorot",
            "codExterno": "341"
        },
        {
            "nome": "Felipe Britz",
            "codExterno": "142"
        },
        {
            "nome": "Onca Transportes e Logistica",
            "codExterno": "175"
        },
        {
            "nome": "Modular Transportes Ltda",
            "codExterno": "176"
        },
        {
            "nome": "Transportes Gobor Ltda",
            "codExterno": "177"
        },
        {
            "nome": "3 P-Transportes Ltda",
            "codExterno": "178"
        },
        {
            "nome": "Andorinha Transportes",
            "codExterno": "179"
        },
        {
            "nome": "A.O.S Transportes",
            "codExterno": "180"
        },
        {
            "nome": "Condex Express",
            "codExterno": "181"
        },
        {
            "nome": "Expresso Rio Vermelho Transportes",
            "codExterno": "182"
        },
        {
            "nome": "Galante Transportes Rodoviarios",
            "codExterno": "183"
        },
        {
            "nome": "Heltran Transportes",
            "codExterno": "184"
        },
        {
            "nome": "Hervi Transportes de Cargas",
            "codExterno": "185"
        },
        {
            "nome": "Lovitha Transportes",
            "codExterno": "186"
        },
        {
            "nome": "Rodoani Transportes",
            "codExterno": "187"
        },
        {
            "nome": "Sol Natal Transportes e Representacoes",
            "codExterno": "188"
        },
        {
            "nome": "Expresso Princesa dos Campos",
            "codExterno": "189"
        },
        {
            "nome": "Angrense",
            "codExterno": "190"
        },
        {
            "nome": "Camilo dos Santos",
            "codExterno": "191"
        },
        {
            "nome": "Mirindosul Transportes e Logistica",
            "codExterno": "192"
        },
        {
            "nome": "Norte Sul Cargo Ltda Me",
            "codExterno": "206"
        },
        {
            "nome": "Nova Geracao Transportes Ltda ME",
            "codExterno": "207"
        },
        {
            "nome": "Novatos Cargas E Encomendas Ltda EPP",
            "codExterno": "208"
        },
        {
            "nome": "Transportadora Translitoral Ltda-ME",
            "codExterno": "233"
        },
        {
            "nome": "Trans New",
            "codExterno": "234"
        },
        {
            "nome": "Expresso Montcar 2003 Ltda",
            "codExterno": "265"
        },
        {
            "nome": "Transportes Grecco S/A",
            "codExterno": "266"
        },
        {
            "nome": "Rodojacto",
            "codExterno": "145"
        },
        {
            "nome": "Transcarapia Transportes",
            "codExterno": "159"
        },
        {
            "nome": "Transzecao Transportes de Cargas",
            "codExterno": "160"
        },
        {
            "nome": "Transcomap Transportes",
            "codExterno": "161"
        },
        {
            "nome": "Rodoalto Transportes Sao Paulo",
            "codExterno": "162"
        },
        {
            "nome": "Cairu Transportes",
            "codExterno": "163"
        },
        {
            "nome": "Renaju Transportes",
            "codExterno": "164"
        },
        {
            "nome": "JACOBINA TRANSPORTES",
            "codExterno": "165"
        },
        {
            "nome": "Adelaide Transportes",
            "codExterno": "166"
        },
        {
            "nome": "Portal Cargas",
            "codExterno": "167"
        },
        {
            "nome": "Expresso Pinhal",
            "codExterno": "168"
        },
        {
            "nome": "Transportadora Transcarga de Sao Carlos Limitada",
            "codExterno": "169"
        },
        {
            "nome": "Roma Transportes e Logistica Monte Alto Eireli",
            "codExterno": "170"
        },
        {
            "nome": "Transportadora Rodovaris",
            "codExterno": "171"
        },
        {
            "nome": "Transportadora Penhense",
            "codExterno": "172"
        },
        {
            "nome": "Transporte Alagoano",
            "codExterno": "241"
        },
        {
            "nome": "Thor Encomendas",
            "codExterno": "242"
        },
        {
            "nome": "PVH OTM Transportes Eireli",
            "codExterno": "243"
        },
        {
            "nome": "Sigma-Transporte Mudanca Logistica Ltda",
            "codExterno": "259"
        },
        {
            "nome": "LOG 7 - Transportes e Logistica",
            "codExterno": "260"
        },
        {
            "nome": "City Log Entregas Rapida Ltda-EPP",
            "codExterno": "261"
        },
        {
            "nome": "Risso Transportes",
            "codExterno": "262"
        },
        {
            "nome": "Iury Guaru Transportes",
            "codExterno": "267"
        },
        {
            "nome": "Brasil Cielt SP Ltda-ME",
            "codExterno": "268"
        },
        {
            "nome": "BHM TRANSPORTES",
            "codExterno": "138"
        },
        {
            "nome": "MLS Transportes de Cargas",
            "codExterno": "139"
        },
        {
            "nome": "Sem Furo Transportes",
            "codExterno": "146"
        },
        {
            "nome": "Rodofersa Transportes",
            "codExterno": "147"
        },
        {
            "nome": "Atual Cargas Transportes Ltda-ME",
            "codExterno": "148"
        },
        {
            "nome": "Transportes Niquini",
            "codExterno": "149"
        },
        {
            "nome": "Rapido Mineiro",
            "codExterno": "150"
        },
        {
            "nome": "Happening Empreendimentos,Importacao e Exportacao",
            "codExterno": "151"
        },
        {
            "nome": "Tranzal",
            "codExterno": "152"
        },
        {
            "nome": "Transamex Expresso Rodoviario",
            "codExterno": "153"
        },
        {
            "nome": "Expresso Dourados Transportes Rod.de Cargas",
            "codExterno": "154"
        },
        {
            "nome": "Trans-Face Transportes",
            "codExterno": "155"
        },
        {
            "nome": "Rio Pretao",
            "codExterno": "156"
        },
        {
            "nome": "Expresso Rodo Jaboti",
            "codExterno": "157"
        },
        {
            "nome": "Uniao Transportes",
            "codExterno": "158"
        },
        {
            "nome": "Transchutz",
            "codExterno": "173"
        },
        {
            "nome": "Transnossa Transportes",
            "codExterno": "209"
        },
        {
            "nome": "Marcopolo Comercio e Logistica",
            "codExterno": "210"
        },
        {
            "nome": "Transportadora Economica Eireli",
            "codExterno": "211"
        },
        {
            "nome": "Novorumo Transportes",
            "codExterno": "212"
        },
        {
            "nome": "Onofre Barbosa",
            "codExterno": "213"
        },
        {
            "nome": "Rio Multilog Transportes",
            "codExterno": "214"
        },
        {
            "nome": "Resolve Transportes e Logistica Ltda",
            "codExterno": "215"
        },
        {
            "nome": "RCC Transportes Rodoviarios",
            "codExterno": "216"
        },
        {
            "nome": "R.O de Freitas Transportes",
            "codExterno": "217"
        },
        {
            "nome": "Nordeste Transporte Real",
            "codExterno": "144"
        },
        {
            "nome": "Cooperbig",
            "codExterno": "193"
        },
        {
            "nome": "Transportadora Colatinense",
            "codExterno": "194"
        },
        {
            "nome": "Campinense Transportes de Cargas Ltda",
            "codExterno": "195"
        },
        {
            "nome": "Rapido Brasileiro",
            "codExterno": "196"
        },
        {
            "nome": "Ideia de Minas Transportes",
            "codExterno": "197"
        },
        {
            "nome": "Transportadora Trans-Real Rio Preto",
            "codExterno": "198"
        },
        {
            "nome": "RKM Transportes",
            "codExterno": "199"
        },
        {
            "nome": "Transportes Bertolini",
            "codExterno": "218"
        },
        {
            "nome": "Coman",
            "codExterno": "219"
        },
        {
            "nome": "Transportadora Aquariun",
            "codExterno": "220"
        },
        {
            "nome": "Expresso Aracatuba",
            "codExterno": "221"
        },
        {
            "nome": "Armandi Transportes",
            "codExterno": "222"
        },
        {
            "nome": "Transportes e Logistica Dia e Noite",
            "codExterno": "227"
        },
        {
            "nome": "Transportadora Primeira do Nordeste",
            "codExterno": "228"
        },
        {
            "nome": "Caromila Transportes",
            "codExterno": "229"
        },
        {
            "nome": "Expresso Predileto",
            "codExterno": "230"
        },
        {
            "nome": "Petrolina Expresso",
            "codExterno": "231"
        },
        {
            "nome": "Alagoinhas Transportes",
            "codExterno": "248"
        },
        {
            "nome": "A.R Transportes",
            "codExterno": "249"
        },
        {
            "nome": "Transportes e Logistica Grande Maia",
            "codExterno": "250"
        },
        {
            "nome": "Novo Vale Transportes",
            "codExterno": "252"
        },
        {
            "nome": "Transcaxias Logistica Modal Ltda",
            "codExterno": "253"
        },
        {
            "nome": "Transchicao Transportes",
            "codExterno": "254"
        },
        {
            "nome": "Transportes Magalhaes Ltda - EPP",
            "codExterno": "263"
        },
        {
            "nome": "Rodoviario RS",
            "codExterno": "174"
        },
        {
            "nome": "Transportadora BH-Minas",
            "codExterno": "223"
        },
        {
            "nome": "Avant Express Transporte Ltda-EPP",
            "codExterno": "224"
        },
        {
            "nome": "Amigo Transportes de Goias Ltda-EPP",
            "codExterno": "225"
        },
        {
            "nome": "Actual Cargo Ltda-ME",
            "codExterno": "226"
        },
        {
            "nome": "Transportadora Guapo",
            "codExterno": "235"
        },
        {
            "nome": "Rodocargas Nordeste Ltda-EPP",
            "codExterno": "236"
        },
        {
            "nome": "Daniel Ferreira Transportes",
            "codExterno": "237"
        },
        {
            "nome": "Expresso Piracicabano",
            "codExterno": "238"
        },
        {
            "nome": "Realth Comercio De Eletros E Transportes Ltda",
            "codExterno": "244"
        },
        {
            "nome": "G C A Transportes Ltda EPP",
            "codExterno": "245"
        },
        {
            "nome": "Piralog Piracicaba Logistica",
            "codExterno": "264"
        },
        {
            "nome": "Dica Transportes",
            "codExterno": "269"
        },
        {
            "nome": "Trans Excelente Express e Logistica",
            "codExterno": "270"
        },
        {
            "nome": "LEALDADE",
            "codExterno": "271"
        },
        {
            "nome": "ABM Logistica",
            "codExterno": "272"
        },
        {
            "nome": "Maxx Transporte e Log.",
            "codExterno": "273"
        },
        {
            "nome": "Transporte Mann",
            "codExterno": "274"
        },
        {
            "nome": "Transportadora Tatui Ltda-EPP",
            "codExterno": "275"
        },
        {
            "nome": "MVS EXPRESS",
            "codExterno": "276"
        },
        {
            "nome": "Rodomen Express Logistica e Transportes",
            "codExterno": "277"
        },
        {
            "nome": "JP Transportadora Ltda-ME",
            "codExterno": "278"
        },
        {
            "nome": "Trans Barros",
            "codExterno": "279"
        },
        {
            "nome": "Taff Transportes",
            "codExterno": "280"
        },
        {
            "nome": "Zero Hora",
            "codExterno": "281"
        },
        {
            "nome": "Transportes M.A.L.U Ltda-ME",
            "codExterno": "282"
        },
        {
            "nome": "Trans Sena Expresso",
            "codExterno": "140"
        },
        {
            "nome": "Rodoviario Goyaz",
            "codExterno": "141"
        },
        {
            "nome": "Accert Transportes E Logistica LTDA",
            "codExterno": "200"
        },
        {
            "nome": "Aga Transportes LTDA ME",
            "codExterno": "201"
        },
        {
            "nome": "Agil Transportes Rodoviario De Cargas Ltda",
            "codExterno": "202"
        },
        {
            "nome": "CCL CARGAS CERTAS LOGISTICA EIRELI",
            "codExterno": "203"
        },
        {
            "nome": "Transportadora Alto Da Serra Ltda EPP",
            "codExterno": "204"
        },
        {
            "nome": "Altoexpress Cargas E Encomendas Ltda",
            "codExterno": "205"
        },
        {
            "nome": "Indacargas Logistica e Transportes Ltda",
            "codExterno": "232"
        },
        {
            "nome": "RKM Transportes Ltda",
            "codExterno": "255"
        },
        {
            "nome": "Expresso Rodoviario Rege",
            "codExterno": "256"
        },
        {
            "nome": "Transporte Itaqua Eireli-EPP",
            "codExterno": "257"
        },
        {
            "nome": "Transportadora Real Bebedouro",
            "codExterno": "258"
        },
        {
            "nome": "KR Transportes",
            "codExterno": "283"
        },
        {
            "nome": "E G Material Eletrico Ltda",
            "codExterno": "284"
        },
        {
            "nome": "Tecnova Ind.e Com. de Mat.Ltda",
            "codExterno": "285"
        },
        {
            "nome": "Jurua Logistica  Transportes",
            "codExterno": "287"
        },
        {
            "nome": "Rent A Truck",
            "codExterno": "288"
        },
        {
            "nome": "Empresa de Transportes Lima",
            "codExterno": "289"
        },
        {
            "nome": "Spaziolog",
            "codExterno": "291"
        },
        {
            "nome": "Gridlog",
            "codExterno": "294"
        },
        {
            "nome": "Expresso R e R",
            "codExterno": "295"
        },
        {
            "nome": "Transantos",
            "codExterno": "297"
        },
        {
            "nome": "L M Transportes",
            "codExterno": "298"
        },
        {
            "nome": "Karisa Transportes",
            "codExterno": "299"
        },
        {
            "nome": "Petrocargas",
            "codExterno": "300"
        },
        {
            "nome": "Transportadora M.J.Hoffmann Ltda",
            "codExterno": "143"
        },
        {
            "nome": "Baroni Transportes",
            "codExterno": "246"
        },
        {
            "nome": "Transportadora Rosalem",
            "codExterno": "247"
        },
        {
            "nome": "Telebrasil Transportes Ltda",
            "codExterno": "286"
        },
        {
            "nome": "Flecha Azul",
            "codExterno": "290"
        },
        {
            "nome": "Trans Bariao Garca",
            "codExterno": "301"
        },
        {
            "nome": "Expresso Maringa Transportes",
            "codExterno": "302"
        },
        {
            "nome": "Frente Transportes E Logistica Ltda",
            "codExterno": "303"
        },
        {
            "nome": "Belufi Transporte Rodoviario",
            "codExterno": "305"
        },
        {
            "nome": "Panamericano Transporte Rodoviario de Cargas",
            "codExterno": "306"
        },
        {
            "nome": "Globus Fabrica de Pallets e Artef.Madeira Ltd",
            "codExterno": "307"
        },
        {
            "nome": "Favorita Transportes",
            "codExterno": "308"
        },
        {
            "nome": "Rodopalas Transportes Rodoviarios",
            "codExterno": "309"
        },
        {
            "nome": "Nova Uniao Transportes Rodoviario de Cargas",
            "codExterno": "310"
        },
        {
            "nome": "Sao Jose -Agencia de Cargas",
            "codExterno": "311"
        },
        {
            "nome": "Linsky Transportes e Turismo",
            "codExterno": "312"
        },
        {
            "nome": "Trans-Araguaia Logistica",
            "codExterno": "313"
        },
        {
            "nome": "Transleme",
            "codExterno": "316"
        },
        {
            "nome": "D.R.P.Transportes",
            "codExterno": "317"
        },
        {
            "nome": "Suica Brasileira",
            "codExterno": "318"
        },
        {
            "nome": "Expresso Giro",
            "codExterno": "319"
        },
        {
            "nome": "Expresso Transsul",
            "codExterno": "320"
        },
        {
            "nome": "Conexao-Bahia Transportes de Carga",
            "codExterno": "321"
        },
        {
            "nome": "Transportadora e Comercio Brasiliense",
            "codExterno": "322"
        },
        {
            "nome": "Caiapo Cargas Ltda",
            "codExterno": "323"
        },
        {
            "nome": "Trans Jeo",
            "codExterno": "344"
        },
        {
            "nome": "Tam Linhas Aereas S/A",
            "codExterno": "359"
        },
        {
            "nome": "Novo Nordeste",
            "codExterno": "363"
        },
        {
            "nome": "Piracicabana Transporte de cargas e encomendas",
            "codExterno": "365"
        },
        {
            "nome": "Rodolev Transportes",
            "codExterno": "372"
        },
        {
            "nome": "Log Express Transportes LTDA",
            "codExterno": "379"
        },
        {
            "nome": "Minuano",
            "codExterno": "380"
        },
        {
            "nome": "Transportadora Antonio Grossl",
            "codExterno": "387"
        },
        {
            "nome": "Idislog",
            "codExterno": "392"
        },
        {
            "nome": "Continental",
            "codExterno": "393"
        },
        {
            "nome": "SKALA LOGISTICA ARMAZENAMENTO E TRANSPORTES",
            "codExterno": "402"
        },
        {
            "nome": "A.S DA SILVA TRANSPORTADORA",
            "codExterno": "438"
        },
        {
            "nome": "TNT MERCURIO CARGAS E ENCOMENDAS EXPRESSAS",
            "codExterno": "439"
        },
        {
            "nome": "Manga Express Ltda ME",
            "codExterno": "446"
        },
        {
            "nome": "Transportes Adre",
            "codExterno": "451"
        },
        {
            "nome": "Logistica TPL",
            "codExterno": "452"
        },
        {
            "nome": "Lasinho Transportes",
            "codExterno": "454"
        },
        {
            "nome": "Jacson Hoffmann",
            "codExterno": "467"
        },
        {
            "nome": "MUDOU P/COD.493",
            "codExterno": "468"
        },
        {
            "nome": "Saed Agenciamento de Cargas Aereas",
            "codExterno": "469"
        },
        {
            "nome": "Rapido Transilva",
            "codExterno": "472"
        },
        {
            "nome": "New Route",
            "codExterno": "473"
        },
        {
            "nome": "Braspress Transportes Urgentes",
            "codExterno": "474"
        },
        {
            "nome": "Transportadora Jasil",
            "codExterno": "484"
        },
        {
            "nome": "JR CATANDUVA TRANSP.ROD.LTDA",
            "codExterno": "486"
        },
        {
            "nome": "Rodobarra",
            "codExterno": "492"
        },
        {
            "nome": "Transnorte Logistica e Transportes",
            "codExterno": "349"
        },
        {
            "nome": "Camilo dos Santos",
            "codExterno": "362"
        },
        {
            "nome": "Jamef Transportes",
            "codExterno": "366"
        },
        {
            "nome": "Luz Transportes",
            "codExterno": "373"
        },
        {
            "nome": "Rodo Danny",
            "codExterno": "374"
        },
        {
            "nome": "Zeagostinho",
            "codExterno": "388"
        },
        {
            "nome": "Sergipe Transportes",
            "codExterno": "389"
        },
        {
            "nome": "Visao Transportes",
            "codExterno": "405"
        },
        {
            "nome": "Uberlog Transportes e Servicos",
            "codExterno": "406"
        },
        {
            "nome": "A F Transportes",
            "codExterno": "408"
        },
        {
            "nome": "Fábio Hoeltgebaum ME",
            "codExterno": "440"
        },
        {
            "nome": "Tranzpezia",
            "codExterno": "447"
        },
        {
            "nome": "Transportadora 5M",
            "codExterno": "460"
        },
        {
            "nome": "Jatolog Transportes",
            "codExterno": "461"
        },
        {
            "nome": "Tel-Transportes",
            "codExterno": "462"
        },
        {
            "nome": "Rapido Goiania",
            "codExterno": "463"
        },
        {
            "nome": "Cazan Log Transportes",
            "codExterno": "464"
        },
        {
            "nome": "Expresso Santa Luzia",
            "codExterno": "465"
        },
        {
            "nome": "Expresso São Miguel Ltda",
            "codExterno": "466"
        },
        {
            "nome": "Gerbi",
            "codExterno": "480"
        },
        {
            "nome": "Transportes Decisao - Indacargas coleta.",
            "codExterno": "483"
        },
        {
            "nome": "Transmarinho Transportes",
            "codExterno": "494"
        },
        {
            "nome": "Ademir Toassi e Cia LTDA -ME",
            "codExterno": "497"
        },
        {
            "nome": "Expresso Zine",
            "codExterno": "498"
        },
        {
            "nome": "Expresso Giro",
            "codExterno": "504"
        },
        {
            "nome": "Teknologica Distribuidora",
            "codExterno": "509"
        },
        {
            "nome": "Transmodelo",
            "codExterno": "513"
        },
        {
            "nome": "LDB Logistica e Transportes",
            "codExterno": "346"
        },
        {
            "nome": "Transparanorte",
            "codExterno": "347"
        },
        {
            "nome": "May Transporte e Logistica Ltda-",
            "codExterno": "348"
        },
        {
            "nome": "Manda La Transportes de Cargas",
            "codExterno": "350"
        },
        {
            "nome": "Bahia Express Transportes de Cargas",
            "codExterno": "352"
        },
        {
            "nome": "Shira Transportes de Cargas",
            "codExterno": "369"
        },
        {
            "nome": "Rapido Montes Claros Transporte",
            "codExterno": "370"
        },
        {
            "nome": "Transportadora Emborcacao",
            "codExterno": "371"
        },
        {
            "nome": "Rondonia Express Transportes",
            "codExterno": "375"
        },
        {
            "nome": "Sene-Empresa de Transportes de Cargas e Encomendas",
            "codExterno": "376"
        },
        {
            "nome": "WRJ Transportes e Logistica",
            "codExterno": "381"
        },
        {
            "nome": "Unicargo Transportes e Cargas",
            "codExterno": "382"
        },
        {
            "nome": "R J J Transportes",
            "codExterno": "383"
        },
        {
            "nome": "Rodoviario Transvoar",
            "codExterno": "384"
        },
        {
            "nome": "Sol e Mar Transportes Distribuicao e Logistica",
            "codExterno": "386"
        },
        {
            "nome": "Transruas Transportes",
            "codExterno": "391"
        },
        {
            "nome": "Vicar Transporte de Carga",
            "codExterno": "397"
        },
        {
            "nome": "Transportadora Scarpato",
            "codExterno": "398"
        },
        {
            "nome": "Charqueadas Transportes LTDA",
            "codExterno": "418"
        },
        {
            "nome": "Transportadora: T.M.S",
            "codExterno": "426"
        },
        {
            "nome": "Transportes Pesados Minas",
            "codExterno": "427"
        },
        {
            "nome": "Expresso Flecha de Prata",
            "codExterno": "428"
        },
        {
            "nome": "Expresso Europeu Transportes",
            "codExterno": "429"
        },
        {
            "nome": "B R A EXPRESS TRANSPORTES",
            "codExterno": "430"
        },
        {
            "nome": "RACA TRANSPORTES",
            "codExterno": "431"
        },
        {
            "nome": "Pioneiro Transportes de Cargas",
            "codExterno": "342"
        },
        {
            "nome": "Transportadora Itapetininga",
            "codExterno": "343"
        },
        {
            "nome": "Cerquilho",
            "codExterno": "351"
        },
        {
            "nome": "TRD - Transporte e Logistica LTDA",
            "codExterno": "377"
        },
        {
            "nome": "Transportadora Joia",
            "codExterno": "385"
        },
        {
            "nome": "N.E R.",
            "codExterno": "390"
        },
        {
            "nome": "C5 Transportes e Servicos",
            "codExterno": "400"
        },
        {
            "nome": "Transville Transportes e Servicos",
            "codExterno": "403"
        },
        {
            "nome": "Voe Express",
            "codExterno": "409"
        },
        {
            "nome": "TRANSTILOG TRANSPORTES",
            "codExterno": "432"
        },
        {
            "nome": "TRANSRENTAL-LOCACAO E TRANSPORTE",
            "codExterno": "433"
        },
        {
            "nome": "Transnossa Transportes",
            "codExterno": "435"
        },
        {
            "nome": "VR METAIS TRANSPORTES",
            "codExterno": "443"
        },
        {
            "nome": "Celia Lopes Bezerra",
            "codExterno": "444"
        },
        {
            "nome": "ICARO EXPRESS",
            "codExterno": "445"
        },
        {
            "nome": "Auto Latina Transportes e Logistica LTDA",
            "codExterno": "455"
        },
        {
            "nome": "Rodo Cargo Encomendas",
            "codExterno": "470"
        },
        {
            "nome": "Expresso Rodoviario Lamesa",
            "codExterno": "475"
        },
        {
            "nome": "Rapido Figueiredo Logistica e Transportes",
            "codExterno": "476"
        },
        {
            "nome": "Teixeira Varajao",
            "codExterno": "479"
        },
        {
            "nome": "Transfax-Log",
            "codExterno": "485"
        },
        {
            "nome": "Roma Transportes",
            "codExterno": "487"
        },
        {
            "nome": "SCM Servicos",
            "codExterno": "488"
        },
        {
            "nome": "Fabris",
            "codExterno": "491"
        },
        {
            "nome": "Gelenski Transportes",
            "codExterno": "493"
        },
        {
            "nome": "Rapal Paulista Cargas LTDA",
            "codExterno": "496"
        },
        {
            "nome": "DDA Transportadora",
            "codExterno": "396"
        },
        {
            "nome": "Graziele de Oliveira Souza Transportes",
            "codExterno": "404"
        },
        {
            "nome": "Transglobal",
            "codExterno": "412"
        },
        {
            "nome": "Transwinter",
            "codExterno": "413"
        },
        {
            "nome": "Viacao Cruzeiro do Sul",
            "codExterno": "414"
        },
        {
            "nome": "Transpacheco",
            "codExterno": "415"
        },
        {
            "nome": "Potenza Transportes",
            "codExterno": "421"
        },
        {
            "nome": "Expresso Andradina",
            "codExterno": "422"
        },
        {
            "nome": "Termaco Terminais Maritimos de Containers",
            "codExterno": "450"
        },
        {
            "nome": "BHM Transportes",
            "codExterno": "453"
        },
        {
            "nome": "Carriom Transportes",
            "codExterno": "457"
        },
        {
            "nome": "Francisco Carlos Pereira de Medeiros",
            "codExterno": "477"
        },
        {
            "nome": "Vialar Transporte",
            "codExterno": "482"
        },
        {
            "nome": "Transportes R F",
            "codExterno": "499"
        },
        {
            "nome": "Transportadora Dimer",
            "codExterno": "501"
        },
        {
            "nome": "SANTA ANA MADEIRAS TRATADAS",
            "codExterno": "506"
        },
        {
            "nome": "Express TCM",
            "codExterno": "507"
        },
        {
            "nome": "Rodosul Express",
            "codExterno": "510"
        },
        {
            "nome": "Transportadora Conderoza",
            "codExterno": "511"
        },
        {
            "nome": "EUCATUR-EMPRESA UNIAO CASCAVEL DE TRANSPORTES E TU",
            "codExterno": "512"
        },
        {
            "nome": "Transportadora Patona",
            "codExterno": "514"
        },
        {
            "nome": "Premier Express Logistica",
            "codExterno": "515"
        },
        {
            "nome": "Mano Multicargas",
            "codExterno": "516"
        },
        {
            "nome": "Lema Rezende Transp.",
            "codExterno": "517"
        },
        {
            "nome": "Pantanal Logistica E Transportes Ltda -ME",
            "codExterno": "521"
        },
        {
            "nome": "Rapido Tambau",
            "codExterno": "522"
        },
        {
            "nome": "Binho Transportes e Logistica",
            "codExterno": "345"
        },
        {
            "nome": "Dani Transportes",
            "codExterno": "353"
        },
        {
            "nome": "Nova Alianca de Piracicaba",
            "codExterno": "354"
        },
        {
            "nome": "Transeg - Transportes e Logistica",
            "codExterno": "378"
        },
        {
            "nome": "Expresso Principal Irmaos Koike",
            "codExterno": "395"
        },
        {
            "nome": "Aguia Branca",
            "codExterno": "399"
        },
        {
            "nome": "Ranchariense",
            "codExterno": "401"
        },
        {
            "nome": "WAP Transportadora de Cargas Ltda",
            "codExterno": "407"
        },
        {
            "nome": "Mandala",
            "codExterno": "410"
        },
        {
            "nome": "C.F.B.Morais",
            "codExterno": "411"
        },
        {
            "nome": "Empresa Rodoviaria Scalet",
            "codExterno": "416"
        },
        {
            "nome": "Rodoviario Garra",
            "codExterno": "417"
        },
        {
            "nome": "Latorre Transportes e Logistica",
            "codExterno": "419"
        },
        {
            "nome": "Fedex Brasil",
            "codExterno": "434"
        },
        {
            "nome": "J.O.S Express Log Transportes",
            "codExterno": "436"
        },
        {
            "nome": "TC TRANSCARPAL TRANSPORTE RODOVIARIO DE CARGAS ARM",
            "codExterno": "437"
        },
        {
            "nome": "Vonei Pinto",
            "codExterno": "441"
        },
        {
            "nome": "TC BLUMENAU",
            "codExterno": "456"
        },
        {
            "nome": "Mar e Sol Transportes",
            "codExterno": "458"
        },
        {
            "nome": "Santral Transportes",
            "codExterno": "478"
        },
        {
            "nome": "W.A.S.Transportes LTDA -ME",
            "codExterno": "481"
        },
        {
            "nome": "Multicargas",
            "codExterno": "500"
        },
        {
            "nome": "Tecnova Preparacao De Materiais Ltda",
            "codExterno": "502"
        },
        {
            "nome": "Belmok",
            "codExterno": "505"
        },
        {
            "nome": "J P DA COSTA",
            "codExterno": "518"
        },
        {
            "nome": "Transportadora Transvilmar",
            "codExterno": "355"
        },
        {
            "nome": "Transhizza Trans de Cargas e Encomendas",
            "codExterno": "356"
        },
        {
            "nome": "Expresso Tubiense",
            "codExterno": "357"
        },
        {
            "nome": "MTL Transportes e Logistica",
            "codExterno": "358"
        },
        {
            "nome": "Claros Transportes",
            "codExterno": "360"
        },
        {
            "nome": "Regina Abramovitch",
            "codExterno": "361"
        },
        {
            "nome": "Veneto",
            "codExterno": "364"
        },
        {
            "nome": "Sertraza Transportes",
            "codExterno": "367"
        },
        {
            "nome": "Jeocargas",
            "codExterno": "368"
        },
        {
            "nome": "Transluc Cargas e Encomendas",
            "codExterno": "394"
        },
        {
            "nome": "Cotraibi",
            "codExterno": "420"
        },
        {
            "nome": "Dago Transportes e Logistica",
            "codExterno": "423"
        },
        {
            "nome": "TRANSPORTADORA T.M.S.",
            "codExterno": "424"
        },
        {
            "nome": "V S Transportes Ltda-EPP",
            "codExterno": "425"
        },
        {
            "nome": "Caroline Transportes",
            "codExterno": "442"
        },
        {
            "nome": "DVA Express",
            "codExterno": "448"
        },
        {
            "nome": "HUB CARGO",
            "codExterno": "449"
        },
        {
            "nome": "Expresso Vilarense",
            "codExterno": "459"
        },
        {
            "nome": "Expresso Vila Velha Logistica",
            "codExterno": "471"
        },
        {
            "nome": "Empresa de Transportes Atlas",
            "codExterno": "489"
        },
        {
            "nome": "Cimcal",
            "codExterno": "490"
        },
        {
            "nome": "Dani Transporte",
            "codExterno": "495"
        },
        {
            "nome": "Te Transporte",
            "codExterno": "503"
        },
        {
            "nome": "Transinal Transportes Rodoviario de Cargas Ltda",
            "codExterno": "508"
        },
        {
            "nome": "Nextrans Transportes",
            "codExterno": "519"
        },
        {
            "nome": "Texas Express",
            "codExterno": "520"
        },
        {
            "nome": "C.A De Alkimin Oliveira",
            "codExterno": "524"
        },
        {
            "nome": "Exata Cargo",
            "codExterno": "529"
        },
        {
            "nome": "Expresso M-2000",
            "codExterno": "534"
        },
        {
            "nome": "Oliveira Transportes",
            "codExterno": "535"
        },
        {
            "nome": "Transviltalino",
            "codExterno": "536"
        },
        {
            "nome": "Fontanella",
            "codExterno": "543"
        },
        {
            "nome": "Trans VMC",
            "codExterno": "552"
        },
        {
            "nome": "Geo Transportes",
            "codExterno": "556"
        },
        {
            "nome": "FAST LOG",
            "codExterno": "563"
        },
        {
            "nome": "Brasil Cargo",
            "codExterno": "575"
        },
        {
            "nome": "Transportes Rodoviários Rex Ltda",
            "codExterno": "5"
        },
        {
            "nome": "Azul Cargo",
            "codExterno": "523"
        },
        {
            "nome": "DVA EXPRESS LTDA",
            "codExterno": "550"
        },
        {
            "nome": "Mira OTM",
            "codExterno": "559"
        },
        {
            "nome": "Transmaici",
            "codExterno": "560"
        },
        {
            "nome": "TVM Transportes",
            "codExterno": "576"
        },
        {
            "nome": "Reboucas",
            "codExterno": "582"
        },
        {
            "nome": "Transestilo (INATIVA)",
            "codExterno": "533"
        },
        {
            "nome": "Lobo e Lobo",
            "codExterno": "544"
        },
        {
            "nome": "Planalto Transportes",
            "codExterno": "558"
        },
        {
            "nome": "Figueiredo Transportes",
            "codExterno": "568"
        },
        {
            "nome": "Xandu",
            "codExterno": "570"
        },
        {
            "nome": "Picorelli S/A Transportes",
            "codExterno": "573"
        },
        {
            "nome": "TRANSEICH ASSESSORIA E TRANSPORTES S/A",
            "codExterno": "577"
        },
        {
            "nome": "J L Ferreira Transportes",
            "codExterno": "531"
        },
        {
            "nome": "Starex Transportes",
            "codExterno": "545"
        },
        {
            "nome": "SANTIN - EQUIPAMENTOS TRANSPORTES",
            "codExterno": "546"
        },
        {
            "nome": "Fag Company Express",
            "codExterno": "551"
        },
        {
            "nome": "Joaquim Arnoldo Evangelista Silva ME",
            "codExterno": "561"
        },
        {
            "nome": "Rapal Paulista",
            "codExterno": "562"
        },
        {
            "nome": "REUNIDAS TRANSPORTES RODOVIARIO DE CARGAS LTDA",
            "codExterno": "565"
        },
        {
            "nome": "A.C.O. Transportes de Cargas Ltda - ME",
            "codExterno": "579"
        },
        {
            "nome": "Transportadora Ociani LTDA",
            "codExterno": "525"
        },
        {
            "nome": "Transjoi Transportes Ltda",
            "codExterno": "530"
        },
        {
            "nome": "Vivan Transp.e Log Ltda Me",
            "codExterno": "540"
        },
        {
            "nome": "Distribui Transportes",
            "codExterno": "541"
        },
        {
            "nome": "Grande Rio",
            "codExterno": "553"
        },
        {
            "nome": "A L Mafra",
            "codExterno": "554"
        },
        {
            "nome": "SPBELEM",
            "codExterno": "555"
        },
        {
            "nome": "E.Soares Rocha Transportes - ME",
            "codExterno": "564"
        },
        {
            "nome": "Rodolasil",
            "codExterno": "580"
        },
        {
            "nome": "Conecta Transportes",
            "codExterno": "528"
        },
        {
            "nome": "Transhizza Transportes De Cargas E Encomendas Ltda",
            "codExterno": "532"
        },
        {
            "nome": "Reis Lisboa",
            "codExterno": "549"
        },
        {
            "nome": "Rodoextra",
            "codExterno": "574"
        },
        {
            "nome": "Nora & Barrreto Transportes E Logistica Ltda ME",
            "codExterno": "583"
        },
        {
            "nome": "Trans Cachoeiro",
            "codExterno": "537"
        },
        {
            "nome": "JCV Transportes",
            "codExterno": "538"
        },
        {
            "nome": "Icaru's Logistica e Transportes",
            "codExterno": "539"
        },
        {
            "nome": "S4 Transportes",
            "codExterno": "542"
        },
        {
            "nome": "Transportadora Grauna Ltda",
            "codExterno": "547"
        },
        {
            "nome": "M-10",
            "codExterno": "557"
        },
        {
            "nome": "Stancanelli",
            "codExterno": "567"
        },
        {
            "nome": "Brasil Cargas",
            "codExterno": "569"
        },
        {
            "nome": "FAST LOG",
            "codExterno": "571"
        },
        {
            "nome": "Rodoviario Sol Nascente",
            "codExterno": "572"
        },
        {
            "nome": "T.G.Logistica",
            "codExterno": "581"
        },
        {
            "nome": "Dtrabaiolli",
            "codExterno": "526"
        },
        {
            "nome": "Catalana De Niteroi Transp.Ltda",
            "codExterno": "527"
        },
        {
            "nome": "Alfa Transportes Eireli",
            "codExterno": "548"
        },
        {
            "nome": "Transportadora LG",
            "codExterno": "578"
        },
        {
            "nome": "Rodoviario Recifense",
            "codExterno": "584"
        },
        {
            "nome": "Agencia de Cargas Estelar",
            "codExterno": "585"
        },
        {
            "nome": "R.B.DA SILVA SERAFIM",
            "codExterno": "586"
        },
        {
            "nome": "GLOBAL AIR CARGO LTDA",
            "codExterno": "600"
        },
        {
            "nome": "ZN LOG",
            "codExterno": "602"
        },
        {
            "nome": "Transportadora de Cargas Orlandia",
            "codExterno": "603"
        },
        {
            "nome": "E.M. Transportes",
            "codExterno": "607"
        },
        {
            "nome": "Destac",
            "codExterno": "615"
        },
        {
            "nome": "Lideranca Transportes",
            "codExterno": "623"
        },
        {
            "nome": "R D L Transportes e Logistica Ltda",
            "codExterno": "632"
        },
        {
            "nome": "GT Cargo Transportes Ltda",
            "codExterno": "633"
        },
        {
            "nome": "Itapirense Bertine",
            "codExterno": "643"
        },
        {
            "nome": "AGG Transporte",
            "codExterno": "646"
        },
        {
            "nome": "Masano Transportes",
            "codExterno": "650"
        },
        {
            "nome": "Polo Logistica",
            "codExterno": "654"
        },
        {
            "nome": "Transportadora Americana Ltda",
            "codExterno": "659"
        },
        {
            "nome": "Transgreco",
            "codExterno": "690"
        },
        {
            "nome": "Transnorte",
            "codExterno": "691"
        },
        {
            "nome": "Metal Ligas - Indl Coml E Impra Metal Ligas",
            "codExterno": "692"
        },
        {
            "nome": "T.G.LOGISTICA E TRANSPORTES LTDA",
            "codExterno": "705"
        },
        {
            "nome": "Jatex Transportes",
            "codExterno": "708"
        },
        {
            "nome": "Comercial E Industrial Ronsy Ltda",
            "codExterno": "709"
        },
        {
            "nome": "HPLOG Transportes Ltda",
            "codExterno": "711"
        },
        {
            "nome": "Milenium Transportes Ltda",
            "codExterno": "712"
        },
        {
            "nome": "Transportes Translovato Ltda",
            "codExterno": "713"
        },
        {
            "nome": "ASIAN COMPANY TRANSPORTES LTDA",
            "codExterno": "714"
        },
        {
            "nome": "Patrus Transportes Urgentes Ltda",
            "codExterno": "715"
        },
        {
            "nome": "Boleia Transportes",
            "codExterno": "716"
        },
        {
            "nome": "Rodrigo Duarte Fernandes",
            "codExterno": "587"
        },
        {
            "nome": "L.C.De Oliveira",
            "codExterno": "589"
        },
        {
            "nome": "TRANSPORTES DELLA VOLPE SA COM E IND",
            "codExterno": "592"
        },
        {
            "nome": "Rapido London S/A",
            "codExterno": "596"
        },
        {
            "nome": "Amazonas Industria e Comercio LTDA",
            "codExterno": "598"
        },
        {
            "nome": "Otaviana",
            "codExterno": "608"
        },
        {
            "nome": "Transportes Mirim Com e Repr.",
            "codExterno": "609"
        },
        {
            "nome": "THD SERVICE",
            "codExterno": "610"
        },
        {
            "nome": "C.A.S. Logexpress Transportes",
            "codExterno": "611"
        },
        {
            "nome": "Transoliveira",
            "codExterno": "612"
        },
        {
            "nome": "Rodoviario Miranda",
            "codExterno": "634"
        },
        {
            "nome": "A C D Brasil Transportes e Logistica Ltda",
            "codExterno": "635"
        },
        {
            "nome": "Potencial Express Transp.Ltda",
            "codExterno": "637"
        },
        {
            "nome": "Transportadora Sabia de Marilia",
            "codExterno": "640"
        },
        {
            "nome": "Transpatrimon",
            "codExterno": "657"
        },
        {
            "nome": "Viacao Cometa",
            "codExterno": "663"
        },
        {
            "nome": "DHV",
            "codExterno": "665"
        },
        {
            "nome": "SAGA TRANSPORTES E LOGISTICA S/A",
            "codExterno": "667"
        },
        {
            "nome": "Simei Rolim",
            "codExterno": "670"
        },
        {
            "nome": "Minas Star Express",
            "codExterno": "671"
        },
        {
            "nome": "Transviagem",
            "codExterno": "672"
        },
        {
            "nome": "PEX LOG",
            "codExterno": "673"
        },
        {
            "nome": "Distribui Transportes (Campinas)",
            "codExterno": "677"
        },
        {
            "nome": "Expresso Flor de Minas",
            "codExterno": "678"
        },
        {
            "nome": "RODOEXPRESS",
            "codExterno": "683"
        },
        {
            "nome": "TRANS WELLS",
            "codExterno": "693"
        },
        {
            "nome": "Costeira Transportes",
            "codExterno": "594"
        },
        {
            "nome": "Efitrans Transportes Ltda",
            "codExterno": "597"
        },
        {
            "nome": "Nordeste",
            "codExterno": "605"
        },
        {
            "nome": "Ludex Transportes E Comercio Ltda",
            "codExterno": "606"
        },
        {
            "nome": "Destaque Logistica",
            "codExterno": "613"
        },
        {
            "nome": "Multilog",
            "codExterno": "616"
        },
        {
            "nome": "LANA TRANSPORTES",
            "codExterno": "622"
        },
        {
            "nome": "Jose Costa De Souza -ME",
            "codExterno": "626"
        },
        {
            "nome": "Estrela Dourada Servicos de Transportes",
            "codExterno": "629"
        },
        {
            "nome": "Amazon Transportes",
            "codExterno": "630"
        },
        {
            "nome": "UNIRIOS RODOFLUVIAL E LOGISTICA LTDA",
            "codExterno": "631"
        },
        {
            "nome": "Time Express",
            "codExterno": "639"
        },
        {
            "nome": "Expresso Itabaiana",
            "codExterno": "641"
        },
        {
            "nome": "Transnorte Alog",
            "codExterno": "642"
        },
        {
            "nome": "Solicity Express",
            "codExterno": "651"
        },
        {
            "nome": "Transportadora Rainha do Sertao",
            "codExterno": "652"
        },
        {
            "nome": "Socarga Transportes",
            "codExterno": "653"
        },
        {
            "nome": "Saga Transportes",
            "codExterno": "658"
        },
        {
            "nome": "Tornado Logistica",
            "codExterno": "662"
        },
        {
            "nome": "Viacao Campo Belo LTDA",
            "codExterno": "664"
        },
        {
            "nome": "TPL Logistica Norte",
            "codExterno": "668"
        },
        {
            "nome": "Coperbig",
            "codExterno": "674"
        },
        {
            "nome": "Transporte Campos de Araraquara",
            "codExterno": "675"
        },
        {
            "nome": "Madeireira Rosene Rossini LTDA",
            "codExterno": "676"
        },
        {
            "nome": "RF TRANSPORTES LTDA",
            "codExterno": "681"
        },
        {
            "nome": "TJOR TRANSPORTES",
            "codExterno": "685"
        },
        {
            "nome": "Transportadora Giter Ltda",
            "codExterno": "599"
        },
        {
            "nome": "Transmineiro",
            "codExterno": "614"
        },
        {
            "nome": "J.J.SUL TRANSPORTES",
            "codExterno": "621"
        },
        {
            "nome": "PTR EXPRESS TRANSPORTES E LOGISTICA LTDA - ME",
            "codExterno": "624"
        },
        {
            "nome": "Brasil Logistica",
            "codExterno": "627"
        },
        {
            "nome": "TRANS MG",
            "codExterno": "628"
        },
        {
            "nome": "Atual Cargas (TOCANTINS)",
            "codExterno": "644"
        },
        {
            "nome": "DDC LOGISTICA",
            "codExterno": "647"
        },
        {
            "nome": "Volde Transportes",
            "codExterno": "649"
        },
        {
            "nome": "Tocantins Administracao e Transportes",
            "codExterno": "656"
        },
        {
            "nome": "Klin Logistica",
            "codExterno": "666"
        },
        {
            "nome": "INTERCARGO TRANSPORTES LTDA",
            "codExterno": "669"
        },
        {
            "nome": "HJ PADUA TRANSPORTES",
            "codExterno": "679"
        },
        {
            "nome": "LAMOUNIER TRANSP.",
            "codExterno": "680"
        },
        {
            "nome": "Nortes Transporte",
            "codExterno": "686"
        },
        {
            "nome": "TWL WESTRUP",
            "codExterno": "687"
        },
        {
            "nome": "Itinerante Transportes",
            "codExterno": "689"
        },
        {
            "nome": "DVAL TRANSPORTES",
            "codExterno": "694"
        },
        {
            "nome": "BR CARGO LOGISTICA",
            "codExterno": "695"
        },
        {
            "nome": "GTS TRANSPORTES",
            "codExterno": "696"
        },
        {
            "nome": "TGM TRANSPORTES",
            "codExterno": "697"
        },
        {
            "nome": "Transportes Ja 1000 Ltda",
            "codExterno": "699"
        },
        {
            "nome": "Transpadua Transportes Ltda",
            "codExterno": "700"
        },
        {
            "nome": "EXPRESSO THIVAL TRANSPORTE RODOVIARIO DE CARGAS LT",
            "codExterno": "701"
        },
        {
            "nome": "Transporadora Onias Ltda - ME",
            "codExterno": "703"
        },
        {
            "nome": "Vanderlei Nunes Ferreira",
            "codExterno": "704"
        },
        {
            "nome": "TSS Express Transp.Rod.LTDA",
            "codExterno": "590"
        },
        {
            "nome": "Marcelo Adriano Neves Da Silva",
            "codExterno": "591"
        },
        {
            "nome": "HAY Comercio e Transporte LTDA ME",
            "codExterno": "593"
        },
        {
            "nome": "Transportadora Rebecchi Ltda",
            "codExterno": "595"
        },
        {
            "nome": "Comercio De Molas Ji-Parana",
            "codExterno": "601"
        },
        {
            "nome": "MAEX BRASIL",
            "codExterno": "604"
        },
        {
            "nome": "Rodoviario Granitense",
            "codExterno": "617"
        },
        {
            "nome": "Itamarati Express",
            "codExterno": "618"
        },
        {
            "nome": "De Paula",
            "codExterno": "619"
        },
        {
            "nome": "S P C Transporte",
            "codExterno": "620"
        },
        {
            "nome": "Trans Lafaiete",
            "codExterno": "625"
        },
        {
            "nome": "Grancucar Transportes Ltda",
            "codExterno": "636"
        },
        {
            "nome": "Colinas Transportadora",
            "codExterno": "638"
        },
        {
            "nome": "G V G Transportes",
            "codExterno": "645"
        },
        {
            "nome": "HPLOG Transportes Ltda",
            "codExterno": "648"
        },
        {
            "nome": "Jadlog Logistica",
            "codExterno": "655"
        },
        {
            "nome": "Reclog Trading",
            "codExterno": "660"
        },
        {
            "nome": "KLJ Transporte e Logistica",
            "codExterno": "661"
        },
        {
            "nome": "ACM TRANSPORTES",
            "codExterno": "682"
        },
        {
            "nome": "MODULAR NVT",
            "codExterno": "684"
        },
        {
            "nome": "Adelor Transportes",
            "codExterno": "688"
        },
        {
            "nome": "Volplan Transportes Ltda",
            "codExterno": "698"
        },
        {
            "nome": "A F Transportes e Servicos Ltda",
            "codExterno": "702"
        },
        {
            "nome": "Wem Transportes Ltda",
            "codExterno": "706"
        },
        {
            "nome": "Expresso Interlagos Ltda",
            "codExterno": "707"
        },
        {
            "nome": "Com.de Molas Ji-Parana",
            "codExterno": "710"
        },
        {
            "nome": "TRANSRUFINO TRANSPORTE E LOGISTICA LTDA - ME",
            "codExterno": "721"
        },
        {
            "nome": "Transportadora Hellus",
            "codExterno": "726"
        },
        {
            "nome": "Transtitanio Transportes Rod.",
            "codExterno": "727"
        },
        {
            "nome": "KM Multimodal  ( via aereo)",
            "codExterno": "739"
        },
        {
            "nome": "LCM Transportes Ltda",
            "codExterno": "743"
        },
        {
            "nome": "Roberto Sousa Santana",
            "codExterno": "744"
        },
        {
            "nome": "Rodocerto",
            "codExterno": "749"
        },
        {
            "nome": "Jamef",
            "codExterno": "768"
        },
        {
            "nome": "Mir Transportes e Logistica LTDA",
            "codExterno": "775"
        },
        {
            "nome": "Alfa Transportes Especias LTDA",
            "codExterno": "776"
        },
        {
            "nome": "Constancio Transportes Especiais Ltda",
            "codExterno": "787"
        },
        {
            "nome": "FOX ECO LOGISTICA",
            "codExterno": "791"
        },
        {
            "nome": "ACR Transportes",
            "codExterno": "798"
        },
        {
            "nome": "Marco Antônio Marino Madeiras PP",
            "codExterno": "809"
        },
        {
            "nome": "Rodoviario Camilo dos Santos Filho Ltda",
            "codExterno": "810"
        },
        {
            "nome": "Transportadora Leal Eireli",
            "codExterno": "813"
        },
        {
            "nome": "Getuba Com.de Madeiras",
            "codExterno": "821"
        },
        {
            "nome": "Rapido IW Transp. Rod. Ltda",
            "codExterno": "828"
        },
        {
            "nome": "Verus Transportes Ltda",
            "codExterno": "830"
        },
        {
            "nome": "Transmeta Guarulhos Transportes e Logistica Ltda",
            "codExterno": "831"
        },
        {
            "nome": "GTI-LOG SA",
            "codExterno": "837"
        },
        {
            "nome": "GTI-LOG S/A - BETIM",
            "codExterno": "838"
        },
        {
            "nome": "Transportadora Especilista Ltda",
            "codExterno": "861"
        },
        {
            "nome": "Suica Brasileira",
            "codExterno": "862"
        },
        {
            "nome": "Kunz & Kunz Ltda",
            "codExterno": "863"
        },
        {
            "nome": "Aleitafe",
            "codExterno": "725"
        },
        {
            "nome": "Gamas Transportes",
            "codExterno": "741"
        },
        {
            "nome": "Trans-Gigante",
            "codExterno": "753"
        },
        {
            "nome": "TRL Transportes Rio Leste Ltda",
            "codExterno": "754"
        },
        {
            "nome": "Expresso Guanambi Ltda - EPP",
            "codExterno": "756"
        },
        {
            "nome": "Solnordeste Transportes , Log. e Distribuicao Ltda",
            "codExterno": "760"
        },
        {
            "nome": "Tecmar Transportes Ltda",
            "codExterno": "766"
        },
        {
            "nome": "AG Transportes E Agenciamento de Cargas LTDA",
            "codExterno": "767"
        },
        {
            "nome": "Disk e Tenha transportes Ltda",
            "codExterno": "783"
        },
        {
            "nome": "Rodo Danny Transportes",
            "codExterno": "790"
        },
        {
            "nome": "Gunnar Vingren Pereira - ME",
            "codExterno": "803"
        },
        {
            "nome": "Rota Sul Transp. de Cargas",
            "codExterno": "804"
        },
        {
            "nome": "Rodotrans Participacoes e Servicos",
            "codExterno": "805"
        },
        {
            "nome": "Gama's Transportes, Servico e Logistica Ltda",
            "codExterno": "814"
        },
        {
            "nome": "Uniao Transporte",
            "codExterno": "815"
        },
        {
            "nome": "Livia Maria Leoncini Pevetta Transp.",
            "codExterno": "820"
        },
        {
            "nome": "JAGUARE TRANSPORTES E ARMAZENAGENS LTDA - ME",
            "codExterno": "825"
        },
        {
            "nome": "TRANSPORTE TEMPO REAL",
            "codExterno": "826"
        },
        {
            "nome": "Transportes Rod. de Cargas Meyer e Meyer Ltda",
            "codExterno": "827"
        },
        {
            "nome": "Claudia Jossely Souza da Camara",
            "codExterno": "829"
        },
        {
            "nome": "Extra Flex Embreagens",
            "codExterno": "841"
        },
        {
            "nome": "GD Logistica e Transportes",
            "codExterno": "842"
        },
        {
            "nome": "Transfiel",
            "codExterno": "851"
        },
        {
            "nome": "Auto Latina Transportes e Logistica Ltda",
            "codExterno": "852"
        },
        {
            "nome": "Bertaci Transportes",
            "codExterno": "856"
        },
        {
            "nome": "Luseanna",
            "codExterno": "730"
        },
        {
            "nome": "TRANSPORTES GRECCO S/A",
            "codExterno": "738"
        },
        {
            "nome": "EBMAC Transp.e Logistica",
            "codExterno": "740"
        },
        {
            "nome": "LEITE EXPRESS TRANSPORTES",
            "codExterno": "773"
        },
        {
            "nome": "MULTIFOX TRANSPORTES",
            "codExterno": "774"
        },
        {
            "nome": "Estilo Cargas",
            "codExterno": "779"
        },
        {
            "nome": "TRANSNIT",
            "codExterno": "781"
        },
        {
            "nome": "Cooperativa de cargas Botucatu - Coopercab",
            "codExterno": "784"
        },
        {
            "nome": "TRANSPORTADORA NOVA GERACAO",
            "codExterno": "789"
        },
        {
            "nome": "Transportes Brasil Gutz Ltda",
            "codExterno": "792"
        },
        {
            "nome": "Transportes Flavinho Ltda",
            "codExterno": "796"
        },
        {
            "nome": "Reis Transportes",
            "codExterno": "797"
        },
        {
            "nome": "RJF Transportes",
            "codExterno": "833"
        },
        {
            "nome": "JTT Solucoes Logistica Ltda",
            "codExterno": "834"
        },
        {
            "nome": "GRUPO TRM TRANSPORTES LOGISTICA INTELIGENTE",
            "codExterno": "835"
        },
        {
            "nome": "DLT Logistica",
            "codExterno": "836"
        },
        {
            "nome": "RTX TRANSPORTES & LOGISTICA LTDA",
            "codExterno": "853"
        },
        {
            "nome": "RADIAL TRANSPORTES",
            "codExterno": "857"
        },
        {
            "nome": "RA Express",
            "codExterno": "867"
        },
        {
            "nome": "Partners Logistics",
            "codExterno": "868"
        },
        {
            "nome": "Transportes Rodoviarios Teixeira Varajao Ltda",
            "codExterno": "872"
        },
        {
            "nome": "Oitava Regiao Transp.",
            "codExterno": "873"
        },
        {
            "nome": "Transportadora 5M",
            "codExterno": "875"
        },
        {
            "nome": "Zaz Transportes",
            "codExterno": "876"
        },
        {
            "nome": "Nova Uniao Logistica E Transportes Ltda - ME",
            "codExterno": "722"
        },
        {
            "nome": "Transportes Floresta Ltda",
            "codExterno": "724"
        },
        {
            "nome": "C.H.J. Transportes",
            "codExterno": "728"
        },
        {
            "nome": "Transportadora Joao Dias Ltda",
            "codExterno": "746"
        },
        {
            "nome": "Efitrans Transportes Ltda",
            "codExterno": "750"
        },
        {
            "nome": "Tranportadora Boicy S.A",
            "codExterno": "755"
        },
        {
            "nome": "Transportes Imediato Matao Ltda",
            "codExterno": "757"
        },
        {
            "nome": "Transportadora Labuta Eireli",
            "codExterno": "759"
        },
        {
            "nome": "Rajan Transp.",
            "codExterno": "763"
        },
        {
            "nome": "Pacifico Log Log. e Transp. Eireli",
            "codExterno": "765"
        },
        {
            "nome": "Fabricio Bertoldo Robe",
            "codExterno": "793"
        },
        {
            "nome": "Cavakheiro Logistica Ltda",
            "codExterno": "802"
        },
        {
            "nome": "Petrocargas",
            "codExterno": "812"
        },
        {
            "nome": "Trans Minas Transp.",
            "codExterno": "832"
        },
        {
            "nome": "AT-TRANS",
            "codExterno": "840"
        },
        {
            "nome": "Speedy Cargas Expressas Ltda -EPP",
            "codExterno": "848"
        },
        {
            "nome": "Planalto Transportes",
            "codExterno": "849"
        },
        {
            "nome": "BARTHOLO TRANSPORTES RODOVIARIOS LTDA",
            "codExterno": "854"
        },
        {
            "nome": "Expresso Leomar Ltda",
            "codExterno": "855"
        },
        {
            "nome": "MDS LOGISTICA",
            "codExterno": "731"
        },
        {
            "nome": "Transportes Integrados do Maranhao",
            "codExterno": "732"
        },
        {
            "nome": "M A Capasso Transportes e Armazenamento",
            "codExterno": "745"
        },
        {
            "nome": "Sete Lagoas Transportes Ltda",
            "codExterno": "748"
        },
        {
            "nome": "RCINCO TRANSPORTES LTDA. - EPP",
            "codExterno": "752"
        },
        {
            "nome": "Lovitha Transportes Ltda",
            "codExterno": "761"
        },
        {
            "nome": "TRANSPEN CARGAS",
            "codExterno": "762"
        },
        {
            "nome": "EBMAC Transp.",
            "codExterno": "770"
        },
        {
            "nome": "MF Transp.Logistica Ltda",
            "codExterno": "780"
        },
        {
            "nome": "SILLAS TRANSPORTES",
            "codExterno": "788"
        },
        {
            "nome": "TNT Mercurio Cargas e Encomendas Expressas S/A",
            "codExterno": "794"
        },
        {
            "nome": "Rotativa Transportes e Servico Eireli",
            "codExterno": "795"
        },
        {
            "nome": "Rapido Sunorte Ltda",
            "codExterno": "817"
        },
        {
            "nome": "HJL Servicos Logisticos - EPP Ltda",
            "codExterno": "824"
        },
        {
            "nome": "BH Services Transp.",
            "codExterno": "847"
        },
        {
            "nome": "M T Couto Ferreira Transportes -ME",
            "codExterno": "850"
        },
        {
            "nome": "Estrada Biomassa",
            "codExterno": "866"
        },
        {
            "nome": "Transmeta Transportes",
            "codExterno": "870"
        },
        {
            "nome": "Multicolor Textil Ltda",
            "codExterno": "718"
        },
        {
            "nome": "Estilo Cargas E Encomendas Ltda",
            "codExterno": "723"
        },
        {
            "nome": "Cavalheiro Logistics Ltda",
            "codExterno": "729"
        },
        {
            "nome": "Transportes Gislon",
            "codExterno": "733"
        },
        {
            "nome": "Transpen",
            "codExterno": "742"
        },
        {
            "nome": "D Mari - Locacao, Transportes e Logistica Ltda",
            "codExterno": "747"
        },
        {
            "nome": "Fama Transportes de Cargas Ltda - ME",
            "codExterno": "758"
        },
        {
            "nome": "Itaguary Ag.e Transp.de Cargas Ltda",
            "codExterno": "764"
        },
        {
            "nome": "Brasil Logistica Ltda",
            "codExterno": "769"
        },
        {
            "nome": "Mobile Transportadora",
            "codExterno": "771"
        },
        {
            "nome": "VMB Comércio e Serviços Ltda EPP",
            "codExterno": "772"
        },
        {
            "nome": "SMARTTRANS LOGISTICA LTDA",
            "codExterno": "785"
        },
        {
            "nome": "GEAN G.G. Transp.Ltda",
            "codExterno": "799"
        },
        {
            "nome": "Tomasi Logistica Ltda",
            "codExterno": "800"
        },
        {
            "nome": "Atual Cargas Trasnp.",
            "codExterno": "801"
        },
        {
            "nome": "UNALOG - Uniao Alterosa Logistica Ltda",
            "codExterno": "811"
        },
        {
            "nome": "Conecta Transportes",
            "codExterno": "818"
        },
        {
            "nome": "Maximo Oliveira e Soares Transportes",
            "codExterno": "819"
        },
        {
            "nome": "Watex Transportes e Logistica Ltda",
            "codExterno": "845"
        },
        {
            "nome": "Rekarga Transportes",
            "codExterno": "846"
        },
        {
            "nome": "Empresa Gontijo de Transportes",
            "codExterno": "858"
        },
        {
            "nome": "D´MARI - LOCACAO, TRANSPORTES E LOGISTICA LTDA - E",
            "codExterno": "859"
        },
        {
            "nome": "OITAVA REGIAO",
            "codExterno": "860"
        },
        {
            "nome": "Oitava Regiao Transportes Eireli",
            "codExterno": "865"
        },
        {
            "nome": "Viacao Santa Cruz Ltda",
            "codExterno": "717"
        },
        {
            "nome": "MOACYR CEVOLI JUNIOR - ME",
            "codExterno": "719"
        },
        {
            "nome": "TRANSPORTADORA M.M.A. LTDA",
            "codExterno": "720"
        },
        {
            "nome": "Bigfer Ind.Com.de Ferrag.",
            "codExterno": "734"
        },
        {
            "nome": "Cavalheiro Logistics Ltda",
            "codExterno": "735"
        },
        {
            "nome": "Transpotadora Especialista Ltda",
            "codExterno": "736"
        },
        {
            "nome": "PBC LOGISTICA",
            "codExterno": "737"
        },
        {
            "nome": "Transportadora Americana Ltda",
            "codExterno": "751"
        },
        {
            "nome": "T.I.TRANSPORTES",
            "codExterno": "777"
        },
        {
            "nome": "Transportadora Sorocaba",
            "codExterno": "778"
        },
        {
            "nome": "Unitrans Transp. Com.e Servicos Ltda",
            "codExterno": "782"
        },
        {
            "nome": "EXCLUSICA LOGISTICA E TRANSPORTES",
            "codExterno": "786"
        },
        {
            "nome": "New Route Express Transportes",
            "codExterno": "816"
        },
        {
            "nome": "MAGALHAES LOGISTICA LTDA - EPP",
            "codExterno": "822"
        },
        {
            "nome": "GIRO CERTO ENCOMENDAS LTDA - EPP",
            "codExterno": "823"
        },
        {
            "nome": "P B Express",
            "codExterno": "839"
        },
        {
            "nome": "Transportadora J e R",
            "codExterno": "843"
        },
        {
            "nome": "Vip Express Me",
            "codExterno": "844"
        },
        {
            "nome": "Transportadora A.L. Ltda",
            "codExterno": "864"
        },
        {
            "nome": "Seven Transportes",
            "codExterno": "869"
        },
        {
            "nome": "Transp. Diametral Ltda -ME",
            "codExterno": "871"
        },
        {
            "nome": "Transp. 5M",
            "codExterno": "874"
        },
        {
            "nome": "Train Transportes",
            "codExterno": "885"
        },
        {
            "nome": "DEMORE TRANSPORTES EIRELI ME",
            "codExterno": "897"
        },
        {
            "nome": "TRANSPORTADORA DEPOLLI LT",
            "codExterno": "955"
        },
        {
            "nome": "TRANSPORTADORA DEPOLLI LT",
            "codExterno": "956"
        },
        {
            "nome": "PADUA  SANTOS TRANSPORTES LTDA",
            "codExterno": "960"
        },
        {
            "nome": "TRANSPORTES MANN",
            "codExterno": "980"
        },
        {
            "nome": "CRISTAL TRANSPORTES",
            "codExterno": "981"
        },
        {
            "nome": "TRANSPORTADORA CONTINENTAL LT",
            "codExterno": "985"
        },
        {
            "nome": "TRANSPORTADORA TRANSBABI LTDA",
            "codExterno": "988"
        },
        {
            "nome": "LJP TRANSPORTES",
            "codExterno": "1012"
        },
        {
            "nome": "WSS TRANSPORTES RODOVIARIOS EIRELI",
            "codExterno": "1015"
        },
        {
            "nome": "URANO TRANSPORTES E LOGISTICA LTDA",
            "codExterno": "1016"
        },
        {
            "nome": "F.Ferraz Chiquetti",
            "codExterno": "1022"
        },
        {
            "nome": "AZUL LINHAS AEREAS BRASILEIRAS S.A.",
            "codExterno": "1023"
        },
        {
            "nome": "M.B. SANTOS TRANSPORTES E LOGISTICA",
            "codExterno": "1028"
        },
        {
            "nome": "Construtora Lua Nova",
            "codExterno": "1050"
        },
        {
            "nome": "JHT TRANSPORTE",
            "codExterno": "1053"
        },
        {
            "nome": "MANOSLOG",
            "codExterno": "1054"
        },
        {
            "nome": "TRANSLIBERDADE TRANSPORTE  LOGISTICA LTDA",
            "codExterno": "1056"
        },
        {
            "nome": "HOPE TRANSPORTES LTDA",
            "codExterno": "1057"
        },
        {
            "nome": "3A TRANSPORTE LOGISTICA E ARMAZENAMENTO LTDA",
            "codExterno": "1058"
        },
        {
            "nome": "PHENIX-COM.LOCACOES,LOGISTICA.SERV. TRANSPORTES",
            "codExterno": "1059"
        },
        {
            "nome": "IGUACU EXPRESS LTDA",
            "codExterno": "1061"
        },
        {
            "nome": "ROCHA  NEVES TRANSPORTES LTDA",
            "codExterno": "1065"
        },
        {
            "nome": "Transportes Knaul Ltda",
            "codExterno": "877"
        },
        {
            "nome": "MULTI SERVICE TRANSPORTES",
            "codExterno": "908"
        },
        {
            "nome": "Usimide Indústria Metalúrgica Ltda",
            "codExterno": "6"
        },
        {
            "nome": "Troca Transportes",
            "codExterno": "933"
        },
        {
            "nome": "AZURE EXPRESS TRANSPORTE E LOGISTICA LTDA",
            "codExterno": "934"
        },
        {
            "nome": "TRANSVAPT LITORAL",
            "codExterno": "944"
        },
        {
            "nome": "FEDERAL TRANSPORTES LTDA",
            "codExterno": "945"
        },
        {
            "nome": "MARCO A. HERNANDEZ TRANSPORTES",
            "codExterno": "958"
        },
        {
            "nome": "RAPIDO TRES PONTAS PAULISTA TRANSPORTES RODOVIARIO",
            "codExterno": "961"
        },
        {
            "nome": "EXPRESSO VERA CRUZ LT",
            "codExterno": "970"
        },
        {
            "nome": "OLM TRANSPORTE RODOVIARIO DE CARGAS LTDA",
            "codExterno": "971"
        },
        {
            "nome": "ADELOR TRANSPORTES LT",
            "codExterno": "976"
        },
        {
            "nome": "Logservice Logistica e Transportes Eireli",
            "codExterno": "987"
        },
        {
            "nome": "ANGELA MARIA BOTREL DE MOURA PARENTI",
            "codExterno": "997"
        },
        {
            "nome": "EXPRESSO NEPOMUCENO S/A",
            "codExterno": "1000"
        },
        {
            "nome": "DETONA LOG EXPRESS TRANSPORTES E LOGISTICA EIRELI",
            "codExterno": "1006"
        },
        {
            "nome": "2ELOG EXPRESS TRANSPORTE LTDA",
            "codExterno": "1019"
        },
        {
            "nome": "Anjos Migara",
            "codExterno": "1029"
        },
        {
            "nome": "MADE-EXPRESS",
            "codExterno": "1051"
        },
        {
            "nome": "MARBENS TRANSPORTES EIRELI",
            "codExterno": "1052"
        },
        {
            "nome": "VIA VERDE - JOSE AUGUSTO DOS SANTOS TRANSPORTE",
            "codExterno": "1055"
        },
        {
            "nome": "TRANSPORTADORA CASI L.A.L EIRELI",
            "codExterno": "1060"
        },
        {
            "nome": "POWER LOGISTICA E TRANSPORTES LTDA",
            "codExterno": "1062"
        },
        {
            "nome": "CAETANO TRANSPORTES EIRELI",
            "codExterno": "887"
        },
        {
            "nome": "TRANSLAGUNA",
            "codExterno": "888"
        },
        {
            "nome": "Br Log",
            "codExterno": "898"
        },
        {
            "nome": "Tempo Real Transp. e Log.",
            "codExterno": "904"
        },
        {
            "nome": "Vale Logistica",
            "codExterno": "906"
        },
        {
            "nome": "ANDERLE TRANSPORTES",
            "codExterno": "916"
        },
        {
            "nome": "Rotas Expresso",
            "codExterno": "921"
        },
        {
            "nome": "Transp. Hellus Brasil Eireli",
            "codExterno": "923"
        },
        {
            "nome": "Transcajuru Ltda",
            "codExterno": "924"
        },
        {
            "nome": "TRANSPAULISTANA SP LOGISTICA EIRELI",
            "codExterno": "942"
        },
        {
            "nome": "AL-VIX TRANSPORTES LTDA",
            "codExterno": "964"
        },
        {
            "nome": "TRANSFELL MATAO TRANSPORTES LTDA",
            "codExterno": "973"
        },
        {
            "nome": "BRASIL CARGAS TRANSPORTES EIRELI",
            "codExterno": "978"
        },
        {
            "nome": "RTL TRANSPORTES LTDA",
            "codExterno": "982"
        },
        {
            "nome": "SS DELIVERY EXPRESS SOLUCOES LOGISTICAS LTDA",
            "codExterno": "983"
        },
        {
            "nome": "VELOCARGAS BRASIL TRANSPORTE RODOVIARIO E LOGISTIC",
            "codExterno": "992"
        },
        {
            "nome": "METEORO TRANSPORTES DE CARGAS -  EIRELI",
            "codExterno": "1005"
        },
        {
            "nome": "MILANI LOGISTICA TRANSPORTES EIRELI",
            "codExterno": "1009"
        },
        {
            "nome": "ALEXANDRE LIBARDI",
            "codExterno": "1024"
        },
        {
            "nome": "TRB TRANSPORTES EIRELI",
            "codExterno": "1034"
        },
        {
            "nome": "TRANSPORTES KELLER LTDA",
            "codExterno": "1063"
        },
        {
            "nome": "SDF TRANSPORTES EIRELI",
            "codExterno": "1064"
        },
        {
            "nome": "VAS LOGISTICA E TRANSPORTES EIRELI",
            "codExterno": "1066"
        },
        {
            "nome": "O PROPRIO",
            "codExterno": "884"
        },
        {
            "nome": "Solucao Transp.",
            "codExterno": "889"
        },
        {
            "nome": "Bigtrans",
            "codExterno": "890"
        },
        {
            "nome": "ILARIO ARNOLD",
            "codExterno": "894"
        },
        {
            "nome": "Rodoviario Camilo dos Santos Filho Ltda",
            "codExterno": "900"
        },
        {
            "nome": "TRANSLUZ TRANSPORTES",
            "codExterno": "911"
        },
        {
            "nome": "TEHIAR SISTEMAS DE TRANSPORTES E LOJISTICA LTDA",
            "codExterno": "920"
        },
        {
            "nome": "AZURE EXPRESS TRANSPORTE E LOGISTICA LTDA",
            "codExterno": "931"
        },
        {
            "nome": "Estrela Transportes",
            "codExterno": "937"
        },
        {
            "nome": "Leite Express Transporte Eireli",
            "codExterno": "940"
        },
        {
            "nome": "D N T TRANSPORTES RODOVIARIOS EIRELI",
            "codExterno": "948"
        },
        {
            "nome": "TRANSFORT TRANSPORTES",
            "codExterno": "949"
        },
        {
            "nome": "LUZIANA-EX TRANSPORTES RODOVIARIO LTDA",
            "codExterno": "950"
        },
        {
            "nome": "GEAN TRANSPORTES E LOGISTICA LTDA.",
            "codExterno": "957"
        },
        {
            "nome": "ADELOR TRANSPORTES LT",
            "codExterno": "959"
        },
        {
            "nome": "INTERCARGO TRANSPORTES LT",
            "codExterno": "962"
        },
        {
            "nome": "A G DA ROCHA TRANSPORTES",
            "codExterno": "969"
        },
        {
            "nome": "PHOENIX LOG TRANSPORTES EIRELI",
            "codExterno": "979"
        },
        {
            "nome": "JOEELOG TRANSPORTES",
            "codExterno": "984"
        },
        {
            "nome": "TRANSPORTES CHANGUEIRO EIRELI",
            "codExterno": "1003"
        },
        {
            "nome": "TAV TRANSPORTES RODOVIARIO DE CARGAS EIRELI",
            "codExterno": "1014"
        },
        {
            "nome": "TSL TRANSPORTES",
            "codExterno": "1031"
        },
        {
            "nome": "EXPRESSO RADIANTE TRANSPORTES EIRELI",
            "codExterno": "1035"
        },
        {
            "nome": "RODOPACK TRANSPORTES LTDA",
            "codExterno": "1039"
        },
        {
            "nome": "NSA Transp.",
            "codExterno": "879"
        },
        {
            "nome": "Logservice Logistica e Transp. Eireli",
            "codExterno": "891"
        },
        {
            "nome": "WORLD LOGISTICA",
            "codExterno": "892"
        },
        {
            "nome": "Intercomex Transporte Rodoviários de Cargas",
            "codExterno": "901"
        },
        {
            "nome": "Vip Transp.",
            "codExterno": "902"
        },
        {
            "nome": "Lopes Sul Transportes",
            "codExterno": "903"
        },
        {
            "nome": "Alciro Biancati",
            "codExterno": "905"
        },
        {
            "nome": "BROS LOG",
            "codExterno": "907"
        },
        {
            "nome": "Transp. Tonico Ltda",
            "codExterno": "909"
        },
        {
            "nome": "Folkas Express ( Volpi Express)",
            "codExterno": "936"
        },
        {
            "nome": "COOPERCAB",
            "codExterno": "966"
        },
        {
            "nome": "FRANCISCO VASCONCELOS DE QUEIROZ - EIRELI",
            "codExterno": "947"
        },
        {
            "nome": "KUNZ  BRAUN LTDA",
            "codExterno": "954"
        },
        {
            "nome": "TRANSPORTADORA PRINCESA DO SUL LTDA",
            "codExterno": "989"
        },
        {
            "nome": "GEAN G.G. TRANSPORTES LTDA.",
            "codExterno": "991"
        },
        {
            "nome": "OITAVA REGIAO TRANSPORTES EIRELI",
            "codExterno": "1001"
        },
        {
            "nome": "TRANSMINATTI TRANSPORTES LTDA",
            "codExterno": "1002"
        },
        {
            "nome": "TLA TRANSPORTES DE CARGAS LTDA",
            "codExterno": "1004"
        },
        {
            "nome": "ITEX - TRANSPORTE DE ENCOMENDAS EXPRESSAS LTDA",
            "codExterno": "1020"
        },
        {
            "nome": "EXPRESSO VALE ANDRADAS SP TRANSPORTES E REPRESENTA",
            "codExterno": "1021"
        },
        {
            "nome": "AGS-Log",
            "codExterno": "1025"
        },
        {
            "nome": "THIAGO LINS REZENDE",
            "codExterno": "1033"
        },
        {
            "nome": "A. R. CARVALHO JUNIOR TRANSPORTES",
            "codExterno": "1036"
        },
        {
            "nome": "EXPRESSO CAMILO DOS SANTOS LTDA",
            "codExterno": "1037"
        },
        {
            "nome": "LDB LOGISTICA E TRANSPORTES LTDA",
            "codExterno": "880"
        },
        {
            "nome": "Slot Transportes",
            "codExterno": "881"
        },
        {
            "nome": "ITJ FINGER TRANSP.EIRELI",
            "codExterno": "882"
        },
        {
            "nome": "Transcomex Transportes e Logística",
            "codExterno": "895"
        },
        {
            "nome": "Unesul de transportes ltda",
            "codExterno": "913"
        },
        {
            "nome": "Belare Logistica E Transp.",
            "codExterno": "918"
        },
        {
            "nome": "Translovato",
            "codExterno": "919"
        },
        {
            "nome": "RODOVITOR - TRANSPORTES E LOCACAO DE VEICULOS LTDA",
            "codExterno": "932"
        },
        {
            "nome": "5DW Transportes e Armazenagem de Cargas Ltda",
            "codExterno": "938"
        },
        {
            "nome": "Rodonasa Cargas e Encomendas Ltda",
            "codExterno": "939"
        },
        {
            "nome": "PEL TRANSPORTES LTDA",
            "codExterno": "941"
        },
        {
            "nome": "Roamar Logistica Eireli",
            "codExterno": "952"
        },
        {
            "nome": "MF TRANSPORTE RODOVIARIO LOGISTICA CASTANHAL LTDA",
            "codExterno": "974"
        },
        {
            "nome": "DAJEX MINAS TRANSPORTES LTDA",
            "codExterno": "975"
        },
        {
            "nome": "BRASPRESS TRANSPORTES URGENTES LTDA",
            "codExterno": "995"
        },
        {
            "nome": "VIACAO S CRISTOVAO LT",
            "codExterno": "996"
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
    // return mockData
    try {
        let response = await fetch("https://rex.clicvenda.com.br/cvIntegradorSenior/rest/Listas/executarRequisicaoExterna", config)
        let { resultado } = await response.json();
        resultado.map(data => data.filtro = `${data.codExterno} - ${data.nome}`);
        return resultado;
    } catch (err) {
        console.error({ message: 'Erro na requisição!', details: err })
    }
}