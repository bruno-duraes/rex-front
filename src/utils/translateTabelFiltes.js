
export function translateTableFilters() {
    let d = document;
    setTimeout(() => {
        let header = Array.from(d.querySelectorAll('.p-column-header-content')).filter(({ innerText }) => (
            innerText == 'Numero' ||
            innerText == 'Ped Cliente' ||
            innerText == 'Data' ||
            innerText == 'Valor' ||
            innerText == 'Cliente' ||
            innerText == 'Representante'
        ))
        header.map((el) => {
            el.querySelector('.p-column-filter-menu-button').addEventListener('click', () => translate());
        });
        function translate() {
            setTimeout(() => {
                let menu = d.querySelectorAll('.p-column-filter-overlay')
                menu && menu[1] ? menu = menu[1] : menu && menu[0] ? menu = menu[0] : console.error('Menu Filter Undefined!');

                Array.from(menu.querySelectorAll('.p-button-label')).map((p) => {
                    p.innerHTML == 'Add Rule' ? p.innerHTML = 'Adicionar Regra' : null;
                    p.innerHTML == 'Clear' ? p.innerHTML = 'Limpar' : null;
                    p.innerHTML == 'Apply' ? p.innerHTML = 'Aplicar' : null;
                    menu.querySelector('.p-column-filter-add-rule button').addEventListener('click', () => translateOnClickAddRule(menu));

                })
            })
            function translateOnClickAddRule(menu) {
                let addButton = menu.querySelector('.p-column-filter-add-rule button');
                setTimeout(() => {
                    Array.from(menu.querySelectorAll('.p-column-filter-constraint')).map(el => {
                        el.querySelector('.p-button-label').innerText = 'Remover Regra';
                        el.querySelector('button').addEventListener('click', () => {
                            setTimeout(() => {
                                // menu.querySelector('.p-column-filter-add-rule').innerHTML = addButton;
                            })
                        })
                    })
                })
            }
        }
    });
}