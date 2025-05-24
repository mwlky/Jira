# 🛠️ Jira Clone – Task Management App

[![Frontend Deploy](https://github.com/mwlky/Jira/actions/workflows/azure-static-web-apps-ashy-smoke-0315b1703.yml/badge.svg)](https://github.com/mwlky/Jira/actions/workflows/azure-static-web-apps-ashy-smoke-0315b1703.yml)
[![Backend Deploy](https://github.com/mwlky/Jira/actions/workflows/main_jira-server.yml/badge.svg)](https://github.com/mwlky/Jira/actions/workflows/main_jira-server.yml)

A simplified clone of Jira, built with **.NET Core**, **React**, and **TypeScript**.  

🔗 **Live Demo**: [https://ashy-smoke-0315b1703.6.azurestaticapps.net](https://ashy-smoke-0315b1703.6.azurestaticapps.net)

---

## 🚀 Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: ASP.NET Core (C#), REST API, ASP.NET Identity
- **Authentication**: Cookie-based auth (JWT)
- **Database**: PostgreSQL
- **Deployment**:
  - Frontend → Azure **Static Web App**
  - Backend → Azure **App Service**
- **CI/CD**: GitHub Actions

---

## 🎯 Features

- ✅ Project dashboard UI
- ✅ Authentication system (login/register)
- ✅ Task management system (CRUD)
- ✅ Draggable Tasks
- ✅ Responsive UI for desktop and mobile
- ✅ Azure deployment pipeline with GitHub Actions

> ✅ = implemented  
> 🔄 = in progress

---

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