let dia = 0;

if (dia == 1) {
	console.log("claro");
} else {
	console.log("de noite");
}

for (let n = 0; n <= 16; n += 2) {
	console.log(n);
}
console.log("...");

function oie() {
	console.log("OIEEEE");
}

function nome($this) {
	let nome = $this.previousElementSibling.value;
	if (nome == "") {
		console.log("no input");
	} else {
		console.log(nome);
	}
}

console.log("");

let dados = [{ nome: "eve" }, { idade: 19 }, { musica: "metalcore" }];

const retrieveValue = (key) =>
	dados.filter((x) => x[key]).map((x) => x[key])[0];

console.log(
	retrieveValue("nome"),
	retrieveValue("idade"),
	retrieveValue("musica")
);

const coisas = () => {
	let filme = prompt("Um filme?");
	let musica1 = prompt("Uma musica? ");

	console.log(filme, musica1);
};

function triplica($this) {
	let numero = $this.previousElementSibling.value;
	numero = numero * 3;
	if (numero == 0) {
		document.getElementById("triplicado").innerHTML =
			"(Precisa por algum numero mnkkkkk)";
	} else {
		document.getElementById("triplicado").innerHTML = numero;
	}
}

const update = ($this) => {
	if ($this.checked == true) {
		document.getElementById("sim").innerHTML = "sim";
		console.log($this.checked);
	} else {
		document.getElementById("sim").innerHTML = "não";
		console.log($this.checked);
	}
};

function par() {
	let par = prompt("Diz um numero");
	if (par % 2 === 0) {
		console.log("par");
	} else if (par % 2 === 1) {
		console.log("impar");
	} else {
		alert("Insira um numero");
	}
}

let array = ["karynne", "eve"];
let lista = JSON.parse(localStorage.getItem("lista"));
let list = document.getElementById("nomes");

if (lista !== null) {
	array = lista;
} else {
	localStorage.setItem("lista", JSON.stringify(array));
}

console.log(array);

for (i = 0; i < array.length; ++i) {
	let li = document.createElement("li");
	li.innerText = array[i];
	list.appendChild(li);
}

function addc() {
	let nome = document.getElementById("add").value;
	if (nome !== "") {
		console.log(nome);
		array_split = nome.split(",");
		array.unshift(array_split.flat());
		array = array.flat();
		array_split = array_split.reverse();
		array = array.map((el) => el.trim());

		for (i = 0; i < array_split.length; ++i) {
			let li = document.createElement("li");
			li.innerText = array_split[i];
			list.insertBefore(li, list.firstChild);
		}

		localStorage.setItem("lista", JSON.stringify(array.flat()));
	}
	console.log(array);
}
function addf() {
	let nome = document.getElementById("add").value;
	if (nome !== "") {
		console.log(nome);
		array_split = nome.split(",");
		array.push(array_split.flat());
		array = array.flat();
		array = array.map((el) => el.trim());

		for (i = 0; i < array_split.length; ++i) {
			let li = document.createElement("li");
			li.innerText = array_split[i];
			list.appendChild(li);
		}

		localStorage.setItem("lista", JSON.stringify(array));
	}
	console.log(array);
}
function delc() {
	array.shift();

	list.removeChild(list.firstElementChild);

	localStorage.setItem("lista", JSON.stringify(array));
	console.log(array);
}
function delf() {
	array.pop();

	list.removeChild(list.lastElementChild);

	localStorage.setItem("lista", JSON.stringify(array));
	console.log(array);
}
function clean() {
	let clean = prompt("Tem certeza? digite 'clean' para confirmar:");
	if (clean == "clean") {
		for (i = 0; i < array.length; ++i) {
			list.removeChild(list.firstElementChild);
		}

		array = [];

		localStorage.setItem("lista", JSON.stringify(array));
	}
	console.log(array);
}

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers = numbers.sort();
console.log(numbers);
