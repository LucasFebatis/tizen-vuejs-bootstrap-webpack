# Tizen Tv + VueJs + Bootstrap Vue + Webpack

Poc that can be used as an example of a VueJs project running on Samsung TVs with Tizen OS

## You'll like to know... or not

The main point that allows to run the VueJs project (and any other Js project) is the fact that the WebPack is not configured to use chunks

## Cool, but and now?

You can use some messaging service, like FCM or AWS SNS or Sockets with lib socket.io to communicate the app over the internet

## Tizen Cli reference

https://developer.tizen.org/development/tizen-studio/web-tools/cli

or

`tizen help`

## Dev

### Rodar servidor com Hot Reload

`webpack-dev-server --hot --mode development`

### Testar no Emulador ou Device

Na pasta tizenProject

`tizen package -t wgt -s febatis` 

`tizen install -n tizenProject.wgt -- /Users/lucasbatista/Projetos/Pessoais/vuejs/vue-webpack/tizenProject`

## Problemas com sdb

Ver processos na porta 26099

`sudo lsof -i:26099`

Matar processos

`kill <pid>`

## Prod

### Gerar Bundle

`yarn build-prod`

### Gerar App

`cp -av dist tizenProject`

### Fazer Deploy

## Outros comandos

## Commands

### List a tizen project profiles ands templetes

`tizen list <option>`

`native-project`: Show native project template list

`web-project`: Show web project template list

`rootstrap`: Show rootstrap list tizen list

### List Devices and Emulators

`sdb devices`

### Create a tizen project

`tizen create <sub-command> [options]`

Sample: `tizen create web-project -n client -t BasicEmptyProject -p tv-samsung-5.0`

### Create a web project

https://createapp.dev/webpack

### Develop with Webpack

`webpack-dev-server --hot --mode development`

Server listen on: localhost:808x

### Build prod Webpack

`npm run build-prod`

output: ./dist

### Packaging a Tizen Application

`tizen package -t wgt`

### Install a tizen project on emulator

`tizen install -n <wgt_file> -- <build_output>`

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

```sh
node dist/bundle.js
```

## Credits

Made with [createapp.dev](https://createapp.dev/)
