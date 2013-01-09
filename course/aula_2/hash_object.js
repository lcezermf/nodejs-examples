var pessoa = { } //cria hash
pessoa.nome = 'Luiz'
pessoa.idade = 22
pessoa // -> { nome: 'Luiz', idade: 22 }
pessoa.mensagem = function() { console.log('Ola Luiz'); }
pessoa // -> { nome: 'Luiz', idade: 22, mensagem: [Function] }
pessoa.mensagem(); // -> Ola Luiz