# AI-Powered Support Ticketing System

## Overview

AI-Powered Support Ticketing System is a scalable backend application built using Node.js, TypeScript, MongoDB, Redis, BullMQ, and OpenAI. The system helps organizations manage customer support requests efficiently while leveraging Artificial Intelligence to automate ticket categorization, sentiment analysis, ticket summarization, and response suggestions.

This project follows production-level architecture using Repository Pattern, DTOs, Service Layer, JWT Authentication, Role-Based Access Control (RBAC), Redis Caching, Queue Processing, API Documentation, Dockerization, and Automated Testing.

---

## Features

### Authentication & Authorization

- User Registration
- User Login
- JWT Access Tokens
- Refresh Tokens
- Password Hashing using bcrypt
- Role-Based Access Control (RBAC)

### User Roles

#### Customer

- Create support tickets
- View own tickets
- Add comments
- Track ticket status

#### Support Agent

- View assigned tickets
- Update ticket status
- Add comments
- Resolve tickets

#### Administrator

- Manage users
- Assign tickets to agents
- Monitor ticket activities
- Access dashboard analytics

---

## Ticket Management

- Create Ticket
- Update Ticket
- Soft Delete Ticket
- Assign Ticket
- Update Ticket Status
- Add Comments
- Track Ticket History
- Ticket Filtering & Search
- Pagination & Sorting

---

## AI Features

### Automatic Ticket Categorization

Examples:

- Technical Issue
- Billing Issue
- Account Issue
- Feature Request
- General Inquiry

### Sentiment Analysis

- Positive
- Neutral
- Negative

### Ticket Summary Generation

Example:

Customer is unable to login due to invalid credentials.

### AI Suggested Responses

Example:

Please reset your password using the "Forgot Password" option and try logging in again.

---

## Technology Stack

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- Refresh Tokens
- bcryptjs

### Caching

- Redis

### Queue Processing

- BullMQ

### Artificial Intelligence

- OpenAI API

### Documentation

- Swagger

### Logging

- Winston

### Security

- Helmet
- CORS
- Rate Limiting

### Testing

- Jest
- Supertest

### Containerization

- Docker
- Docker Compose

---

## Project Architecture

Client

↓

Express API

↓

Controllers

↓

Services

↓

Repositories

↓

MongoDB

### AI Processing Flow

Create Ticket

↓

BullMQ Queue

↓

AI Worker

↓

OpenAI API

↓

Update Ticket Analysis

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/support-ticket-db

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret

REFRESH_TOKEN_EXPIRES_IN=7d

REDIS_HOST=localhost

REDIS_PORT=6379

OPENAI_API_KEY=your_openai_api_key
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ShreyashSalian/AI-Powered-Support-Ticketing-System.git

cd AI-Powered-Support-Ticketing-System.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Running MongoDB

Using Docker:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

## Running Redis

Using Docker:

```bash
docker run -d -p 6379:6379 --name redis redis
```

---

<!-- ## API Endpoints

### Authentication

| Method | Endpoint                   |
| ------ | -------------------------- |
| POST   | /api/v1/auth/register      |
| POST   | /api/v1/auth/login         |
| POST   | /api/v1/auth/refresh-token |
| POST   | /api/v1/auth/logout        |

### Users

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/v1/users     |
| GET    | /api/v1/users/:id |
| PATCH  | /api/v1/users/:id |
| DELETE | /api/v1/users/:id |

### Tickets

| Method | Endpoint                   |
| ------ | -------------------------- |
| POST   | /api/v1/tickets            |
| GET    | /api/v1/tickets            |
| GET    | /api/v1/tickets/:id        |
| PATCH  | /api/v1/tickets/:id        |
| PATCH  | /api/v1/tickets/:id/assign |
| PATCH  | /api/v1/tickets/:id/status |
| DELETE | /api/v1/tickets/:id        |

### Comments

| Method | Endpoint                     |
| ------ | ---------------------------- |
| POST   | /api/v1/tickets/:id/comments |
| GET    | /api/v1/tickets/:id/comments |

### Dashboard

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/v1/dashboard |

---

## Sample Ticket Response

```json
{
  "success": true,
  "message": "Ticket fetched successfully",
  "data": {
    "_id": "684abc123456789",
    "ticketNumber": "TKT-20260605-001",
    "title": "Unable to login",
    "status": "OPEN",
    "priority": "HIGH",
    "aiAnalysis": {
      "category": "Technical Issue",
      "sentiment": "Negative",
      "summary": "Customer unable to login.",
      "suggestedResponse": "Please reset your password."
    }
  }
}
```

## Docker Setup

### Build Docker Image

```bash
docker build -t ai-ticket-system .
```

### Run Container

```bash
docker run -p 5000:5000 ai-ticket-system
```

---

## Testing

Run Unit Tests

```bash
npm test
```

Generate Coverage Report

```bash
npm run test:coverage
```

--- -->

<!-- ## Future Enhancements

- Real-Time Notifications using Socket.IO
- AWS S3 File Uploads
- Email Notifications
- Elasticsearch Integration
- Multi-Tenant Support
- Kubernetes Deployment
- AI Chat Support Agent
- Knowledge Base Search

--- -->

<!-- ## Development Workflow

### Branch Naming Convention

```text
main
develop

feature/auth-module
feature/user-module
feature/ticket-module
feature/comment-module
feature/rbac-module
feature/redis-caching
feature/bullmq-worker
feature/openai-analysis
feature/swagger-documentation
feature/dockerization
feature/unit-testing
``` -->

<!-- ### Commit Convention

```bash
feat(auth): implement JWT authentication

feat(ticket): add ticket creation API

fix(ticket): resolve pagination issue

refactor(service): optimize repository layer

test(auth): add login unit tests
```

--- -->

## License

MIT License

---

## Author

Shreyash Salian

Software Developer

Skills:

- Node.js
- TypeScript
- MongoDB
- PostgreSQL
- Express.js
- Redis
- BullMQ
- REST APIs
- System Design

GitHub: https://github.com/ShreyashSalian
