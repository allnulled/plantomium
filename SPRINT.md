# Sprint-1

  [✓] REST Files:
    [✓] GET
      [✓] picar test de get-file
      [✓] pasar test de get-file
    [✓] SET
      [✓] picar test de set-file
      [✓] pasar test de set-file
  [ ] REST Options:
    [ ] WHERE
      [✓] picar test
      [✓] pasar test
      [✓] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
        [✓] UPDATE MANY
        [✓] UPDATE ONE
        [✓] DELETE MANY
        [✓] DELETE ONE
    [✓] JOIN
      [✓] picar test
      [✓] pasar test
      [✓] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
    (29/08)
    [✓] LIMIT 
      [✓] picar test
      [✓] pasar test
      [✓] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
    [✓] OFFSET
      [✓] picar test
      [✓] pasar test
      [✓] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
    [✓] SORT
      [✓] picar test
      [✓] pasar test
      [✓] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
    [✓] CASCADE DELETE
      [✓] picar test
      [✓] pasar test
    [✓] RECURSIVE SELECT
      [✓] picar test
      [✓] pasar test
  [✓] HISTORY
    [✓] save each deleted item(s)
    [✓] save each REST & AUTH event
  [✓] JSON store controllers
    [✓] getter
    [✓] setter
    [✓] deleter
    [✓] test demo
  [✓] MIGRATIONS & SEEDERS
    [✓] add migrations
    [✓] add seeders
    [✓] test for migrations (from CLI)
    [✓] test for seeders (from CLI)
    [✓] add all commands:
      [✓] cms show migrations - sequelize db:migrate:status
      [✓] cms run migrations - sequelize db:migrate
      [✓] cms run seeders - sequelize db:seed
      [✓] cms rollback migrations - sequelize db:migrate:undo:all
      [✓] cms rollback seeders - sequelize db:seed:undo:all
  [✓] BROADCAST
    [✓] add test that connects to socket.io
    [✓] emit every REST operations via socket.io
  [✓] CHATING
    [✓] add chat operations
      [✓] add cms.socket
      [✓] extend onBroadcast
        [✓] to make it emit the data
        [✓] via socket.io
  [✓] REST history support
    [✓] create tables
    [✓] insert each {event|deleted registry} from lifecycle
  [✓] MIDDLEWARES FOR AUTH:
    [✓] only-{user|group|permission|authenticated} auth middlewares support
  [✓] PROCESS
    [✓] + update process
    [✓] + update transaction
  [✓] HTTPS: secure application support (forced)
  [✓] SECURE ENDPOINTS with auth/middleware/only-*
    [✓] for REST (OK!)
    [✓] for AUTH (OK!)
    [✓] for CHAT and BROADCAST:
      [✓] add use function
        [✓] to add authentication to the connection
        [✓] to filter if it is not authenticated
        [✓] to apply other middlewares
  [✓] MARKETS
    [✓] src/config/markets.json
    [✓] src/command/cms/add/market/index.js
    [✓] src/command/cms/remove/market/index.js
    [✓] src/command/cms/show/markets/index.js
    [✓] src/markets/add.js
    [✓] src/markets/remove.js
    [✓] src/markets/show.js
  [✓] PLUGINS
    [✓] src/command/cms/add/plugin/index.js
    [✓] src/command/cms/remove/plugin/index.js
    [✓] src/command/cms/search/plugin/index.js
    [✓] src/command/cms/show/plugins/index.js
    [✓] src/plugins/add.js
    [✓] src/plugins/remove.js
    [✓] src/plugins/show.js
    [✓] src/plugins/service/{vendor}/{plugin}/index.js
    [✓] src/plugins/service/{vendor}/{plugin}/hooks
    [✓] src/plugins/service/{vendor}/{plugin}/...
  [✓] REST PLURALS
    [✓] improve tests
    [✓] of actors:
      [✓] getMany
      [✓] postMany
      [✓] putMany
      [✓] deleteMany
  [✓] AXIOS CLIENT
    [✓] every table with its own
      [✓] schema
      [✓] getMany
      [✓] getOne
      [✓] postOne
      [✓] putOne
      [✓] deleteOne
    [✓] auth included
    [✓] tests
  [✓] HOOKS
    [✓] api object
    [✓] example of 1 hook
    [✓] test to prove it
  [✓] LOAD PLUGINS
  [ ] REQUIRE/EXCLUDE
    [ ] Apply authorization rules on:
      [ ] {table}.{column}:
        [✓] select.fields
        [✓] select.wheres
        [ ] select.joins
        [ ] select.order
        [✓] insert.fields
        [✓] update.fields
        [✓] update.wheres
      [✓] {table}:
        [✓] select
        [✓] insert
        [✓] update
        [✓] delete
  [✓] TRACE through all the application
  [✓] I18N api
    [✓] including tests
  [✓] HOOKS through all the application

  [ ] COMMANDS
    [✓] cms download --from x --to y
    [✓] cms sql query -- "SELECT 5"
    [✓] cms sql export --file x.sql
    [✓] cms sql import --file x.sql
    [✓] improved documentation
    [✓] cms login --name n --email m --password p
    [✓] cms logout
    [✓] cms show session

    [✓] cms add user
      [✓] --name:array [required]
      [✓] --to-group:array [optional]
    [✓] cms add group
      [✓] --name:array [required]
    [ ] cms add permission
      [ ] --name:array [required]
      [ ] --to-user:array [optional]
      [ ] --to-group:array [optional]
    [ ] cms remove user
      [ ] --name:array [required]
      [ ] --from-group:array [optional]
    [ ] cms remove group
      [ ] --name:array [required]
    [ ] cms remove permission
      [ ] --name:array [required]
      [ ] --from-user:array [optional]
      [ ] --from-group:array [optional]
    [ ] cms rename 
      [ ] --user:string [optional with group and permission]
      [ ] --group:string [optional with user and permission]
      [ ] --permission:string [optional with user and group]
      [ ] --to:string [required]
    [ ] cms show (user|group|permission)
      [ ] --field:csv [optional]
      [ ] --where:json [optional]
      [ ] --join:json [optional]
      [ ] --group:json [optional]
      [ ] --order:json [optional]
      [ ] --limit:json [optional]
      [ ] --offset:json [optional]
    [ ] cms rest get many --...
    [ ] cms rest get one --...
    [ ] cms rest post many --...
    [ ] cms rest post one --...
    [ ] cms rest put many --...
    [ ] cms rest put one --...
    [ ] cms rest delete many --...
    [ ] cms rest delete one --...
    [ ] cms rest get --...
    [ ] cms rest post --...
    [ ] cms rest put --...
    [ ] cms rest delete --...
    [ ] cms create project [-c|--config c.json] [-y|--yes] [-n|--name n]

  [ ] MAIL TEMPLATES on:
    [ ] confirmation
    [ ] password changed
    [ ] registration
    [ ] unregistration
  [ ] FIX BROADCAST & CHAT
    [ ] & add cms show live
  [ ] SERVICE BUILDER
    [ ] using json store
    [ ] at src/config

















    
  [ ] other REST Options:
    [ ] {Table}.{Column=*}.{Operation=*}:
      [ ] require{User|Group|Privilege|Authenticated}
      [ ] exclude{User|Group|Privilege|Authenticated}

  [ ] basic CLI (no commands needed)
  [ ] clusterize runtime

    [ ] CLI commands
  [ ] coverage: >80%

# Sprint-4


# DONE:

  [✓] mejorado "npm run docs" al añadir ficheros tipo .ejs
  [✓] mejorado "npm run docs" al añadir ficheros tipo .sql