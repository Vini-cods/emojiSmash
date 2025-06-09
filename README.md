# EmojiSmash 📱

A fun and interactive React Native app that lets you add emoji stickers to your photos! Choose any image from your gallery, place draggable and scalable emoji stickers on it, and save your creative masterpiece.

##  Features

- **Photo Selection**: Choose any image from your device's photo library
- **Interactive Stickers**: Add emoji stickers that you can:
  - Drag around the screen
  - Double-tap to scale (zoom in/out)
  - Position anywhere on your image
- **Save Functionality**: Save your edited images to your device's photo library
- **Cross-Platform**: Works on iOS, Android, and Web
- **Smooth Animations**: Powered by React Native Reanimated for fluid interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (14 or higher)
- Expo CLI
- React Native development environment

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd emojiSmash
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
expo start
```

4. Run on your preferred platform:
   - **iOS**: Press `i` in the terminal or scan QR code with Expo Go
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go
   - **Web**: Press `w` in the terminal

## 📱 How to Use

1. **Choose a Photo**: Tap "Choose a photo" to select an image from your gallery
2. **Add Stickers**: Tap the "+" button to open the emoji picker
3. **Interact with Stickers**:
   - Drag stickers around the screen
   - Double-tap to scale them up or down
4. **Save or Reset**: 
   - Tap "Save" to download your creation
   - Tap "Reset" to start over

## 🛠️ Built With

- **React Native** - Mobile app framework
- **Expo** - Development platform and tools
- **React Native Gesture Handler** - Touch and gesture handling
- **React Native Reanimated** - Smooth animations
- **Expo Image Picker** - Photo selection functionality
- **Expo Media Library** - Save images to device
- **React Native View Shot** - Capture views as images

## 📦 Project Structure

```
emojiSmash/
├── components/
│   ├── Button.js              # Custom button component
│   ├── CircleButton.js        # Circular add button
│   ├── EmojiList.js          # Horizontal emoji list
│   ├── EmojiPicker.js        # Modal for emoji selection
│   ├── EmojiSticker.js       # Draggable/scalable sticker
│   ├── IconButton.js         # Icon-based buttons
│   └── ImageViewer.js        # Image display component
├── assets/
│   └── images/               # Emoji images and placeholder
├── App.js                    # Main application component
├── app.json                  # Expo configuration
├── eas.json                  # EAS Build configuration
└── index.js                  # App entry point
```

## 🎨 Component Overview

### Core Components

- **App.js**: Main application logic and state management
- **ImageViewer**: Displays the selected image or placeholder
- **EmojiSticker**: Interactive sticker with drag and scale capabilities
- **EmojiPicker**: Modal interface for sticker selection
- **Button Components**: Various styled buttons for different actions

### Key Features Implementation

- **Gesture Handling**: Uses PanGestureHandler for dragging and TapGestureHandler for scaling
- **Animations**: Smooth transitions with React Native Reanimated
- **Cross-Platform Saving**: Different save methods for mobile and web platforms
- **Permissions**: Handles media library permissions appropriately

## 🔧 Configuration

The app is configured through:

- **app.json**: Expo configuration including app name, version, and platform-specific settings
- **eas.json**: EAS Build configuration for development, preview, and production builds

## 📄 Permissions

The app requires the following permissions:
- **Camera Roll/Photo Library**: To select and save images
- **Media Library**: To save edited images to the device

## 🌐 Platform Support

- **iOS**: Full functionality with native image picker and save capabilities
- **Android**: Full functionality with native image picker and save capabilities  
- **Web**: Full functionality with download-based image saving

## 🚀 Building for Production

### Using EAS Build

```bash
# Build for development
eas build --profile development

# Build for production
eas build --profile production
```

### Local Development Build

```bash
# iOS
expo run:ios

# Android
expo run:android
```
