#!/bin/bash

PORT=3000

# Get the PID of the process using the port
PID=$(lsof -i :$PORT -sTCP:LISTEN -t)

if [ -n "$PID" ]; then
  # Get the command name of the process
  CMD=$(ps -p $PID -o comm=)

  # if [[ "$CMD" == "node" ]]; then
  #     echo "Killing Node.js process ($PID) on port $PORT"
  kill -9 $PID
  # else
  #     echo "Port $PORT is in use by '$CMD', not killing."
  # fi
else
  echo "No process found on port $PORT"
fi
