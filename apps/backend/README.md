# Environment Setup Instructions

## 🔧 Environment Configuration

This project uses environment-specific configuration files. Follow these steps to set up your development environment:

### 1. Copy Example Files

```bash
# In the backend directory
cd apps/backend

# Copy example files and configure them
cp .env.example .env
cp .env.development.example .env.development
cp .env.production.example .env.production
```

### 2. Configure Development Environment

Edit `apps/backend/.env.development` with your local development settings:

```bash
# Database (if using Docker)
DATABASE_URL="postgresql://langclash_dev:dev_password_123@localhost:5433/langclash_dev"
DIRECT_URL="postgresql://langclash_dev:dev_password_123@localhost:5433/langclash_dev"

# Redis
REDIS_URL="redis://localhost:6379"

# Supabase (your development instance)
SUPABASE_URL="your-supabase-url"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# JWT Secret (development only)
JWT_SECRET="dev-jwt-secret-not-for-production"
```

### 3. Local Overrides (Optional)

Create `apps/backend/.env.local` for personal/sensitive overrides that won't be committed:

```bash
# Personal database connection
DATABASE_URL="postgresql://myuser:mypass@localhost:5432/mydb"

# Different port
PORT=3002
```

### 4. Production Deployment

For production, set environment variables directly in your deployment platform (Vercel, Railway, Docker, etc.). Never commit actual production secrets to git.

## 🔒 Security

- ✅ `.env.*` files are ignored by git
- ✅ Example files contain no actual secrets
- ✅ Production values must be set in deployment environment
- ❌ Never commit files containing real API keys or passwords

## 🚀 Running the Application

```bash
# Development mode
NODE_ENV=development npm run dev

# Production mode
NODE_ENV=production npm start
```
