---
icon: edit
date: 2022-01-09
category:
  - Development
tag:
  - test1
  - test1
  - test1
---

# Conventional commits by Rodolfo

## **Conventional Commits & Standard Version 💾**

Here you can find the steps to install dependencies as well the process to do a release from the repository.

### **Commitizen**

*this is the package that allows to have [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) messages like the following* **fix(header): Logout pop up not displaying.**

1. Install the following npm package globally on your computer. *[docs](https://github.com/commitizen/cz-cli)*
    
    ```
    npm install -g commitizen
    ```
    
2. Install dependencies on your local repository by running.
    
    ```
    npm i or yarn install
    ```
    
3. Test you first commit message by running  on your terminal, this should display a user interface with all the options
    
    ```
    git cz
    ```
    

****Standard Version****

*This package creates an automated*

**changelog.md**

*file, and bumps up the version of*

**package.json.**

*[demo](https://www.youtube.com/watch?v=q3qE2nJRuYM&t=3s&ab_channel=JulieNg)as well this package is based on [semantic versioning](https://semver.org/)*

1. Install dependencies on your local repository by running. [docs](https://github.com/conventional-changelog/standard-version)

`npm i or yarn install`
2. Create changelog, and bump up version by running: 

`npm run standard-version` or if you have a custom script you can run it. e.gThis command created a new file or updated the previous one with all the commits (fix, feat), bumps up package.json version and creates and automatic commit like this **chore(release): 1.0.0**