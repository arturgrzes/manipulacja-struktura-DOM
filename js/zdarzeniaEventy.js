'use script'
//efekt powiekszania napisu po najechaniu
var mainHeader = document.getElementById('main-header');
//przypisujemy nagłówek strony do zmiennej

function resize(e) {
    console.log(e.type);
}


mainHeader.onmouseover = resize; //wywołanie funkcji resize po najechaniu myszką na nagłówek
mainHeader.onmouseout = resize;  //wywołanie funkcji resize po zjechaniu myszką z nagłóweka