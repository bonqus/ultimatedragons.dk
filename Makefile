lint:
	npm run lint --fix
run:
	quasar dev
build:
	quasar build  && cp CNAME dist/spa
deploy:
	npm run deploy
