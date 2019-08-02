// Q: Why are we using an object, instead of an array? Are the keys significant?
const images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: '../images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: '../images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: '../images/beast.jpg'
	}
};

// const images = [
//  man = {
//    heading: 'Man Image',
//    description: 'Image of a man.',
//    path: '../images/man.jpg'
//  },
//  wizard = {
//    heading: 'Wizard Image',
//    description: 'Image of a wizard.',
//    path: '../images/wizard.jpg'
//  },
//  beast = {
//    heading: 'Beast Image',
//    description: 'Image of a beast.',
//    path: '../images/beast.jpg'
//  }
// ];

// const getImgs = images = images.map(({
//  heading, description, path
// }) => {
//  heading,
//  description,
//  path
// })

const createImageElement = ({ heading, description, path }) => {
	const imageElement = document.createElement('img');
	imageElement.setAttribute('src', path);
	imageElement.setAttribute('alt', description);
	imageElement.setAttribute('title', heading);
	return imageElement;
};

const createImageContainerDivElement = () => {
	const imageContainer = document.createElement('div');
	imageContainer.setAttribute('class', 'image-container');
	return imageContainer
};

const createTextContainerDivElement = () => {
	const textWrapper = document.createElement('div');
	textWrapper.setAttribute('class', 'middle-display');
	return textWrapper
};

const createH1Element = ({ heading }) => {
	const h1Element = document.createElement('h1');
	h1Element.innerHTML = heading;
	return h1Element
};

const createH2Element = ({ description }) => {
	const h2Element = document.createElement('h2');
	h2Element.innerHTML = description;
	return h2Element
};

const addElementToParent = (element, parent) => {
	parent.appendChild(element)
};

function getAppendedElements() {
	let newImageObj = Object.values(images).map(image => {

		const imagesWrapper = document.getElementById('images');
		const containerElement = createImageContainerDivElement();
		const imageElement = createImageElement(image);

		addElementToParent(containerElement, imagesWrapper);
		addElementToParent(imageElement, containerElement);
		getMiddleHoverElements(image, containerElement)
	});
	return newImageObj
};

function getMiddleHoverElements({ description, heading }, imagesWrapper) {
	const textContainer = createTextContainerDivElement();
	const h1Element = createH1Element({ heading });
	const h2Element = createH2Element({ description });

	addElementToParent(textContainer, imagesWrapper);
	addElementToParent(h1Element, textContainer);
	addElementToParent(h2Element, textContainer);
};

function toggleDropdown() {
	const dropdown = document.getElementsByClassName('dropdown-button');
	let i;
	
	for (i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener('click', function () {
			this.classList.toggle('active');
			var dropdownContent = this.nextElementSibling;
			if (dropdownContent.style.display === 'block') {
				dropdownContent.style.display = 'none';
			} else {
				dropdownContent.style.display = 'block';
			}
		});
	}
}

document.addEventListener('load', getAppendedElements());
document.addEventListener('load', toggleDropdown());
