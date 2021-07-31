---
title: tsiny
---

https://github.com/tool3/tsiny

![](https://github.com/tool3/tsiny/blob/master/server/greeting/tsiny.png?raw=true)

the world's smallest url-shortener service

# API

- `POST /shorten`

  - body: `{ "url": "https://some.long.url.com" }`
  - response: `{ "short_url": "https://tsiny.herokuapp.com/some_id" }`

- `POST /resolve`
  - body: `{ "id": "some_id" }`
  - response: `{ "url": "https://some.long.url.com" }`
