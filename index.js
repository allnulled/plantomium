/**
 * 
 * 
 * # Referencia
 * 
 * Cada parte de este documento:
 * 
 *   - pretende explicar acerca de las partes de este software
 *   - puede estar redactado en castellano o inglés originalmente
 *   - tiene una sintaxis específica
 * 
 * ## Sintaxis de este documento
 * 
 * Este es un ejemplo de elemento documentativo prototipo:
 * 
 * ```/**
 *  * 
 *  * ----
 *  * 
 *  * #### `{ruta/al/fichero.js}`
 *  * 
 *  * @location`:    `acceso.a.variable`
 *  * @name`:        `nombreAmigable`
 *  * @type`:        `TipoDeDato` - explicación
 *  * @receives`:    
 *  * @receives`:    `nombre:Tipo` - explicación
 *  * @returns`:     
 *  * @returns`:     `nombre:Tipo` - explicación
 *  * @throws`:      
 *  * @throws`:      `Mensaje de error` - explicación
 *  * @description`: explicación
 *  * 
 *  * /
 * ```
 * 
 * #### Ejemplos de código
 * 
 * 
 * #### Encabezados
 * 
 *   - Título de API:     ## Auth API
 *   - Título de sub-API: ### Auth:actors API
 *   - Título de fichero: ### `/src/auth/actors`
 * 
 * #### Atributos documentativos
 * 
 *   - `@location`: acceso programático al valor referido
 *   - `@name`: identificador amigable del valor referido en la documentación
 *   - `@type`: tipo de dato. Puede ser primitivo o artificial
 *   - `@receives`: lista de datos tipados que recibe una función
 *   - `@returns`: dato (y profundización) que devuelve una función
 *   - `@throws`: lista de errores que puede lanzar una función o bloque
 *   - `@description`: descripción amigable de la funcionalidad del valor referido
 * 
 * #### Tipado y documentación típica
 * 
 *   - `variable1:Tipo1`
 *   - `variable1:Tipo1 <variable2:Tipo2>`
 *   - `variable1:Tipo1 <variable2:Tipo2, variable3:Tipo3>`
 *   - `variable1:Tipo1 <variable2:Tipo2 <variable3:Tipo3, variable4:Tipo4> >`
 *   - `variable1.propiedad1:TipoPropiedad1`
 *   - `variable1.propiedad1:TipoPropiedad1 <variable2:Tipo2>`
 * 
 * 
 */
module.exports = require(__dirname + "/src/start.js");