install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci --legacy-peer-deps

gendiff:
	node bin/gendiff.js
	
lint:
	npx eslint .


