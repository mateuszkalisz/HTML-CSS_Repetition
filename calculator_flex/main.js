const result = document.querySelector(".result");

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");
const p7 = document.querySelector(".p7");
const p8 = document.querySelector(".p8");
const p9 = document.querySelector(".p9");
const p0 = document.querySelector(".p0");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiple = document.querySelector(".multiple");

const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let iterator = 0;
let summary = 0;
let number1 = "";
let number2 = "";
let active = true;
let flag = 0;
let number=0;
const nullResult = 0;

//określenie ktora liczba jest klikana (pierwsza czy druga) oraz jaki rodzaj dzialania

plus.addEventListener("click", ()=>{

    if(number1 ==0){
        return;
    }

    flag = 1;
    if(iterator<2 && number1!=0 && flag>0){
        active = !active;
        iterator++;
    }
})

minus.addEventListener("click", ()=>{

    if(number1 ==0){
        return;
    }

    flag = 2;
    if(iterator<2 && number1!=0 && flag>0){
        active = !active;
        iterator++;
    }
})

multiple.addEventListener("click", ()=>{

    if(number1 ==0){
        return;
    }

    flag = 3;
    if(iterator<2 && number1!=0 && flag>0){
        active = !active;
        iterator++;
    }
})

divide.addEventListener("click", ()=>{

    if(number1 ==0){
        return;
    }

    flag = 4;
    if(iterator<2 && number1!=0 && flag>0){
        active = !active;
        iterator++;
    }
})


//ustawienie liczby pierwszej i drugiej

p1.addEventListener("click", ()=>{

    p1.style.color = "white";

    setTimeout(()=>{
        p1.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=1;
        result.textContent = number1;
    }
    else{
        number2 +=1;
        result.textContent = number2;
    }
})

p2.addEventListener("click", ()=>{

    p2.style.color = "white";

    setTimeout(()=>{
        p2.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=2;
        result.textContent = number1;
    }
    else{
        number2 +=2;
        result.textContent = number2;
    }
})

p3.addEventListener("click", ()=>{

    p3.style.color = "white";

    setTimeout(()=>{
        p3.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=3;
        result.textContent = number1;
    }
    else{
        number2 +=3;
        result.textContent = number2;
    }
})

p4.addEventListener("click", ()=>{

    p4.style.color = "white";

    setTimeout(()=>{
        p4.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=4;
        result.textContent = number1;
    }
    else{
        number2 +=4;
        result.textContent = number2;
    }
})

p5.addEventListener("click", ()=>{

    p5.style.color = "white";

    setTimeout(()=>{
        p5.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=5;
        result.textContent = number1;
    }
    else{
        number2 +=5;
        result.textContent = number2;
    }
})

p6.addEventListener("click", ()=>{

    p6.style.color = "white";

    setTimeout(()=>{
        p6.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=6;
        result.textContent = number1;
    }
    else{
        number2 +=6;
        result.textContent = number2;
    }
})

p7.addEventListener("click", ()=>{

    p7.style.color = "white";

    setTimeout(()=>{
        p7.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=7;
        result.textContent = number1;
    }
    else{
        number2 +=7;
        result.textContent = number2;
    }
})

p8.addEventListener("click", ()=>{

    p8.style.color = "white";

    setTimeout(()=>{
        p8.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=8;
        result.textContent = number1;
    }
    else{
        number2 +=8;
        result.textContent = number2;
    }
})

p9.addEventListener("click", ()=>{

    p9.style.color = "white";

    setTimeout(()=>{
        p9.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=9;
        result.textContent = number1;
    }
    else{
        number2 +=9;
        result.textContent = number2;
    }
})

p0.addEventListener("click", ()=>{

    p0.style.color = "white";

    setTimeout(()=>{
        p0.style.color = "black";
    },200)

    number++;

    if(number==1){
        result.textContent = nullResult;
    }

    if(active){
        number1 +=0;
        result.textContent = number1;
    }
    else{
        number2 +=0;
        result.textContent = number2;
    }
})

handleClear = () =>{
    flag = 0;
    iterator = 0;
    active = true;
    result.textContent = summary;
    number = 0;
    number1="";
    number2="";
}

clear.addEventListener("click", ()=>{
    summary = 0;
    handleClear();
});


const handleSummary = () =>{

    if(flag == 1){
        summary = number1*1 + number2*1;
    }
    else if(flag == 2){
        summary = number1*1 - number2*1;
    }

    else if(flag == 3){
        summary = number1*1 * number2*1;
    }

    else if(flag == 4){
        summary = number1*1 / number2*1;
    }

    result.textContent = summary;

    handleClear();
}

equal.addEventListener("click", handleSummary);