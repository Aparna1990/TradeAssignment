# Trade Explorer

Trade Explorer is a node.js library for dealing with trades and their related transactions.

## Starting the server

Git clone or download this repo and use the below command to start the program

**Step 1:** Setting up Elastic Search

Refer to this [link](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html).

**Step 2:**
```bash
npm install
```

**Step 3:**
```bash
npm install
```

**Step 4:**
```bash
npm install
```

## API samples

Base URL: http://localhost:3000

| Type | Path | Description |
| --- | --- | --- |
| **GET** | `/getTrades/` | List all *new or modified* files |
| **GET** | `/getTrade/:id` | Show file differences that **haven't been** staged |
| **POST** | `/newTrade/` | List all *new or modified* files |
| **GET** |`/tradeSummary/` | Show file differences that **haven't been** staged |
| **PUT** |`/update/` | List all *new or modified* files |
| **DELETE** |`/delete/` | Show file differences that **haven't been** staged |


## Authors

[Aparna C](https://github.com/Aparna1990/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
