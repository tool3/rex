---
title: api 
--- 


- `POST /shorten`

  - body: `{ "url": "https://some.long.url.com" }`
  - response: `{ "short_url": "https://tsiny.herokuapp.com/some_id" }`

- `POST /resolve`
  - body: `{ "id": "some_id" }`
  - response: `{ "url": "https://some.long.url.com" }`
 