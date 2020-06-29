$( document ).ready(function() {
    $("#btn").click(
        function(){
            sendAjaxForm('result_form', 'deposit-calculator', 'calc.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            console.log($("form").serialize());
            $('#result_form').html(result);
            // console.log($("#"+ajax_form).serialize());
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}

let slider = document.getElementById('myRange');
let selector = document.getElementById('selector');
let selector1 = document.getElementById('selector1');
let slider1 = document.getElementById('myRange1');
let outputValue = document.getElementById('value');
let outputValue1 = document.getElementById('value1');
let outputDepositValue = document.getElementById('deposit-value');
let outputDepositValue1 = document.getElementById('deposit-value1');
let checkboxRefillOff = document.getElementById('refill-off');
let checkboxRefillOn = document.getElementById('refill-on');
let progressBar = document.getElementById('progressBar');
let progressBar1 = document.getElementById('progressBar1');




function myFunction() {

    if (checkboxRefillOff.checked === true) {
        outputDepositValue1.disabled = true;
        slider1.disabled = true;
        outputDepositValue1.value = 0;
        slider1.style.cursor = 'default';
        outputValue1.innerHTML = '';
        slider1.style.backgroundColor = '#B0B0A9';
        progressBar1.style.display = 'none';
        document.getElementById('slide-select').style.display = 'none';
    }
    else if (checkboxRefillOn.checked === true) {
        outputDepositValue1.disabled = false;
        slider1.disabled = false;
        outputDepositValue1.value = 0;
        slider1.style.cursor = 'pointer';
        slider1.style.backgroundColor = '#231F20';
        progressBar1.style.display = 'block';
        document.getElementById('slide-select').style.display = 'block';
    }
}
myFunction();

outputValue.innerHTML = '1 тыс. руб.';
outputValue1.innerHTML = '1 тыс. руб.';

const sliderCalc = function () {
    selector.style.left = (slider.value/30 + "%");
    progressBar.style.width = (slider.value/30 + "%");

    outputValue.innerHTML = slider.value;
   if (slider.value < 1000) {
       outputDepositValue.value = Number(this.value.toString().padEnd(this.value.toString().length + 3, '0'));
       slider.step = 1;
       outputValue.innerHTML = this.value + ' тыс. руб.';
   }
   else {
       slider.step = 10;
       outputDepositValue.value = (Math.round(this.value/10)*10).toString().padEnd(this.value.toString().length + 3, '0');
       switch ('0') {
           case slider.value[1]:
               outputValue.innerHTML = this.value[0] + ' млн. ' + (((this.value).toString())[2]).padEnd(2, '0') + ' тыс. руб.';
               break;
           case slider.value[2]:
               outputValue.innerHTML = this.value[0] + ' млн. ' + (((this.value).toString())[1]).padEnd(3, '0') + ' тыс. руб.';
               break;
           case slider.value[3]:
               outputValue.innerHTML = this.value[0] + ' млн. ' + ((((this.value).toString())[1]).concat(((this.value).toString())[2])).padEnd(3, '0') + ' тыс. руб.';
               break;
       }
   }
};

const sliderCalc1 = function () {
    selector1.style.left = (slider1.value/30 + "%");
    progressBar1.style.width = (slider1.value/30 + "%");

    outputValue1.innerHTML = slider1.value;
    if (slider1.value < 1000) {
        outputDepositValue1.value = Number(this.value.toString().padEnd(this.value.toString().length + 3, '0'));
        slider1.step = 1;
        outputValue1.innerHTML = this.value + ' тыс. руб.';
    }
    else {
        slider1.step = 10;
        outputDepositValue1.value = (Math.round(this.value/10)*10).toString().padEnd(this.value.toString().length + 3, '0');
        switch ('0') {
            case slider1.value[1]:
                outputValue1.innerHTML = this.value[0] + ' млн. ' + (((this.value).toString())[2]).padEnd(2, '0') + ' тыс. руб.';
                break;
            case slider1.value[2]:
                outputValue1.innerHTML = this.value[0] + ' млн. ' + (((this.value).toString())[1]).padEnd(3, '0') + ' тыс. руб.';
                break;
            case slider1.value[3]:
                outputValue1.innerHTML = this.value[0] + ' млн. ' + ((((this.value).toString())[1]).concat(((this.value).toString())[2])).padEnd(3, '0') + ' тыс. руб.';
                break;
        }
    }
};

slider.oninput = sliderCalc;
slider1.oninput = sliderCalc1;

