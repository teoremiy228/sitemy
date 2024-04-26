let counter = 0;
function Hermann(){
    counter++;
    let h1 = document.getElementById("bigtext")
    if(counter % 2 == 1){
        h1.innerHTML = "Hermann ne otvlekaisia"
    }
    else{
        h1.innerHTML = "Miras ne otvlekaisia"
    }
}

 function Anuar(){
    let nameElement = document.getElementById("inputName");
    let name = nameElement.value;

    let mailElement = document.getElementById("inputMail");
    let mail = mailElement.value;

   
    console.log(name, mail)
}
