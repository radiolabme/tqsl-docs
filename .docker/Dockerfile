# TQSL Documentation - Development Container
# 
# Handles all runtime dependencies (Node.js, npm) so the host only needs Docker.
# Watches for package.json changes and auto-reinstalls dependencies.

FROM node:22-slim

WORKDIR /workspace

# Install curl for healthcheck and entr for file watching
RUN apt-get update && apt-get install -y --no-install-recommends curl entr \
    && rm -rf /var/lib/apt/lists/*

# Install nodemon globally for automatic restart on package changes
RUN npm install -g nodemon

# Create startup script that handles dependency installation and watching
RUN echo '#!/bin/sh\n\
set -e\n\
\n\
# Initial dependency installation\n\
if [ ! -d "node_modules" ] || [ "package-lock.json" -nt "node_modules/.install-timestamp" ]; then\n\
  echo "Installing dependencies..."\n\
  npm ci --include=dev\n\
  touch node_modules/.install-timestamp\n\
fi\n\
\n\
# Use nodemon to watch package files and restart\n\
exec nodemon \\\n\
  --watch package.json \\\n\
  --watch package-lock.json \\\n\
  --exec "npm ci --include=dev && touch node_modules/.install-timestamp && $*"' \
  > /entrypoint.sh && chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Expose dev server port
EXPOSE 4321

# Default command (overridden in docker-compose for serve/ci)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
