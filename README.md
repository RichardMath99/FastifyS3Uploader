# Fastify S3 File Upload API 

This is a simple file upload API built using Fastify, AWS SDK for S3, Cloudflare, and Prisma. It provides endpoints for uploading files to an S3 bucket and retrieving signed URLs for uploaded files.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager
- [AWS S3](https://aws.amazon.com/s3/) bucket
- [Cloudflare](https://www.cloudflare.com/) account (for Cloudflare Workers)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RichardMath99/FastifyS3Uploader
   cd FastifyS3Uploader
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add the following variables:

   ```env
   AWS_REGION=your-aws-region
   AWS_S3_BUCKET=your-s3-bucket
   ```

## Usage

1. Start the Fastify server:

   ```bash
   npm start
   ```

   The server will be running at [http://localhost:3333](http://localhost:3333).

2. Endpoints:

   - `GET /`: Returns a simple "Hello World" message.

   - `POST /uploads`: Uploads a file to the S3 bucket. Requires a JSON body with `name` and `contentType` fields.

   - `GET /uploads/:id`: Retrieves a signed URL for downloading the file with the specified `id`.

## Example Usage

### Uploading a File

```bash
curl -X POST http://localhost:3333/uploads -H "Content-Type: application/json" -d '{"name": "example.txt", "contentType": "text/plain"}'
```

The response will contain a signed URL and the corresponding file ID.

### Downloading a File

Replace `<file-id>` with the actual file ID obtained from the upload response.

```bash
curl http://localhost:3333/uploads/<file-id>
```

The response will be a signed URL for downloading the file.

## Notes

- The server uses a Prisma client to interact with the database. Ensure that your database connection is properly configured in the Prisma client instantiation (`const prisma = new PrismaClient()`).

- This example assumes you have already set up AWS S3 and Cloudflare. Update the `.env` file with your AWS region and S3 bucket details.

- Ensure that your Cloudflare Worker (`r2`) is correctly configured for generating signed URLs.

Feel free to customize the code according to your specific requirements.
