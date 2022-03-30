### Deploy with Heroku

This project was created to exposure a endpoint with heroku platform

The Backend has the following structure:

```
├── README.md
├── index.js
├── date
│ ├── dataset
│ │ └── stranger-things-characters.json
│ └── repository
│ └── StrangerThings.js
├── services
│ └── StrangerThings.js
├── package-lock.json
└── package.json
└── Dockerfile
└── heroku.yml
```

---

#### API

The API consists of a service with a `/` endpoint that returns a listing of characters from the **Stranger Things** series.

---

#### Response

The character list has the following fields:

- **name**: Character name;

- **status**: if the character is alive or not in the series. Possible values ​​are `alive`, `deceased` or `unknown`;

- **origin**: the character's origin location.

The response is in `JSON` format, and the return is always an array of objects. Below an example:

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

#### Filters

All fields in the response return structure can be used as filters. To do this, just pass the desired filter in the `query string`. In the example below, we are filtering by the character's _name_:

> stranger-names-api.herokuapp.com/?name=el

Filters are done using a `regex`, looking for the text passed in the `query string` anywhere in the field, case insensitive.

In this case the return would be:

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

_page_ and _size_ filters to adjust the amount of results and pagination.

> stranger-names-api.herokuapp.com?page=2&size=30

---

#### `upside down` (dw) mode - Backend

In the API, in the `index.js` file, there is the following control variable:

```javascript
const hereIsTheUpsideDown = true;
```

If it is `true`, the API will activate the "Inverted World" mode, depending on the series, and will start responding like this:

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
