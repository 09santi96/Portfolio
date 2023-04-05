const menuItems = document.querySelectorAll(".menu-item");

const section = document.querySelector(".content-section");
const ForUserSection = document.querySelector(".ForUserSection");

const typingText = section.querySelector(".typing-text");
const inputUser = document.getElementById("user-input");

function showActionUser() {
	ForUserSection.classList.add("active");
	setInterval(() => {
		inputUser.focus();
	}, 500);
	
	inputUser.addEventListener("input", function() {
		inputUser.style.width = 'auto';
		inputUser.style.height = 'auto';
		inputUser.style.width = `${inputUser.scrollWidth}px`;
		inputUser.style.height = `${inputUser.scrollHeight}px`;
		// Ajusta el ancho y alto del input basado en el número de caracteres
	});
}

function showWelcome() {
	const text = typingText.innerHTML;
	typingText.innerHTML = "";
	let i = 0;

	const typingInterval = setInterval(() => {
		if (i === text.length) {
			clearInterval(typingInterval);
			const cursor = typingText.querySelector(".cursor");
			if (cursor) {
				cursor.remove();
			}
				showActionUser();
			return;
		}
		typingText.innerHTML += text.charAt(i);
		i++;
		const cursor = typingText.querySelector(".cursor");
		if (cursor) {
			cursor.remove();
		}

		typingText.insertAdjacentHTML("beforeend", '<span class="cursor"></span>'); // Add cursor span after each character

	}, 50);

	section.classList.add("active");

}


function usageMemory() {
	const divElement = document.getElementById("memoryNum");
	const paragraph = document.createElement("p");

	setInterval(() => {
		var memory = performance.memory;
		var memoryUsed = (memory.usedJSHeapSize / 1048576).toFixed(3);
		var memoryMax = memory.jsHeapSizeLimit / 1048576;
		paragraph.textContent = `Memory usage ${memoryUsed} of ${memoryMax} megabytes`;
		divElement.appendChild(paragraph);
	}, 1000);
}


function toggleFullScreen() {
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
			if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.cancelFullScreen) {
			document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
			}
		}
}


document.addEventListener('DOMContentLoaded', function() {
	showWelcome();
	usageMemory();
});

/* menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		const sectionId = item.dataset.section;
		showSection(sectionId);
	});
});
 */
