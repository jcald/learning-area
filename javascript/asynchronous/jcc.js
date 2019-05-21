function jcc() {
    let pElem = document.createElement('h1');
    pElem.id = 'tit';
    document.body.appendChild(pElem);
    reg = /\/([^\/]*$)/;
    document.getElementById("tit").innerText = reg.exec(document.location.href)[1];
    document.getElementsByTagName("title").innerText = document.getElementById("tit").innerText;
    console.log("Inicio ----------------");
}
jcc();