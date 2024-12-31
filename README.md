Node.js

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Getting Tests

I have used JEST and SUPERTEST

```bash
npm run test
```

## Peculiarities

I have used next-auth joi/@hapi/boom to control the models
Passport to generate the JWT token and to use the local strategy

## Endpoints

```bash
SWAGGER http://localhost:8081/api/swagger

http://localhost:8081/api/auth/register
http://localhost:8081/api/auth/login

GET http://localhost:8081/api/tasks?state=COMPLETED or TO_DO
GET by ID http://localhost:8081/api/tasks/67734caf59aab0fc6025e123
POST http://localhost:8081/api/tasks

{
    "title": "Evaluation 4",
    "description": "Description 4",
    "state": "COMPLETED"
}

PUT http://localhost:8081/api/tasks/67734bdd64b30ffb85fe615e

{
    "title": "Evaluation 2 edited 4",
    "description": "Description 4 edited",
    "state": "TO_DO"
}

DELETE: http://localhost:8081/api/tasks/67734beb64b30ffb85fe615f
```
