# 📝 ProyectoAngular-ReactiveForms

Proyecto de demostración de **Angular Reactive Forms** que implementa un formulario completo de registro de usuarios con validaciones personalizadas, manejo dinámico de campos y mejores prácticas de Angular.

## 📋 Descripción

Este proyecto muestra la implementación avanzada de formularios reactivos en Angular, incluyendo:
- ✅ Validaciones personalizadas (email, nombres, códigos postales)
- 🔄 Formularios dinámicos con FormArray
- 🎨 Integración con Angular Material y Bootstrap
- 🌍 Selección de regiones y ciudades de Chile
- 📅 Manejo de fechas
- 🏗️ Arquitectura modular
- 🎯 100% Reactive Forms (sin template-driven forms)
- 🔔 Notificaciones elegantes con SweetAlert2
- ✨ Validación en tiempo real con feedback visual

## 🚀 Tecnologías y Versiones

| Tecnología | Versión |
|------------|---------|
| Angular | 16.1.8 |
| Angular CLI | 16.1.8 |
| Angular Material | 16.1.8 |
| Angular CDK | 16.1.8 |
| Angular Flex-Layout | 15.0.0-beta.42 |
| Bootstrap | 5.3.0 |
| SweetAlert2 | 11.26.17 |
| TypeScript | 5.1.6 |
| RxJS | 7.8.1 |
| Node.js | 20.3.3+ |
| Karma | 6.4.2 |
| Jasmine | 5.0.1 |

## 📁 Estructura del Proyecto

```
ProyectoAngular-ReactiveForms/
│
├── src/
│   ├── app/
│   │   ├── modules/              # Módulos de la aplicación
│   │   │   └── users/            # Módulo de usuarios
│   │   │       ├── users.component.ts       # Lógica del componente
│   │   │       ├── users.component.html     # Template del formulario
│   │   │       ├── users.component.css      # Estilos del componente
│   │   │       ├── users.component.spec.ts  # Tests unitarios
│   │   │       └── users.module.ts          # Módulo de usuarios
│   │   │
│   │   ├── app.component.ts      # Componente principal
│   │   ├── app.component.html    # Template principal
│   │   ├── app.component.css     # Estilos principales
│   │   └── app.module.ts         # Módulo raíz
│   │
│   ├── assets/                   # Recursos estáticos
│   ├── environments/             # Configuraciones de entorno
│   │   ├── environment.ts        # Configuración desarrollo
│   │   └── environment.prod.ts   # Configuración producción
│   │
│   ├── index.html                # HTML principal
│   ├── main.ts                   # Punto de entrada de la aplicación
│   ├── polyfills.ts              # Polyfills para compatibilidad
│   ├── styles.css                # Estilos globales
│   └── test.ts                   # Configuración de tests
│
├── angular.json                  # Configuración de Angular CLI
├── karma.conf.js                 # Configuración de Karma (tests)
├── package.json                  # Dependencias del proyecto
├── tsconfig.json                 # Configuración de TypeScript
├── tsconfig.app.json             # Configuración TS para la app
├── tsconfig.spec.json            # Configuración TS para tests
└── README.md                     # Este archivo
```

## 🛠️ Características Principales

### FormControl
Manejo individual de controles de formulario con validaciones:
- **Email**: Validación de formato de correo electrónico
- **Password**: Campo obligatorio
- **Full Name**: Validación personalizada solo permite letras y espacios
- **ZIP Code**: Validación de patrón (5 dígitos)
- **Birth Date**: Control de fechas
- **Region**: Selección de regiones de Chile

### FormGroup
Agrupación lógica de controles en un objeto estructurado que representa el modelo de usuario completo.

### FormArray
Manejo dinámico de direcciones:
- ➕ Agregar múltiples direcciones
- 🗑️ Eliminar direcciones específicas
- 🔄 Gestión dinámica del array de formularios

### Validadores Personalizados
- `nameValidator`: Valida que el nombre solo contenga letras y espacios
- Validaciones nativas de Angular (required, email, pattern)
- Todas las validaciones en TypeScript (enfoque 100% reactivo)

### Feedback y UX
- **SweetAlert2**: Alertas modales elegantes para éxito y errores
- **Validación visual**: Clases `is-invalid` en campos con errores
- **Mensajes específicos**: Diferentes mensajes según el tipo de error
- **Botón inteligente**: Se deshabilita automáticamente si el formulario es inválido
- **Marcado recursivo**: Marca todos los controles (incluso en FormArray) como touched al enviar

