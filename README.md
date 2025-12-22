# 📝 ProyectoAngular-ReactiveForms

Proyecto de demostración de **Angular Reactive Forms** que implementa un formulario completo de registro de usuarios con validaciones personalizadas, manejo dinámico de campos y mejores prácticas de Angular.

## 📋 Descripción

Este proyecto muestra la implementación avanzada de formularios reactivos en Angular, incluyendo:
- ✅ Validaciones personalizadas (email, nombres, códigos postales)
- 🔄 Formularios dinámicos con FormArray
- 🎨 Integración con Angular Material y Bootstrap
- 🌍 Selección de regiones y ciudades de Chile
- 📅 Manejo de fechas
- 🏗️ Arquitectura modular con lazy loading

## 🚀 Tecnologías y Versiones

| Tecnología | Versión |
|------------|---------|
| Angular | 16.1.3 |
| Angular CLI | 16.1.3 |
| Angular Material | 16.1.4 |
| Angular CDK | 16.1.4 |
| Angular Flex-Layout | 15.0.0-beta.42 |
| Bootstrap | 5.3.0 |
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
   - Nombre completo (solo letras y espacios)
   - Fecha de nacimiento
   - Email válido
   - Contraseña
   - Ciudad
   - Código postal (5 dígitos)
   - Región de Chile
   - Una o más direcciones (dinámicas)

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

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.io/docs)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)

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


