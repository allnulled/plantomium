# <@-_("guide");@>

# <@-_('index')@>

 - [1. <@-_("introduccion")@>](#<@-cms.utils.toAnchor(_("introduccion"));@>)
 - [1.1. <@-_("que-es");@>](#<@-cms.utils.toAnchor(_("que-es"));@>)
 - [1.2. <@-_("para-que");@>](#<@-cms.utils.toAnchor(_("para-que"));@>)
 - [1.3. <@-_("por-que");@>](#<@-cms.utils.toAnchor(_("por-que"));@>)
 - [1.4. <@-_("hacia-que");@>](#<@-cms.utils.toAnchor(_("hacia-que"));@>)
 - [1.5. <@-_("alternativas");@>](#<@-cms.utils.toAnchor(_("alternativas"));@>)
 - [2. <@-_("requisitos");@>](#<@-cms.utils.toAnchor(_("requisitos"));@>)
 - [3. <@-_("instalacion");@>](#<@-cms.utils.toAnchor(_("instalacion"));@>)
 - [4. <@-_("dependencias");@>](#<@-cms.utils.toAnchor(_("dependencias"));@>)
 - [5. <@-_("estructura");@>](#<@-cms.utils.toAnchor(_("estructura"));@>)
 - [6. <@-_("apis");@>](#<@-cms.utils.toAnchor(_("apis"));@>)
 - [7. <@-_("despliegue");@>](#<@-cms.utils.toAnchor(_("despliegue"));@>)
 - [8. <@-_("comandos");@>](#<@-cms.utils.toAnchor(_("comandos"));@>)
 - [9. <@-_("flujos-de-trabajo");@>](#<@-cms.utils.toAnchor(_("flujos-de-trabajo"));@>)
 - [10. <@-_("debugando-y-trazando");@>](#<@-cms.utils.toAnchor(_("debugando-y-trazando"));@>)
 - [11. <@-_("hooks");@>](#<@-cms.utils.toAnchor(_("hooks"));@>)
 - [11.1. ¿Por qué `hooks`?](#¿Por qué `hooks`?)
 - [11.2. extender-hooks](#extender-hooks)
 - [12. <@-_("plugins-y-markets");@>](#<@-cms.utils.toAnchor(_("plugins-y-markets"));@>)
 - [13. <@-_("referencia");@>](#<@-cms.utils.toAnchor(_("referencia"));@>)
 - [14. <@-_("sobrescritura-del-kernel");@>](#<@-cms.utils.toAnchor(_("sobrescritura-del-kernel"));@>)
 - [15. <@-_("agradecimientos");@>](#<@-cms.utils.toAnchor(_("agradecimientos"));@>)
 - [16. <@-_("licencia");@>](#<@-cms.utils.toAnchor(_("licencia"));@>)
 - [17. <@-_("versiones");@>](#<@-cms.utils.toAnchor(_("versiones"));@>)


# <@-_("introduccion")@>

...

## <@-_("que-es");@>

...

## <@-_("para-que");@>

...

## <@-_("por-que");@>

...

## <@-_("hacia-que");@>

...


## <@-_("alternativas");@>

...


# <@-_("requisitos");@>

# <@-_("instalacion");@>

# <@-_("dependencias");@>

# <@-_("estructura");@>

# <@-_("apis");@>

# <@-_("despliegue");@>

# <@-_("comandos");@>

# <@-_("flujos-de-trabajo");@>

# <@-_("debugando-y-trazando");@>

# <@-_("hooks");@>

### ¿Por qué `hooks`?

Los `hooks`:
  - son eventos que una misma API de <@-_("plantomium-cms");@> llamará si pasa por ciertos puntos del código.
  - son un método de extender la ejecución sin alterar el código fuente de la misma.
  - son un mecanismo de desacoplamiento de código muy eficiente.

Por estas razones principalmente, los `hooks` son un mecanismo nativo de la API de <@-_("plantomium-cms");@>.

De todos modos, no es la intención basar intensivamente el desarrollo de un proyecto a través de los `hooks`, como sí puede ocurrir a menudo en otros entornos.

Por esta última razón, la documentación de los `hooks` es bastante simple. Sin embargo, los `plugins`, por ejemplo, están pensados para que sí usen intensivamente esta API, pero quizá encuentren más conveniente añadir sus propios `hooks` personalizados en la aplicación.

### Lista de hooks

El proceso de <@-_("plantomium-cms")@> comprende los siguientes hooks, llamados en este mismo orden en la ejecución natural de <@-_("plantomium-cms");@>:

- `project.on-create-app`: crea la `cms.app`, una aplicación de <@-_("express");@>.
- `project.on-create-server`: crea el `cms.server`, un servidor HTTPS de <@-_("node");@>.
- `project.on-mount-rest-to-router`: antes de montar las rutas del servicio <@-_("rest");@> en `src/cms/router/rest.js`.
  - `router:Object`: un enrutador de <@-_("express");@>.
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

# <@-_("plugins-y-markets");@>

# <@-_("referencia");@>

# <@-_("sobrescritura-del-kernel");@>

# <@-_("agradecimientos");@>

# <@-_("licencia");@>

# <@-_("versiones");@>

