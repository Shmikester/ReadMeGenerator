// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license, name) =>
{
  if (!license)
  {
    return '';
  }
  if (license === 'MIT License')
  {
    return `
  ### License Link
  [MIT License](https://choosealicense.com/licenses/mit/)
  ### License 
  MIT License
  Copyright (c) 2021 ${name}
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.\n`;
  }
  if (license === 'GNU GPLv3 License')
  {
    return `
  ### License Link
  [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
  ### License
  Copyright (C) <year>  <name of author>
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.\n`;
  }
}

//description section
const genDescription = desData =>
{
  if (!desData)
  {
    return '';
  }

  return `
  ## Description
  ${desData}\n`;
}

//install section
const genInstall = installData =>
{
  if (!installData)
  {
    return '';
  }

  return `
  ## Installation
  ${installData}\n`;
}

//usage section
const genUsage = usageData =>
{
  if (!usageData)
  {
    return '';
  }

  return `
  ## Usage
  ${usageData}\n`;
}

//test section
const genTest = testData =>
{
  if (!testData)
  {
    return '';
  }

  return `
  ## Tests
  ${testData}\n`;
}

// table of contents
const genToC = (ins, usa, lic) =>
{
  if (ins === false || usa === false || lic === false)
  {
    return '';
  }

  return `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#questions)
  * [License](#license)\n`;
}

// markdown creation
function generateMarkdown(data)
{
  return [data.title,
  `# ${data.title}
  ${genDescription(data.description)}${genToC(data.confirmInstall, data.confirmUsage, data.confirmLicense)}${genInstall(data.installation)}${genUsage(data.usage)}
  ## Credits
  ${data.name}
  ## Questions
  If you have any questions please contact me at: [${data.email}](${data.email})
  This is my GitHub: [${data.github}](https://github.com/${data.github})
  
  ${genTest(data.tests)}${renderLicenseBadge(data.license, data.name)}`]
}

module.exports = generateMarkdown;