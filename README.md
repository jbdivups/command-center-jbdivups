# Quick Start

- Prerequesits
    - [AWS Parameter Store access](https://us-east-1.console.aws.amazon.com/systems-manager/parameters/?region=us-east-1&tab=Table)
    - [ADO Repo access](https://dev.azure.com/Aptia-Group-US/3X/_git/command-center)
- Install
    - [Git](https://git-scm.com/install/)
    - [Node](https://nodejs.org/en/download) (check .nvmrc for exact version) ideally install
      with [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).
    - yarn `npm install yarn -g`

- Run
    - ```bash
      git clone https://Aptia-Group-US@dev.azure.com/Aptia-Group-US/3X/_git/command-center    
    - [Obtain client_secret here](https://us-east-1.console.aws.amazon.com/systems-manager/parameters/%252Ffoundry%252Fclient_secret/description?region=us-east-1&tab=Table)
      ```bash
      Add-Content -Path .env -Value "VITE_FOUNDRY_CLIENT_SECRET={REPLACE_WITH_CLIENT_SECRET}"

    - [Obtain _authToken here](https://us-east-1.console.aws.amazon.com/systems-manager/parameters/%252Ffoundry%252F_authToken/description?region=us-east-1&tab=Table)
      ```bash
      [Environment]::SetEnvironmentVariable("FOUNDRY_TOKEN", "{REPLACE_WITH_AUTHTOKEN}", "User")

    - ```bash
      yarn install

    - ```bash
      yarn dev
