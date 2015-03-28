var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var input3 = document.querySelector('.input3');
var input4 = document.querySelector('.input4');
var input5 = document.querySelector('.input5');
var input6 = document.querySelector('.input6');
var input7 = document.querySelector('.input7');

var myParagraph = document.querySelector('.main-paragraph');

var change = document.querySelector('.style');

// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'pic/dolphin.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'pic/cat.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = 'pic/yes.gif';

// imgArray[3] = new Image();
// imgArray[3].src = 'pic/eyes.gif';

input1.addEventListener('click',function (evt) {
	getWord1();
});

input2.addEventListener('click',function (evt) {
	getWord2();
});

input3.addEventListener('click',function (evt) {
	getWord3();
});

input4.addEventListener('click',function (evt) {
	getWord4();
});

input5.addEventListener('click',function (evt) {
	getWord5();
});

input6.addEventListener('click',function (evt) {
	getWord6();
});

input7.addEventListener('click',function (evt) {
	getWord7();
});

change.addEventListener('click',function (evt) {
	randomCSS();

});

// function nextImage(element)
// {
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }

function randomCSS() {
	var randomList = ['style1', 'style2', 'style3', 'style4'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomStyle = randomList[randomNumber];
	console.log(randomStyle);
	//var removeStyle = randomList[randomNumber];
	//change.innerHTML = randomStyle;
	myParagraph.classList.add(randomStyle);
	//myParagraph.classList.remove(randomStyle);
}

function getWord1() {
	var randomList = ['house.', 'mouth.', 'shoes.', 'coffee.'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input1.innerHTML = randomWord;
}

function getWord2() {
	var randomList = ['cat.', 'nautilus.', 'snail.', 'sheep.'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input2.innerHTML = randomWord;
}

function getWord3() {
	var randomList = ['penguin', 'panda', 'humback whale', 'cockroach'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input3.innerHTML = randomWord;
}

function getWord4() {
	var randomList = ['monitor.', 'fork.', 'nail polish.', 'chair.'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input4.innerHTML = randomWord;
}

function getWord5() {
	var randomList = ['Nico', 'Owen', 'Gentry', 'Keiji'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input5.innerHTML = randomWord;
}

function getWord6() {
	var randomList = ['potatoes', 'sandwiches', 'Vans', 'teeth'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input6.innerHTML = randomWord;
}

function getWord7() {
	var randomList = ['shakes', 'licks', 'sniffs', 'eats'];
	var randomNumber = Math.floor(Math.random() * randomList.length);
	var randomWord = randomList[randomNumber];
	console.log(randomWord);
	input7.innerHTML = randomWord;
}

