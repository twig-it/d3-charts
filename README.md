[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# D3 Charts

Are you looking for a simple yet powerful D3 chart? If yes, you have come to the right place!

Currently, we are supporting Cartesian chart with following features:

- Column
- Area
- Line
- Points
- Multiple X Axis
- Multiple Y Axis
- Combination of charts (E.g. combine Column, Area in a multi axis chart)
- Dynamically update charts (E.g. Add new series, update series data, change color etc


## Installation

Checkout github packages for instructions.

### Download @twig-it artifacts from Github Packages
- Create an `.npmrc` file in your repo
- Add @twig-it:registry=https://npm.pkg.github.com
- Create a PAT that has read access to Github Packages. Let's call this token `GPRead`
- Set this token in npm for your CI runs. Example below:
   ```
    - name: Npm Install
        run: npm config set '//npm.pkg.github.com/:_authToken' "${GPRREAD}" && npm ci
        env:
          GPRREAD: ${{ secrets.GPREAD }}

   ```

## Demo

Checkout [Demo page!](https://twig-it.github.io/d3-charts/)

## Api Docs

Checkout [Api docs!](https://twig-it.github.io/d3-charts/types/index.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/tiwarya/"><img src="https://avatars.githubusercontent.com/u/52081890?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anand Tiwary</b></sub></a><br /><a href="#ideas-anandtiwary" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/twig-it/d3-charts/commits?author=anandtiwary" title="Code">💻</a> <a href="#tool-anandtiwary" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
