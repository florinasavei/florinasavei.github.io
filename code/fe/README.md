Steps to init the FE monorepo:

- corepack enable

- corepack prepare yarn@4.3.0 --activate

- yarn cache clean

mkdir portfolio
cd portfolio

 package.json file and add the following workspaces configuration:
{
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}

mkdir apps packages

yarn add -D nx @nrwl/workspace

yarn nx init --skipGit