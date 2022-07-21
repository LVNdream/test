if(location.pathname ==='/tlc1.html'){
    console.log("page 1")
    const in1 = document.getElementById("in1");
    const in2 = document.getElementById("in2");
    const form1 = document.getElementById("form1");
    var url=location.href;
    form1.addEventListener('submit', function (e){
        e.preventDefault();
        var i= url.length;
        while (url[i] !== '/')  {
            i--;
        }
        localStorage.setItem('ho', in1.value);
        localStorage.setItem('ten', in2.value);
        url =url.slice(0,i) + `/tlc2.html`;
        window.open(url, 'laydulieu');
    })

}

/////////////////////////////
//Để lấy đữ liệu xuống dong input
if(location.pathname ==='/tlc1.html'){
    console.log('page 2')
    const in1get = document.getElementById("in1");
    const in2get = document.getElementById("in2");
    var ho = localStorage.getItem('ho');
    var ten = localStorage.getItem('ten');
    in1get.value = ho;
    in2get.value = ten;
}
/////////////////////////////////
if(location.pathname ==='/tlc2.html'){
    console.log('page 2')
    const in3 = document.getElementById("in3");
    const in4 = document.getElementById("in4");
    var ho = localStorage.getItem('ho');
    var ten = localStorage.getItem('ten');
    in3.value = ho;
    in4.value = ten;
}

//console.log(document.getElementById("in1").value);
//onsole.log(document.getElementById("in1").innerText);
