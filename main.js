function convertMoney() {
	event.preventDefault();
	let amount = +document.getElementById("amount").value;
	let from = +document.getElementById("from").value;
	let to = +document.getElementById("to").value;
	let exchange_rate = from / to;
	let result = amount * exchange_rate;
	document.getElementById("result").innerText = result;
}
