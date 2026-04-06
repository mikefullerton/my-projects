#!/bin/bash
# Start the Project Hub server and open in browser
DIR="$(cd "$(dirname "$0")" && pwd)"

# Kill any existing instance
lsof -ti:3456 | xargs kill -9 2>/dev/null

node "$DIR/server.js" &
SERVER_PID=$!

# Wait for server to be ready
for i in {1..20}; do
  curl -s http://localhost:3456/ >/dev/null 2>&1 && break
  sleep 0.2
done

open http://localhost:3456
echo "Project Hub running at http://localhost:3456 (pid $SERVER_PID)"
echo "Press Ctrl+C to stop"
wait $SERVER_PID
