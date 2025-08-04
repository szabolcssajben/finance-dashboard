#!/bin/bash

# Start backend with hot reload
echo "Starting backend with Air..."
cd "$(dirname "$0")"
air &

# Wait a moment for backend to start
sleep 2

# Start frontend
echo "Starting frontend..."
pnpm run dev &

# Wait for user input to stop both services
echo "Press any key to stop both services..."
read -n 1 -s

# Kill background processes
echo "Stopping services..."
pkill -f "air"
pkill -f "vite"

echo "Development servers stopped."
