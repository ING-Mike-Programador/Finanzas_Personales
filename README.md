# 📊 APP de Finanzas Personales

Aplicación web desarrollada con **Angular**, **PHP** y **MySQL** para la gestión de finanzas personales.  
Permite a los usuarios registrar ingresos y gastos, y el dinero disponible en cada apartado (bolsillo, tarjetas, ahorros, etc).

💡 Este proyecto esta hecho principalmente como forma educativa y demuestra el manejo de **Angular con librerías CSS, PHP, MySQL y buenas prácticas en diseño UX/UI**. Ideal para mostrar conocimientos en **frontend + backend (fullstack)**.

---

## 🚀 Tecnologías utilizadas

- **Frontend:** Angular 17, TypeScript, HTML5, CSS3  
- **Librerías UI:** Angular Material  
- **Backend:** PHP (API REST)  
- **Base de datos:** MySQL  

---

## 🔑 Funcionalidades principales

✅ Dashboard con vista general de ingresos y gastos.  
✅ Gráficas dinámicas (barras, pastel, líneas) con **ngx-charts**.  
✅ CRUD de transacciones (agregar, editar, eliminar movimientos).
✅ Filtros por rango de fechas, tipo de movimiento. 
✅ Interfaz responsiva y moderna con Angular Material.

---

## ⚙️ Instalación y ejecución

### 🔹 Backend (PHP + MySQL)
1. Clonar el repositorio del backend en tu XAMPP.  
2. Configurar el archivo `config.php` con tus credenciales de MySQL.
3. Importar la base de datos desde `/fiananzas_personales/finanzasPersonales.sql`.
4. Iniciar servidor local con XAMPP.

```bash
php -S localhost:8000
