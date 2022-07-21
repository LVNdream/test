var Form=document.getElementById('form_1');
var FromGroups=Form.getElementsByClassName('form__group')
// Error message
function errorMessage(ELement,ErrorName){
    var formMessage=ELement.parentElement.getElementsByClassName('form__message')[0];
    ELement.parentElement.classList.add("alet");
    formMessage.hidden=false;
    formMessage.innerText=ErrorName;
}
// Succes 
function SucessMessage(ELement){
    var formMessage=ELement.parentElement.getElementsByClassName('form__message')[0];
    ELement.parentElement.classList.remove('alet');
    formMessage.hidden=true;
    ELement.style.borderColor=' #4BB543'
}

// check First name
var InputFname=FromGroups[0].getElementsByClassName('form__input')[0];
InputFname.addEventListener('blur',IsFirstName);

function IsFirstName(){
    // InputFname=e.target;
    if(InputFname.value==''){
        errorMessage(InputFname,'Vui lòng nhập họ của bạn')
    }
    else{
        SucessMessage(InputFname)
    }
}

// check Last name
var InputLname=FromGroups[1].getElementsByClassName('form__input')[0];
InputLname.addEventListener('blur',IsLastName);

function IsLastName(){
    if(InputLname.value===''){
        errorMessage(InputLname,'Vui lòng nhập tên của bạn')
    }
    else{
        SucessMessage(InputLname)
    }
}

// check User name
var InputUname=FromGroups[2].getElementsByClassName('form__input')[0];
InputUname.addEventListener('blur',IsUserName);
function IsUserName(){
    if(InputUname.value=='' || InputUname.value.length < 5){
        errorMessage(InputUname,'Vui lòng nhập tên người dùng (>=5)')
    }
    else{
        SucessMessage(InputUname)
    }
}

// check Email
var InputEmail=FromGroups[3].getElementsByClassName('form__input')[0];
InputEmail.addEventListener('blur',IsEmailName);
function IsEmailName(){
    const checkE=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!checkE.test(InputEmail.value)){
        errorMessage(InputEmail,'Email không hợp lệ')
    }
    else{
        SucessMessage(InputEmail)
    }
}

// submit form
var Submit=document.getElementById('submit__btn');
Submit.addEventListener('click',SubmitInfo);
function SubmitInfo(e){
    var isValid=1;
    e.preventDefault();
    IsFirstName();
    IsLastName();
    IsUserName();
    IsEmailName();
    for(var i=0;i<FromGroups.length;i++){
        if(FromGroups[i].classList.contains('alet')){
            isValid=0;
            break;
        }
    }

    if(isValid==1){
            var ArrayInfo=[];
            var newInfo={
                Fname:FromGroups[0].getElementsByClassName('form__input')[0].value,
                Lname:FromGroups[1].getElementsByClassName('form__input')[0].value,
                Uname:FromGroups[2].getElementsByClassName('form__input')[0].value,
                Email:FromGroups[3].getElementsByClassName('form__input')[0].value
            }      
            SetLocalStorage(newInfo,ArrayInfo)
            Form.style.borderColor='#4BB543';
    }
    else{
        Form.style.borderColor='#fd0303';
    }
   
}

function SetLocalStorage(newInfo,ArrayInfo){
    ArrayInfo.push(newInfo);
    window.localStorage.setItem('Info',JSON.stringify(ArrayInfo));
}



 function getLocalStogare(){
    var ArrayInfo=[]
    ArrayInfo=JSON.parse(window.localStorage.getItem('Info'));
    var main2=document.querySelector('.main2');
    for(var i=0 ;i<ArrayInfo.length;i++){
        var container=document.createElement('div')
        container.classList.add('info__container');
        var content=`
        <p class="info__stt">${i+1}</p>
        <p class="info__firstname">${ArrayInfo[i].Fname}</p>
        <p class="info__lastname">${ArrayInfo[i].Lname}</p>
        <p class="info__username">${ArrayInfo[i].Uname}</p>
        <p class="info__email">${ArrayInfo[i].Email}</p>
        `;
        container.innerHTML=content;
        main2.append(container);
    }
 }

 