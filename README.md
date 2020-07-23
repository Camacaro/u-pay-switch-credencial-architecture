# U Payments Switch (Credencial - ALL)
> Switch of **Credencial** provider supporting all countries.


- [Getting started](#getting-started)
- [Tests](#tests)


# Getting started

## Dependencies needed
Before start, make sure that you already have installed the dependencies listed below:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [PostgreSQL](https://www.postgresql.org)

## Environment variables
You need to create a `.env` file which the example can be found in [.env.example](./.env.example) in this repository, and should be include *port*, *host*, *database variables* and others.

## Running
After clone this repository and install the dependencies need, run:
```sh
yarn install
```

Then, in a separate tab, run the build process (this will be watch the code changes and will hot reload for you):
```sh
yarn build
```

And finally, start the server by ran:
```sh
yarn start
```

# Tests
We encourage always test and trying to keep the maximum test coverage as possible.

Before ran the tests, we suggest that you _lint_ the code by run:
```sh
yarn lint
```

Then, run the tests:
```sh
yarn test
```

A coverage report will be generated and you will keep track which the percentage of the code are covered.


# Dvelopment
```sh
npm run build:develop
```

and 

```sh
npm run start
```

You can see in

http://localhost:3005/v1/test

3005: config .env **PORT**