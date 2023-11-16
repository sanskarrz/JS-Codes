function tables() {
    let num = parseInt(document.getElementById("num").value);
    let sentence = "";
    for (let i = 1; i <= 10; i++) {
    let final = num * (i);
    sentence += ` \n ${num} X ${i} = ${final} <br/>`;
    document.getElementById("displayf").innerHTML = sentence
    }
    }