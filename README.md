<<<<<<< HEAD
# ClientWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Basic-CRUD-Angular-8-NetCore-JWt-API
Simple application, without further validation, to exemplify the use of a CRUD in Anlgular 8 with NetCore API using JWT and session control via database

## Instalation
1. Clone or download the application

2. API
- Restore package dependnecies NutGet
- build
- Set "DefaultConnection": "Server=BAUER-PC\\SQLEXPRESS2017;" inside "appsettings.json" to yoyr Sql Server
- Select "WebApi" projet and RUN (this API dont have any custom/swagger page)
- Set Up DB runing in PMC of VS 2019 dotnet ef database update --context ApiDbContext
- Finally run project

3. Angular
- npm install
- set envimentens "apiProtected" and "apiOpen" to your API local adress 
- ng serve --open

If the both apps running withou erros you will be able list, add, edit and delete (CRUD) basic informations an store it's in the database. LogOut will "expire" session inside DB but attention. In this FIRRST version the API dont verify if still alive (to next updates ;))
>>>>>>> 296583c18f1d6fde4260a34344d7f87f1e0908ca
