export const emailService = {
    query,
    getById,
    saveToStorage,
    loadFromStorage
}
const KEY = 'emails'

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
let gEmails;

function query() {
    gEmails = loadFromStorage(KEY)
    if(!gEmails){
        gEmails = emails 
        saveToStorage(KEY, gEmails)
    }
    return Promise.resolve(gEmails)
}

function getById(emailId) {
    const email = mails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  }
  
  function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}