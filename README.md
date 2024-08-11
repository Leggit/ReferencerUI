# Referencer

This application was created in order to help generate references in accordance with the University of South Wales' harvard referencing guide.
It uses Angular, MaterialUI and Bootstrap.
It used to be connected to a backend that provided reference data, but this is no longer the case - it is instead pre-loaded with a limit set of reference types.

This app is not official, it is just a project created by two students of their own accord, to help them create references faster and more accurately.

# Running and building

Due to lack of maintenance the dependencies in this app are very outdated. Docker has been used as a lazy way around this as it allows older nodejs versions to be used during the build process.

To build the docker container run: `docker build -t angular-build .`

To run the docker container (which builds the Angular app) run: `docker run --name angular-build-container angular-build`

To copy out the dist folder from the container run: `docker cp angular-build-container:/usr/src/app/dist ./dist`
