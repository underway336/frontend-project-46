install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js $(ARGS)

lint:
	npx eslint .




