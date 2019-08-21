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

const createElement = ({
	type = 'div',
	attributes = {},
	children = null
}) => {
	const container = document.createElement(type);

	for (let attribute in attributes) {
		container.setAttribute(attribute, attributes[attribute]);
	}

	if (children) {
		container.innerHTML = children;
	}
	return container
}

const applyMiddleHoverElements = ({ description, heading }, imagesWrapper) => {
	const textContainer = createElement({
		type: 'div',
		attributes: { class: 'middle-display' }
	});

	const h1Element = createElement({
		type: 'h1',
		children: heading
	});

	const h2Element = createElement({
		type: 'h2',
		children: description
	});

	imagesWrapper.appendChild(textContainer);
	textContainer.appendChild(h1Element);
	textContainer.appendChild(h2Element);
};

const appendImages = () => {
	Object.values(images).map(image => {

		const imagesWrapper = document.getElementById('images');

		const containerElement = createElement({
			type: 'div',
			attributes: { class: 'image-container' }
		});
		const imageElement = createElement({ type: 'img', attributes: {
			src: image.path,
			alt: image.description,
			title: image.heading
		} });

		imagesWrapper.appendChild(containerElement);
		containerElement.appendChild(imageElement);

		applyMiddleHoverElements(image, containerElement);
	});
	return
};

const toggleDropdown = () => {
	const dropdown = document.getElementsByClassName("dropdown-button");
	let i;

	for (i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
		} else {
		dropdownContent.style.display = "block";
		}
		});
	}
} 


window.addEventListener('load', appendImages);
window.addEventListener('load', toggleDropdown);
