
const Promise1 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi-1");
	}, 1000)
})

const Promise2 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi-2");
	}, 2000)
})

const Promise3 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi-3");
	}, 3000)
})

const Promise4 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi-4");
	}, 4000)
})

const Promise5 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve("Hi-5");
	}, 5000)
})
// Do not change the code above this
// add your promises to the array `promises`
window.promises = [Promise1,Promise2,Promise3,Promise4,Promise5];

const divElement = document.querySelector('#output');

Promise.any(promises)
	.then((res) => {
		divElement.innerHTML = ` ${res} `
	})
	.catch((e)=>{
		console.log(e);
	})