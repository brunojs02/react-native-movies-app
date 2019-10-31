## Screenshots

#### Welcome Screen
<img src="screenshots/welcome_screen.webp" height="600" />

#### Login Screen
<img src="screenshots/login_screen.webp" height="600" />

#### Register Screen
<img src="screenshots/register_screen.webp" height="600" />

#### Home Screen
<img src="screenshots/home_screen.webp" height="600" />

## Before Run
- Create a firebase project with package/bundleId called com.rnmovies
- In authentication enable auth with email/password
- Download google-services.json and put under android/app (for Android)
- Download GoogleService-Info.plist, put on ios/rnmovies and reference on xcode (for iOS)

## Run Instructions
```bash
git clone https://github.com/brunojs02/react-native-movies-app.git rnmovies
cd rnmovies && (npm i || yarn)
cd android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
cd ../.. && react-native (run-android || run-ios)
```
