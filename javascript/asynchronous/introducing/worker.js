onmessage = function() {
    console.log('onmessage: Init');
    let myDate;
    for (let i = 0; i < 10000000; i++) {
        let date = new Date();
        myDate = date
    }

    postMessage(myDate);
}