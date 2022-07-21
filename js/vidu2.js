const form1 = document.getElementById('form1');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const container = document.querySelector('.container');
const anmtBox = document.querySelector('.box-animation');

// function errorMessage(pElement,message) {
//     const formRow=pElement.parentElement.parentElement;

//     if (formRow.classList.contains('success')){
//         formRow.classList.remove('success');
//         formRow.classList.add('error');
//     }
//     else{
//         formRow.classList.add('error');
//     }
//     formRow.querySelector('.message').textContent = message;
// }

// function successMessage(pElement) {
//     if (formRow.classList.contains('error')){
//         formRow.classList.remove('error');
//         formRow.classList.add('success');
//     }
//     else{
//         formRow.classList.add('success');
//     }
// }


////////////////////////////////////////////////////////////////
// Tạo hàm kiểm tra lỗi cho 
function errorMessage(pElement, message) {
    const formRow = pElement.parentElement.parentElement;
    if (formRow.classList.contains('success')) {
    formRow.classList.remove('success');
    formRow.classList.add('error');
    } else {
    formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
}
    function successMessage(pElement) {
    const formRow = pElement.parentElement.parentElement;
    if (formRow.classList.contains('error')) {
    formRow.classList.remove('error');
    formRow.classList.add('success');
    } else {
    formRow.classList.add('success');
    }
}
//////////////////////////
//Kiểm tra lỗi cho Firstname
////////////////////////////////
function checkFirstname() {
    if (fname.value==='') {
        errorMessage(fname,"This field is required.");
    }
    else{
        successMessage(fname);
    }
}
//////////////////////////
//Kiểm tra lỗi cho lastname
////////////////////////////////
function checkLastname() {
    if (lname.value==='') {
        errorMessage(lname,"This field is required.");
    }
    else{
        successMessage(lname);
    }
}
//////////////////////////
//Kiểm tra định dạng email
////////////////////////////////
function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}
//////////////////////////
//Kiểm tra lỗi cho email về định dạng và nhập vào ô email
////////////////////////////////
function checkEmail() {
    if (email.value==='') {
        errorMessage(email,"This field is required.");
    }
    else if(!validateEmail(email.value)){
        errorMessage(email,"The email is invalid.")
    }
    else{
        successMessage(email);
    }
}

// function checkEmail() {
//     const checkE=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
//     if (email.value==='') {
//         errorMessage(email,"This field is required");
//     }
//     else if(!checkE.test(email.value)){
//         errorMessage(email,"The email is invalid")
//     }
//     else{
//         successMessage(email);
//     }
// }
//////////////////////////
//bắt sự kiện khi ấn vào ô input mà ấn ra ngoài không có gì
////////////////////////////////
fname.addEventListener('blur',checkFirstname,true);
lname.addEventListener('blur',checkLastname,true);
email.addEventListener('blur',checkEmail,true);
//////////////////////////
//Kiểm tra bắt sự kiện cho submit
////////////////////////////////

form1.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formRows = document.querySelectorAll('.form-row');
    let arrformRows = Array.from(formRows);
    arrformRows.pop();
    let IsValid = true;
    arrformRows.forEach(item =>{
        console.log(item.classList.contains('success'));
        if(!item.classList.contains('success')){
            IsValid = false;
        }
    });
    if (IsValid) {
        container.classList.add('complete');
        alert("You have submitted successfully. Thank you.");
        anmtBox.classList.add('show');
        } else {
        container.classList.remove('complete');
        anmtBox.classList.remove('show');
         }
});
/////////////////////////////////////////////////////////////////
//ấn sub thì chuyển qua trang kế bên vào có tài liệu ỏe trang kế bên bằng URL
//console.log(window.location);
var ho;
var ten;
var mail;
var url = location.href;
console.log(url);
if(location.pathname==="/vidu2.html"){
    console.log('Dia chi nhap dung');
    form1.addEventListener('submit', function (e){
        e.preventDefault();
    
        var i= url.length;
        while (url[i] !== '/')  {
            i--;
        }
        url =url.slice(0,i) + `/vd22.html?ho=${fname.value}&ten=${lname.value}&email=${email.value}`;
        //window.location.href = new URL(url);
        window.open(url,'guidulieu');
        console.log(url);
    })
}