

default:
	@echo "make test; make run";

test:
	node t/hash.t

run:
	node env.js

