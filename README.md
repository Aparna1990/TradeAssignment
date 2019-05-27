# Trade Explorer

Trade Explorer is a node.js library for dealing with trades and their related transactions.

## Starting the server

Git clone or download this repo and use the below command to start the program

**Step 1:** Setting up Elastic Search

Refer to this [link](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html).

**Step 2:**
```bash
Start Elastic search and run the below curl for creating the index an type.
curl - X POST "http://localhost:9200/trade/trade_info" -H 'Content-Type: application/json' -d '{"settings" : {"index" : {"number_of_shards" : 3, "number_of_replicas" : 0 }}}'
```

**Step 3:**
```bash
npm install
```

**Step 4:**
```bash
npm start
```

## API samples

Base URL: http://localhost:3000

| Type | Path | Request Payload |
| --- | --- | --- |
| **POST** | `/trades` | {"id": 12,"type": "buy","user": {"id": 16,"name": "Aparna"},"symbol": "symbol","shares":        20,"price":150.42 }| 
| **GET** | `/trades` | `http://localhost:3000/trades` | 
| **GET** | `/trades/users/:userID` | `http://localhost:3000/trades/users/16` | 
| **GET** |`/stocks/:stockSymbol/trades:type?:start?:end?` | `http://localhost:3000/stocks/symbol2/trades?type=buy&start=2019-05-27&end=2019-09-27` | 
| **GET** |`/stocks/:stockSymbol/price:start?:end?` | `http://localhost:3000/stocks/symbol/price?start=2019-05-27&end=2019-09-27` | 
| **DELETE** |`/erase` |  | 


## Authors

[Aparna C](https://github.com/Aparna1990/)

