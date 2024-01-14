


# Development helpers:

- This project uses yarn workspaces

    -  To see all the apps in the workspace run: `yarn workspaces list`

- To remove deleted branches :
    - run `git config --local --edit`
    -   add
        ```
        [alias]
            gone = ! "git fetch -p && git for-each-ref --format '%(refname:short) %(upstream:track)' | awk '$2 == \"[gone]\" {print $1}' | xargs -r git branch -D"
        ```
