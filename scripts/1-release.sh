#!/bin/bash

bold=$(tput bold)
normal=$(tput sgr0)
purple='\033[0;35m'
nc='\033[0m'

show_usage()
{
    echo ""
    echo "1-release.sh: A script to tag the VCS and updates the CHANGELOG.md"
    echo ""
    echo "${bold}Usage:${normal}"
    echo "1-release.sh [init | patch | minor | major] [alpha | beta | rc]"
    echo ""
    echo "${bold}Examples:${normal}"
    echo -e "${purple}1-release.sh init${nc}            (Generates the first version tag)"
    echo -e "${purple}1-release.sh minor${nc}           (1.0.0 -> 1.1.0)"
    echo -e "${purple}1-release.sh minor alpha${nc}     (1.0.0 -> 1.1.0-alpha.0)"
    exit 1
}

if [[ "$1" == "init" ]]; then
  npm run release -- --first-release
  exit 0
elif [[ "$1" == "patch" ]] || [[ "$1" == "minor" ]] || [[ "$1" == "major" ]]; then

  PREFIX="--release-as $1"

  if ! [[ -z "$2" ]]; then
    if  [[ "$2" == "alpha" ]] || [[ "$2" == "beta" ]] || [[ "$2" == "rc" ]]; then
      PREFIX="$PREFIX --prerelease $2"
    else
      show_usage
    fi
  fi
  npm run release -- ${PREFIX}
  echo "$PREFIX"
  exit 0

else
  show_usage
fi

