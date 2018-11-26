#!/bin/bash

bold=$(tput bold)
normal=$(tput sgr0)

function show_usage()
{
    echo ""
    echo "2-build.sh: A script to build the NPM library"
    echo ""
    echo "${bold}Usage:${normal}"
    echo "2-build.sh <LIB_NAME>"
    exit 1
}

if [[ -z "$1" ]]; then
    show_usage
fi

ng build "$1"
