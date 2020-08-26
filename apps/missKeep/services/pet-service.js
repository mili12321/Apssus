
export const petService = {
    query,
    save,
    getEmpty,
    remove,
    getById,
    getNextPrev

}

var pets = [
    { id: 'p101', name: 'Charli', power: 98 },
    { id: 'p102', name: 'Wubba', power: 31 },
    { id: 'p103', name: 'Lubba', power: 31 },
    { id: 'p104', name: 'Dubdub', power: 31 }
]
window.thePets = pets;

const API_URL='myapiadress'

function getEmpty() {
    return { name: '', power: 0 };
}

function query() {
    return Promise.resolve(pets)
}
function save(petToSave) {
    petToSave.id ? _update(petToSave) : _add(petToSave)
}
function _add(pet) {
    const petToAdd = {
        ...pet,
        id: makeId()
    }
    pets = [petToAdd, ...pets]
    window.thePets = pets
}
function _update(petToSave) {
    // const petIdx = pets.findIndex(pet => pet.id === petToSave.id)
    // pets.splice(petIdx, 1, petToSave)
    pets = pets.map(pet => pet.id === petToSave.id ? petToSave : pet)
    return petToSave
}
function remove(petId) {
    pets = pets.filter(pet => pet.id !== petId)
}
function getById(petId) {
    const pet = pets.find(pet => pet.id === petId)
    return Promise.resolve(pet)
}
function getNextPrev(petId) {
    const petIdx = pets.findIndex(pet => pet.id === petId)
    // const nextPetId = pets[petIdx + 1]?  pets[petIdx + 1]: pets[0]
    // The SAME!!
    const nextPet = pets[petIdx + 1] || pets[0]
    const prevPet = pets[petIdx - 1] || pets[pets.length - 1]
    return {
        prevPetId: prevPet.id,
        nextPetId: nextPet.id
    }
}
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}