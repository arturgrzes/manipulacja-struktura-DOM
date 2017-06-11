'use script'


var secondLink = document.getElementsByTagName('a')[1];
//tworzymy zmienną z drugim linkiem

console.log(secondLink);


function alarm(event) {
   event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto kolejny link');
    console.log(event);
}
    
    
    secondLink.onclick = alarm; //wywołujemy funkcję alarm na drugim linku po kliknięciu
