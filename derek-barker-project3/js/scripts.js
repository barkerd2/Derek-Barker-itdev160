
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

//----------------------------------------------------------------------------

var data = [
  {
    id: 1,
    title: 'Creativity',
    body: 'Creativity takes courage.',
    author: 'Henri Matisse'
  },
  {
    id: 2,
    title: 'The Artist',
    body: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
    author: 'Pablo Picasso'
  },
  {
    id: 3,
    title: 'On Photography',
    body:'You dont take a photograph, you make it.',
    author: 'Ansel Adams'
  },
  {
    id: 4,
    title: 'Art',
    body:
      'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
    author: 'Alfred North Whitehead'
  }
];

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    // Create elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>'),
      $author = $('<span class="author"></span>'),
	   $navItem = $('<li></li>')

    // Add post data
    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    // Add nav item data
    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    // Combine post elements
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)

    // Add post and nav elements to page
    $posts.append($post)
    $nav.append($navItem)

    // Wire up nav item click event
    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()
    })

    // Hide all posts and show the intro
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}

initPosts()

//---------------------------------------------------------------------------------------------------*/

// Utility functions
function get(element) {
  return document.getElementById(element);
}

// Application functions
function openModal() {
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal() {
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  // Clear text
  title.value = '';
  text.value = '';

  // Hide modal
  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent() {
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var content = get('display-content');

  // Create content elements
  var newTitle = document.createElement('h2');
  var newTitleText = document.createTextNode(title.value);
  var newContent = document.createElement('p');
  var newContentText = document.createTextNode(text.value);

  // Add elements
  newTitle.appendChild(newTitleText);
  newContent.appendChild(newContentText);
  content.appendChild(newTitle);
  content.appendChild(newContent);

  closeModal();
}

// Wire up event handlers
window.addEventListener('load', function() {
  var newButton = get('new-button');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');
  newButton.addEventListener('click', openModal);
  cancelButton.addEventListener('click', closeModal);
  saveButton.addEventListener('click', saveContent);
});

// critique image uploader
    $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };
