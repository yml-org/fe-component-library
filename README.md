# Web CL

A mono repo based project which is used for building a component library using web components that can be reused across multiple projects and frameworks.

## Motivation

This project will provide a reusable component library that will act as building blocks for several projects. It will solve the issue of reinventing the wheel where developers have to develop similar components for individual projects.

## Repository overview

Provide an overview of the directory structure and files, for example:

|- package.json => root workspace (private package used by yarn workspaces)
|--- packages
|------ header
|-------- package.json => standalone component utilizing lit.dev framework

## Running instructions

Following are the steps that are needed to install the dependencies in this project locally:

1. Clone this repository locally `$ git clone https://github.com/yml-org/fe-component-library.git`
2. Install the dependencies. Inside the root `$ yarn install`

To run a package:

1. In the terminal change the file path to the package directory `$ cd packages/packageName`
2. Run the project using `$ yarn start or yarn dev`.

To run the storybook:

1. In the root directory run `$ yarn storybook`

## More resources

Some of the resources that will be helpful in understanding the codebase:

[Monorepo Architecture](https://www.toptal.com/front-end/guide-to-monorepos)
[Lerna](https://lerna.js.org/docs/getting-started)
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
[Lit.dev](https://lit.dev/docs/)

## About

This project is developed in order to provide a bedrock for subsequent projects that utilise component based architecture.
Reach out to the following presons in case of any concerns:

1. [Shashanka Nataraj](https://github.com/ShashankaNataraj)
2. [Ramya Nayak](https://github.com/Ramyarnayak)
3. [Nirlipt Gaur](https://github.com/ng22792yml)
4. [Abdul Ziyan](https://github.com/Ziyan7)
5. [Adithya S Shenoy](https://github.com/AadiShenoy)
6. [Nilesh Kumar Sinha](https://github.com/NileshSinhaYML)
