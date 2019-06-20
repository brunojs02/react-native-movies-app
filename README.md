## Installation

```bash
react-native init projectName --template rnbs
```

## Instructions
Go to project folder and remove default App entry point.
```bash
cd projectName && rm App.json
```
In package.json scripts section, add this:
```
"lint": "node_modules/.bin/eslint *.js **/*.js"
```
In package.json jest section, add this:
```
"transformIgnorePatterns": ["node_modules/(?!react-native|react-navigation)"]
```
And finally:
```bash
react-native (run-android || run-ios)
```
