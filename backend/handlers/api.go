package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// HealthCheck returns a simple health check response
func HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "API is running"})
}

// GetTransactions returns transaction data (placeholder)
func GetTransactions(c *gin.Context) {
	// TODO: Implement transaction fetching from Google Sheets
	c.JSON(http.StatusOK, gin.H{
		"transactions": []interface{}{},
		"message":      "Feature not implemented yet",
	})
}

// GetWeeklyTrends returns weekly spending trends (placeholder)
func GetWeeklyTrends(c *gin.Context) {
	// TODO: Implement weekly trends calculation
	c.JSON(http.StatusOK, gin.H{
		"trends":  []interface{}{},
		"message": "Feature not implemented yet",
	})
}
