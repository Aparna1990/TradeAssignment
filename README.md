# Trade Explorer

Trade Explorer is a node.js library for dealing with trades and their related transactions.

## Starting the server

Git clone or download this repo and use the below command to start the program

Step 1:
```bash
npm install
```
Step 2:
```bash
npm start
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


## Author

[Aparna C](https://github.com/Aparna1990/)
