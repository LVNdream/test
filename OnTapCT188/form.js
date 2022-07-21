var form_login=document.getElementById('form_1');
var formGroups=form_login.getElementsByClassName('form__group');
var formGroup=formGroups[0].getElementsByClassName('form__input')[0];
formGroup.addEventListener('blur',checkFirstName)
function checkFirstName(e){
    var formGroup=e.target;
    var errorMessage=formGroup.parentElement.getElementsByClassName("form__message")[0];
    if(formGroup.value ===''){
        formGroup.parentElement.classList.add("alet");
        errorMessage.hidden=false;
    }
    formGroup.addEventListener('change',function(e){
        formGroup.parentElement.classList.remove('alet');
        errorMessage.hidden=true;
    })
}

// check ten
var formGroups=form_login.getElementsByClassName('form__group');
var formGroup=formGroups[1].getElementsByClassName('form__input')[0];
formGroup.addEventListener('blur',checkLastName)
function checkLastName(e){
    var formGroup=e.target;
    var errorMessage=formGroup.parentElement.getElementsByClassName("form__message")[0];
    if(formGroup.value ==='' ){
        formGroup.parentElement.classList.add("alet");
        errorMessage.hidden=false;
    }
    formGroup.addEventListener('change',function(e){
        formGroup.parentElement.classList.remove('alet');
        errorMessage.hidden=true;
    })
}
// check Email
var formGroups=form_login.getElementsByClassName('form__group');
var formGroup=formGroups[2].getElementsByClassName('form__input')[0];

formGroup.addEventListener('blur',checkEmail)
function checkEmail(e){
    var formGroup=e.target;
    var errorMessage=formGroup.parentElement.getElementsByClassName("form__message")[0];
    const checkE=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!checkE.test(formGroup.value)){
        formGroup.parentElement.classList.add("alet");
        errorMessage.hidden=false;
    }
    formGroup.addEventListener('change',function(e){
        formGroup.parentElement.classList.remove('alet');
        errorMessage.hidden=true;
    })
}

// check all valid
var submit=form_login.getElementsByClassName('submit__btn')[0];
submit.addEventListener('click',function(e){
    var isValid=1;
    for(var i=0;i<formGroups.length;i++){
        if(formGroups[i].classList.contains('alet')){
            isValid=0;
        }
    }

    if(isValid==1){
        alert("Gui thanh cong");
    }
    else{
        alert("Cac truong chua hop le");
    }
})
