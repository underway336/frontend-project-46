install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci --legacy-peer-deps

lint:
	npx eslint .


