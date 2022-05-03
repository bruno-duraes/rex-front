import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

export function Datepicker({ ...rest }) {
    const [date, setDate] = useState(new Date())
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
            {...rest}
            dateFormat='dd/mm/yy'
            mask="99/99/9999"
            locale='br'
            showIcon
            onChange={(e) => setDate(e.value)}
            value={date}
        />
    )
}