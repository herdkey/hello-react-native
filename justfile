import '.justfiles/base.just'


# Install dependencies
[group('setup')]
install:
    pnpm install

# Install iOS dependencies (CocoaPods)
[group('setup')]
pods:
    cd ios \
    && bundle install \
    && bundle exec pod install

# Run eslint and fix issues
[group('check')]
lint: (_lint "--fix")

# Run eslint and fail on issues
lint-check: _lint

# Run eslint
[group('check')]
_lint args="":
    pnpm eslint "{{ justfile_dir() }}" {{ args }}

# Format code with prettier
[group('check')]
fmt: (_fmt "--write --log-level warn")

# Check code formatting with prettier
[group('check')]
fmt-check: (_fmt "--check")

# Run prettier
_fmt args="":
    pnpx prettier {{args}} "**/*.{ts,tsx,js,jsx,json,md}"

# Run type check
[group('check')]
typecheck:
    pnpm exec tsc --noEmit

# Run all quality checks
[group('check')]
check: lint fmt typecheck

# Run unit tests
[group('test')]
test:
    pnpm jest

# Run unit tests in watch mode
[group('test')]
test-watch:
    pnpm run test --watch

# Run E2E tests
[group('test')]
e2e:
    pnpm detox test -c ios.sim.debug

# Build app for E2E testing
[group('test')]
e2e-build:
    pnpm detox build -c ios.sim.debug

# Start Metro bundler
[group('run')]
start:
    pnpm react-native start

# Run on iOS simulator
[group('run')]
ios:
    pnpm react-native run-ios

# Run on Android emulator
[group('run')]
android:
    pnpm react-native run-android

# Clean all deps & build artifacts
[group('setup')]
clean:
    rm -rf node_modules
    rm -rf ios/Pods
    rm -rf ios/build
    rm -rf android/build
    rm -rf android/app/build

# Clean and reinstall everything
[group('setup')]
clean-install: clean install pods
