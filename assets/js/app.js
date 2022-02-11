// get Element
let studentform = document.getElementById(stdForm);

stdForm.addEventListener('submit',function(e){
    e.preventDefault();

    let name = studentform.querySelector("input[placeholder='Name']");
    let roll = studentform.querySelector("input[placeholder='Roll Number']");
    let cls = studentform.querySelector("input[placeholder='Class']");
    let photo = studentform.querySelector("input[placeholder='Photo']");
    let gender = studentform.querySelector("input[type='radio']:checked");
    let ban = studentform.querySelector("input[placeholder='Bangla']");
    let eng = studentform.querySelector("input[placeholder='English']");
    let math = studentform.querySelector("input[placeholder='Math']");
    let science = studentform.querySelector("input[placeholder='Science']");
    let religion = studentform.querySelector("input[placeholder='Religion']");


    if(name.value == '' || roll.value == '' || cls == ''){
        alert('All filed are required');
    }else{
        console.log('done');
    }


});