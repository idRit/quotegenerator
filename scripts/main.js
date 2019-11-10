async function getQuotes() {
    let str = document.querySelector('#getUserStr') ? document.querySelector('#getUserStr').value : null;
    let body = { str: "" };
    if (!(typeof str === 'undefined' || str === null || str.length === 0)) {
        body.str = str;
        document.querySelector('#machineGen').innerHTML = "Please wait!";
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    let res = await (await fetch('https://qtgen.herokuapp.com/api/prefix', options)).json();
    document.querySelector('#machineGen').innerHTML = res.quote;
}