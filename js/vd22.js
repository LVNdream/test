if(location.pathname==='/vd22.html'){
    //const bt2 = document.getElementById('bt2');
    const fname2 = document.getElementById("firstname2");
    const lname2 = document.getElementById("lastname2");
    const email2 = document.getElementById("email2");
    console.log(location.href)
    const text = location.search;
    console.log(text)
    var indexho = text.indexOf('ho')+3;
    var indexten = text.indexOf('ten')+4;
    var indexemail = text.indexOf('email')+6;
    
    console.log(text.length);

    var i = indexho;
    while(text[i] != '&' && i <= text.length){
        //console.log(text[i]);
        i++;
        if(i > text.length){
            i=text.length;
            break;
        }
    }
    var ho = text.slice(indexho, i);
    fname2.value=ho;

    i = indexten;
    while(text[i] != '&' && i <= text.length){
        //console.log(text[i]);
        i++;
        if(i > text.length){
            i=text.length;
            break;
        }
    }
    var ten = text.slice(indexten, i);
    lname2.value=ten;

    i = indexemail;
    console.log(indexemail);
    while(text[i] != '&' && i <= text.length){
        //console.log(text[i]);
        i++;
        if(i > text.length){
            i=text.length;
            break;
        }
    }
    var gmail = text.slice(indexemail, i);
    email2.value=gmail;
//////////////////////////////////////////////////
//////////////////////////////////////
//  Dua len localStorage
/////////////////////////////////////
      
}
