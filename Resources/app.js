 // this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include("state/StateManager.js");

StateManager.getInstance().setState("login");