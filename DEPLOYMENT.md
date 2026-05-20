# Deployment Guide

This application is designed to deploy as a containerized SaaS platform.

## 1. Render

- Create a Web Service for the backend using `backend/Dockerfile.backend`.
- Create a Static Site for the frontend using `frontend/Dockerfile.frontend`.
- Add managed Redis and MongoDB if needed, or connect external services.
- Set environment variables in Render dashboard to match `.env.example` and `.env.example.frontend`.
- Configure the frontend to call the backend API URL.

## 2. Railway

- Import the repository and create a new project.
- Add services:
  - Node.js service for backend using `backend/Dockerfile.backend`
  - Static site or Docker for frontend using `frontend/Dockerfile.frontend`
  - MongoDB plugin
  - Redis plugin
- Set environment variables based on the generated service URLs.
- Enable persistent volumes for MongoDB if required.

## 3. AWS EC2

- Provision an EC2 instance and install Docker and Docker Compose.
- Copy repository to the instance.
- Configure `.env` files for backend and frontend.
- Launch:
  - `docker compose up -d --build`
- Use a security group allowing ports 80 and 443.
- For production, place the stack behind an AWS Load Balancer and use ACM certificates.

## 4. Vercel (Frontend)

- Create a Vercel project and connect the frontend folder.
- Set build command: `npm run build`
- Set output directory: `dist`
- Add environment variable `VITE_API_BASE_URL` pointing to your backend API.

## Production Hardening

- Use HTTPS for all services.
- Store secrets in hosted vault or platform secret manager.
- Enable rate limiting and monitoring.
- Keep `NODE_ENV=production` and disable debug logging.
- Configure appropriate CORS origins.
