
//donation var
var donation = 20,
  studentDiscount = .10,
 studentDonation = donation - (donation * studentDiscount);
var eldonation = document.getElementById('donation');
eldonation.textContent = donation;
var elstudentDonation = document.getElementById('studentDonation');
elstudentDonation.textContent = studentDonation;
// podcasts
var data = [
  {name:'The Conversation',
    description:'The Conversation is a podcast ostensibly about the world of contemporary art, and features conversations with artists, collectors, curators, writers and dealers/gallerists, as well as the odd miscellaneous art world individual. Michael Shaw, an artist based in L.A., launched the show in November, 2011, inspired by the podcast medium and its more performance-like approach to conversation, as opposed to traditional interview q-&-a’s',
    author:'Host: Michael Shaw',
    url:'http://www.theconversationpod.com',

    stars:'stars 137: 5 star',
    selector: 'podcast1'},

	{name:'Artist Decoded',
    description:'"I started this series as a means for exploration, an exploration of self and an exploration of the perspectives of other artists."',
    author:'Host: Yoshino',
    url:'http://www.artistdecoded.com/podcast',

    stars:'stars 110: 5 star',
    selector:'podcast2'},

   {name:'MODERN ART NOTES PODCAST',
    description:'The Modern Art Notes Podcast is a weekly, hour-long interview program featuring artists, historians, authors, curators and conservators. While the program is typically studio-based, it has taped live-audience episodes at nearly a dozen American art museums, such as the J. Paul Getty Museum, the Baltimore Museum of Art and the Nasher Sculpture Center. The program has published new episodes each Thursday since 2011.',
    author:'Host: Tyler Green',
    url:'https://manpodcast.com/',

    stars:'stars 182: 5 star',
    selector:'podcast3'}
];


function podcast(data)
{this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;

  this.stars = data.stars;
  this.selector = data.selector;



  this.getStars = function()
  {return this.stars.toLocaleString()};
}
function writePodcast(podcast) {
var selector = podcast.selector,
    nameEl = document.getElementById(selector + '-name'),
    descEl = document.getElementById(selector + '-description'),
	authEl = document.getElementById(selector + '-author'),
	urlEl = document.getElementById(selector + '-url'),

	starsEl = document.getElementById(selector + '-stars');

nameEl.textContent = podcast.name;
descEl.textContent = podcast.description;
authEl.textContent = podcast.author;
urlEl.textContent = podcast.url;

starsEl.textContent = podcast.stars;

}

function print()
{for (let i = 0; i < data.length; i++)
{const podcast = data[i];
writePodcast(podcast);}
	}
print();

//chat
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
