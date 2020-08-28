export const emailService = {
    query,
    getById,
    saveToStorage,
    loadFromStorage,
    remove,
    add,
    getEmpty,
    CountUnreadMails,
    checkIfRead
}
const KEY = 'emails'

var emails = [
    { id: 'm101', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm102', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm103', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm104', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm105', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm106', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm107', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm108', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm109', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm1010', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594},
    { id: 'm1011', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 1551133930594}
   
]
let gEmails;
window.theEmails = emails
let count = emails.length
function query() {
    gEmails = loadFromStorage(KEY)
    if(!gEmails){
        gEmails = emails 
        saveToStorage(KEY, gEmails)
    }
    return Promise.resolve(gEmails)
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}
function checkIfRead(idx){
    gEmails[idx].isRead = true
    saveToStorage(KEY, gEmails)
    console.log(idx)
}
function CountUnreadMails(){
    console.log(count)
    return count
}

function remove(idx){
    gEmails.splice(idx, 1);
    saveToStorage(KEY, gEmails)
    console.log(gEmails)
    count--
}

function add(email){

    const emailToAdd = {
        id:makeId(),
        ...email
    }
    gEmails=[emailToAdd, ...gEmails]
    // gEmails.unshift(email);
    saveToStorage(KEY, gEmails)
    console.log(gEmails)
    window.theEmails = gEmails
    count++
}
function getEmpty(){
    return {sender: '',subject:'', body:''}
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