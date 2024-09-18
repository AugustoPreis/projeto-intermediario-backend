# Encurtador de Links

Criado por Augusto Preis Tomasi

### Objetivo e motivação

Este encurtador de links foi criado como parte da disciplina de Backend, da 4ª fase do curso de Engenharia de Software, orientado pelo professor [Ramon Venson](https://gitlab.com/professor-rvenson)

### Configuração

##### Tecnologias necessárias
 - Node.js >= 20
 - PostgreSQL >= 12.15

##### Rodando o projeto

- Criar o banco de dados PostgreSQL
- Criar a tabela de links
```
CREATE TABLE link (
	id serial NOT NULL PRIMARY KEY,
	original TEXT NOT NULL,
	encurtado varchar(100) NOT NULL UNIQUE
);
```

- Criar um arquivo chamado .env na pasta raiz do projeto, contendo as seguintes informações:
```
# Alterar as informações conforme necessário

PORT=8080
DB_USER=postgres
DB_HOST=localhost
DB_NAME=encurtador
DB_PASS=admin
DB_PORT=5432
API_URL=https://api.encurtador.dev/encurtamentos
```
- Executar o comando `npm i` na pasta raiz do projeto
- Executar o comando `npm start` na pasta raiz do projeto

### Endpoints

```
Descrição: Busca a url original com base na url encurtada informada pelo usuário
Método: GET
Url: /link/buscar
Params: urlEncurtada (string)

Exemplo: (js)

const result = await fetch('http://localhost:8080/link/buscar?urlEncurtada=acesse.one/JJufE');

console.log(await result.json()); // {urlOriginal: 'string'}
```
```
Descrição: Encurta a url informada pelo usuário
Método: POST
Url: /link/encurtar
Body: {
  link (string)
}

Exemplo: (js)

const result = await fetch('http://localhost:8080/link/encurtar', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ link: 'http://google.com' }),
});

console.log(await result.json()); // {urlEncurtada: 'string'};
```
```
Descrição: Informações do projeto
Método: GET
Url: /sobre

Exemplo: (js)

const result = await fetch('http://localhost:8080/sobre');

console.log(await result.json()); // {estudante: 'string', projeto: 'string'}
```
