function fkolor(){
    let a=document.getElementById("kolortła").value;
    document.getElementById("prawa").style.backgroundColor=a
}
function fczcionka(){
    opcja=document.getElementById("czcionki").selectedIndex;
    if (opcja==0) document.getElementById("prawa").style.fontFamily="Arial, Helvetica, sans-serif"
    if (opcja==1) document.getElementById("prawa").style.fontFamily="'Courier New', Courier, monospace"
    if (opcja==2) document.getElementById("prawa").style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"
    if (opcja==3) document.getElementById("prawa").style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
}
function frozmiar(){
    let a=document.getElementById("rozmair").value;
    document.getElementById("prawa").style.fontSize=a
}
function fkteksu(){
    let a=document.getElementById("ktekstu").value;
    document.getElementById("prawa").style.color=a
}
function fobraz(){
    if (document.getElementById("szymon").checked) document.getElementById("wynik").innerHTML="<button onclick='fobrazek()'><img src='images/szatanik.jpg'></button>"
    if (document.getElementById("kaz").checked) document.getElementById("wynik").innerHTML="<button onclick='fobrazek()'><img src='images/kaztrzaskowki.jpg'></button>"
    if (document.getElementById("karol").checked) document.getElementById("wynik").innerHTML="<button onclick='fobrazek()'><img src='images/KAROLfloryda.jpg'></button>"
    if (document.getElementById("cesarz").checked) document.getElementById("wynik").innerHTML="<button onclick='fobrazek()'><img src='images/cesarz.jpg'></button>"
}
function fobrazek(){
    w=""
    const piosenki=['https://www.youtube.com/watch?v=8fn0RANDfIA&ab_channel=Liminality','https://www.youtube.com/watch?v=2a8PgqWrc_4&ab_channel=TravisScottVEVO','https://www.youtube.com/watch?v=4YIzIQMR_gs&ab_channel=FutureVEVO']
    const strony=['https://www.wp.pl','https://www.instagram.com/','https://pl.wikipedia.org/wiki/Kie%C5%82basa']
    const zarrt=['https://rzimon777.github.io/ruletka/']
    if (document.getElementById("piosenka").checked && document.getElementById("strona").checked && document.getElementById("zart").checked){
        let a=Math.floor(Math.random() *3);
        if (a==0){
            let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.youtube.com/watch?v=8fn0RANDfIA&ab_channel=Liminality"
            if (b==1) w="https://www.youtube.com/watch?v=2a8PgqWrc_4&ab_channel=TravisScottVEVO"
            if (b==2) w="https://www.youtube.com/watch?v=4YIzIQMR_gs&ab_channel=FutureVEVO"
             
        }
        if (a==1){
            let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.wp.pl"
            if (b==1) w="https://www.instagram.com/"
            if (b==2) w="https://pl.wikipedia.org/wiki/Kie%C5%82basa"
        }
        if (a==2) w="https://rzimon777.github.io/ruletka/"
    }
    else if (document.getElementById("piosenka").checked && document.getElementById("strona").checked){
        let a=Math.floor(Math.random() *2);
        if (a==0){
            let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.youtube.com/watch?v=8fn0RANDfIA&ab_channel=Liminality"
            if (b==1) w="https://www.youtube.com/watch?v=2a8PgqWrc_4&ab_channel=TravisScottVEVO"
            if (b==2) w="https://www.youtube.com/watch?v=4YIzIQMR_gs&ab_channel=FutureVEVO"
             
        }
        if (a==1){
            let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.wp.pl"
            if (b==1) w="https://www.instagram.com/"
            if (b==2) w="https://pl.wikipedia.org/wiki/Kie%C5%82basa"
        }
    }
    else if (document.getElementById("zart").checked && document.getElementById("strona").checked){
        let a=Math.floor(Math.random() *2);
        if (a==0){
            let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.wp.pl"
            if (b==1) w="https://www.instagram.com/"
            if (b==2) w="https://pl.wikipedia.org/wiki/Kie%C5%82basa"
        }
        if (a==1) w="https://rzimon777.github.io/ruletka/"
    }
    else if (document.getElementById("zart").checked){
        w="https://rzimon777.github.io/ruletka/"
    }
    else if (document.getElementById("strona").checked){
        let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.wp.pl"
            if (b==1) w="https://www.instagram.com/"
            if (b==2) w="https://pl.wikipedia.org/wiki/Kie%C5%82basa"   
    }
    else if (document.getElementById("piosenka").checked){
        let b=Math.floor(Math.random() *3);
            if (b==0) w="https://www.youtube.com/watch?v=8fn0RANDfIA&ab_channel=Liminality"
            if (b==1) w="https://www.youtube.com/watch?v=2a8PgqWrc_4&ab_channel=TravisScottVEVO"
            if (b==2) w="https://www.youtube.com/watch?v=4YIzIQMR_gs&ab_channel=FutureVEVO"
    }
    

window.open(w, "_blank")
}