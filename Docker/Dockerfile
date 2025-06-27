FROM ubuntu:22.04

RUN apt-get update && \
	apt-get install -y --no-install-recommends curl ca-certificates && \
	curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
	apt-get install -y --no-install-recommends nodejs && \
	apt-get upgrade -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/*

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]