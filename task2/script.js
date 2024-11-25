let baga = +prompt("zattyn bagasy");
let sany = +prompt("zattyn sany");

function name() {
    let res = baga * sany;

    if ( res >= 5000 && res < 10000 ) {
        res = alert("10% jenildikpen :" + res);
        break;
    } else if (res >= 10000 && res < 20000){
        res = alert("20% jenildikpen :" + res);
        break;
    } else if ( res >= 20000){
        res = alert("30% jenildikpen :" + res);
        break;
    }
}

name();