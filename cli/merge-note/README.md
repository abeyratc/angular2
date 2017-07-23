# MergeNote

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


if serer is not auto load the page after any change

run 

$ echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches


Adding bootstrap 4
===================
1) First install Bootstrap from npm:

npm install bootstrap@next

2) Then add the needed script files to apps[0].scripts:

"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/tether/dist/js/tether.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
],

3) Finally add the Bootstrap CSS to the apps[0].styles array:

"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "styles.css"
],

4) Restart ng serve

adding fontawesome
=================
npm install font-awesome --save

in the angular-cli.json file locate the styles[] array, and then add font-awesome references to them, like below:
"apps": [
          {
             "root": "src",
             "outDir": "dist",
             ....
             "styles": [
                "styles.css",
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/font-awesome/css/font-awesome.css" // -here webpack will automatically build a link css element out of this!?
             ],
             ...
         }
       ]

],
