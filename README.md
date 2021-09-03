# PSAP-ReactJS-Prototype

## Purpose

To prototype a tool for running PSAP experiments online.

## System Dependenceis

1. nodejs
2. npm

## Installation
```bash
# manual option
yarn install || npm install
cd psap-express-server; npm install

make # optional easier route, if you have make installed
```


## Usage

Starting the frontend from repository root
```bash
yarn start || npm start
```

Start the backend from repository root
```bash
cd psap-express-server; node server.js
```

If you're the Tony Hawk of being a l334 h4x0rrr you can do this to kill two birds with one stone, __BOOYA__
```bash
npm start >> frontend.log & cd psap-express-server; npm start >> backend.log &

# noob version
make booya
```
