# Guia

# Índex

 - [1. Introducció](#introducci)
 - [1.1. Què és?](#qu-s)
 - [1.2. Per a què?](#per-a-qu)
 - [1.3. Per què?](#per-qu)
 - [1.4. Cap a on?](#cap-a-on)
 - [1.5. Alternatives](#alternatives)
 - [2. Requeriments](#requeriments)
 - [3. Instal·lació](#installaci)
 - [4. Dependències](#dependncies)
 - [5. Estructura](#estructura)
 - [6. APIs](#apis)
 - [7. Desplegament](#desplegament)
 - [8. Comandes](#comandes)
 - [9. Fluxes de treball](#fluxes-de-treball)
 - [10. Debugant i traçant](#debugant-i-traant)
 - [11. Hooks](#hooks)
 - [11.1. ¿Por qué `hooks`?](#¿Por qué `hooks`?)
 - [11.2. extender-hooks](#extender-hooks)
 - [12. Plugins i markets](#plugins-i-markets)
 - [13. Referència](#referncia)
 - [14. Sobrescriptura del kernel](#sobrescriptura-del-kernel)
 - [15. Agraïments](#agraments)
 - [16. Llicència](#llicncia)
 - [17. Versions](#versions)


# Introducció

...

## Què és?

...

## Per a què?

...

## Per què?

...

## Cap a on?

...


## Alternatives

...


# Requeriments

# Instal·lació

# Dependències

# Estructura

# APIs

# Desplegament

# Comandes

# Fluxes de treball

# Debugant i traçant

# Hooks

### ¿Por qué `hooks`?

Los `hooks`:
  - son eventos que una misma API de [`Plantomium CMS`](#) llamará si pasa por ciertos puntos del código.
  - son un método de extender la ejecución sin alterar el código fuente de la misma.
  - son un mecanismo de desacoplamiento de código muy eficiente.

Por estas razones principalmente, los `hooks` son un mecanismo nativo de la API de [`Plantomium CMS`](#).

De todos modos, no es la intención basar intensivamente el desarrollo de un proyecto a través de los `hooks`, como sí puede ocurrir a menudo en otros entornos.

Por esta última razón, la documentación de los `hooks` es bastante simple. Sin embargo, los `plugins`, por ejemplo, están pensados para que sí usen intensivamente esta API, pero quizá encuentren más conveniente añadir sus propios `hooks` personalizados en la aplicación.

### Lista de hooks

El proceso de [`Plantomium CMS`](#) comprende los siguientes hooks, llamados en este mismo orden en la ejecución natural de [`Plantomium CMS`](#):

- `project.on-create-app`: crea la `cms.app`, una aplicación de express.
- `project.on-create-server`: crea el `cms.server`, un servidor HTTPS de node.
- `project.on-mount-rest-to-router`: antes de montar las rutas del servicio rest en `src/cms/router/rest.js`.
  - `router:Object`: un enrutador de express.
- `project.on-mounted-rest-to-router`: después de montarlas.
- `project.on-load-api`
- `project.on-mount-router`
- `project.on-mount-auth-to-router`
- `project.on-mounted-auth-to-router`
- `project.on-mount-json`
- `project.on-mounted-json`
- `project.on-mount-process-to-router`
- `project.on-mounted-process-to-router`
- `project.on-mounted-router`
- `project.on-mount-sockets`
- `project.on-mounted-sockets`
- `project.on-regenerate-db`
  - `outputPath:String`: ruta de salida del `schema` de la base de datos original.
- `project.on-regenerated-db`
  - `outputPath:String`: ruta de salida del `schema` de la base de datos original.
  - `data:Object`: datos generados en el análisis de la base de datos.
- `project.on-regenerate-rest`
- `project.on-regenerated-rest`
  - `output:Object`:
- `project.on-start-server`
- `project.on-started-server`
  - `result:Object`
- `project.on-stop-server`
- `project.on-stopped-server`

Más o menos, se intuye lo que está haciendo la API en cada caso, pero pueden buscar en los códigos fuente para más información.

Nótese que algunos de estos `hooks` reciben parámetros.

# Plugins i markets

# Referència

# Sobrescriptura del kernel

# Agraïments

# Llicència

# Versions

