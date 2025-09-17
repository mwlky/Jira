# 🛠️ Jira Clone – Task Management App

[![Frontend Deploy](https://github.com/mwlky/Jira/actions/workflows/azure-static-web-apps-ashy-smoke-0315b1703.yml/badge.svg)](https://github.com/mwlky/Jira/actions/workflows/azure-static-web-apps-ashy-smoke-0315b1703.yml)
[![Backend Deploy](https://github.com/mwlky/Jira/actions/workflows/main_jira-server.yml/badge.svg)](https://github.com/mwlky/Jira/actions/workflows/main_jira-server.yml)

A simplified clone of Jira, built with **.NET Core**, **React**, and **TypeScript**.  

🔗 **Static Web App + App Service demo**: [https://ashy-smoke-0315b1703.6.azurestaticapps.net](https://ashy-smoke-0315b1703.6.azurestaticapps.net)

🔗 **AKS Demo**: [48.222.212.47](48.222.212.47)

### ⚠️ Deployment Status

This project was fully deployed to Azure with CI/CD pipelines.
Currently, the demo links are temporarily unavailable due to an expired Azure student subscription. I plan to renew my Azure student subscription at the beginning of the academic year, and will restore all cloud resources and demo links shortly after.

## 🖼️ Screenshot

![Jira Clone UI](https://i.imgur.com/w8mORSa.png)

---

## 🚀 Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: ASP.NET Core (C#), REST API, ASP.NET Identity
- **Authentication**: Cookie-based auth (JWT)
- **Database**: PostgreSQL
- **Deployment**:
  - Frontend → Azure **Static Web App**
  - Backend → Azure **App Service**
  - **Docker & Kubernetes**:
    - Both frontend and backend containerized with Docker
    - Deployed on **Azure Kubernetes Service (AKS)** with NGINX Ingress
    - Full CORS handling configured via Ingress annotations
    - Endpoints `/api`, `/auth`, `/tasks` proxied to backend
- **CI/CD**: GitHub Actions
  - `main` branch → CI/CD pipelines for **Static Web App** and **App Service**
  - `kubernetes` branch → changes related to **Docker + Kubernetes deployment**
---

## 🎯 Features

- ✅ Project dashboard UI
- ✅ Authentication system (login/register)
- ✅ Task management system (CRUD)
- ✅ Draggable Tasks
- ✅ Responsive UI for desktop and mobile
- ✅ Azure deployment pipeline with GitHub Actions
- ✅ Containerized deployment via Docker
- ✅ Kubernetes deployment on AKS with Ingress routing
- ✅ Full CORS support and proper backend routing for API endpoints

> ✅ = implemented  
> 🔄 = in progress

---

## 🔐 Demo Credentials

You can log in with the following test account:

```text
Email: test@gmail.com  
Password: Test123!
```

## 📦 How to run locally

### Prerequisites

- Node.js + npm
- .NET 6 SDK
- Visual Studio or VS Code

### Frontend

```bash
cd frontend
npm start
```

### Backend
```bash
cd backend
dotnet run
```
