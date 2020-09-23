
----

### `/src/auth/actors/change.js`



**Location**:  `cms.auth.actors.change`


**Name**:  change


**Type**:  `async function`


**Receives**: 


 - `parameters:Object` - parameters to change a user password.


 - `parameters.recovery_token:String` - previous recovery_token of the user.


 - `parameters.password:String` - new password.


**Returns**: 


 - `Promise<data:Object>`


 - `Promise<data.message:String>` - a message confirming the operation.


**Throws**: 


 - `No user found on change` - select returned 0 items


 - `No user found on change (anomaly)` - select returned more than 1 item


 - `No user found to update on change` - affectedRows of update is 0


**Description**:  method that changes the password of a user






# Referencia

Cada parte de este documento:

  - pretende explicar acerca de las partes de este software
  - puede estar redactado en castellano o inglés originalmente
  - tiene una sintaxis específica

## Sintaxis de este documento

Este es un ejemplo de elemento documentativo prototipo:

```/**
 * 
 * ----
 * 
 * #### `{ruta/al/fichero.js}`
 * 
 * @location`:    `acceso.a.variable`
 * @name`:        `nombreAmigable`
 * @type`:        `TipoDeDato` - explicación
 * @receives`:    
 * @receives`:    `nombre:Tipo` - explicación
 * @returns`:     
 * @returns`:     `nombre:Tipo` - explicación
 * @throws`:      
 * @throws`:      `Mensaje de error` - explicación
 * @description`: explicación
 * 
 */
```

#### Ejemplos de código


#### Encabezados

  - Título de API:     ## Auth API
  - Título de sub-API: ### Auth:actors API
  - Título de fichero: ### `/src/auth/actors`

#### Atributos documentativos

  - `@location`: acceso programático al valor referido
  - `@name`: identificador amigable del valor referido en la documentación
  - `@type`: tipo de dato. Puede ser primitivo o artificial
  - `@receives`: lista de datos tipados que recibe una función
  - `@returns`: dato (y profundización) que devuelve una función
  - `@throws`: lista de errores que puede lanzar una función o bloque
  - `@description`: descripción amigable de la funcionalidad del valor referido

#### Tipado y documentación típica

  - `variable1:Tipo1`
  - `variable1:Tipo1 <variable2:Tipo2>`
  - `variable1:Tipo1 <variable2:Tipo2, variable3:Tipo3>`
  - `variable1:Tipo1 <variable2:Tipo2 <variable3:Tipo3, variable4:Tipo4> >`
  - `variable1.propiedad1:TipoPropiedad1`
  - `variable1.propiedad1:TipoPropiedad1 <variable2:Tipo2>`





----

### `/src/auth/actors/authenticate.js`



**Location**:  `cms.auth.actors.authenticate`


**Name**:  authenticate


**Type**:  `async function`


**Receives**: 


 - `parameters:Object` - user password and name or email


**Returns**: 


 - `Promise<data:Object>`


 - `Promise<data.user:Object>` - data of the user itself


 - `Promise<data.groups:Object>` - data of the user groups


 - `Promise<data.permssions:Object>` - data of the user permissions


 - `Promise<data.sessions:Object>` - data of the user sessions


**Throws**: 


 - `No user found on authenticate`


**Description**:  method that gets the session data and inserts a new session.





----

### `/src/auth/actors/confirm.js`



**Location**:  `cms.auth.actors.confirm`


**Name**:  confirm


**Type**:  `async function`


**Receives**: 


 - `parameters:Object` - parameters to confirm an unconfirmed_user.


 - `parameters.confirmation_token:String` - confirmation_token of the unconfirmed_user.


**Returns**: 


 - `Promise<data:Object>`


 - `Promise<data.id:Integer>`


 - `Promise<data.recovery_token:String>`


**Throws**: 


 - `No unconfirmed_user found by confirmation_token on confirm` - select returned 0 items


**Description**:  method that confirms an unconfirmed_user as user





----

### `/src/auth/actors/logout.js`



**Name**:  `logout`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/actors/login.js`



**Name**:  `login`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/actors/refresh.js`



**Name**:  `refresh`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/actors/recover.js`



**Name**:  `recover`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/actors/register.js`



