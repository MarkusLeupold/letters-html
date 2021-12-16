'strict'

Number.prototype.toFixedInt = function (n) {
    let self_int = Math.floor(this);
    let l = self_int.toString().length;
    return "0".repeat(Math.max(0,n-l)) + self_int;
}

function init () {
    init_today_dates();
}

function init_today_dates () {
    let now = new Date();
    Array.from(document.getElementsByTagName('time'))
        .filter(e => e.matches('.today'))
        .forEach(e => set_date_without_time(e, now));
}

function set_date_without_time (time_element, date) {
    let date_de =
        date.getDate().toFixedInt(2)
        + '.' + (date.getMonth()+1).toFixedInt(2)
        + '.' + date.getFullYear();
    let date_iso = date.toISOString().match(/^(.*)T.*$/)[1];
    time_element.dateTime = date_iso;
    time_element.innerText = date_de;
}
