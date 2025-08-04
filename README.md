# Finance Dashboard

A personal finance dashboard that ingests transactions from a Google Sheet (via Monzo), analyzes spending patterns, and visualizes insights.

## Tech Stack

* **Backend**: Go

  * HTTP framework: [Gin](https://github.com/gin-gonic/gin)
  * Hot reloading: [Air](https://github.com/cosmtrek/air)
  * Google Sheets client: `google.golang.org/api/sheets/v4`
  * (Optional) Database: SQLite / PostgreSQL
* **Frontend**: React + Vite

  * Styling: Sass (SCSS)
  * Charts: Recharts (or your preferred charting library)

## Features

* **Data Ingestion**
  Fetches transactions from a Google Sheet powered by Monzo API.
* **Weekly Trends**
  Aggregates spend and income by ISO week.
* **Repeat Transactions**
  Identifies recurring transactions (e.g., rent, utilities).
* **Subscriptions**
  Flags regularly occurring payments (monthly/quarterly).
* **High-Spend Areas**
  Highlights merchants or categories with highest outflows.
* **Savings Goals & Projections**
  Allows users to set targets and projects estimated achievement dates based on current saving rate.

## Prerequisites

* Go (>=1.24)
* Node.js (>=22)
* pnpm or yarn
* A Google Cloud project with Sheets API enabled
* A service account JSON key with access to your Google Sheet

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/szabolcssajben/finance-dashboard.git
cd finance-dashboard
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```ini
# Backend
GOOGLE_APPLICATION_CREDENTIALS=./path/to/service-account.json
SHEET_ID=your_google_sheet_id
PORT=8080

# Frontend
VITE_API_URL=http://localhost:8080/api
```

### 3. Backend Setup

1. Install dependencies:

   ```bash
   go mod tidy
   ```
2. Start the backend with hot reload:

   ```bash
   air
   ```
3. The API will be available at `http://localhost:8080/api`.

### 4. Frontend Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```
2. Start the development server:

   ```bash
   pnpm run dev
   ```
3. Open your browser at `http://localhost:5173`.

### 5. Start Both Services

You can start both backend and frontend with one command:

```bash
./start-dev.sh
```

## Project Structure

```
├── backend
│   ├── main.go          # Entry point
│   ├── handlers         # API route handlers
│   │   └── api.go       # Main API endpoints
│   ├── models           # Data models
│   │   └── transaction.go # Transaction and related models  
│   ├── services         # Business logic (analytics)
│   │   └── analytics.go # Financial analytics service
│   ├── sheets           # Google Sheets client code
│   │   └── client.go    # Sheets API integration
│   └── tmp              # Air build directory
├── app                  # React Router frontend
│   ├── app.css         # Global styles
│   ├── root.tsx        # Root component
│   ├── routes.ts       # Route definitions
│   ├── routes/         # Route components
│   └── welcome/        # Welcome page assets
├── public              # Static assets
├── .env.example        # Example environment variables
├── .air.toml           # Air configuration for hot reload
├── go.mod              # Go module file
├── package.json        # Node.js dependencies
├── start-dev.sh        # Development startup script
└── README.md           # This file
```

## Scripts

* **Backend**

  * `air` — Run Go server with hot reload
  * `go build -o ./tmp/main ./backend` — Build backend manually
* **Frontend**

  * `pnpm run dev` — Start Vite dev server
  * `pnpm run build` — Build for production
  * `pnpm run preview` — Preview production build
  * `pnpm run typecheck` — Check TypeScript types
* **Development**

  * `./start-dev.sh` — Start both backend and frontend

## Deployment

1. Build the frontend:

   ```bash
   cd frontend
   pnpm run build
   ```
2. Copy `frontend/dist` into your Go server’s `embed` directory or serve through a static file server.
3. Build and run the Go app:

   ```bash
   go build -o finance-backend ./backend
   ./finance-backend
   ```
4. Point your domain or reverse proxy to `:8080`.

## Future Improvements

* User authentication & multi-user support
* Automatic Pub/Sub notifications from Google Sheets
* PDF/Email report generation
* Mobile-friendly UI or native mobile app

## TODO

### Backend
- [ ] Implement Google Sheets data fetching in `backend/sheets/client.go`
- [ ] Parse transaction data from sheet format to models
- [ ] Implement weekly trends calculation in `backend/services/analytics.go`
- [ ] Repeat transactions: sliding-window clustering on "payee + amount ±5%" over the last 6–12 months
- [ ] Subscriptions: flag those clusters that recur at regular intervals (monthly, quarterly)
- [ ] High-spend areas: sort total spend by merchant category or payee, return top N
- [ ] Savings goals: store user targets (e.g. "£5,000 by December 2025"), project forward based on average net savings per week
- [ ] Listen for sheet "push" notifications via Apps Script → Pub/Sub → Go service for near-real-time updates
- [ ] Add Redis for caching
- [ ] Create additional API endpoints for categories and merchants
- [ ] Add error handling and logging
- [ ] Write unit tests for services and handlers
- [ ] Add data validation for API responses
- [ ] Implement subscriptions detection algorithms
- [ ] Build goal projections system

### Frontend
- [ ] Implement API data fetching with React hooks
- [ ] Build interactive charts using Recharts
- [ ] Add loading states and error handling
- [ ] Create transaction list component
- [ ] Implement category filtering and search
- [ ] Add date range picker for filtering
- [ ] Build responsive mobile layout
- [ ] Add dark mode support
- [ ] Implement data refresh functionality
- [ ] Frontend animations: smooth transitions and micro-interactions
- [ ] Japanese language support: i18n with language switcher
- [ ] Accessibility pass: ARIA labels, keyboard navigation, screen reader support

## License

MIT © Szabolcs Sajben

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 Styled with Sass (SCSS)
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECSW
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `pnpm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This project uses Sass (SCSS) for styling. Global styles live in `app/app.scss`, and you can create modular `.scss` files alongside components for scoped styles.

---

Built with ❤️ using React Router.
