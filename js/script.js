// Поле для ввода 
let input = document.querySelector('.input');
// Часть для возведения в степень
let power = "";

//Ввести символ
function insert(num) {
        input.textContent = input.textContent + num;
}

// очистить всё после
function clean() {
    input.textContent = "";
    power = "";
}

//Очистить один символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length-1);
}

//Равно
function equel () {
    let exp = input.textContent;
    if(input.textContent.includes('^')) {
        let tmp = input.textContent.split('^');
        let num = eval(power);
        let pow = +tmp[1];
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }

    if(exp) {
        input.textContent = eval(exp);
    }
    
}

//Проценты
function percent() {
    input.textContent = eval(input.textContent)/100;
}

//Число ПИ
function pi() {
    input.textContent = input.textContent + Math.PI.toFixed(5);
}

//Число е
function e() {
    input.textContent = input.textContent + Math.E.toFixed(5);
}

//Корочень числа
function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent));
}
//Возведение в квадрат
function sqr() {
    input.textContent = Math.pow(eval(input.textContent), 2);
}

//-1 степень
function min() {
    input.textContent = Math.pow(eval(input.textContent), -1);
}

//Возведение в любую степень
function step() {
    power = input.textContent;
    input.textContent = input.textContent + "^";
}



//Логарифмы
function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent));
    }
    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent));
    }
}

//Переключение градусов и радианов
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы');
    }
} ) 

//Тригонометрия
function de(name) {
    if(name == 'sin') {
        
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)/180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }

    if(name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)/180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if(name == 'tan') {
        
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)/180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if(name == 'ctg') {
 
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)/180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}

//Память

