// shorthand since there's a lot of selectors
const get = arg => document.querySelector(arg);

// all the things
const tracker = get('#tracker');
const button = get('button');
const tailMove = get('#Tail_move');
// const body = get('#otter_body');
const Leye = get('#LeyePupil');
const Reye = get('#ReyePupil');
const otter = get('svg');
const cursor = get('#cursor');

// wing swats down when mousing over button
const mouseOver = () => {
	tailMove.style.transform = 'rotate(-20deg)';
	if(!tailMove.classList.value.includes('swat')) {
		tailMove.classList.add('swat');
		cursor.classList.add('swatted');
		document.body.style.cursor = 'none';
		otter.style.animation = 'none';
		// body.style.animation = 'none';
		document.body.style.cursor = 'none';
		// button.style.marginRight = '-11rem';
	}
}

// when moving mouse away from button
const mouseOut = () => {
	if(tailMove.classList.value.includes('swat')) {
		tailMove.classList.remove('swat');
		cursor.classList.remove('swatted');
		otter.style.animation = 'body 7s infinite alternate';
		// body.style.animation = 'body 2s ease infinite alternate';
		document.body.style.cursor = 'unset';
		// button.style.marginRight = '-10rem';
	}
}

// when mousing near button
const mouseNear = (coords, x, y) => {
	const minY = coords.y - coords.height;
	const maxY = coords.y + (coords.height * 2);
	const minX = coords.x - coords.width;
	const maxX = coords.x + (coords.width * 2);
	const zeroX = (maxX + minX) / 2;
	const zeroY = (maxY + minY) / 2;
	tailMove.style.transform = `rotate(-${60 / (zeroX + zeroY) * (x + y)}deg)`;
}

//Boolean; whether the cursor is over button
const overTheButton = (coords, x, y) => {
	return y >= coords.y && y <= coords.y + coords.height && x >= coords.x && x <= coords.x + coords.width;
}

//Boolean; whether the cursor is near button
const nearTheButton = (coords, x, y) => {
	return y >= coords.y - (coords.height * 2) && y <= coords.y + (coords.height * 3) && x >= coords.x - coords.width && x <= coords.x + (coords.width * 2)
}


// tracks the mouse bc mouse tracking doesn't work well w svg for some reason
// used html to create invisible element on top that tracks movements and js to fake hover effects
tracker.addEventListener('mousemove', e => {
	const btnCoords = button.getBoundingClientRect();
	const x = e.offsetX;
	const y = e.offsetY;
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;
	const max = 1;
	
	// execute function(s) from above based on cursor placement
	if(overTheButton(btnCoords, x, y)) {
		mouseOver()
	} else { 
		mouseOut();
		if (nearTheButton(btnCoords, x, y)){
			mouseNear(btnCoords, x, y);
		} else {
			tailMove.style.transform = 'rotate(10deg)';
		}
	}
	
	// eye following mouse arnd
	[Leye, Reye].forEach(eye => {
		eye.style.transform = 
		`translate(
			${max / (windowWidth / x)}%,
			${max / (windowHeight / y)}%
		)`;
	});
});