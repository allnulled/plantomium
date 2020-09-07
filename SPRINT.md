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
  [ ] BROADCAST
    [ ] add test that connects to socket.io
    [ ] emit every REST operations via socket.io
  [ ] CHATING
    [ ] add chat operations
      [ ] add cms.socket
      [ ] extend onBroadcast for chatroom_message:POST
        [ ] to make it emit the data
        [ ] via socket.io





















    
  [ ] other REST Options:
    [ ] {Table}.{Column=*}.{Operation=*}:
      [ ] require{User|Group|Privilege|Authenticated}
      [ ] exclude{User|Group|Privilege|Authenticated}
  [ ] only-{user|group|permission|authenticated} auth middlewares support
  [ ] REST history support
    [ ] create tables
    [ ] insert each {event|deleted registry} from lifecycle
  [ ] migrations and seeders support

  [ ] broadcast operations support
  [ ] secure application support (forced)
  [ ] basic CLI (no commands needed)
  [ ] clusterize runtime

    [ ] CLI commands
    [ ] 
  [ ] send mails on:
    [ ] confirmation
    [ ] password changed
    [ ] registration
    [ ] unregistration
  [ ] coverage: >80%

# Sprint-4

  [ ] CLI commands:
    [ ] 
  [ ] 
  [ ] docs: names and descriptions

# DONE:

  [✓] mejorado "npm run docs" al añadir ficheros tipo .ejs
  [✓] mejorado "npm run docs" al añadir ficheros tipo .sql