FROM mcr.microsoft.com/devcontainers/universal:2

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# -----------------------------
# Install Bun (official installer)
# -----------------------------
ENV BUN_INSTALL=/usr/local/bun
ENV PATH=$BUN_INSTALL/bin:$PATH

RUN curl -fsSL https://bun.sh/install | bash \
    && bun --version

# -----------------------------
# Set working directory (Codespaces default)
# -----------------------------
WORKDIR /workspaces/app

# -----------------------------
# Copy dependency manifests first (layer caching)
# -----------------------------
COPY package.json ./
COPY bun.lockb* ./
COPY bun.lock* ./

# -----------------------------
# Install dependencies with Bun
# -----------------------------
RUN bun install && bun start

# -----------------------------
# Copy rest of the source
# -----------------------------
COPY . .

# -----------------------------
# Build project (only if build script exists)
# -----------------------------
RUN if bun run | grep -q "build"; then \
        bun run build; \
    else \
        echo "No build script found — build step skipped"; \
    fi

# -----------------------------
# Match Codespaces default user
# -----------------------------
USER vscode
