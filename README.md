# 🌐 Wasim Akram's Portfolio Website (Frontend)

A modern and responsive personal portfolio website built with **Next.js** and **TypeScript**, featuring blog management, project showcase, and an admin dashboard for content management.

---

## 🚀 Live Links

- **Frontend:** 🔹[https://wasim-akram.vercel.app](#)
- **Backend API:** 🔹[https://wasim-akram-server.vercel.app](#)
- **Demo Video:** 🔹[https://drive.google.com/drive/folders/1HDAd5Rd0P7DgYJe-AR8wWBYvnL0dSRHi?usp=sharing](#)

---

## 🧾 Project Overview

This project is a **personal portfolio website** designed to showcase my skills, projects, and blogs.
It includes both **public sections** (About Me, Projects, Blogs) and **private dashboard access** for the owner to manage content securely.

---

## ✨ Features

### 🧍‍♂️ Public Pages

- 🏠 **Home Page:** Overview of personal info, projects, and blogs.
- 🧑‍💼 **About Me:** Displays static info (name, bio, contact, skills).
- 🧱 **Projects Showcase:** Displays project cards with live and GitHub links.
- 📰 **Blogs Page:** Fetches blogs dynamically using ISR (Incremental Static Regeneration).
- 📄 **Single Blog Page:** Generated dynamically via ISR with `getStaticPaths`.

### 🔒 Private Dashboard (Admin Only)

- 🧾 Secure **JWT-based Authentication**
- ✍️ **Blog Management:** Create, update, delete blogs.
- 🗂️ **Project Management:** Add, edit, and remove projects.
- 📊 **Dashboard Overview:** Quick summary of total blogs, projects, and recent updates.

---

## 🧰 Technology Stack

| Category       | Tools / Libraries     |
| -------------- | --------------------- |
| Framework      | Next.js (App Router)  |
| Language       | TypeScript            |
| Styling        | Tailwind CSS          |
| Notifications  | react-hot-toast       |
| Forms          | React Hook Form + Zod |
| Fetching       | Fetch API + ISR       |
| Authentication | JWT (via Backend API) |
| Deployment     | Vercel                |

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js ≥ 18
- npm or yarn
- Backend API running and accessible

### 🏗️ Installation

```bash
git clone https://github.com/wasim-akram-dev/portfolio-frontend.git
cd portfolio-frontend
npm install
cp .env.example .env.local
npm run dev
```

## 🌍 Environment Variables

### .env.local

```bash
NEXT_PUBLIC_BASE_API=https://wasim-akram-server.vercel.app/api/v1
```

---

## 🧩 Folder Structure

```bash
src/
┣ components/
┣ app/
┃ ┣ (public)/ # Public pages (about, blogs, projects)
┃ ┣ (dashboard)/ # Private admin dashboard
┃ ┣ layout.tsx
┃ ┗ page.tsx
┣ lib/
┣ hooks/
┣ types/
┗ styles/
```

---

## 🧑‍💻 Admin Credentials

| Role  | Email                                           | Password            |
| ----- | ----------------------------------------------- | ------------------- |
| Admin | 🔹[owner@example.com](mailto:owner@example.com) | 🔹StrongPassword123 |

---

## 🎥 Demo Video

## 📹 Duration: 10–15 minutes

Include the following:

1. Home & About section overview

2. Projects showcase

3. Blogs page + single blog page

4. Dashboard login & CRUD demo

5. Deployment & environment setup

🎬 Link: https://drive.google.com/drive/folders/1HDAd5Rd0P7DgYJe-AR8wWBYvnL0dSRHi?usp=sharing

---

## Additional Notes

- Fully responsive layout for mobile, tablet, and desktop.

- Implemented ISR for performance.

- Error handling for failed fetch & invalid credentials.

- Accessible components (semantic HTML, aria labels).

---

Author: 🔹Wasim Akram

License: MIT
