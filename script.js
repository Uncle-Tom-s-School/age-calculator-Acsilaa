let inputs = document.getElementsByTagName('input');
let btn = document.getElementById("subm");

btn.addEventListener("click", click);
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", function(){
        inputs[i].parentElement.classList.remove("error");
    });
}
function click(){

    let day = inputs[0].value;
    let month = inputs[1].value;
    let year = inputs[2].value;

    let now = new Date();
    let errors = [];

    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

    if(month < 1 || month > 12 || month == ""){
        errors.push({"month" : "invalid"});
    }
    if(year < 0 || year == ""){
        errors.push({"year" : "invalid"});
    }
    if(day < 1 || day > daysInMonth(year*1, month*1) || day == ""){
        errors.push({"day" : "invalid"});
    }
    if(errors.length != 0){
        for(let i = 0; i < errors.length; i++){
            let field = Object.keys(errors[i])[0];
            document.getElementById(field).classList.add("error");
            document.getElementById(field).children[2].innerText = errors[i][field];
        }
        return;
    }
    let toCheck = new Date(year,month*1-1, day*1);
    toCheck.setFullYear(year)
    errors = [];
    if(toCheck > now){
        errors.push({"day":"must be past value"})
        errors.push({"month":"must be past value"})
        errors.push({"year":"must be past value"})
    }
    if(errors.length != 0){
        for(let i = 0; i < errors.length; i++){
            let field = Object.keys(errors[i])[0];
            document.getElementById(field).classList.add("error");
            document.getElementById(field).children[2].innerText = errors[i][field];
        }
        return;
    }

    //display
    let diff = now - toCheck
    
    years = diff / (1000*60*60*24*365)
    diff = years - Math.floor(years);
    years = Math.floor(years);
    months = diff / (1/12)
    diff = months - Math.floor(months);
    months = Math.floor(months);
    days = Math.floor(diff / (1/30))

    
}