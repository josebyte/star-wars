# StarWars

Project demo is visible here:
https://josebyte.github.io/star-wars/

When edit deploy again using: ng deploy --base-href=/star-wars/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Tareas:

- 1: ✓ Migrar el prototipo actual a un proyecto nuevo con angular.
- 2: ✓ Listado naves: 
  -  ✓ Implementar correctamente la paginación del listado de naves.
  -  ✓ Hay imágenes que no existen, en ese caso se debe mostrar un texto o imagen informando que no está disponible.
- 3: ✓ Creación de una ficha de detalle de la nave:
  -  ✓ Se quiere crear una ficha que se abra al hacer click sobre una de las naves que aparecen.
  -  ✓ Se debe implementar un botón de volver al listado
- 4: ✓ Modernización del site.
- 5: ✓ Cuando entras por primera vez te debe redirigir a la página de naves.
- 6: ✓ Cache: Implementar una caché del lado de cliente para proteger la api:
      Cache de assets y api(5min) implementado mediante PWA, github pages no lo soporta, probar mediante:
      npm run build --prod
      npm install -g http-server
      cd dist
      http-server -o -c-1
- 7: ✓ Implementar un menú para los usuarios registrados:
- Tests unitarios: Selecciona algun componente o servicio y aplicale testing. La idea es que nos demuestres tus conocimientos de testing mas allá de los que ofrece angular al ejecutar un comando de ng-cli.

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
