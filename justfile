import '.justfiles/base.just'


# Install dependencies
install:
    pnpm install

# Install iOS dependencies (CocoaPods)
pods:
    cd ios \
    && pnpm bundle install \
    && pnpm bundle exec pod install

# Run linter
lint: (_lint "--fix")

# Fix linting issues
_lint args="":
    pnpm eslint "{{ justfile_dir() }}" {{ args }}

# Run type check
typecheck:
    pnpm exec tsc --noEmit

# Run unit tests
test:
    pnpm jest

# Run unit tests in watch mode
test-watch:
    pnpm run test --watch

# Run E2E tests
e2e:
    pnpm detox test -c ios.sim.debug

# Build app for E2E testing
e2e-build:
    pnpm detox build -c ios.sim.debug

# Start Metro bundler
start:
    pnpm react-native start

# Run on iOS simulator
ios:
    pnpm react-native run-ios

# Run on Android emulator
android:
    pnpm react-native run-android

# Clean and reinstall everything
clean-install: && install pods
    rm -rf node_modules
    rm -rf ios/Pods
    rm -rf ios/build
    rm -rf android/build
    rm -rf android/app/build

# Run all quality checks
check: lint typecheck test

# Format code with Prettier
format:
    pnpx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"

# Check code formatting
format-check:
    pnpx prettier --check "**/*.{ts,tsx,js,jsx,json,md}"
