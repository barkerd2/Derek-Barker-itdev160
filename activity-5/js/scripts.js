
// packages
var data = [
  {name:'Atom-beautify',
    description:'clean up your code, and make it more readable',
    author:'Glavin Wiechert"Glavin001"',
    url:'https://atom.io/packages/atom-beautify',
    downloads:6041559,
    stars:'stars 5056',
    selector: 'package1'},

	{name:'Ask Stack',
    description:'switching between your browser and the editor',
    author:'Christophe Naud-Dulude"Chris911"',
    url:'https://atom.io/packages/ask-stack',
    downloads:'downloads 87882',
    stars:'stars 293',
    selector:'package2'},

   {name:'Highlight Selected',
    description:'highlights the current word selected on double click',
    author:'Richard Race"richrace"',
    url:'https://atom.io/packages/highlight-selected',
    downloads:'downloads 1746238',
    stars:'stars 3057',
    selector:'package3'}
];


function Package(data)
{this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;

  this.getDownloads = function downloads()
  {return this.downloads.toLocaleString()};

  this.getStars = function()
  {return this.stars.toLocaleString()};
}
function writePackage(package) {
var selector = package.selector,
    nameEl = document.getElementById(selector + '-name'),
    descEl = document.getElementById(selector + '-description'),
	authEl = document.getElementById(selector + '-author'),
	urlEl = document.getElementById(selector + '-url'),
	dwnlEl = document.getElementById(selector + '-downloads'),
	starsEl = document.getElementById(selector + '-stars');

nameEl.textContent = package.name;
descEl.textContent = package.description;
authEl.textContent = package.author;
urlEl.textContent = package.url;
dwnlEl.textContent = package.downloads;
starsEl.textContent = package.stars;

}

function print()
{for (let i = 0; i < data.length; i++)
{const package = data[i];
writePackage(package);}
	}
print();