**Name**:  `register`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/change.js`



**Name**:  `change`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/confirm.js`



**Name**:  `confirm`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/actors/unregister.js`



**Name**:  `unregister`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/login.js`



**Name**:  `login`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/logout.js`



**Name**:  `logout`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/recover.js`



**Name**:  `recover`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/refresh.js`



**Name**:  `refresh`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/register.js`



**Name**:  `register`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/unregister.js`



**Name**:  `unregister`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/middlewares/authenticate.js`



**Name**:  `authenticate`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/middlewares/authenticate.js`



**Name**:  `authenticate`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/query.js`



**Name**:  `query`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/cms.js`



**Name**:  `cms`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/config/schema.extensions.js`



**Name**:  `schema.extensions`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/create-app.js`



**Name**:  `createApp`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/create-server.js`



**Name**:  `createServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/initialize.js`



**Name**:  `initialize`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/load-api.js`



**Name**:  `loadApi`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/load-env.js`



**Name**:  `loadEnv`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/mount-router.js`



**Name**:  `mountRouter`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/mount-sockets.js`



**Name**:  `mountSockets`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/regenerate-db.js`



**Name**:  `regenerateDb`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/regenerate-rest.js`



**Name**:  `regenerateRest`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/start-server.js`



**Name**:  `startServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/stop-server.js`



**Name**:  `stopServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/email/agents/agent.js`



**Name**:  `agent`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/email/agents/administrator.js`



**Name**:  `administrator`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/history/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/actors/actor.js`



**Name**:  `actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/controllers/controller.js`



**Name**:  `controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/delete-many.js`



**Name**:  `deleteMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/delete-one.js`



**Name**:  `deleteOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/get-many.js`



**Name**:  `getMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/get-one.js`



**Name**:  `getOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/handler.js`



**Name**:  `handler`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/post-one.js`



**Name**:  `postOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/post-many.js`



**Name**:  `postMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/put-many.js`



**Name**:  `putMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/put-one.js`



**Name**:  `putOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/schema.js`



**Name**:  `schema`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/middlewares/enable-post-middleware.js`



**Name**:  `enablePostMiddleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/middlewares/middleware.js`



**Name**:  `middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/auth.js`



**Name**:  `auth`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/history.js`



**Name**:  `history`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/routes.js`



**Name**:  `routes`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/store/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/store/local.js`



**Name**:  `local`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/ui/babel.config.js`



**Name**:  `babel.config`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/compare-password.js`



**Name**:  `comparePassword`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/debug-error.js`



**Name**:  `debugError`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/debug.js`



**Name**:  `debug`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/erroneous-json-response.js`



**Name**:  `erroneousJsonResponse`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/encrypt-password.js`



**Name**:  `encryptPassword`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/format-bearer-token.js`



**Name**:  `formatBearerToken`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/generate-token.js`



**Name**:  `generateToken`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/generate-virtual-schema.js`



**Name**:  `generateVirtualSchema`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/get-schema-foreign-keys.js`



**Name**:  `getSchemaForeignKeys`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/get-joined-tables.js`



**Name**:  `getSchemaJoinedTables`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/initialize-framework.js`



**Name**:  `initializeFramework`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/render-file.js`



**Name**:  `renderFile`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/successful-json-response.js`



**Name**:  `successfulJsonResponse`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-insert-fields-sql.js`



**Name**:  `toInsertFieldsSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-insert-values-sql.js`



**Name**:  `toInsertValuesSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-object-sql.js`



**Name**:  `toObjectSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-fields-sql.js`



**Name**:  `toSelectFieldsSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Parameters**:  


  - `fieldsParam?:Array|String` - campos concretos a seleccionar.


 Cuando es `undefined`, los campos serán automáticamente recogidos del `cms.schema`.


 Es


  - `tablesParam:Array<String>` - tablas concretas a seleccionar.


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-join-sql.js`



**Name**:  `toSelectJoinSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-limit-sql.js`



**Name**:  `toSelectLimitSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-offset-sql.js`



**Name**:  `toSelectOffsetSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-order-sql.js`



**Name**:  `toSelectOrderSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-where-sql.js`



**Name**:  `toSelectWhereSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-update-values-sql.js`



**Name**:  `toUpdateValuesSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  



