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
      [ ] asegurar su uso en:
        [✓] SELECT MANY
        [✓] SELECT ONE
        [ ] UPDATE MANY
        [✓] UPDATE ONE
        [ ] DELETE MANY
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
    [ ] for CHAT and BROADCAST:
      [ ] add use function
        [ ] to add authentication to the connection
        [ ] to filter if it is not authenticated
        [ ] to apply other middlewares
  [ ] REST PLURALS
    [ ] improve tests
    [ ] of actors:
      [ ] getMany
      [ ] postMany
      [ ] putMany
      [ ] deleteMany
  [ ] AXIOS CLIENT
  [ ] REQUIRE/EXCLUDE
    [ ] 
    [ ] for every REST operation
      [ ] schema
      [ ] get
      [ ] post
      [ ] put
      [ ] delete
      [ ] get-file
      [ ] set-file
  [ ] MAIL TEMPLATES on:
    [ ] confirmation
    [ ] password changed
    [ ] registration
    [ ] unregistration
  [ ] SEQUELIZE MODELS
  [ ] H
  [ ] PM
   [ ] c:DIUR



















    
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