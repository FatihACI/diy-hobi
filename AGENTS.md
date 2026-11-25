This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## One session at a time (read first): CURRENTLY DISABLED

> Since 25 Nov 2026 the lock is temporarily disabled by the user. You do not need to take or check the lock. Still run `git status` first and never touch uncommitted changes you did not make. When the user re-enables it, this note is removed and the rule below applies.

Only one AI/Claude session may work in this folder at a time. Before touching any file run `powershell -File araclar\oturum.ps1 durum`. If it prints `KILITLI` and the lock is not yours, stop: do not edit files, switch branches, commit or install packages; tell the user who holds the lock and ask. If it prints `BOS`, take the lock with `oturum.ps1 al -Ad "<session name/link>" -Is "<task>"`, refresh it during long work (`yenile`) and release it when done (`birak`). Also run `git status` first and never touch uncommitted changes you did not make. Details (Turkish): `CLAUDE.md`.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- This project uses **React Navigation** (`@react-navigation/native`, bottom tabs + native stack), set up in `App.tsx`; screens live in `src/screens/`. Do **not** migrate to Expo Router or create `src/app/` unless explicitly asked.
- Route params are typed in `src/nav.ts`.

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
