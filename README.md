
### Deploy com Heroku

O Backend possui a seguinte estrutura:

```
├── README.md
├── index.js
├── data
│  ├── dataset
│  │  └── stranger-things-characters.json
│  └── repository
│     └── StrangerThings.js
├── services
│  └── StrangerThings.js
├── package-lock.json
└── package.json
└── Dockerfile
└── heroku.yml
```

---

#### API

A API consiste em um serviço simples com um endpoint `/` que retorna uma listagem com os personagens da série **Stranger Things**.

---

#### Resposta

A lista de personagem possui os seguintes campos:

- **name**: Nome do personagem;

- **status**: se o personagem está vivo ou não na série. Os valores possíveis são `alive`, `deceased` ou `unknown`;

- **origin**: o local de origem do personagem.

A resposta é em formato `JSON`, e o retorno é sempre um array de objetos. Abaixo, um exemplo:

```JSON
[
  {
    "name": "Will",
    "status": "Alive",
    "origin": "Byers Family"
  }
]
```

---

#### Filtros

Todos os campos da estrutura de retorno da resposta podem ser utilizados como filtros. Para isso, basta passar na `query string` o filtro desejado. No exemplo abaixo, estamos filtrando pelo _nome_ do personagem:

> stranger-names-api.herokuapp.com/?name=el

Os filtros são feitos utilizando uma `regex`, buscando pelo texto passado na `query string` em qualquer parte do campo, sem diferenciar maiúsculas de minúsculas.

Nesse caso o retorno seria:

```JSON
[
  {
    "name":"Russell",
    "status":"Alive",
    "origin":"Hawkings Middle School"
  },
  {
    "name":"Eleven",
    "status":"Alive",
    "origin":"Hopper Family"
  }
]
```

Filtros _page_ e _size_ para ajustar a quantidade de resultados e paginação.

> stranger-names-api.herokuapp.com?page=2&size=30

---

#### Modo `upside down` (dw) - Backend

Na API, no arquivo `index.js`, há a seguinte variável de controle:

```javascript
const hereIsTheUpsideDown = true;
```

Caso ela seja `true`, a API ativará o modo "Mundo Invertido", conforme a série, e começará a responder desta forma:

```JSON
[
  {
    "name":"llǝssnᴚ",
    "origin":"looɥɔS ǝlppᴉW sƃuᴉʞʍɐH",
    "status":"ǝʌᴉl∀"
  },
  {
    "name":"uǝʌǝlƎ",
    "origin":"ʎlᴉɯɐℲ ɹǝddoH",
    "status":"ǝʌᴉl∀"
  }
]
```

---
