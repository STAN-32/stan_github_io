# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains all authored application code.
- `src/components/` holds feature UI modules, each typically in its own folder with paired `.js` and `.css` files (for example, `src/components/Header/Header.js` and `Header.css`).
- `src/Util/` stores shared data and theme helpers (`data.js`, `themes.js`).
- `src/assets/` and `src/img/` contain images used by components.
- `public/` contains the HTML template and static public assets.
- `build/`, root-level `static/`, and precache/service worker artifacts are generated outputs; treat them as build artifacts, not primary editing targets.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm start`: run the local dev server at `http://localhost:3000` with hot reload.
- `npm run build`: create a production build with `react-scripts`.
- `npm test`: run tests in watch mode (Create React App default).
- `npm run deploy`: publish `build/` to GitHub Pages (`predeploy` runs `build` first).

## Coding Style & Naming Conventions
- Follow CRA ESLint defaults (`react-app`, `react-app/jest`).
- Use 2-space indentation, semicolons, and ES module imports.
- Prefer functional React components and hooks.
- Component files and folders use PascalCase (`LoadingAnimation/LoadingAnimation.js`); utility modules use lower camel case (`themes.js`, `data.js`).
- Keep component-specific styles next to their component.

## Testing Guidelines
- Testing stack is Jest + React Testing Library (via `react-scripts`).
- Place tests next to source as `*.test.js` (for example, `Header.test.js`).
- Prioritize behavior-driven tests for rendering, interactions, and conditional UI states.
- Run `npm test` before opening a PR.

## Commit & Pull Request Guidelines
- Recent history mixes weak messages (for example, `1`) with descriptive ones. Prefer clear, imperative commit titles.
- Recommended format: optional type prefix + summary, e.g. `feat: update publications data` or `fix: prevent loading spinner flicker`.
- PRs should include: purpose, scope, screenshots/GIFs for UI changes, test notes (`npm test`, `npm run build`), and linked issues when applicable.
