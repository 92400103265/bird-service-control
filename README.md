# Bird Service Control

A responsive Next.js website for Bird Service Control in Rajkot, Gujarat. It includes Home, About and Contact pages, WhatsApp/call buttons, a Google Map embed, a gallery, and a PostgreSQL-backed contact form.

## 1. Install dependencies

Open PowerShell in this project folder and run:

```powershell
npm install
```

If Windows does not allow npm to write to its default cache, use a local cache instead:

```powershell
npm install --cache .npm-cache
```

## 2. Connect PostgreSQL

Copy `.env.example` to `.env`, then put in your own PostgreSQL credentials:

```powershell
Copy-Item .env.example .env
```

Example `.env` value:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/bird_service_control?schema=public"
```

Create the database once, then create the `contacts` table through Prisma:

```sql
CREATE DATABASE bird_service_control;
```

```powershell
npx prisma migrate dev --name init
```

Alternatively, if you already created the database/table manually, run:

```powershell
npx prisma db pull
npx prisma generate
```

## 3. Start the website

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```powershell
npm run typecheck
npm run build
npm start
```

## Contact table SQL

Prisma creates this equivalent PostgreSQL table:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

The `POST /api/contact` route validates the request, inserts it into `contacts`, and returns an appropriate success or error response.
