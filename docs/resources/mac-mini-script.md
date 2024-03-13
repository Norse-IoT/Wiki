# Mac Mini Script

In order to image all of the mac minis for TechOlympics, Zack wrote this script [on GitHub](https://gist.github.com/zsarge/61c9982280388477d6025a67b0699a6d).

It is copied below for reference. There may be a more recent version [on GitHub](https://gist.github.com/zsarge/61c9982280388477d6025a67b0699a6d).
In the future, we plan to use Chris's [Carbon Copy Cloner](https://bombich.com/).

```bash
#!/bin/bash
set -e
 
# this script:
# 1. downloads downloads drivers for USB to UART (requires GUI input)
# 2. installs Xcode command line tools with homebrew
# 3. installs Arduino IDE and adds it to the dock
# 4. downloads Arduino CLI
# 5. adds board support for ESP32s
#
# Running this script with sudo minimizes developer interaction

# trigger prompt for sudo password before developer walks away
sudo ls

# install drivers and xcode support first, because they require GUI installers

# install USB to UART drivers on Mac
## https://github.com/espressif/arduino-esp32/issues/1084

# from https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads
LATEST_DRIVER="https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip"
 
curl -L -O "$LATEST_DRIVER" 
unzip Mac_OSX_VCP_Driver.zip
cd macOS_VCP_Driver
# allow apps to be downloaded from app store or identified developers?? Not enabled yet. idk if this is what I want
## sudo spctl --master-disable
hdiutil attach SiLabsUSBDriverDisk.dmg 
# trigger GUI installation
open /Volumes/Silicon\ Labs\ VCP\ Driver\ Install\ Disk/Install\ CP210x\ VCP\ Driver.app 
echo "hit ENTER to continue"
read # wait for user to finish installation
hdiutil detach "/Volumes/Silicon Labs VCP Driver Install Disk/"
 
# install xcode support through homebrew (assuming brew is not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo "this should have automatically installed XCode Command Line Tools. hopefully."
 
# Download Arduino IDE image
source="https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_macOS_64bit.dmg"
 
curl -L -O "$source"
 
echo "installing dmg"
hdiutil attach arduino-ide_latest_macOS_64bit.dmg
echo "installing app"
sudo cp -R "/Volumes/Arduino IDE 2.2.1/Arduino IDE.app" /Applications
echo "detatching img"
hdiutil detach "/Volumes/Arduino IDE 2.2.1"
 
# add Arduino IDE to dock for easy access
defaults write com.apple.dock persistent-apps -array-add '<dict><key>tile-data</key><dict><key>file-data</key><dict><key>_CFURLString</key><string>/Applications/Arduino IDE.app</string><key>_CFURLStringType</key><integer>0</integer></dict></dict></dict>'  
killall Dock
 
echo "/Users/$USER/.arduino_cli" | sudo tee -a /etc/paths 
mkdir ~/.arduino_cli
curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | BINDIR=~/.arduino_cli sh
source /etc/profile # reload $PATH

# install esp32 board support with arduino cli
arduino-cli config init
arduino-cli config set board_manager.additional_urls "https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"
arduino-cli config set library.enable_unsafe_install true
 
arduino-cli core update-index
arduino-cli core install esp32:esp32
 
echo "install script finished!"
date
```
