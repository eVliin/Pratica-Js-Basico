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
