# Titanium Live Prototyper Widget

This project allows you to change properties of Titanium Alloy projects on the fly from your web browser.

WARNING: Still highly experimental. Pull requests are much appreciated.

Getting started
===============

- Setup the debugging server as mentioned on [Proto-ti repo](https://github.com/Martin1982/proto-ti) 
- Install the [TiWS Module](https://github.com/omorandi/tiws) in your app
- Add the Alloy widget located in `nl.martindekeijzer.proto-ti-client` to your widgets.
- Add the configuration to your config.json file:
```
            Alloy.Globals.prototi = {
              server: '192.168.130.19',
              port: 7076
            };
```
And set the correct values for your server's IP and port number.
- Implement the widget in any view that you'd like to live prototype on and run your app with this browser window opened.

Architecture
================

The prototyper consists of 2 parts;

- NodeJS server (based on socket.io)
- Titanium Alloy Widget

Once both are setup and configured you can start adding the alloy tag in your views where you want the 
live-prototyper to be active;
`<Widget id="proto" src="nl.martindekeijzer.liveproto" />`

This will open a websocket connection from your app to the server and gather all Alloy elements which have
an id. The elements with an id get a click-handler attached so that they will transmit their properties to 
the server on a click.

In the browser another websocket connection is opened to the server. Once the browser gets information about
a clicked element it will render a table with the properties from this element.
Once a field in the browser is blurred the browser will send the new property value back to your app so
that it will update it with the setter for that property.

Bugs &amp; Features
===================

This prototyper is put on Github as just an idea for easy and quick prototyping. It's still full of bugs.
Don't be shy and fork, send pull requests or log issues on Github.

