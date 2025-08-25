#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"

# Prefer lsof; fall back to fuser if available
if command -v lsof >/dev/null 2>&1; then
	PIDS="$(lsof -tiTCP:$PORT -sTCP:LISTEN || true)"
	if [ -n "$PIDS" ]; then
		kill $PIDS 2>/dev/null || true
		sleep 1
		kill -9 $PIDS 2>/dev/null || true
		echo "Freed port $PORT (killed: $PIDS)"
	else
		echo "Nothing listening on :$PORT"
	fi
elif command -v fuser >/dev/null 2>&1; then
	fuser -k "$PORT"/tcp || true
	echo "Freed port $PORT"
else
	echo "Need 'lsof' or 'fuser' installed."
	exit 1
fi
