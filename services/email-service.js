export const emailService = {
    query,
    getById,
    saveToStorage,
    loadFromStorage,
    remove,
    add,
    getEmpty,
    CountUnreadMails,
    changeToRead,
    changeToUnRead,
    getUnreadCount
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
window.theEmails = gEmails
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
function changeToRead(id){
    const index = gEmails.findIndex((email)=>{return email.id===id});
    gEmails[index].isRead = true
    saveToStorage(KEY, gEmails)
    console.log(index,'read')
}
function changeToUnRead(id){
    const index = gEmails.findIndex((email)=>{return email.id===id});
    gEmails[index].isRead = false
    saveToStorage(KEY, gEmails)
    console.log(index,'unread')
}
function CountUnreadMails(){
    console.log(count)
    return count
}
function getUnreadCount(){
    if(!gEmails){return 0}
    const count = gEmails.filter((email)=>{
        return !email.isRead
    }).length
    console.log(count)
    return count
  
}
function remove(id){
    const index = gEmails.findIndex((email)=>{return email.id===id});
    gEmails.splice(index,1)
    saveToStorage(KEY, gEmails)
    console.log(gEmails)
    count--
}

function add(email){

    const emailToAdd = {
        id:makeId(),
        // isRead:false,
        // sentAt:Date.now(),
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