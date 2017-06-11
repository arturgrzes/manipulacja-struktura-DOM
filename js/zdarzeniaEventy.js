'use script'
//efekt powiekszania napisu po najechaniu
//var mainHeader = document.getElementById('main-header');
//przypisujemy nagłówek strony do zmiennej

//function resize(e) {
  //  console.log(e.type);
    
 //   if (e.type == 'mouseover') {
 //       mainHeader.style.fontSize = "70px";
 //   } else{
 //           mainHeader.style.fontSize = "inherit"
 ////       }
    
//}


//mainHeader.onmouseover = resize; //wywołanie funkcji resize po najechaniu myszką na nagłówek
//mainHeader.onmouseout = resize;  //wywołanie funkcji resize po zjechaniu myszką z nagłóweka



//zdarzenie propagacji
function klikHeader(){
    console.log("Kliknąłeś w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(e) {
    console.log("kliknąłeś w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1;
