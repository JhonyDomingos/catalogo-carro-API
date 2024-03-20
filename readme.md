# Scripts

Para rodar os scripts, você pode usar o comando npm run seguido do nome do script que deseja executar. Aqui está como você pode usar cada um dos scripts mencionados:

**Para instalar as dependencias:**

```bash
npm run install | npm i
```

**Para o script dev:**

```bash
npm run dev
```

**Para o script migrate:dev:**

```bash
npm run migrate:dev
```

**Para o script migrate:test:**

```bash
npm run migrate:test
```

**Para o script test:**

```bash

npm run test
```

Esses comandos executarão os respectivos scripts definidos no seu arquivo package.json. Certifique-se de estar no diretório raiz do seu projeto ao executar esses comandos.
Aqui estão os scripts definidos no arquivo `package.json` do projeto:

## `dev`

Este script é usado para iniciar o servidor localmente durante o desenvolvimento.

Comandos:

```bash
dotenv -e .env.dev -- tsnd --cls --respawn src/server.ts
```

## Descrição:

- dotenv -e .env.dev: Carrega as variáveis de ambiente do arquivo .env.dev.
- tsnd: Utiliza o tsnd para compilar e executar o arquivo src/server.ts.
- --cls: Limpa o console antes de cada reinicialização.
- --respawn: Reinicia o servidor automaticamente quando os arquivos são modificados.

## `migrate:dev`

Este script é usado para executar as migrações do banco de dados no ambiente de desenvolvimento.

Comandos:

```bash
dotenv -e .env.dev -- npx prisma migrate dev
```

## Descrição:

- dotenv -e .env.dev: Carrega as variáveis de ambiente do arquivo .env.dev.
- npx prisma migrate dev: Executa as migrações do Prisma no ambiente de - desenvolvimento.

## `migrate:test`

Este script é usado para executar as migrações do banco de dados no ambiente de teste.

## Comandos:

```bash
dotenv -e .env.test -- npx prisma migrate dev
```

## `test`

Este script é usado para executar os testes no ambiente de teste.

## Comandos:

```bash
dotenv -e .env.test -- jest --verbose --runInBand
```

Descrição:

- dotenv -e .env.test: Carrega as variáveis de ambiente do arquivo .env.test.
- jest: Executa os testes utilizando o Jest.
- --verbose: Exibe informações detalhadas durante a execução dos testes.
- --runInBand: Executa os testes em série, em vez de paralelamente.

## Insomnia
Temos o `insmonia_2024_03-18.json` opção para testar as rotas, basta importar ele no seu workspace do insomnia e configurar suas variavais de ambiente como localhost e etc...
# Rotas

## POST /cars

Rota de inserção de carros.

### Padrão de corpo

```json
{
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

## Padrão de resposta

```json
{
  "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

## Possíveis erros:

**Status (400) quando o corpo não é compatível com o padrão**

## GET /cars

Leitura de carros.

Padrão de resposta

```json
[
  {
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
  }
]
```

## GET /cars/:id

Leitura individual de carros.

Padrão de resposta

```json
{
  "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

## Possíveis erros:

**Status (404) - Carro não encontrado**

## PATCH /cars/:id

Atualização de carro.

Padrão de corpo

```json
{
  "name": "Car name updated",
  "description": "Car description updated",
  "brand": "Card brand updated",
  "year": 2022,
  "km": 20000
}
```

## Todos os campos deverão ser opcionais na atualização.

Padrão de resposta

```json
{
  "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
  "name": "Car name updated",
  "description": "Car description updated",
  "brand": "Card brand updated",
  "year": 2022,
  "km": 20000
}
```

Possíveis erros:
**Status (400) quando o corpo não é compatível com o padrão**

**Status (404) - Carro não encontrado**

```json
{
  "message": "Car not found."
}
```
