# MyMov-Catalogue | Assignment Project
> Assignment project made for Bonfire Company. 

**DEMO**
Deployed DEMO [here!](https://mymovcat.firebaseapp.com)

## Features

 - Authentication using [Firebase](https://firebase.google.com) Authentication service.
 - CRUD with Firebase Realtime Database, create, update and remove movies.
 - Two ways to add movies:
	 - Search to Add (Dynamic Add).
	 - Manual Entry.
 - Search movies by multiple attributes.
 - Search integrated with [Algolia](https://www.algolia.com) Platform.
 - Auto Sync. between Firebase Database and Algolia indices, on adding/removing movies. 
 - Modular App structure.
 - Following the  [best practices](https://angular.io/guide/styleguide)! as much as possible.

## Usage

> NOTE: in order to make App works correctly, needs to add `Firebase` and `Algolia` configuration and apiKeys in `environments/environments.ts` file

 - Clone repository - `git clone https://github.com/mhakmi/movcat.git`
 - Install packages -  `npm i`
 - Run in terminal - `ng serve`
 - Navigate to `http://localhost:4200/`

## Ongoing FB Database live sync to Algolia
Algolia is a great platform for adding search capabilities to [Firebase](https://firebase.google.com/) Realtime Database. Algolia gives you full-text search, and support for more advanced features like filtering and faceting right out of the box.

> I wrote helper [Node.Js](https://nodejs.org) application and deployed it on [Heroku](https://www.heroku.com/) to make ongoing database live sync to Algolia index.
> The source code for this App. provided with this repository under `movcat-algolia-sync` folder.
