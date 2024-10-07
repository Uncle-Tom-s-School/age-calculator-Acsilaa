let inputs = document.getElementsByTagName('input');
let btn = document.getElementById("subm");

btn.addEventListener("click", click);

function click(){
    //get values
    let day = inputs[0].value *1;
    let month = inputs[1].value *1;
    let year = inputs[2].value *1;
    //validate values
    let now = new Date();
    errors = [];

    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

    if(month < 1 || month > 12 || month == null){
        errors.push({"month" : "invalid"});
    }
    if(year < 0 || year == null){
        errors.push({"year" : "invalid"});
    }
    if(day < 0 || day > daysInMonth(year, month) || day == null){
        errors.push({"day" : "invalid"});
    }
    if(errors.length != 0){
        for(let i = 0; i < errors.length; i++){
            let field = Object.keys(errors[i])[0];
            document.getElementById(field).classList.add("error");
        }
        return;
    }
    //if error send answer
    //if ok calculate
    //display
}