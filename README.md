## Prueba Técnica para Desarrollador Fullstack Senior

### Introducción
El objetivo de esta prueba técnica es evaluar tus habilidades en el desarrollo de una aplicación fullstack. Deberás implementar un sistema de gestión de ingresos y egresos, la gestión de usuarios y la generación de reportes. El diseño de la interfaz está proporcionado en los wireframes adjuntos.

### Requisitos del Proyecto

#### Funcionalidades Principales

1. **Roles y Permisos**
   - **Roles:**
     - **Usuario:** Solo puede acceder a la gestión de movimientos.
     - **Administrador:** Puede ver los reportes, editar usuarios y agregar movimientos.

2. **Home**
   - Página de inicio con un menú principal que permite la navegación a tres secciones: 
     - Sistema de gestión de ingresos y gastos (disponible para todos los roles)
     - Gestión de usuarios (solo para administradores)
     - Reportes (solo para administradores)

3. **Sistema de Gestión de Ingresos y Gastos**
   - **Vista de Ingresos y Egresos**
     - Implementar una tabla que muestre los ingresos y egresos registrados con las siguientes columnas:
       - Concepto
       - Monto
       - Fecha
       - Usuario
     - Botón "Nuevo" para agregar un nuevo ingreso o egreso (solo para administradores).
   - **Formulario de Nuevo Ingreso/Egreso**
     - Formulario con los campos:
       - Monto
       - Concepto
       - Fecha
     - Botón para guardar el nuevo movimiento.

4. **Gestión de Usuarios** (solo para administradores)
   - **Vista de Usuarios**
     - Tabla que muestre la lista de usuarios con las siguientes columnas:
       - Nombre
       - Correo
       - Teléfono
       - Acciones (editar usuario)
   - **Formulario de Edición de Usuario**
     - Formulario con los campos:
       - Nombre
       - Rol
     - Botón para guardar los cambios.

5. **Reportes** (solo para administradores)
   - Mostrar un gráfico de movimientos financieros.
   - Mostrar el saldo actual.
   - Botón para descargar el reporte en formato CSV.

### Requisitos Técnicos

- **Tecnologías y Herramientas:**
  - **Frontend:**
    - Next.js utilizando el `pages` router.
    - TypeScript.
    - Tailwind CSS.
    - Shadcn para componentes de la interfaz de usuario.
    - GraphQL en el cliente y el servidor.
  - **Backend:**
    - API GraphQL implementada en una ruta de API de Next.js.
    - Base de datos de Postgres en Supabase.
    - **Protección de Datos:** Implementar control de acceso basado en roles (RBAC) para asegurar que solo los usuarios autorizados puedan acceder a ciertas funcionalidades y datos.
  - **Autenticación:**
    - Utilizar NextAuth con Auth0 para la autenticación.
  - **Despliegue:**
    - Desplegar el proyecto en Vercel.

### Entregables

1. **Código Fuente:**
   - Repositorio en GitHub con el código fuente del proyecto.
   - Incluir un archivo README con instrucciones claras sobre cómo ejecutar el proyecto localmente y cómo desplegarlo en Vercel.

2. **Despliegue:**
   - Proyecto desplegado en Vercel con la URL proporcionada.

### Criterios de Evaluación

- **Funcionalidad:**
  - Cumplimiento de todos los requisitos funcionales.
  - Correcta implementación del CRUD para ingresos, egresos y usuarios.
  - Generación y descarga de reportes en formato CSV.

- **Calidad del Código:**
  - Calidad y claridad del código.
  - Uso adecuado de las mejores prácticas de desarrollo.
  - Estructura del proyecto.

- **Diseño y UX:**
  - Usabilidad de la interfaz.
  - Implementación de un diseño responsivo y atractivo.
  - Consistencia con los wireframes proporcionados.

- **Pruebas y Documentación:**
  - Cobertura de pruebas unitarias.
  - Calidad de la documentación de la API y del proyecto.

- **Seguridad:**
  - Implementación efectiva de control de acceso basado en roles (RBAC).
  - Protección adecuada de los datos sensibles.