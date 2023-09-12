# eslint-plugin-use-server-client
Enforces the use of 'use server' or 'use client' at the begining of files.

## Installation
```bash
yarn add eslint-plugin-use-server-client
```

## Usage
Add `use-server-client` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:
```json
{
  "plugins": [ "use-server-client" ]
}
```

Then configure the rules you want to use under the rules section.
### on src/client
```json
{
  "rules": {
    "use-server-client/use-client": "error",
  }
}
```

### on src/server
```json
{
  "rules": {
    "use-server-client/use-server": "error",
  }
}
```