export const emailService = {
    query,
    // save,
    // getEmpty,
    // remove,
    getById,
    // getNextPrev

}

var emails = [
    { id: 'm101', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm102', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm103', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm104', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm105', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm106', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm107', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm108', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm109', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm1010', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    { id: 'm1011', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594}
   
]
// window.thePets = pets;

// const API_URL='myapiadress'

// function getEmpty() {
//     return { name: '', power: 0 };
// }

function query() {
    return Promise.resolve(emails)
}
// function save(petToSave) {
//     petToSave.id ? _update(petToSave) : _add(petToSave)
// }
// function _add(pet) {
//     const petToAdd = {
//         ...pet,
//         id: makeId()
//     }
//     pets = [petToAdd, ...pets]
//     window.thePets = pets
// }
// function _update(petToSave) {
//     // const petIdx = pets.findIndex(pet => pet.id === petToSave.id)
//     // pets.splice(petIdx, 1, petToSave)
//     pets = pets.map(pet => pet.id === petToSave.id ? petToSave : pet)
//     return petToSave
// }
// function remove(petId) {
//     pets = pets.filter(pet => pet.id !== petId)
// }
function getById(emailId) {
    const email = mails.find(email => email.id === emailId)
    return Promise.resolve(email)
}
// function getNextPrev(petId) {
//     const petIdx = pets.findIndex(pet => pet.id === petId)
//     // const nextPetId = pets[petIdx + 1]?  pets[petIdx + 1]: pets[0]
//     // The SAME!!
//     const nextPet = pets[petIdx + 1] || pets[0]
//     const prevPet = pets[petIdx - 1] || pets[pets.length - 1]
//     return {
//         prevPetId: prevPet.id,
//         nextPetId: nextPet.id
//     }
// }
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}