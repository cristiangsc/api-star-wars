const url = "https://swapi.dev/api/people/"

const bluidHtml = (name, height, mass, i, item, color) => {
    const htmlCard = `
    <div class="circle ${color}"></div>
    <div class="leyenda">
        <p class="title">${name}</p>
        <p class="subtitle">
            Estatura: ${height} cm. Peso: ${mass} kg.
        </p>
    </div>
    `
    const nodo = document.createElement("div")
    nodo.className = "card"
    nodo.id = `card-${i}`
    nodo.innerHTML = htmlCard
    const idDiv = document.querySelector(item).appendChild(nodo)
}

const item1 = document.getElementById('mouse-1')
const item2 = document.getElementById('mouse-2')
const item3 = document.getElementById('mouse-3')
const gen1 = generador1()
const gen2 = generador2()
const gen3 = generador3()

item1.addEventListener('mouseenter', () => {
    gen1.next()

})

item2.addEventListener('mouseenter', () => {
    gen2.next()
})

item3.addEventListener('mouseenter', () => {
    gen3.next()
})


function starData(i, item, color) {

    try {
        const resp = fetch(url + i).then((resp) => {
            resp.json().then((resp) => {
                const { name, height, mass } = resp
                bluidHtml(name, height, mass, i, item, color)
            })
        });
    } catch (error) {
        console.log("Error en la petición", error)
        throw error
    }
}

function* generador1() {
    yield starData(1, "#item-1", color = 'red');
    yield starData(2, "#item-1", color = 'red');
    yield starData(3, "#item-1", color = 'red');
    yield starData(4, "#item-1", color = 'red');
    yield starData(5, "#item-1", color = 'red');
}

function* generador2() {
    yield starData(6, "#item-2", color = 'green');
    yield starData(7, "#item-2", color = 'green');
    yield starData(8, "#item-2", color = 'green');
    yield starData(9, "#item-2", color = 'green');
    yield starData(10, "#item-2", color = 'green');
}

function* generador3() {
    yield starData(11, "#item-3", color = 'blue');
    yield starData(12, "#item-3", color = 'blue');
    yield starData(13, "#item-3", color = 'blue');
    yield starData(14, "#item-3", color = 'blue');
    yield starData(15, "#item-3", color = 'blue');
}