//if(location.pathname ==='/vidu22lc.html'){
    console.log('page 2');
    const fname = document.getElementById("firstname2");
    const lname = document.getElementById("lastname2");
    const email = document.getElementById("email2");
    var arrayInfor=[];
    arrayInfor=JSON.parse(window.localStorage.getItem('cartInfor'));
    //  var i = 0;
    //console.log(arrayInfor[arrayInfor.length-1].ho);
    fname.value=arrayInfor[arrayInfor.length-1].ho;
    lname.value=arrayInfor[arrayInfor.length-1].ten;
    email.value=arrayInfor[arrayInfor.length-1].email;
    
//}
