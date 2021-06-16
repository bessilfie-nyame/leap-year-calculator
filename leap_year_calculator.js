const leapYearStatus = (year) => {

    const leapYear = (year) => {
        return ((year%4===0) && (year%100!=0 || year%400===0))
    }
    
    return (leapYear(year)) ? "It's a LEAP YEAR" : "It's not a LEAP YEAR"
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".leap-year").onclick = () => {
        document.querySelector("#leap").innerHTML = `${leapYearStatus(document.querySelector("input").value)}`;
    }
})