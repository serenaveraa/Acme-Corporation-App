# 🧪 Prueba Técnica – React Developer

## 🎯 Objetivo

Crear una aplicación en React que consuma una API pública y muestre una lista de usuarios con soporte para búsqueda y paginación.

### 🔗 API a utilizar

[DummyJSON - Usuarios](https://dummyjson.com/docs/users#users-all)
Endpoint base:
`https://dummyjson.com/users`

#### Documentación

https://dummyjson.com/docs/users#users-all

### ✅ Requisitos funcionales

1. Mostrar una tabla con usuarios

   - Consumir los usuarios desde el endpoint: `https://dummyjson.com/users`.
   - Mostrar al menos: nombre completo, edad, email y rol.
   - Resaltar a los usuarios que tengan el atributo `role` con valor `admin` (por ej. mostrarlos en negrita).

2. Paginación

   - Permitir al usuario navegar entre páginas.

3. Buscador

   - Permitir buscar usuarios por nombre usando: `https://dummyjson.com/users/search?q=John`
   - Se recomienda utilizar una técnica de debounce para evitar llamadas a la API en cada pulsación. Por ejemplo, realizar la búsqueda solo si el usuario deja de tipear durante 300–500ms.

4. Modal con más información

   - Al hacer click en el nombre de un usuario se deberá abrir un modal que contenga la siguiente información: género, teléfono, fecha de nacimiento y nombre de usuario.

### ⭐️ Requisitos opcionales (Bonus)

- Validar entrada del usuario en el buscador.
- Sincronizar y persistir filtros y página actual con los parámetros de la URL.
- Implementar loading spinners y manejo de errores.
- Usar TypeScript.

### 🧱 Requisitos técnicos

- Usar React.js.
- Puede usarse `fetch` o `axios`.
- El diseño debe ser responsive.
- No es necesario usar frameworks de UI pero se puede usar [TailwindCSS](https://tailwindcss.com/) o [MaterialUI](https://mui.com/material-ui/).

### 📦 Entregable

Enviar el enlace a un repositorio público (GitHub, GitLab o similar) que incluya un README con las instrucciones para levantar el proyecto.
