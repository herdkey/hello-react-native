# hello-mobile

A React Native CLI project with TypeScript, comprehensive testing setup, and modern development tooling.

## Prerequisites

- Node.js 22.20.0 (managed via volta)
- pnpm package manager
- Ruby 3.3.6 (for CocoaPods)
- iOS development: Xcode and iOS Simulator
- Android development: Android Studio and Android Emulator

## Setup Instructions

### 1. Install Dependencies

```bash
# Install Node.js packages
just install

# Install iOS dependencies (CocoaPods)
just pods
```

### 2. Start Metro Bundler

```bash
just start
```

### 3. Run on iOS Simulator

```bash
just ios
```

### 4. Run on Android Emulator

```bash
just android
```

## Development Scripts

This project uses [just](https://github.com/casey/just) as a task runner. Available commands:

```bash
# Package management
just install          # Install dependencies
just pods             # Install iOS dependencies (CocoaPods)

# Development
just start            # Start Metro bundler
just ios              # Run on iOS simulator
just android          # Run on Android emulator

# Code quality
just lint             # Run linter
just lint-fix         # Fix linting issues
just typecheck        # Run TypeScript type checking
just format           # Format code with Prettier
just format-check     # Check code formatting

# Testing
just test             # Run unit tests
just test-watch       # Run unit tests in watch mode
just e2e              # Run E2E tests
just e2e-build        # Build app for E2E testing

# Quality checks
just check            # Run lint, typecheck, and test

# Maintenance
just clean-install    # Clean and reinstall everything
```

## Project Structure

```
hello-mobile/
├── src/
│   ├── components/    # Reusable UI components
│   └── screens/      # Screen components
│       └── LandingScreen.tsx
├── __tests__/        # Unit and integration tests
├── e2e/             # Detox E2E tests
├── ios/             # iOS native code
├── android/         # Android native code
├── justfile         # Task runner commands
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── jest.config.js   # Jest testing configuration
├── .detoxrc.js      # Detox E2E testing configuration
├── .eslintrc.js     # ESLint configuration
├── .prettierrc.js   # Prettier configuration
├── Gemfile          # Ruby dependencies for CocoaPods
└── .ruby-version    # Ruby version specification
```

## Features

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Code Quality**: ESLint and Prettier with TypeScript support
- **Testing**: Jest with @testing-library/react-native for unit tests
- **E2E Testing**: Detox configured for iOS Simulator
- **Splash Screen**: react-native-bootsplash integration
- **Package Management**: pnpm with volta for Node.js version management
- **Task Runner**: just for streamlined development workflows

## Testing

### Unit Tests
```bash
just test           # Run all unit tests
just test-watch     # Run tests in watch mode
```

### E2E Tests
```bash
just e2e-build      # Build app for testing
just e2e            # Run E2E tests
```

## Troubleshooting

### iOS Build Issues
- Make sure CocoaPods are installed: `just pods`
- Clean and reinstall if needed: `just clean-install`

### Metro/JavaScript Issues
- Clear Metro cache: `pnpx react-native start --reset-cache`
- Clean and reinstall: `just clean-install`

### Version Management
- Ensure Node.js 22.20.0 is active: `node --version`
- Ensure correct pnpm version: `pnpm --version`

For more React Native troubleshooting, see the [official documentation](https://reactnative.dev/docs/troubleshooting).