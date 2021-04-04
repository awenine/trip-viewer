# Trip Viewer

A basic app for searching a location API and displaying map data for each location.
A deployed version of this app is available here:
[Trip-Viewer](https://peaceful-shannon-4f0f9f.netlify.app/)

## Technology

This project makes use of:

- [Create React App](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [React Testing Library](https://testing-library.com/)

## Set up

After cloning the repository, run: `npm install`
To link to the API, you will need to create a `.env` file and input the API link, which returns from 2 routes locations by name and details of a location by ID.
The `.env` file should be named as follows:

    REACT_APP_FETCH_URL="base API URL string here"

An `example.env` file is included for reference.

## Notes

- Some issues arose with the pragma for compiling Emotion's css-in-jsx and the version of React used (17), the pragma `/** @jsxImportSource @emotion/react */` is used on components that use Emotion (differeing from what is suggested in the Emotion documentation), as suggested in this link [here](https://dev.to/segunadebayo/migrating-to-react-17-and-fixing-the-jsx-runtime-error-with-emotion-l4n).
- a throttle function is used on the search bar to limit calls to the API while typing, from this library: **[https://www.npmjs.com/package/throttle-debounce](https://www.npmjs.com/package/throttle-debounce)**
- A custom map marker SVG is in the assets folder and can be easily swapped for any SVG or PNG file.
- Space has been left for imagery on the location cards (which is not provided by the API)

## TODO & Further Features

- More extensive testing and mocking of the API calls
- Create style themes for use with Emotion via CSS variables (ie colour palette, component library)
- Provided an appropriate route in the API that allows for searching by location/coordinates, show other nearby locations within the Details Page map of a location.
- Allow saving of locations to "favourites" list
