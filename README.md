# Fastify S3 File Upload API 

Esta é uma API simples para upload de arquivos construída usando Fastify, AWS SDK para S3, Cloudflare e Prisma. Ela fornece endpoints para enviar arquivos para um bucket S3 e obter URLs assinadas para os arquivos enviados.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 ou mais recente)
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Bucket [AWS S3](https://aws.amazon.com/s3/)
- Conta [Cloudflare](https://www.cloudflare.com/) (para Cloudflare Workers)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/RichardMath99/FastifyS3Uploader
   cd FastifyS3Uploader
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   AWS_REGION=sua-regiao-aws
   AWS_S3_BUCKET=seu-bucket-s3
   ```

## Uso

1. Inicie o servidor Fastify:

   ```bash
   npm start
   ```

   O servidor estará em execução em [http://localhost:3333](http://localhost:3333).

2. Endpoints:

   - `GET /`: Retorna uma mensagem simples "Hello World".

   - `POST /uploads`: Faz o upload de um arquivo para o bucket S3. Requer um corpo JSON com os campos `name` e `contentType`.

   - `GET /uploads/:id`: Obtém um URL assinado para baixar o arquivo com o `id` especificado.

## Exemplo de Uso

### Enviando um Arquivo

```bash
curl -X POST http://localhost:3333/uploads -H "Content-Type: application/json" -d '{"name": "exemplo.txt", "contentType": "text/plain"}'
```

A resposta conterá um URL assinado e o ID correspondente do arquivo.

### Baixando um Arquivo

Substitua `<file-id>` pelo ID real do arquivo obtido na resposta do upload.

```bash
curl http://localhost:3333/uploads/<file-id>
```

A resposta será um URL assinado para baixar o arquivo.

## Observações

- O servidor usa um cliente Prisma para interagir com o banco de dados. Certifique-se de que sua conexão com o banco de dados esteja configurada corretamente na instância do cliente Prisma (`const prisma = new PrismaClient()`).

- Este exemplo pressupõe que você já configurou o AWS S3 e o Cloudflare. Atualize o arquivo `.env` com os detalhes da sua região AWS e do bucket S3.

- Certifique-se de que seu Cloudflare Worker (`r2`) esteja configurado corretamente para gerar URLs assinados.

Sinta-se à vontade para personalizar o código de acordo com seus requisitos específicos.
