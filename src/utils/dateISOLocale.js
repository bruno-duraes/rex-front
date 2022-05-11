export function dateISOLocale(d) {
    // let tzoffset = new Date(d).getTimezoneOffset() * 60000; //offset in milliseconds
    // let localISOTime = (new Date(new Date(d) - tzoffset)).toISOString().slice(0, -1);
    // return localISOTime
    let date = d.toLocaleString().split(' ');
    let strDate = date[0].split('/').reverse().join('-');
    let strTime = date[1];
    return `${strDate}T${strTime}`;
}