export async function getLoggedUser() {
    let dadosUserLogado = parent.dadosUserLogadoPersonalizado();
    let mockData = {
        "cNome": "Industrial Rex",
        "cTitulo": "Rex",
        "cId": "40",
        "rId": "7040",
        "rCod": "26",
        "rNome": "26 - Lorival Hubner - ME",
        "rTipoId": 1,
        "params": {
            "paramPermiteCadastrarPedido": "S",
            "paramPermiteEditarVctDupl": "S",
            "paramPermiteVerPedidos": "S",
            "paramPermiteVerFinExtRep": "N",
            "paramPermiteVerRelatorios": "S",
            "paramPermiteAcessarPedidoV2": "Novo Pedido (Rex)",
            "paramDescontoFlex": "N",
            "paramPermiteDuplicarPedido": "S",
            "paramPermiteVerLinkDowns": "S",
            "paramExibeBotaoBoletosPed": "S",
            "paramUrlHome": "",
            "paramExibeCampoFrete": "N",
            "paramPermiteProdutoDuplicadoPedido": "S",
            "paramExibirMenuHome": "N",
            "paramPermiteVerClientes": "S",
            "paramPermiteEnviarEmailOrcamento": "N",
            "paramPermiteVerEstoque": "S",
            "paramEscolherInformarDuplicatas": "N",
            "paramExibeBotaoEspelhoPed": "S",
            "paramExibeCampoObsPed": "S",
            "paramExibeBotaoNFPed": "S",
            "paramUrlDashPBI": "",
            "paramFormulaPrecoItemVenda": "",
            "paramAbaEnderecosCliente": "S",
            "paramExigeAprovPedido": "N",
            "paramPermiteVerHistCli": "N",
            "paramPermiteVerDashLemon": "N",
            "paramPadraoOrcamento": "N",
            "paramPermiteCadAnexoPed": "S",
            "paramPermiteVerDashSlab": "N",
            "paramExibeBtnDadosAdcPed": "N",
            "paramDescontoCapaPedido": "N",
            "paramPermiteVerCatalogo": "S",
            "paramExibirPrevEntrega": "N",
            "paramCampoBonificacao": "N",
            "paramAcaoAgendamentoPedOrc": "N",
            "paramPermiteVerAgenda": "N",
            "paramPermiteVerPedExtRep": "N",
            "paramPermiteCriarEditarLinkDownload": "N",
            "paramPermiteVerPedsExt": "N",
            "paramPermiteCadastrarCliente": "S",
            "paramFormaDescAcrescItemVnd": "PORCENTAGEM",
            "paramModoCalculoIV": "QUANTIDADE",
            "paramTelaPedPersonlzExt": "N",
            "paramPermPrecoVendForaFaixa": "S",
            "paramExibeBtnDadosAdcCli": "N",
            "paramPermAltPrecoProdVenda": "2",
            "paramFormaExibRepAgenda": "H"
        },
        "menu": {
            "mnPedidoPersonalizado": {
                "label": "Compre",
                "icon": "glyphicon fas fa-shopping-basket",
                "url": "pedidopersonalizado",
                "controller": "PedidoPersonalizadoController",
                "templateUrl": "pedido.personalizado.view",
                "nmItem": "mnPedidoPersonalizado",
                "visible": false
            },
            "mnPedidoV2": {
                "label": "Novo Pedido (Rex)",
                "icon": "glyphicon glyphicon-shopping-cart",
                "url": "pedidov2",
                "controller": "PedidoV2Controller",
                "templateUrl": "pedido.v2.view",
                "nmItem": "mnPedidoV2",
                "visible": true
            },
            "mnPedido": {
                "label": "Pedidos",
                "icon": "glyphicon glyphicon-shopping-cart",
                "url": "pedido",
                "controller": "PedidoController",
                "templateUrl": "pedido.view",
                "nmItem": "mnPedido",
                "visible": true
            },
            "mnPedidoErp": {
                "label": "Pedidos",
                "icon": "glyphicon glyphicon-shopping-cart",
                "url": "pedidoerp",
                "controller": "PedidoErpController",
                "templateUrl": "pedido.erp.view",
                "nmItem": "mnPedidoErp",
                "visible": false
            },
            "mnFinanceiroErp": {
                "label": "Financeiro",
                "icon": "glyphicon glyphicon-usd",
                "url": "financeiroerp",
                "controller": "FinanceiroErpController",
                "templateUrl": "financeiro.erp.view",
                "nmItem": "mnFinanceiroErp",
                "visible": false
            },
            "mnPedidoErpRep": {
                "label": "Pedidos Externos",
                "icon": "glyphicon glyphicon-shopping-cart",
                "url": "pedidoerprep",
                "controller": "PedidoErpRepController",
                "templateUrl": "pedido.erp.rep.view",
                "nmItem": "mnPedidoErpRep",
                "visible": false
            },
            "mnHistCli": {
                "label": "Históricos",
                "icon": "glyphicon glyphicon-folder-open",
                "url": "histcliente",
                "controller": "HistoricoClienteController",
                "templateUrl": "historico.cliente.view",
                "nmItem": "mnHistCli",
                "visible": false
            },
            "mnClientes": {
                "label": "Clientes",
                "icon": "glyphicon glyphicon-user",
                "url": "cliente",
                "controller": "ClienteController",
                "templateUrl": "cliente.view",
                "nmItem": "mnClientes",
                "visible": true
            },
            "mnCatalogo": {
                "label": "Catálogo",
                "icon": "glyphicon glyphicon-list-alt",
                "url": "catalogo",
                "controller": "CatalogoController",
                "templateUrl": "catalogo.view",
                "nmItem": "mnCatalogo",
                "visible": true
            },
            "mnEstoque": {
                "label": "Estoque",
                "icon": "glyphicon glyphicon-th",
                "url": "estoque",
                "controller": "EstoqueController",
                "templateUrl": "estoque.view",
                "nmItem": "mnEstoque",
                "visible": true
            },
            "mnAgenda": {
                "label": "Agenda",
                "icon": "glyphicon glyphicon-calendar",
                "url": "agenda",
                "controller": "AgendaController",
                "templateUrl": "agenda.view",
                "nmItem": "mnAgenda",
                "visible": false
            },
            "mnMetas": {
                "label": "Relatórios",
                "icon": "glyphicon glyphicon-stats",
                "url": "relatorios",
                "controller": "RelatoriosController",
                "templateUrl": "relatorios.view",
                "nmItem": "mnMetas",
                "visible": true
            },
            "mnDashLemon": {
                "label": "Dashboard Lemon",
                "icon": "glyphicon glyphicon-dashboard",
                "url": "dashlemon",
                "controller": "DashboardLemonController",
                "templateUrl": "dashboard.lemon.view",
                "nmItem": "mnDashLemon",
                "visible": false
            },
            "mnDashPBI": {
                "label": "Dashboard Power BI",
                "icon": "glyphicon glyphicon-dashboard",
                "url": "dashpowerbi",
                "controller": "DashboardPowerbiController",
                "templateUrl": "dashboard.powerbi.view",
                "nmItem": "mnDashPBI",
                "visible": false
            },
            "mnDashSlab": {
                "label": "Dashboard",
                "icon": "glyphicon glyphicon-dashboard",
                "url": "dashslab",
                "controller": "DashboardSlabController",
                "templateUrl": "dashboard.slab.view",
                "nmItem": "mnDashSlab",
                "visible": false
            },
            "mnDownloads": {
                "label": "Links / Downloads",
                "icon": "glyphicon glyphicon-cloud-download",
                "url": "downloads",
                "controller": "CentralDownloadController",
                "templateUrl": "central.download.view",
                "nmItem": "mnDownloads",
                "visible": true
            }
        },
        "cContextIntegracao": "/cvIntegradorSenior",
        "cSubdominio": "rex"
    }
    return dadosUserLogado;
}