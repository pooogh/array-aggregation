install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
test:
	npm test __tests__/index.test.js