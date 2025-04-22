# Poesia (Medical Records for Pets)

## Structure

This project is built as a Turbopack monorepo, so that the backend (`apps/api`) and React Native app (`apps/mobile`) can be co-located, and share code if need be.

From the root of the repo, you can run scripts in the `api` and `mobile` apps by prefixing your scripts with `yarn api` or `yarn mobile`.

## Local development

Make sure you have `docker-compose`, `node` and `yarn` installed. For iOS development, you will also need a full install of [xCode and the iOS simulator](https://reactnative.dev/docs/set-up-your-environment#xcode).

1. Install dependencies, start postgres and run migrations:

```sh
nvm install && yarn && yarn api setup
```

2. In two (or split) terminals, start the backend and mobile app:

```sh
yarn api dev
```

```sh
yarn mobile dev
// NOTE: when prompted, tap 'i' to open the xcode iOS simulator
```

## Tech Stack Choices

The API was built using Express and Prisma with, simple endpoints since it's not the focus of the takehome.

The Mobile app was bootstrapped using Expo as a React Native framework. Expo's features, like OTA updates, routing and many built-in components are also useful to have.

Zustand was chosen for a simple app-wide store for auth data (mainly the access token returned by the backend on registration/login).

SWR hooks are used for data fetching and caching. A few benefits of using SWR:

- The SWR (stale-while-revalidate) caching strategy ensures users see cached data while the latest is being loaded in the background
- The cache can be manually invalidated when posting/updating data
- The fetcher function passed to SWR lets us automatically retrieve the access token from [Secure Storage](https://docs.expo.dev/versions/latest/sdk/securestore/) and add it as a request header on all requests made to the API

React Native Paper was chosen as the component library, as the Novellia mobile app seems to be using Material UI, and this is a close visual match. A custom color scheme was generated to match the look of Novellia, although this could definitely use a designer's touch! ^\_^;

## Pages

Under the Stack navigator, we have the standard auth screens:

1. The Home screen, with CTAs to either log in or register
2. The Login screen, with form and link to register
3. The Register screen, with form and link to login

Once logged in (or registered), the user is redirected to the Tab screens:

1. Dashboard home (where the user's pets are shown)
2. Pet details page – hidden from the tab bar, but accessible by clicing "Details" on a pet's card. Shows a pet's vaccines, allergies, and labs.

## Dialogs

Outside of Account registration and login, all other "create" operations (pets, vaccines, allergies, labs) are done via Dialogs. This approach was chosen so:

1. There are minimal page navigations, which can confuse the user if not designed well
2. Once the entities are created/posted, SWR's cache can be revalidated. The dialog then closes, and users see the updated data

## Potential Changes (if building this for the real world)

1. Editing and deleting entities (pets, vaccines, allergies, labs) was not set up, due to a lack of time
2. Proper serverside session management, with expiration, and the ability to refresh sesions
3. Use Suspense and Error Boundaries for handling async calls. I've taken a liking to Suspense for being a much more declarative pattern for async data flows in React
4. Component libraries in React Native are still quite nacent compared to React on the web. RNR (React Native Reusables) is a promising option in the vein of ShadCN, where components are copied into the project repository instead of being installed as an npm package. Ideally however, components should be built from scratch using either stylesheets or NativeWind
5. The color scheme used here is a quick placeholder to match the Novellia logo, and needs some design TLC

## AI Usage

Cursor's composer view was only used to speed up backend development, since that was not the focus of this takehome exercise.
