let checkboxToday = document.getElementById("checkboxToday");
let inputDateBeforeTo = document.getElementById("antesDe");
let inputDateAfterTo = document.getElementById("despuesDe");

let selectorLanguaje = document.getElementById("idioma");
const languages = ["es", "en", "de"];
let languageSelected = ""

let dateBeforeTo = "";
let dateAfterTo = "";

inputDateBeforeTo.addEventListener("change", () => {
    dateBeforeTo = inputDateBeforeTo.value;
    console.log(dateBeforeTo);
});

inputDateAfterTo.addEventListener("change", () => {
    dateAfterTo = inputDateAfterTo.value;
    console.log(dateAfterTo);
});

selectorLanguaje.addEventListener("change", function () {
    let languaje = selectorLanguaje.value;
    switch (languaje) {        
        case "1":
            languageSelected = languages[0];
            break;
        case "2":
            languageSelected = languages[1];
            break;
        case "3":
            languageSelected = languages[2];
            break;
        default:
            languageSelected = languages[0];
            break;
    }

})

checkboxToday.addEventListener("change", function () {    
    if (checkboxToday.checked) {
       
        inputDateBeforeTo.setAttribute("disabled", "disabled");
        inputDateAfterTo.setAttribute("disabled", "disabled");
    } else {
        inputDateBeforeTo.removeAttribute("disabled");
        inputDateAfterTo.removeAttribute("disabled");
    }
});