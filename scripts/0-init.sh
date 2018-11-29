#!/bin/bash

bold=$(tput bold)
normal=$(tput sgr0)
red='\033[0;31m'
purple='\033[1;35m'
nc='\033[0m'

function show_usage()
{
    echo "Usage: 0-init.sh <SCOPE_NAME> <LIB_NAME> [PREFIX]"
    exit 1
}

jq_not_installed()
{
    echo -e ${red}"\"jq\" command not available"${nc}
    echo ""
    echo "To install it, run:"
    echo -e "On Debian/Ubuntu based systems: ${purple}sudo apt install jq${nc}"
    echo -e "On RedHat/Fedora based systems: ${purple}sudo dnf install jq${nc}"
    exit 1
}

if ! [[ -x "$(command -v jq)" ]]; then
  jq_not_installed
fi

if [[ -z "$1" ]] || [[ -z "$2" ]]; then
    show_usage
fi

SCOPE_NAME=$1
LIBRARY_NAME=$2
echo "Initializing project $SCOPE_NAME with library $LIBRARY_NAME"

PREFIX=""
if [[ ! -z "$3" ]]; then
    PREFIX="--prefix=$3"
fi

ng new ${SCOPE_NAME} --directory=. --skip-git

echo "****************************"
echo "Project $SCOPE_NAME: CREATED"
echo "****************************"

ng g library ${LIBRARY_NAME} ${PREFIX}

echo "****************************"
echo "Library $LIBRARY_NAME: CREATED"
echo "****************************"

npm i -D @compodoc/compodoc standard-version

echo "****************************"
echo "Dependencies: INSTALLED"
echo "****************************"

cp -u package.json package-orig.json

SCRIPT_COMPODOC="./node_modules/.bin/compodoc --disablePrivate --output ./docs -p projects/$LIBRARY_NAME/tsconfig.lib.json"
SCRIPT_RELEASE="standard-version -a"
SCRIPT_POSTBUMP="PACKAGE_VERSION=\$(jq -r '.version' package.json) && npm --prefix projects/$LIBRARY_NAME version \$PACKAGE_VERSION"
SCRIPT_POSTCHANGELOG="cp README.md projects/$LIBRARY_NAME/ && npm run compodoc && git add -A"

FILTERS="{name, version, scripts: (.scripts + {compodoc: \$compodoc} + {release: \$release}), \"standard-version\": {scripts: {postbump: \$postbump, postchangelog: \$postchangelog}}, private, dependencies, devDependencies}"


jq --arg compodoc "$SCRIPT_COMPODOC" --arg release "$SCRIPT_RELEASE" --arg postbump "$SCRIPT_POSTBUMP" --arg postchangelog "$SCRIPT_POSTCHANGELOG" "$FILTERS" package-orig.json > package.json

echo "****************************"
echo "package.json: UPDATED "
echo "****************************"


LIBPATH="projects/${LIBRARY_NAME}"
cp -u ${LIBPATH}/package.json ${LIBPATH}/package-orig.json

PACKAGE="@$SCOPE_NAME/$LIBRARY_NAME"
HOMEPAGE="https://$SCOPE_NAME.github.io/$LIBRARY_NAME/"
REPO="https://github.com/$SCOPE_NAME/$LIBRARY_NAME.git"

LIBFILTERS="{name: \$pkg, version, keywords: [\"angular\"], license: \"MIT\", homepage: \$page, repository: {type: \"git\", url: \$repo}, peerDependencies}"
jq --arg pkg "$PACKAGE" --arg page "$HOMEPAGE" --arg repo "$REPO" "$LIBFILTERS" ${LIBPATH}/package-orig.json > ${LIBPATH}/package.json

echo "****************************"
echo "package.json (lib): UPDATED"
echo "****************************"

echo "# IDEs" > .gitignore
echo ".idea" >> .gitignore
echo "*.iml" >> .gitignore
echo "*.classpath" >> .gitignore
echo "*.project" >> .gitignore
echo "*.launch" >> .gitignore
echo ".vscode/*" >> .gitignore
echo "!.vscode/settings.json" >> .gitignore
echo "!.vscode/tasks.json" >> .gitignore
echo "!.vscode/launch.json" >> .gitignore
echo "!.vscode/extensions.json" >> .gitignore
echo "" >> .gitignore
echo "# Generated artifacts" >> .gitignore
echo "node_modules" >> .gitignore
echo "dist" >> .gitignore
echo "" >> .gitignore
echo "# Working files" >> .gitignore
echo "package-orig.json" >> .gitignore
echo "$LIBPATH/README.md" >> .gitignore
echo "*.tmp" >> .gitignore
echo "*.log" >> .gitignore
echo "*.bak" >> .gitignore
echo ".attach_pid*" >> .gitignore


echo "****************************"
echo ".gitignore: GENERATED"
echo "****************************"

echo "[![npm version](https://img.shields.io/npm/v/@$SCOPE_NAME/$LIBRARY_NAME.svg)](https://www.npmjs.com/package/$PACKAGE)" > README.md
echo "[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://$SCOPE_NAME.github.io/$LIBRARY_NAME/blob/master/LICENSE)" >> README.md
echo "" >> README.md
echo "# TODO:$LIBRARY_NAME" >> README.md
echo "" >> README.md
echo "TODO:Description" >> README.md
echo "" >> README.md
echo "## Getting started" >> README.md
echo "### Prerequisities" >> README.md
echo "An existing Angular application. [Angular CLI](https://cli.angular.io/) can be used to create one." >> README.md
echo "" >> README.md
echo "### Installing" >> README.md
echo "\`\`\`" >> README.md
echo "npm i -s @$SCOPE_NAME/$LIBRARY_NAME" >> README.md
echo "\`\`\`" >> README.md
echo "" >> README.md
echo "### How to use" >> README.md
echo "\`\`\`typescript" >> README.md
echo "TODO:Example usage" >> README.md
echo "\`\`\`" >> README.md
echo "" >> README.md
echo "## Versioning" >> README.md
echo "This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on its repository](https://github.com/$SCOPE_NAME/$LIBRARY_NAME/tags)." >> README.md
echo "" >> README.md
echo "## License" >> README.md
echo "This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details." >> README.md
echo "" >> README.md
echo "## See also" >> README.md
echo "[Project home page]($HOMEPAGE)<br>" >> README.md
echo "[Reference documentation](http://semver.org/)<br>" >> README.md
echo "[NPM package](https://www.npmjs.com/package/$PACKAGE)<br>" >> README.md

echo "****************************"
echo "README.md: GENERATED"
echo "****************************"



