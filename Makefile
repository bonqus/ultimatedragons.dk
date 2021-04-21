lint:
	yarn run lint --fix
run:
	quasar dev
build:
	quasar build  && cp CNAME dist/spa
deploy:
	yarn deploy
