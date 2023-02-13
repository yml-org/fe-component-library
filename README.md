# Web CL

A mono repo based project which is used for building a component library using web components that can be reused across multiple projects and frameworks.

## Motivation

This project will provide a reusable component library that will act as building blocks for several projects. It will solve the issue of reinventing the wheel where developers have to develop similar components for individual projects.

## Repository overview

Provide an overview of the directory structure and files, for example:

```
 |- package.json => root workspace (private package used by yarn workspaces) 
 |--- packages 
 |------ header 
 |-------- package.json => standalone component utilizing lit.dev framework
 ```

## Running instructions

Following are the steps that are needed to install the dependencies in this project locally:

1. Clone this repository locally `$ git clone https://github.com/yml-org/fe-component-library.git`
2. Install the dependencies. Inside the root `$ yarn install`

To run a package:

1. In the terminal change the file path to the package directory `$ cd packages/packageName`
2. Run the project using `$ yarn start or yarn dev`.

To run the storybook:

1. In the root directory run `$ yarn storybook`

To run tests:

1. In the root directory run `$ yarn test`
2. To generate coverage reports run `$ yarn test:coverage`
3. To run tests in watch mode run `$ yarn test:watch`

## More resources

Some of the resources that will be helpful in understanding the codebase:

1. [Monorepo Architecture](https://www.toptal.com/front-end/guide-to-monorepos)
2. [Lerna](https://lerna.js.org/docs/getting-started)
3. [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
4. [Lit.dev](https://lit.dev/docs/)

## About

This project is developed in order to provide a bedrock for subsequent projects that utilise component based architecture.
Reach out to the following presons in case of any concerns:

1. [Shashanka Nataraj](https://github.com/ShashankaNataraj)
2. [Ramya Nayak](https://github.com/Ramyarnayak)
3. [Aswathi S](https://github.com/AswathiSYML)
4. [Abdul Ziyan](https://github.com/Ziyan7)
5. [Adithya S Shenoy](https://github.com/AadiShenoy)
6. [Nilesh Kumar Sinha](https://github.com/NileshSinhaYML)
