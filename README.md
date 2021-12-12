# NgWorkspace: Portal UI Project running angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Workspace Setup
Install Maven
cd UserPortal\ng-workspace
Run `mvn clean install`

## json mock data server
This will run json-server here http://localhost:3004
Run `./~/node/v14.15.4/node/npm run json-server`

## Development build
Build project libs
Run `./~/node/v14.15.4/node/npm run ng build auth-lib`
Run `./~/node/v14.15.4/node/npm run ng build dashboard-lib`
Build Project application
Run `./~/node/v14.15.4/node/npm run build`

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `./~/node/v14.15.4/node/npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the application source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
Show on the dashboard .. stats per cloud (aws/azure/gcp) in each cards....

Count of event type 

Display stats per site


Customer Issue reporting tab

Cloud Operation