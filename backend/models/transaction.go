package models

import "time"

// Transaction represents a financial transaction
type Transaction struct {
	ID          string    `json:"id"`
	Date        time.Time `json:"date"`
	Amount      float64   `json:"amount"`
	Description string    `json:"description"`
	Category    string    `json:"category"`
	Merchant    string    `json:"merchant"`
	Type        string    `json:"type"` // "income" or "expense"
}

// WeeklyTrend represents spending/income trends for a week
type WeeklyTrend struct {
	Week     int     `json:"week"`
	Year     int     `json:"year"`
	Income   float64 `json:"income"`
	Expenses float64 `json:"expenses"`
	Net      float64 `json:"net"`
}

// SavingsGoal represents a user's savings target
type SavingsGoal struct {
	ID             string    `json:"id"`
	Name           string    `json:"name"`
	TargetAmount   float64   `json:"target_amount"`
	CurrentAmount  float64   `json:"current_amount"`
	TargetDate     time.Time `json:"target_date"`
	EstimatedDate  time.Time `json:"estimated_date"`
	MonthlySavings float64   `json:"monthly_savings"`
}
