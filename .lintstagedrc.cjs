module.exports = {
  '*.{ts,tsx}': ['npm run prettify', () => 'tsc --noEmit -p tsconfig.json', 'npm run lint --fix --no-cache'],
}
