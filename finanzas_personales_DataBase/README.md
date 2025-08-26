# 🗄️ Base de datos de Finanzas Personales

## 🚀 DIAGRAMA ENTIDAD-RELACION

<img align="center" src="DiagramaEntidadRelacion.svg" alt="Diagrama Entidad-Realación" width="800"/>

El diagrama muestra la estructura de la base de datos, simple y sencilla para el trabajo requerido, son unicamente 3 tablas las necesarias para el objetivo fijo de la Aplicacion.

## 📊 TABLAS
1. **cuentas**
    - Dentro de esta tabla se registran las cuentas que utiliza el usuario, por ejemplo: Bancoppel, BBVA,   Banorte, Bancomer, el bolsillo o cartera, etc...
    El usuario podra poner el monto inicial de dinero al registrar la cuenta y el valor se actualizara conforme se use en movimientos.
    Dentro de la misma tabla se trabajaran las transferencias que hace de cuenta a cuenta propias relacionadas dentro de movimientos, por ejemplo: si haces un movimiento donde transfieres de cuenta A a B, se creara en automatico una cuenta ***"A -> B"*** para despues sea mas rapida su selección.
2.  **movimientos**
    - Dentro de esta tabla seran registrados los movimientos realizados (Ganancias, Gastos y Transferencias), se registrara la fecha en el que se realizo el movimiento, una pequeña descripción de que trata y el monto del movimiento.
    En caso de ser el primer movimiento y no exista una fecha se registrara una al momento de insertar el movimiento.
    Tambien con cada movimiento realizado en cada cuenta se actualizara el monto de cada cuenta.
3. **flujosAcomulados**
    - Dentro de esta tabla se registrara el monto acomulado de los movimientos, el monto total de gastos de la fecha, las ganancias, y el total acomulado en ese dia.

## 📝 DATOS EXTRA
- El **monto** se viene manejando en *decimales* de 10 digitos antes y 2 despues del punto , por ejemplo, 1000000000.10.
- La **Fecha** se viene manejando como *date* ya que la hora importa muy poco en este tipo de objetivos que es cuentios de llevar un control de tus finanzas por ***DIA/MES***