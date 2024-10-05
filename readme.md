# Node.js and Prisma API

This project is a basic API using Node.js and Prisma, focusing on route structuring, controllers, and models.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

For development with auto-reload: `npm run dev`

## API Endpoints

### Users

- POST /api/users - Create a new user
  - Body example:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- GET /api/users - Get all users
- GET /api/users/:id - Get a specific user
- PUT /api/users/:id - Update a user
  - Body example:
    ```json
    {
      "name": "John Updated",
      "email": "john.updated@example.com"
    }
    ```

- DELETE /api/users/:id - Delete a user

### Documents

- POST /api/documents - Create a new document
  - Body example:
    ```json
    {
      "name": "Important Document",
      "status": "draft",
      "userId": 1
    }
    ```

- GET /api/documents - Get all documents
- GET /api/documents/:id - Get a specific document
- PUT /api/documents/:id - Update a document
  - Body example:
    ```json
    {
      "name": "Updated Document",
      "status": "published"
    }
    ```

- DELETE /api/documents/:id - Delete a document

## Response Examples

### Successful User Creation (POST /api/users)

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Successful Document Retrieval (GET /api/documents/:id)

```json
{
  "id": 1,
  "name": "Important Document",
  "status": "draft",
  "userId": 1
}
```

## Notes

This API uses in-memory storage for demonstration purposes.

## Prisma Setup (for reference)

1. Install Prisma: `npm install prisma --save-dev`
2. Initialize Prisma: `npx prisma init`
3. Define your schema in `prisma/schema.prisma`
4. Generate Prisma Client: `npx prisma generate`

## Error Handling

The API returns appropriate HTTP status codes:

- 200 OK for successful GET and PUT requests
- 201 Created for successful POST requests
- 204 No Content for successful DELETE requests
- 404 Not Found if a requested resource doesn't exist
- 500 Internal Server Error for any server-side errors

Error responses will include a JSON object with a `message` field describing the error.

## Authentication

This basic version doesn't include authentication.

