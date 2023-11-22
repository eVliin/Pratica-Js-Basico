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
