# Beep Boop
By Keturah Howard, January 24th 2020

## Description
  This application will take any numberical input and feed back to you a very strange string of values includning *'beeps'* and *'boops'* and phrases alike. Can you crack the code of what this whacky program is doing? I had to. This is a Friday project assigned by Epicodus to practice branching, loops, and other fun stuff covered in previous projects. Let's get boopy!

## Behavioral Driven Development
  *Heres a list of the specific behaviors I wanted to be acheived throughout the development process, starting from most basic to complex.*

  - program returns number in output:
    - input: '66'
    - output: '66'
  - program only accepts numbers as inputs:
    - input: 'hello'
    - output: 'Please input a number'
  - program only accepts one singular number:
    - input: '25 4 987'
    - output: 'Please input a single number'
  - program returns a range of numbers from 0 to the users number:
    - input: '6'
    - output: 0, 1, 2, 3, 4, 5, 6
  - program replaces numbers that contain 1 with beep:
    - input: '11'
    - output: 0, 'beep', 2, 3, 4, 5, 6, 7, 8, 9, 'beep' 'beep'
  - program replaces numbers that contain 2 with boop:
    - input: '12'
    - output: 0, 'beep', 'boop', 3, 4, 5, 6, 7, 8, 9, 'beep', 'beep', 'boop'
  - program replaces numbers that contain 3 with "I'm sorry Dave, I can't do that.":
    - input: '24'
    - output: 0, 'beep', 'boop', "I'm sorry Dave, I can't do that.", 4, 5, 6, 7, 8, 9, 'beep', 'beep', 'boop', "I'm sorry Dave, I can't do that.", 'beep', 'beep', 'beep', 'beep', 'beep', 'beep', 'boop', 'boop', 'boop', "I'm sorry Dave, I can't do that.", 'boop'

## Set Up 
  To set up you can simply interact with the webpage by clicking [here](https://keturahdev.github.io/Beep-Boop/) to access the gh-pages for this repository. Or! To view the code and in Visual Studio and all that jazz, follow the steps bellow. 
  1. Click on the *clone or download* button of this repository. You can download the project file clicking the **"Download Zip"** button, double clicking the file in downloads, and navigating to the index.html file and double clicking that. *Or*, you can copy the link that pops up when you've clicked the *clone or download* button above this README.md file.
  2. Navigate to your terminal, where you have previously installed git (if you have not done this yet, go ahead and do so now).
  3. In terminal, change your directory to desktop, and then type **"git clone https://github.com/KeturahDev/Beep-Boop"**.
  4. When you've pressed enter, my project will be cloned onto your desktop, and now you can change directory into it and type **"code ."** to open the projects files in Visual Studio Code!

## Technologies Used
* jQuery
* JavaScript
* Bootstrap version 3.3.7
* Visual Studio Code
* HTML
* CSS

## Known Bugs
There are currently no known bugs.

## Contact Info 
There are currently no known bugs, however, if there are any issues running this website I would love feedback! Please email me at keturah.dev@gmail.com.

## Legal

Copyright (c) 2020 Keturah D Howard.