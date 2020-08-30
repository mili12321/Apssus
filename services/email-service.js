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
    { id: 'm101', 
    sender: 'Bali Body‏ ', 
    subject: 'FREE SHIPPING TODAY 🙌🏽', 
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi doloremque quas odit nisi alias impedit fugiat inventore vero iure, recusandae atque similique autem modi facilis quia. Placeat quidem incidunt nisi. Velit eveniet deleniti accusamus ut dolorem dicta porro est.',  
    isRead: false, 
    opend:0, 
    sentAt : 'Aug 29'},
    { id: 'm102', 
    sender: 'BlendJet', 
    subject: 'Easy workout smoothies 💪', 
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi doloremque quas odit nisi alias impedit fugiat inventore vero iure, recusandae atque similique autem modi facilis quia. Placeat quidem incidunt nisi. Velit eveniet deleniti accusamus ut dolorem dicta porro est.',  
    isRead: false, 
    opend:0, 
    sentAt : 'Aug 29'},
    { id: 'm103',
    sender: 'Laura Mercier',
    subject: 'Don\'t Miss Out On These Limited Edition Sets - Exclusively At Nordstrom‏', 
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi doloremque quas odit nisi alias impedit fugiat inventore vero iure, recusandae atque similique autem modi facilis quia. Placeat quidem incidunt nisi. Velit eveniet deleniti accusamus ut dolorem dicta porro est.', 
    isRead: false, 
    opend:0, 
    sentAt : 'Aug 29'},
    { id: 'm104', 
    sender: 'Rebellious Fashion', 
    subject: 'Order now, get it tomorrow + save extra 15% 👉‏', 
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi doloremque quas odit nisi alias impedit fugiat inventore vero iure, recusandae atque similique autem modi facilis quia. Placeat quidem incidunt nisi. Velit eveniet deleniti accusamus ut dolorem dicta porro est.', 
    isRead: false, 
    opend:0, 
    sentAt : 'Aug 29'},
    { id: 'm105', 
    sender: 'LinkedIn Job Alerts', 
    subject: 'New Jobs in Tel Aviv‏ ', 
    body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi doloremque quas odit nisi alias impedit fugiat inventore vero iure, recusandae atque similique autem modi facilis quia. Placeat quidem incidunt nisi. Velit eveniet deleniti accusamus ut dolorem dicta porro est.', 
    isRead: false, 
    opend:0, 
    sentAt : 'Aug 28'},
    { id: 'm106', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 28'},
    { id: 'm107', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 28'},
    { id: 'm108', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 27'},
    { id: 'm109', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 27'},
    { id: 'm1010', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 26'},
    { id: 'm1011', sender: 'mili', subject: 'Wassap?', body: 'Pick up!', isRead: false, opend:0, sentAt : 'Aug 25'}
   
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
        isRead:false,
        sentAt:new Date().toLocaleTimeString(),
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