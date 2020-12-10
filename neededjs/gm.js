function generateMarkdown(data) {
    let collabBadges
    if (data.collaborators.trim() !== "") {
      const collabs = data.collaborators.split(/[\,,;,:,\/, ,*,]/);
      collabBadges = collabs.map(ghName => {
        return `[![GitHub Link](https://img.shields.io/badge/Github-${ghName}-lightgrey.svg)](https://github.com/${ghName})<br>`
      })
    } else {
      collabBadges = "None";
    }
    return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Questions](#Questions)
  * [Collaborators](#Collaborators)
  * [Additional Information](#Additional-Information)
  ### Installation
  ${data.installGuide}
  ### Usage
  ${data.usage}
  ### Collaborators
  ${collabBadges}
  #### License
  ${data.selectedLicense}
  #### Questions?
  Alternatively, my email is: ${data.creatorEmail}
  #### Additional Information
  ${data.additInfo}`
  }
  
  module.exports = { generateMarkdown }