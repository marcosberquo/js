let agora1 = Date.now(); // usando um método estático da classe Date

let agora2 = new Date(); // criando um objeto

console.log(agora1); //imprime o timestamp da data
console.log(agora2);
console.log(agora2.getDate()); //imprime o dia
console.log(agora2.getFullYear()); // ano com 4 dígitos
console.log(agora2.getMonth()); // mês com base zero 

// usando a cultura local

console.log(agora2.toLocaleDateString("pt-BR")); //formato brasileiro

