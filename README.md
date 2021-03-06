Titanium Live Prototyper
========================

This project allows you to change properties of Titanium Alloy projects on the fly from your web browser.

WARNING: Still highly experimental. Pull requests are much appreciated.

Getting started
===============

1. Globally install the server `npm install -g proto-ti-server`
2. Start the server `proto-ti-server`
3. Open a browser and point it to the URL of the server for client instructions

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

