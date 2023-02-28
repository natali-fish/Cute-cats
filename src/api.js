class CatsApi {
    constructor(apiName) {
       
       this.url =  `https://cats.petiteweb.dev/api/single/${apiName}`
    }

getAllCats() {
    return fetch(`${this.url}/show`)
}

getCurrentCat(id) {
    return fetch(`${this.url}/show/${id}`)
}

deleteCat(id) {
    return fetch(`${this.url}/show/${id}`, {
        method:'DElETE'
    })
}
addNewCat(data) {
    return fetch(`${this.url}/add`, {
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
}
}
const dbName = "natali";
const api = new CatsApi('natali')
