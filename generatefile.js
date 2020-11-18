function generatefile (response) {
    return `
# ${response.name} ![maintained](https://img.shields.io/maintenance/${response.statusM}/${response.statusYear}) ![license](https://img.shields.io/badge/license-${response.license}-blue)
### Description
    ${response.description}
## Table of contents
* [Description](#Description)
${response.version ?
    `* [Version](#Version)` : ""}
${response.deployed ?
    `* [Deployed Project](#Deployed Project)` : ""}
${response.features ?
    `* [Features](#Features)` : ""}
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test)
${response.apiRef ?
    `* [API](#API)` : ""}
${response.used ?
    `* [Technologies](#Technologies)` : ""}
${response.motivation ?
    `* [Motivation](#Motivation)` : ""}
* [Contributors](#Contributors)
* [Questions](#Questions)
* [License](#License)
${response.msg ?
    `* [Other](#Other)` : ""}
${response.version ?
    `### Version 
${response.version}` : ""}
${response.deployed ?
    `### Deployed Project
${response.deployed}` : ""}
${response.features ?
    `### Features
${response.features}` : ""}
## Installation
${response.install}
## Usage
${response.usage}
## Tests
${response.test}
${response.languages ?
    `### Languages
${response.languages}` : ""}
${response.apiRef ?
    `### API Reference
${response.apiRef}` : ""}
${response.used ?
    `### Technologies
${response.used}` : ""}
${response.motivation ?
    `### Motivation
${response.motivation}` : ""};
## Contributors
${response.comment ? `This project exists thanks to all the people who contributed.` : ""}
${response.contributor}
## Questions
Follow me on GitHub: <a href="https://github.com/${response.github}" target="_blank">![GitHub followers](https://img.shields.io/github/followers/${response.github}?label=${response.github}&style=social)</a></br>
Ask me anything: ${response.email} <a href="https://www.gmail.com" target="_blank">![open Gmail](https://img.shields.io/badge/open-Gmail-red?style=for-the-badge)</a> 
## License
${response.license} © ${response.userName} 
${response.msg ?
    `### Other
${response.msg}` : ""}`;
}

    module.exports = generatefile