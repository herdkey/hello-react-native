# Hello Mobile Development Commands

# Install dependencies
install:
    pnpm install

# Install iOS dependencies (CocoaPods)
pods:
    cd ios && bundle install && bundle exec pod install

# Run linter
lint:
    pnpm run lint

# Fix linting issues
lint-fix:
    pnpm run lint --fix

# Run type check
typecheck:
    pnpx tsc --noEmit

# Run unit tests
test:
    pnpm run test

# Run unit tests in watch mode
test-watch:
    pnpm run test --watch

# Run E2E tests
e2e:
    pnpm run e2e

# Build app for E2E testing
e2e-build:
    pnpm run e2e:build

# Start Metro bundler
start:
    pnpm run start

# Run on iOS simulator
ios:
    pnpm run ios

# Run on Android emulator
android:
    pnpm run android

# Clean and reinstall everything
clean-install:
    rm -rf node_modules
    rm -rf ios/Pods
    rm -rf ios/build
    rm -rf android/build
    rm -rf android/app/build
    pnpm install
    just pods

# Run all quality checks
check: lint typecheck test

# Format code with Prettier
format:
    pnpx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"

# Check code formatting
format-check:
    pnpx prettier --check "**/*.{ts,tsx,js,jsx,json,md}"