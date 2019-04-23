//empty array
var messages = [];
var messageType = {
out: 'out-message',
in: 'in-message',
unknown: 'unknown-message'};


function Message(type, user, message) {
this.type = type;
this.user = user;
this.message = message;}

function createMessageElement(message) {
var messageText = document.createTextNode(message.user + ': ' + message.message);
var messageEl = document.createElement('div');
messageEl.appendChild(messageText);
messageEl.className = message.type;
return messageEl;}

//add message event
function addMessageHandler(event)
{
var user, type;
var messageInputEl = document.getElementById('message-input');
var messageContainerEl = document.getElementById('message-container');
//button and message action.
switch (event.target.id) {
    case 'send-button':
    user = 'Derek';
    type = messageType.out;
    break;

	case 'reply-button':
    user = 'Mike';
    type = messageType.in;
    break;

	default:
    user = 'unknown';
    type = messageType.unknown;
    break;}

//new message put in array.
if (messageInputEl.value != '') {
var message = new Message(type, user, messageInputEl.value);
    messages.push(message);
var el = createMessageElement(message);
	messageContainerEl.appendChild(el);
	messageInputEl.value = '';}
}
//initialize and print on screen
function init() {
document.getElementById('send-button').onclick = addMessageHandler;
document.getElementById('reply-button').onclick = addMessageHandler;

var messageContainerEl = document.getElementById('message-container');
var message = new Message(item.type, item.user, item.message);
    messages.push(message);
var el = createMessageElement(message);
	messageContainerEl.appendChild(el);}
init();
