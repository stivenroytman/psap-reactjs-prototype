default: server

.PHONY: server start
server: 
	yarn install || npm install
	cd psap-express-server; npm install 

destrucc:
	rm -rf node_modules
	rm -rf psap-express-server/node_modules
	pkill node

booya:
	npm start >> frontend.log & cd psap-express-server; npm start >> backend.log &

