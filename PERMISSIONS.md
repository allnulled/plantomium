# Permissions

Algunos permisos de la base de datos tienen un significado implícito para la aplicación.

Esta es una lista de los nombres de permisos que tienen un significado implícito, y su significado:

`can get rest model {table}`:
	permite hacer peticiones a:
		- `GET /api/v1/{table}`
		- `GET /api/v1/{table}/{id}`

`can get files from rest model {table} {column}`:
	permite hacer peticiones a:
		- `GET /api/v1/{table}/@file`

`can post rest model {table}`:
	permite hacer peticiones a:
		- `POST /api/v1/{table}/`

`can post files to rest model {table} {column}`:
	permite hacer peticiones a:
		- `POST /api/v1/{table}/`

`can put rest model {table}`:
	permite hacer peticiones a:
		- `PUT /api/v1/{table}/`

`can delete rest model {table}`:
	permite hacer peticiones a:
		- `DELETE /api/v1/{table}/`
