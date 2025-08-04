import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Finance Dashboard" },
    { name: "description", content: "Personal finance dashboard with spending insights" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Finance Dashboard</h1>
          <p className="text-gray-600">Track your spending patterns and financial insights</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Summary Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">This Month</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Income</span>
                <span className="font-medium text-green-600">£0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expenses</span>
                <span className="font-medium text-red-600">£0.00</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-900 font-medium">Net</span>
                <span className="font-medium">£0.00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Savings Goal</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Target</span>
                <span className="font-medium">£0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current</span>
                <span className="font-medium">£0.00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Transactions</h3>
            <div className="text-center text-gray-500 py-4">
              <p>No transactions available</p>
              <p className="text-sm">Connect your Google Sheet to see data</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Charts will go here */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trends</h3>
            <div className="text-center text-gray-500 py-8">
              <p>Chart will appear here once data is connected</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
            <div className="text-center text-gray-500 py-8">
              <p>Category breakdown will appear here</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Setup Instructions</h3>
          <div className="text-blue-800 space-y-1">
            <p>1. Update your <code className="bg-blue-100 px-2 py-1 rounded">.env</code> file with your Google Sheet ID</p>
            <p>2. Place your service account JSON file in the project root</p>
            <p>3. Restart the backend to connect to your data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
