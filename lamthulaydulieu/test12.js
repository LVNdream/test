
var ho;
var ten;
//const sb1 = document.getElementById('sb1');
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const form1 = document.getElementById("form1")

var url = location.href;
if(location.pathname==="/t1.html"){
    form1.addEventListener('submit', function (e){
        e.preventDefault();
    
        var i= url.length;
        while (url[i] !== '/')  {
            i--;
        }
        url =url.slice(0,i) + `/t2.html?ten=${in1.value}&ho=${in2.value}`;
        //window.location.href = new URL(url);
        window.open(url, 'guidulieu');
        console.log(url)
    })
}
if(location.pathname==='/t2.html'){
    //const bt2 = document.getElementById('bt2');
    const in3 = document.getElementById("in3");
    const in4 = document.getElementById("in4");
    console.log(location.href)
    const text = location.search;
    console.log(text)
    var indexten = text.indexOf('ten')+4;
    var indexho = text.indexOf('ho')+3;
    console.log(text.length)
    var i = indexten;
    while(text[i] != '&' && i <= text.length){
        i++;
        if(i > text.length){
            i=text.length;
            break;
        }
    }
    var ten = text.slice(indexten, i);
    in3.value=ten;

    i = indexho;
    while(text[i] != '&' && i <= text.length){
        i++;
        if(i > text.length){
            i=text.length;
            break;
        }
    }
    var ho = text.slice(indexho, i);
    in4.value=ho;
}

