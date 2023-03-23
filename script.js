window.promises = [Promise1,Promise2,Promise3,Promise4,Promise5];

const Promise1 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi");
	}, 1000)
})

const Promise2 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi");
	}, 2000)
})

const Promise3 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi");
	}, 3000)
})

const Promise4 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi");
	}, 4000)
})

const Promise5 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi");
	}, 5000)
})
// Do not change the code above this
// add your promises to the array `promises`

const divElement = document.querySelector('#output');

Promise.any(promises)
	.then((res) => {
		divElement.innerHTML = `<p> ${res} </p>`
	})
