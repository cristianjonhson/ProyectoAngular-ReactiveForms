# 📝 ProyectoAngular-ReactiveForms

Proyecto de demostracion de Angular Reactive Forms que implementa un formulario de registro de usuarios con validaciones, campos dinamicos de direcciones y feedback visual.

## Descripcion

La aplicacion muestra un formulario construido con Reactive Forms. El modulo principal de ejemplo esta en `src/app/modules/users` y se renderiza desde el componente principal de la aplicacion.

Incluye:

- Formulario reactivo con `FormControl`, `FormGroup` y `FormArray`.
- Validaciones definidas en TypeScript.
- Validador personalizado para nombre completo.
- Manejo dinamico de direcciones.
- Selector de regiones de Chile.
- Alertas de exito y error con SweetAlert2.
- Estilos basados en Bootstrap.

## Tecnologias

| Tecnologia | Version |
|------------|---------|
| Angular | 16.1.8 |
| Angular CLI | 16.1.x |
| Bootstrap | 5.3.0 |
| SweetAlert2 | 11.26.17 |
| TypeScript | 5.1.6 |
| RxJS | 7.8.1 |
| Karma | 6.4.2 |
| Jasmine | 5.0.1 |

Nota: Angular Material y Angular CDK estan instalados como dependencias, pero actualmente no se usan en la interfaz del formulario.

## Estructura

```text
ProyectoAngular-ReactiveForms/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   └── users/
│   │   │       ├── users.component.ts
│   │   │       ├── users.component.html
│   │   │       ├── users.component.css
│   │   │       ├── users.component.spec.ts
│   │   │       └── users.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── angular.json
├── karma.conf.js
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Formulario Implementado

El formulario de usuarios contiene estos campos:

- Nombre completo: requerido, solo letras y espacios mediante `nameValidator`.
- Fecha de nacimiento: requerida.
- Email: requerido y con formato de email valido.
- Region: selector con regiones de Chile.
- Contrasena: requerida.
- Ciudad: requerida, ingresada como texto libre.
- Codigo postal: requerido, debe tener 5 digitos numericos.
- Direcciones: lista dinamica con una o mas direcciones requeridas.

## Conceptos de Reactive Forms

El componente `UsersComponent` usa:

- `FormControl` para los controles individuales.
- `FormGroup` para agrupar el modelo completo del usuario.
- `FormArray` para agregar y eliminar direcciones dinamicamente.
- `FormBuilder` para construir nuevos grupos dentro del `FormArray`.
- Validaciones nativas de Angular como `required`, `email` y `pattern`.
- Un validador personalizado llamado `nameValidator`.
- Marcado recursivo de controles como `touched` cuando se intenta enviar un formulario invalido.

## Instalacion

### Prerrequisitos

- Node.js compatible con Angular 16.
- npm.
- Angular CLI 16.x.

### Pasos

```bash
npm install
```

## Comandos Disponibles

### Desarrollo

```bash
npm start
```

La aplicacion queda disponible en `http://localhost:4200/`.

### Build

```bash
npm run build
```

El build compila correctamente. Actualmente puede mostrar advertencias por:

- SweetAlert2 como dependencia CommonJS.
- Tamano inicial del bundle por sobre el presupuesto configurado.

### Tests

```bash
npm test
```

El proyecto tiene configuracion de Karma/Jasmine y un spec basico para `UsersComponent`, pero la ejecucion actual requiere corregir la dependencia/configuracion de coverage porque `karma.conf.js` referencia `karma-coverage` y esa dependencia no esta instalada en `package.json`.

### Lint y E2E

Los scripts `npm run lint` y `npm run e2e` existen en `package.json`, pero actualmente no hay targets `lint` ni `e2e` configurados en `angular.json`. Para usarlos se debe agregar una herramienta como Angular ESLint, Cypress, Nightwatch o WebdriverIO.

## Uso

1. Ejecuta `npm start`.
2. Abre `http://localhost:4200/`.
3. Completa el formulario de usuario.
4. Agrega o elimina direcciones con el boton `+ Agregar direccion` y el boton de eliminacion.
5. Presiona `Enviar`.

Si el formulario es valido, se muestra una alerta de exito y los datos se imprimen en la consola del navegador. Si es invalido, se marcan los controles como tocados y se muestra una alerta de error.

## Configuracion De Estilos

Bootstrap esta configurado para el build principal en `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

## Estado Actual

- La aplicacion usa Reactive Forms, no template-driven forms.
- `FormsModule` no esta importado.
- El formulario no usa componentes de Angular Material actualmente.
- No hay archivo `LICENSE` en el repositorio.
- La primera direccion no se puede eliminar desde la interfaz porque el boton de eliminar solo aparece desde la segunda direccion.

## Autor

Cristian Jonhson

GitHub: [@cristianjonhson](https://github.com/cristianjonhson)
