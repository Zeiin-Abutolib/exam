let Kod = +prompt("kod engiz");

function san( ){
    while(true){
        let num = +prompt("kod tauyp kor")
        if ( num === Kod) {
            alert("Durys");
            break;
        } else if (num < Kod - 5 || num > Kod +5){
            alert("alys")
        } else {
            alert("jaqyn")
        }
    }
}
san();