## 📦 Instalación

### Prerrequisitos

- Node.js v20.3.3 o superior
- npm (incluido con Node.js)
- Angular CLI v16.1.3

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/cristianjonhson/ProyectoAngular-ReactiveForms.git
cd ProyectoAngular-ReactiveForms
```

2. **Instalar Angular CLI globalmente** (si no lo tienes)
```bash
npm install -g @angular/cli@16.1.3
```

3. **Instalar dependencias del proyecto**
```bash
npm install
```

## 🎯 Comandos Disponibles

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# El servidor estará disponible en: http://localhost:4200/
```

### Construcción
```bash
# Build de desarrollo
npm run build
# o
ng build

# Build de producción
ng build --configuration production
```

### Testing
```bash
# Ejecutar tests unitarios
npm test
# o
ng test

# Ejecutar tests e2e
npm run e2e
# o
ng e2e
```

### Linting
```bash
# Verificar código con linter
npm run lint
# o
ng lint
```

### Otros Comandos Útiles
```bash
# Generar nuevo componente
ng generate component nombre-componente

# Generar nuevo servicio
ng generate service nombre-servicio

# Generar nuevo módulo
ng generate module nombre-modulo

# Ver todos los comandos disponibles
ng help
```

## 🌐 Uso del Proyecto

1. Inicia el servidor de desarrollo con `npm start`
2. Navega a `http://localhost:4200/`
3. El módulo de usuarios estará disponible en la ruta principal
4. Completa el formulario con:
   - **Nombre completo**: Solo letras y espacios
   - **Fecha de nacimiento**: Selecciona una fecha válida
   - **Email**: Formato válido (example@domain.com)
   - **Región**: Selecciona una región de Chile
   - **Contraseña**: Campo requerido
   - **Ciudad**: Nombre de la ciudad
   - **Código postal**: Exactamente 5 dígitos numéricos
   - **Direcciones**: Una o más direcciones (puedes agregar/eliminar dinámicamente)
5. El botón "Enviar" se habilitará solo cuando todos los campos sean válidos
6. Al enviar, verás una notificación de SweetAlert2 con el resultado
7. Los datos del formulario se mostrarán en la consola del navegador

### Características en Acción
- Los campos muestran errores específicos cuando son tocados e inválidos
- Puedes agregar múltiples direcciones con el botón "+ Agregar dirección"
- La primera dirección no puede eliminarse
- El formulario muestra su estado de validación en tiempo real

## 🔧 Configuración

### Bootstrap
El proyecto incluye Bootstrap 5.3.0 configurado en `angular.json`:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

### Angular Material
Angular Material está instalado y listo para usar. Para agregar componentes:
```bash
ng add @angular/material
```

### SweetAlert2
SweetAlert2 está integrado para mostrar alertas modales elegantes:
```typescript
import Swal from 'sweetalert2';

Swal.fire({
  icon: 'success',
  title: '¡Éxito!',
  text: 'Operación completada exitosamente'
});
```

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.io/docs)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)

## 🎓 Conceptos de Reactive Forms Implementados

Este proyecto es un ejemplo completo de **Reactive Forms** en Angular que incluye:

### ✅ Buenas Prácticas
- ✔️ Solo `ReactiveFormsModule` importado (sin `FormsModule`)
- ✔️ Validaciones definidas en TypeScript, no en HTML
- ✔️ Uso de `FormBuilder` para construir formularios
- ✔️ Interfaces TypeScript para tipado fuerte
- ✔️ Validadores personalizados reutilizables
- ✔️ Manejo correcto de FormArray para datos dinámicos
- ✔️ Método recursivo para marcar controles como touched
- ✔️ Separación de lógica (TS) y presentación (HTML)

### 📖 Patrones Utilizados
1. **FormControl**: Control individual de cada campo
2. **FormGroup**: Agrupación lógica de controles relacionados
3. **FormArray**: Manejo de listas dinámicas (direcciones)
4. **Custom Validators**: Validador personalizado para nombres
5. **Reactive Approach**: Sin uso de `ngModel` o directivas de template

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 👨‍💻 Autor

**Cristian Jonhson**
- GitHub: [@cristianjonhson](https://github.com/cristianjonhson)

---


