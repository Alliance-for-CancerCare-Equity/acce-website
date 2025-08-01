#!/bin/bash

PORT=3000

# Get the PID of the process using the port
PID=$(lsof -i :$PORT -sTCP:LISTEN -t)

if [ -n "$PID" ]; then
  # Get the command name of the process
  CMD=$(ps -p $PID -o comm=)

  kill -9 $PID
else
  echo "No process found on port $PORT"
fi
