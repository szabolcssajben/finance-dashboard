package sheets

import (
	"context"
	"finance-dashboard/backend/models"
	"fmt"
	"os"

	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
)

// SheetsClient handles Google Sheets API interactions
type SheetsClient struct {
	service *sheets.Service
	sheetID string
}

// NewSheetsClient creates a new Google Sheets client
func NewSheetsClient() (*SheetsClient, error) {
	ctx := context.Background()

	credentialsFile := os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")
	sheetID := os.Getenv("SHEET_ID")

	if credentialsFile == "" {
		return nil, fmt.Errorf("GOOGLE_APPLICATION_CREDENTIALS environment variable not set")
	}

	if sheetID == "" {
		return nil, fmt.Errorf("SHEET_ID environment variable not set")
	}

	service, err := sheets.NewService(ctx, option.WithCredentialsFile(credentialsFile))
	if err != nil {
		return nil, fmt.Errorf("unable to create sheets service: %v", err)
	}

	return &SheetsClient{
		service: service,
		sheetID: sheetID,
	}, nil
}

// GetTransactions fetches transaction data from Google Sheets
func (c *SheetsClient) GetTransactions(sheetRange string) ([]models.Transaction, error) {
	// TODO: Implement actual Google Sheets data fetching
	// This is a placeholder implementation
	return []models.Transaction{}, nil
}

// GetSheetData retrieves raw data from a specific sheet range
func (c *SheetsClient) GetSheetData(sheetRange string) ([][]interface{}, error) {
	resp, err := c.service.Spreadsheets.Values.Get(c.sheetID, sheetRange).Do()
	if err != nil {
		return nil, fmt.Errorf("unable to retrieve data from sheet: %v", err)
	}

	return resp.Values, nil
}
