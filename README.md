# Personal Details App

Este proyecto es una aplicación web desarrollada en React con TypeScript que permite a los usuarios ingresar sus detalles personales a través de un formulario. La aplicación utiliza Material UI, Bootstrap o Tailwind CSS para el diseño y la presentación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
personal-details-app
├── src
│   ├── components
│   │   ├── PersonalDetailsForm.tsx
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm start
```

Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:3000`.

## Descripción del Componente

El componente principal de la aplicación es `PersonalDetailsForm`, que incluye:

- Un título "Detalles Personales".
- Una lista desplegable para seleccionar un saludo.
- Campos de texto obligatorios para nombre y apellido.
- Botones de opción para seleccionar el género.
- Un campo de texto para el correo electrónico.
- Un selector de fecha para la fecha de nacimiento.
- Un área de texto multilínea para la dirección.

El formulario maneja la validación de los campos obligatorios para asegurar que se ingresen los datos necesarios.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.