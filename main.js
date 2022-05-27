const accordionBoxList = document.querySelectorAll("details summary");

let firstCounter = 1;
accordionBoxList[0].addEventListener("click", () => {
    firstCounter++;
	if (firstCounter%2==0) {
		accordionBoxList[0].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[0].firstElementChild.innerHTML = "&plus;";
	}
});

let secondCounter = 1;
accordionBoxList[1].addEventListener("click", () => {
    secondCounter++;
	if (secondCounter%2==0) {
		accordionBoxList[1].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[1].firstElementChild.innerHTML = "&plus;";
	}
});

let thirdCounter = 1;
accordionBoxList[2].addEventListener("click", () => {
    thirdCounter++;
	if (thirdCounter%2==0) {
		accordionBoxList[2].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[2].firstElementChild.innerHTML = "&plus;";
	}
});

let fourthCounter = 1;
accordionBoxList[3].addEventListener("click", () => {
    fourthCounter++;
	if (fourthCounter%2==0) {
		accordionBoxList[3].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[3].firstElementChild.innerHTML = "&plus;";
	}
});

let fifthCounter = 1;
accordionBoxList[4].addEventListener("click", () => {
    fifthCounter++;
	if (fifthCounter%2==0) {
		accordionBoxList[4].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[4].firstElementChild.innerHTML = "&plus;";
	}
});

let sixthCounter = 1;
accordionBoxList[5].addEventListener("click", () => {
    sixthCounter++;
	if (sixthCounter%2==0) {
		accordionBoxList[5].firstElementChild.innerHTML = "&times;";
	} else {
		accordionBoxList[5].firstElementChild.innerHTML = "&plus;";
	}
});