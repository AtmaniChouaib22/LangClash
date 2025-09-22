-- init-scripts/01-init.sql
-- This script runs when PostgreSQL container starts for the first time

-- Create test database
CREATE DATABASE langclash_test;

-- Install extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Set timezone
ALTER DATABASE langclash_dev SET timezone TO 'UTC';
ALTER DATABASE langclash_test SET timezone TO 'UTC';

-- Create a basic admin user (optional)
-- You can add initial data here if needed