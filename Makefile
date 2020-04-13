
install: install-api install-client

install-api: 
		cd api && yarn install
install-client: 
		cd client && yarn install

.PHONY: server client
server: 
	cd ./api && yarn start
client: 
	cd ./client && yarn start
