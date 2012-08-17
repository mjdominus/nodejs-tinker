

default:
	@echo "make test; make run";

test:
	node t/hash.t
	node t/test.t

run:
	node env.js

