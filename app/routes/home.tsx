import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Finance Dashboard" },
    { name: "description", content: "Personal finance dashboard with spending insights" },
  ];
}

export default function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <header className="header">
          <h1 className="header__title">Finance Dashboard</h1>
          <p className="header__subtitle">Track your spending patterns and financial insights</p>
        </header>

        <div className="grid grid--cols-3 mb-8">
          {/* Summary Cards */}
          <div className="card">
            <h3 className="card__title">This Month</h3>
            <div className="card__content">
              <div className="card__row">
                <span className="card__label">Income</span>
                <span className="card__value card__value--green">£0.00</span>
              </div>
              <div className="card__row">
                <span className="card__label">Expenses</span>
                <span className="card__value card__value--red">£0.00</span>
              </div>
              <div className="card__row card__row--border">
                <span className="card__value card__value--dark">Net</span>
                <span className="card__value">£0.00</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">Savings Goal</h3>
            <div className="card__content">
              <div className="card__row">
                <span className="card__label">Target</span>
                <span className="card__value">£0.00</span>
              </div>
              <div className="card__row">
                <span className="card__label">Current</span>
                <span className="card__value">£0.00</span>
              </div>
              <div className="progress">
                <div className="progress__bar" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">Recent Transactions</h3>
            <div className="card__empty">
              <p>No transactions available</p>
              <p className="small">Connect your Google Sheet to see data</p>
            </div>
          </div>
        </div>

        <div className="grid grid--cols-2">
          {/* Charts will go here */}
          <div className="card">
            <h3 className="card__title">Weekly Trends</h3>
            <div className="card__chart-placeholder">
              <p>Chart will appear here once data is connected</p>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">Spending by Category</h3>
            <div className="card__chart-placeholder">
              <p>Category breakdown will appear here</p>
            </div>
          </div>
        </div>

        <div className="card card--info mt-8">
          <h3 className="card__title">Setup Instructions</h3>
          <div className="card__content">
            <p>1. Update your <code>.env</code> file with your Google Sheet ID</p>
            <p>2. Place your service account JSON file in the project root</p>
            <p>3. Restart the backend to connect to your data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
