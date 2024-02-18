class Personagem {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    return `O ${this.tipo} atacou usando ${this.ataque}`;
  }
}

let mago = new Personagem("Gandalf", 300, "Mago", "magia");

console.log(
  `
  Dados do Personagem:
  Nome: ${mago.nome}
  Idade: ${mago.idade}
  Tipo: ${mago.tipo}
  ${mago.atacar()}
  `
);

let guerreiro = new Personagem("Aragon", 32, "Guerreiro", "Espada");

console.log(
  `
  Dados do Personagem:
  Nome: ${guerreiro.nome}
  Idade: ${guerreiro.idade}
  Tipo: ${guerreiro.tipo}
  ${guerreiro.atacar()}
  `
);

let anao = new Personagem("Gimli", 80, "Anão", "Martelo");

console.log(
  `
  Dados do Personagem:
  Nome: ${anao.nome}
  Idade: ${anao.idade}
  Tipo: ${anao.tipo}
  ${anao.atacar()}
  `
);

let arqueiro = new Personagem("Legolas", 270, "Arqueiro", "Arco e Flecha");

console.log(
  `
  Dados do Personagem:
  Nome: ${arqueiro.nome}
  Idade: ${arqueiro.idade}
  Tipo: ${arqueiro.tipo}
  ${arqueiro.atacar()}
  `
);
