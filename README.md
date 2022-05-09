# Note
You might want to install Typescript and nodemon globally:
`npm i -g typescript nodemon`

# Initial commands
`npm i`

# Watchers
## Run server with nodemon
`npm run dev`
OR
`nodemon -e ts,js,twig,json`

## Run TS file watcher
`npm run ts`
OR
`tsc --watch`

All *.ts files in /src are output in /public/javascripts/ as browser-compatible *.js files.
These files are meant for the client's side.
Don't worry about the other TS files, they are JIT compiled everytime the server is started,
thanks to the ts-node package: https://typestrong.org/ts-node/docs/how-it-works

## Optional: concurrently
You can run both above-mentioned commands in separate terminals (or a split terminal), or use the
concurrently package run them "simultaneously": https://www.npmjs.com/package/concurrently#why