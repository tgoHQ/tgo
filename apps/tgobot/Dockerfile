FROM node:slim

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
apt-get update && \
apt-get install google-chrome-stable -y --no-install-recommends && \
rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
# Copy the api package.json
COPY apps/tgobot/package.json ./apps/tgobot/package.json
RUN corepack enable
RUN pnpm --filter tgobot... install
COPY . .

RUN pnpm build --filter=tgobot
CMD ["pnpm", "start", "--filter=tgobot"]