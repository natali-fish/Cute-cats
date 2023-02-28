const main = document.querySelector("main");
const infoBlock = document.querySelector(".info-block");
const result = function (n) {
    let color = "<img src='img/cat-fill.png' alt = 'красное сердечко'>"
    let noColor = "<img src = 'img/cat-stroke.png' alt = 'прозрачное сердечко'>"
    let res = "", cnt = 10;
    for (let i = 0; i < cnt; i++) {
        res += i < n ? color : noColor;
    }
    return res;
}

const getWord = function (n, w1, w2, w0) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        } else {
            return w0;
        }
    } else {
        return w0;
    }
}

const showInfo = function (data) {
    infoBlock.classList.add("active");
    infoBlock.firstElementChild.innerHTML = `
        <img class="info-img" src="${data.image}" alt="${data.name}">
        <div class="information">
            <h2>${data.name}</h2>
            <h3>${data.age} ${getWord(data.age, "год", "года", "лет")}</h3>
            <p>${data.description}</p>
        </div>
        <div class="info-close" onclick="closeInfo()"></div>
    `;
}

const closeInfo = function () {
    infoBlock.classList.remove("active");
}

const getItem = function (data) {
    const item = `
        <div class="card">
            <div class="card-img" style="background-image: url(${data.image})"></div>
            <h3>${data.name}</h3>
            <p class="rate">${result(data.rate)}</p>
        </div>
    `
    main.innerHTML += item;
}

cats.forEach(cat => {
    getItem(cat);
});

const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (e) {
        showInfo(cats[i]);
    })
 }
const HIDDEN_CLASS = 'hidden'
const $addBtn = document.querySelector('[data-add_button]')
const $modalAdd = document.querySelector('[data-modal]')
const $dataExit = document.querySelector('[data-exit_button]')
console.log($dataExit);

$addBtn.addEventListener('click',(event) =>{
    $modalAdd.classList.remove (HIDDEN_CLASS)
})

$dataExit.addEventListener('click',(event) =>{
    // console.log('works');
    $modalAdd.style.display = 'none';
    document.body.style.overflow = '';
    })

// document.forms.add_cats_form.addEventListener('submit',(event) => {
//     event.preventDefault();
//     const data = Object.fromEntries(new FormData(event.target).entries());



//     console.log(data);не находит form
// })

    
   const formsCatAdd = document.querySelector('#form-add')
   console.log(formsCatAdd);

    function serializeForm(elements) {
        const formData = {};

        elements.forEach(input =>{
        if(input.type === 'submit' || input.type ==='button') return
        if(input.type ==='checkbox') {
            formData[input.name] = input.checked;
            console.log(input.checked);
        }
        if(input.type !=='checkbox') {
            formData[input.name] = input.value;
            console.log(input.value);
        }
        })
      return formData;
    }

    serializeForm([...formsCatAdd.elements])

    function handleFormAddCat(e) {
        e.preventDefault();
        const elementsFormCat = [...formsCatAdd.elements];
        const formData = serializeForm(elementsFormCat);
    }
//    cats.forEach(catData => {
//     const newElement = new Card(catData, '#card-template', handleClickCatImage);
//     cardsContainer.append(newElement.getElement());
// });
// formsCatAdd.close();


// function handleClickCatImage(dataSrc) {
//     $modalAdd.open(dataSrc)
// }




