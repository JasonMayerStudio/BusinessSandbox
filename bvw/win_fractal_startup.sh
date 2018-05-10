#!/bin/sh

# Place me inside the root folder of the business-view-frontend local repo and run me with ./win_fractal_startup.sh

yarn run lib:sync

cd docs

fractal start --sync &
