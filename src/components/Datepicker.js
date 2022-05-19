import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';

export function Datepicker({ initialDate, onChange, readonly, disabled, removeBtn }) {
    addLocale('br', {
        firstDayOfWeek: 1,
        dayName: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        clear: 'Limpar'
    });
    return (
        <Calendar
            mask="99/99/9999"
            dateFormat='dd/mm/yy'
            locale='br'
            showIcon={!removeBtn}
            readOnlyInput={readonly}
            disabled={disabled}
            onChange={onChange}
            value={initialDate}
            showOnFocus={false}
            className={'w-full p-inputtext-sm'}
        />
    )
}