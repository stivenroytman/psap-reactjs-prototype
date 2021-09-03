default: server

.PHONY: server
server: 
	yarn install
	cd psap-express-server; npm install 
