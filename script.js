let inputs = [1, 2, 3, 4, 5];

let count = 0;

document.querySelector(".button").addEventListener("click", () => {
    document.querySelector(".button").style.backgroundColor = "green"
    if (count == 3) {
        clearContainer();
        return;
    }
    count++;
    setTimeout(() => {
        document.querySelector(".button").style.visibility = "hidden";
        document.querySelector(".container").style.visibility = "hidden";
        document.querySelector(".info").style.visibility = "visible";
        document.querySelector(".submit").style.backgroundColor = "red"
    }, 1000);

});

document.querySelector(".submit").addEventListener("click", () => {
    for (i = 1; i <= 5; i++) {
        inputs[i - 1] = document.querySelector(".input" + i).value;
    }
    document.querySelector(".submit").style.backgroundColor = "green"
    setTimeout(() => {
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector(".button").style.visibility = "visible";
        document.querySelector(".button").style.backgroundColor = "red"
        document.querySelector(".info").style.visibility = "hidden";
    }, 1000);
    createCard(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]);
});


function createCard(title, cName, Views, months, thumbnail) {
    let cardy = `<div class="card">
    <img width="300px" src=${thumbnail} alt="" class="img">
    <div class="texts">
    <h1>${title}</h1>
    <pre>${cName}   ${getViews(Views)} views   ${months} months ago</pre>
    </div>
    </div>`
    document.querySelector(".container").innerHTML += cardy;


}

let getViews = (e) => {
    if (e < 1000) return e;
    if (e < 1000000) {
        return (e / 1000).toFixed(1) + "K";
    }
    if (e < 1000000000) {
        return (e / 1000000).toFixed(1) + "M";
    }
    return (e / 1000000000).toFixed(1) + "B";
}

function clearContainer() {
    document.querySelector(".clear_container").style.visibility = "visible";
    document.querySelector(".button").style.visibility = "hidden";
    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector(".info").style.visibility = "hidden";
    document.querySelector(".submit").style.backgroundColor = "hidden"
}

document.querySelector(".yes").addEventListener("click", () => {
    document.querySelector(".container").innerHTML = '';
    document.querySelector(".clear_container").style.visibility = "hidden";
    document.querySelector(".button").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    count=0;
})

document.querySelector(".no").addEventListener("click", () => {
    document.querySelector(".clear_container").style.visibility = "hidden";
    document.querySelector(".button").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
})