default: server

.PHONY: server start
server: 
	yarn install || npm install
	cd psap-express-server; npm install 

