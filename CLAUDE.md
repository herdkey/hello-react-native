# hello-mobile

The goal of this project is to achieve the specs below.

Create a new React Native project called **`hello-mobile`** with the following requirements:

## Core Setup
- Framework: **React Native CLI**.
- Language: **TypeScript** (strict mode enabled).
- Bundler: **Metro** (default).
- Native dependencies: use **CocoaPods** for iOS, include `Gemfile` and `.ruby-version` for reproducibility.
- Use **volta** for Node.js version management.
- Use **pnpm** as the package manager.
- Use **just** as the task runner (with a `justfile` for common dev commands).

## Code Quality
- Configure **ESLint** and **Prettier** with recommended rules and TypeScript support.

## Testing
- Add **Jest** with TypeScript support.
- Add **@testing-library/react-native** for component testing.
- Add **Detox** configured for iOS Simulator for E2E tests. Include an example E2E test for the landing screen.

## Debugging & Profiling
- Enable **React DevTools**.
- Configure **Flipper** integration for debug builds.
- Ensure the project runs fine in **Xcode Instruments** (no special setup required, just keep the iOS workspace healthy).

## UI / Business Logic
- Use **react-native-bootsplash** to show a splash screen while the app loads.
- After splash, show a landing screen with centered text: **“Hello, World!”**

## Project Structure
```
hello-mobile/
  ├─ android/
  ├─ ios/
  ├─ src/
  │   ├─ components/
  │   ├─ screens/
  │   │   └─ LandingScreen.tsx
  │   ├─ App.tsx
  ├─ __tests__/ (unit + integration tests)
  ├─ e2e/ (Detox tests)
  ├─ .eslintrc.js
  ├─ .prettierrc
  ├─ jest.config.js
  ├─ detox.config.js
  ├─ tsconfig.json
  ├─ Gemfile
  ├─ .ruby-version
  ├─ justfile
  └─ package.json
```

## Deliverables
- Complete boilerplate code in TypeScript.
- Scripts in `package.json` and `justfile` for: `lint`, `test`, `e2e`, `ios` (run on simulator), `pods` (CocoaPods install).
- One example Jest test (checks that “Hello, World!” renders).
- One example Detox test (verifies landing page text).
- Document setup in `README.md`: how to install dependencies, run pods, start Metro, run on iOS simulator, run tests.  
