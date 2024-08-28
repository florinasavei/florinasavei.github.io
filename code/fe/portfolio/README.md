Steps to init the FE monorepo:

- corepack enable

- corepack prepare yarn@4.3.0 --activate

- yarn cache clean


 package.json file and add the following workspaces configuration:
{
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}

yarn add -D nx @nrwl/workspace

yarn nx init --skipGit

yarn nx generate @nrwl/react:application apps/landing-page --bundler=vite --style=tailwind

yarn nx show projects

yarn nx serve landing-page

yarn nx generate @nrwl/react:library @asaveiflorin/core-components --directory=packages/@asaveiflorin/core-components --style=none
