[![Known Vulnerabilities](https://app.snyk.io/test/github/briantam23/GraceShopper/badge.svg?targetFile=package.json)](https://app.snyk.io/test/github/briantam23/GraceShopper?targetFile=package.json)
[![Dependency Status](https://david-dm.org/briantam23/GraceShopper.svg)](https://david-dm.org/briantam23/GraceShopper)
[![devDependencies Status](https://david-dm.org/briantam23/GraceShopper/dev-status.svg)](https://david-dm.org/briantam23/GraceShopper?type=dev)

# 🛒 Building an e-Commerce app

![Home page screenshot](./public/img/home-page-screenshot.png)

A Single Page App created with React, Redux, JWT Authentication, and the Stripe API.

![Cart page screenshot](./public/img/cart-page-screenshot.png)

## Table of contents
* [What is Stripe?](#what-is-stripe?)
* [Login Credentials](#login-credentials)
* [Live Demo](#live-demo)
* [Dependencies](#dependencies)
* [Requirements](#requirements)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Deploying to Heroku](#deploying-to-heroku)
* [Contact](#contact)

## What is Stripe?
[Stripe](https://stripe.com/) is a service that allows users to accept payments online, specifically developers. With the Stripe application, users can keep track of payments, search past payments, create recurring charges, and keep track of customers.

## Login Credentials

* Username: `sampleAuthUser@gmail.com`  | Password: `a`
* Username: `sampleAdmin@gmail.com`  | Password: `abc123`

## Live Demo

Currently deployed to [Heroku](https://wd-grace-shopper.herokuapp.com)!

## Dependencies

* [React](https://reactjs.org)
* [Redux](https://redux.js.org)
* [PostgreSQL](https://www.postgresql.org)
* [Express](https://expressjs.com)

## Requirements

* [Node.js (v10.16.0)](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [PostgreSQL](https://www.postgresql.org/download/)

## Installation

Step 1: Clone Repo
```sh
git clone https://github.com/briantam23/GraceShopper.git` # or clone your own fork
```

Step 2: Create Database
```sh
createdb grace-shopper
```

Step 3: Install `node_modules`
```sh
npm install # or yarn install
```

## Running Locally

```sh
npm run start:dev
```

The `npm run start:dev` command will run 2 processes:
* the `webpack` process (in watch mode) to build your client-side Javascript files
* the Node process for your server with `nodemon`

Your app should now be running on [localhost:3000](http://localhost:3000).

## Deploying to Heroku

Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Contact
Feel free to contact me at [briantam23@gmail.com](mailto:briantam23@gmail.com)!

Personal Website - [briantam23.github.io](http://briantam23.github.io) <br/>
LinkedIn - [@briantam23](https://linkedin.com/in/briantam23/) <br/>
Github - [@briantam23](https://github.com/briantam23)