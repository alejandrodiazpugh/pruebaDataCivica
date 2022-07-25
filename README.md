# Prueba técnica
Datos de identificación humana en México

## Objetivo
Desplegar una gráfica de líneas en la que se muestren los valores totales de cuatro (4) indicadores de identificación humana en México para una institución seleccionada, un año seleccionado y un trimestre seleccionado.

En la parte superior se ubican 3 selectores (select, dropdown) que permiten:
- Seleccionar una institución (con posibilidad de seleccionar todas las instituciones).
- Seleccionar un trimestre (con posibilidad de seleccionar todos los trimestres).
- Seleccionar un año (con posiblidad de seleccionar todos los años).

Nota: utilizar al menos un selector (deseable que sean los tres) y visualizar al menos un indicador (deseable que sean los cuatro).
Datos
Leer la siguiente base de datos para descargar los valores totales de identificación humana.

### Gráfica
Encapsular la lógica para dibujar la gráfica en un componente de React.js que haga uso de los siguientes atributos:
data: 
- un arreglo (Array) de objetos con los datos con los que se dibujará la gráfica.
- selectedIns: institución que se quiere visualizar.
- selectedTri: trimestre que se quiere visualizar.
- selectedYear: año que se quiere visualizar.

### UX
- Las líneas deben ser verticales y los rótulos (labels) deben mostrar el trimestre y el año. Se debe mostrar una leyenda con la información de las líneas de los indicadores.

- La gráfica debe redibujarse cuando cambie la institución seleccionada, el trimestre seleccionado o el año seleccionado, sin necesidad de botones adicionales.

- Permitir que el usuario pueda descargar la base de datos en archivo CSV.

### Tech
- Seguir la guía de estilo de la biblioteca correspondiente (React.js 18.0).
- Instalar dependencias utilizando npm o yarn.
- Comentar y explicar el código.
- Hacer la interfaz gráfica responsiva utilizando Tailwind.
- Deseable: Visualizar los datos con Nivo.js.
- Opcional: Hacer unit testing con Jest.
- Opcional: Hacer la aplicación con TypeScript.
- Opcional: Implementar modo claro y modo oscuro.

### Entrega
- Entregar el código dentro de una semana (Tienes hasta 7 días y puedes entregar antes también).
- Compartir el código en un repositorio de Git.
