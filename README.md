# Awesome Todo App
## Starring __**React Native!**__


To install..

Download https://developer.apple.com/xcode/

Download https://developer.android.com/studio/index.html

Instructions

https://facebook.github.io/react-native/docs/getting-started.html

Follow this video on egghead.io for setup,***Extremeely Helpful*** 
https://egghead.io/lessons/react-setup-react-native-for-ios-and-android

When your environment is set up
$ npm install


### 1. Problem Statement

We are always in motion. When we are in motion, we tend to forget things along the way.
How can we remember to do something while on the go? 

### 2. Solution

This is a well executed phase one of a geoloaction based to do mobile app. The solution is to 
have an app that detects where you are in your travels and sends a reminder to do what is on your list as you approach an opportunity to complete a task. For example, one can set a "to do" to buy milk from the supermarket on the way home. As the user is close to home, a preset is triggered to alert the user that they are within a set distance to the supermarket. Or, when one is on vacation, there will be alerts to remind the user to visit a certain place or buy a particular item. 

### 3. Current Development of this app

Currently, this a robust IOS/ Android capable "to do" app that has full Create, Read, Edit, and Delete capabilites. 

### 4. Features

    The lower tabs are a filtering mechanism to sort between all tasks, completed ones, and those that are still active.


    To add - simply type in the upper text field
    To edit - hover over the task and press down continuously till the text field expands
    To delete - click the X next to item
    To complete - toggle the switch to strike though item

### 5. App Development and insights

Personally, this project for me was not about building an app. It was about learning
a new technology/ tecnologies is a very compressed amount of time and making something
that works well and expands my technical expertise.

Concerning the actual app. Learning mobile development involved learning completely new development environments such as Xcode and Android Studio, the phone emulators and the configuration of testable hardware, issues with deployment, vastly different file structures that are essential for mobile platforms, and lastly the most challenging was debugging. In addition, the hardware resources to develop for two platforms at once caused my CPU to consistently run hot. Many times I would have to have up to 8 terminal processes running.

The were 5 versions of this app for iteration and 3 complete rebuilds due to errors that could not be diagnosed. The solution in those cases proved that it was cheaper in time to rebuild than to waste hours on errors that may of may not be able to be found in time. 

As development progressed, I choose to push the limits of what I could learn and execute in 
a short amount of time. On 2/23 and 2/24 the days were spent learning React Native, and setting up the Dev environments. 2/25, the build began. 2/26 I decided it would be a good idea to learn Redux and Async storage. Though Redux was implented in an earlier version, I could not understand it well enough to move around the build fast enough so I scrapped it. The same was true with Async storage. In that instance both emulators would not load based on an implementation error with that. That cause rebuild 1. Rebuild 2 was to refactor a working version then came a bug that was not easily traceable. Rebuild 3 occured 1am on 2/28, the day of the presentaion. the error 
was related to an infinite loop in filtering and conditional component rendering.

### 6. Tech Stack

    React Native
    es6
    Redux *(learned in dev, implemented in dev, scrapped in production)
    Async Storage *(learned in dev, implemented in dev, scrapped in production)

### 7. Future Development

Phase 2 is adding geolocation with current position with scene to scene navigation.







