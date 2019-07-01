---
title: PowerApps Component Framework - a step forward
date: "2019-07-01"
---

PowerApps Component Framework is here, and it's changing the game.

<!-- end -->

I've been working with Dynamics since [CRM 3.0](https://en.wikipedia.org/wiki/Microsoft_Dynamics_CRM) came out, back in 2006. This was back in the days of no plugins, no web resources and an extremely limited toolset. But with that release, you could smell that the platform was going to be a success, it had extensibility baked into the product and whilst it was targeting *Sales, Service and Marketing*, everyone who used it knew it could do so much more.

Fast forward 13 years and the tool we've all been wanting for ages is here, we can finally (using a vendor provided toolkit) build our own, packageable controls for any data type (except as I found out today `Lookup.Regarding`) which can be easily configured and deployed. Here are a number of reasons why I think they're great.

## #1 TypeScript Support

I am a big fan of [TypeScript](https://www.typescriptlang.org/), having come from a C# background I dig the syntax and style, and having PCF use this as it's base just makes so much sense.

It means we can make our code more modular, easier to read and with type checking at compile time.

And all our dependencies are automatically packed in for us when we build the control. No more having multiple Web Resources on a form just to run one method, just add and `import` statement and you're good!

## #2 npm

Because PCF controls basically follow a nodeJS workflow, it means we can utilise the weath of dependencies in the npm repositories. If you want it, chances are someone has already done it.

This includes no brainers like [rxjs](https://www.learnrxjs.io/), to typings for the web speech api.

## #3 It's not just for devs

I would argue that PCF is bigger for non-devs than it is for devs. PCF follows a known standard, and is just another building block that can be re-used over and over.

Take a [postcode validator](https://github.com/jhetheringt7/PCF-CustomControl) - you build it once and then on every form it's a no-code change to give you real time postcode validation.

There is even a [gallery](https://pcf.gallery/), where you can view all of these controls.

## #4 You can configure which client shows which control

When you're configuring your controls in the form editor, you can choose whether it's enabled for web or mobile - so if your control only works at a certain size - you can default to the standard control on mobile.

All this ships in the form configuration too.

## #5 Support for React and Office UI Fabric

Support has been released for [React](https://reactjs.org/) Components and use of the [Office UI Fabric](https://developer.microsoft.com/en-us/fabric#/controls/web) (which is based on React).

This means you don't have to mess about with creating elements dynamically on component initialisation, you can use the Virtual DOM in React and let it do the heavy lifting for you.

## #6 It has a simple API

PCF controls only have to implement 4 methods:

- `init` (called when the control is loaded)
- `updateView` (called when the value of the field changes - also called when the control is loaded)
- `getOutputs` (called by the framework prior to control recieving new data)
- `destroy` (called when the control is going to be removed from the DOM, allows you to clean up unmanaged resources)

Everything is passed around in a context object (`ComponentFramework.Context`) which holds all configuration and state.

## #7 It comes with a test harness

You don't need to deploy your component into an instance in order to test it, just running ``npm start` will spin up a simple web server to host your control and you even get a little harness to test different values.

It also gives logging in the console for things like the `webApi` object so you can see when it was called and with what values.

# Next Steps

Now PCF isn't perfect, and whilst there is an active community, there are still a few things I would like:

1) `@media` queries to work correctly, as I can't seem to get them working to make my controls more response.
2) Unbound controls
3) Better debugging for `DataSet` bound controls
4) Better theming over and above Office UI Fabric.

Some of these things are coming soon, which makes this an even better place to be.

