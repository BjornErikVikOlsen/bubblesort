let values = [];
let w = 10;
let j = 0;
let i = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
  	values = new Array(floor(width / w));
  	for (let i = 0; i < values.length; i++) {
    	values[i] = random(height);
  	}
}

function draw() {
	background(0);

	bubblesort()
  
	for (let i = 0; i < values.length; i++) {
	  noStroke();
	  rect(i * w, height - values[i], w, values[i]);
	}
  }

function bubblesort(){

	if (i < values.length) {
	  for (let j = 0; j < values.length - i - 1; j++) {
		let a = values[j];
		let b = values[j + 1];
		if (a > b) {
		  swap(values, j, j + 1);
		}
	  }
	} else {
	  noLoop();
	}
	i++;
}  
  
function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
  }

  function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
