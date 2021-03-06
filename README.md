# \<form\>



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally. [Java SE Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) is required. Note that if you do not have the `javac` command installed, you will be promted to install Java 10. To uninstall Java, see the direction [here](https://www.java.com/en/download/help/mac_uninstall_java.xml). See [issue #405 for the status of Java 10 support](https://github.com/Polymer/tools/issues/405).


### 8.- Curso Polymer - Polymer elements
https://www.webcomponents.org/element/@polymer/iron-icons
https://www.youtube.com/watch?v=t0mEpZmQKZk&list=PLpOqH6AE0tNiplM2pFjhO51cEqQaI0R42&index=4


npm install --save @polymer/paper-elements
npm install --save @polymer/iron-elements

npm install --save @polymer/paper-input
npm install --save @polymer/paper-button
npm install --save @polymer/paper-card
npm install --save @polymer/iron-icons
npm install --save @polymer/iron-form
npm install --save @polymer/iron-form


npm uninstall @polymer/iron-elements
