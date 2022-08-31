const main = document.querySelector(".conteiner-flex");

const valuesKey = (name, code, price) =>{
    img = (`<img class="img-key" src="/key.png">`)
    name = (`<h4>${name}</h4>`);
    code = (`<span>${code}</span>`);
    price = (`<span>Price:${price}U$s</span>`);
    return [img, name, code, price];
}

let documentFragment = document.createDocumentFragment();

const changeValue = (number) => {
    document.querySelector(".key-code").value = number;
}

for (let i = 1; i < 12; i++) {
    let $code = Math.round(Math.random() * 1000 );
    let $price = Math.round(Math.random() * 100 );
    let key = valuesKey(`Name: ${i}`,`Code: ${$code}`, $price);
    let div = document.createElement("DIV");
    div.addEventListener("click",() =>{changeValue($code)})
    div.tabIndex = i;
    div.classList.add(`item${i}`,'flex-item')
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    documentFragment.appendChild(div);
}

main.appendChild(documentFragment);
