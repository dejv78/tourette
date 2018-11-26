#!/bin/bash

if [[ "$1" == "init" ]]; then
  npm login
  npm publish --access=public
else
  npm publish
fi
