SOURCES := $(shell git ls-files)

dist: $(SOURCES) node_modules
	npm run build

node_modules: package-lock.json
	rm -rf node_modules
	npm ci

