
# Search Books using Google Book api

This is a interview test, search in google's book api.

a mini-project with minor features search books and add it to reading list which is store locally.
and a reading list to check out your books.

no extra feature,
not using any specific pre-built component for styling.
## Tech Stack

**Client:** React, Redux-saga, TailwindCSS, axios, vite

**Server:** Google Book Api


## Installation

Install my-project with yarn

```bash
  yarn or yarn install
  yarn vite
```
    
## API Reference

#### Base url

```http
  GET https://www.googleapis.com
```

#### Search item

```http
  GET "/books/v1/volumes?q="query"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query = user search`      | `string` | **Required**. name of item to fetch |

#### returns(books)

all books related to the query which has been sent.
## 🚀 About Me
I'm a front-end developer
familiar with blockchain, web3 and NFT.

As a self-taught, motivated, and hard-working front-end developer, I have honed my skills through practical experience and a relentless drive for excellence.
I am committed to continuously expanding my knowledge and delving deeper into the field of front-end development, seeking out new learning opportunities and staying up-to-date with the latest industry trends and best practices.
