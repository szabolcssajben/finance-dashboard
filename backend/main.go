package main

import (
	"finance-dashboard/backend/handlers"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	// Set port
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Initialize Gin, the web server framework
	router := gin.Default()

	// Enable CORS for frontend
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// API routes
	api := router.Group("/api")
	{
		api.GET("/health", handlers.HealthCheck)
		api.GET("/transactions", handlers.GetTransactions)
		api.GET("/trends/weekly", handlers.GetWeeklyTrends)
	}

	// Register a simple GET endpoint at /ping, just to check the server works
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	log.Printf("Server running on port %s", port)
	// Start the web server and listen for requests
	router.Run(":" + port)
}
