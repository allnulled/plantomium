## TODO

#### Sprint 0001:

  - [ ] feature/rest-files
    - [ ] test failing
    - [ ] cms.actors.(getFile|setFile)
    - [ ] an (actor|controller) files
    - [ ] using process.env.STORAGE_FOLDER
    - [ ] test passing
  - [ ] feature/rest-auth-basics
    - [ ] test failing
    - [ ] an (actor | middleware) of only-(user|group|permission|authentication)
    - [ ] test passing
  - [ ] feature/...
  - [ ] feature/rest-authorization
    - [ ] test failing of:
        (
            requireOn | 
            excludeOn
        )
        (
            schema |
            get |
            getOne |
            getMany |
            post |
            postOne |
            postMany |
            put |
            putOne |
            putMany |
            delete |
            deleteOne |
            deleteMany |
            getFile |
            postFile
        )
        (
            authentication | 
            privilege | 
            group | 
            user 
        )
    - [ ] Las opciones se entienden en esta expresión lógica:
    ```
    ({table}.(requireOn|excludeOn) | {table}.{column}.(requireOn|excludeOn)) = {
        schema |
        get |
        getOne |
        getMany |
        post |
        postOne |
        postMany |
        put |
        putOne |
        putMany |
        delete |
        deleteOne |
        deleteMany |
        getFile |
        postFile: {
            authentication: false,
            privilege: [...],
            group: [...],
            user: [...],
        }
    }
    ```
    - [ ] test passing
  - [ ] feature/rest-history
    - [ ] select all the deleted items, taking care of:
      - [ ] where
      - [ ] cascadeDelete



#### v0.0.3


