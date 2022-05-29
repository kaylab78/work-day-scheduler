# Work Day Scheduler

## Description
Work Day Scheduler is "a simple calendar app for scheduling your work day." It shows each hour of the day where the user can schedule their events.

When I started this project, I tried to think in small steps and focus on achieving one thing at a time. (This also helped build my confidence in achieving what I was trying to build.) In the past, I've made the mistake of trying to use JavaScript to do too much at once.

Since I knew the end product would have at least eight rows indicating the hours in a work day, I started by doing my best to complete the functionality of one row. I hardcoded the row into index.html. After much trial and error, I was able to get the content that would be user-generated to save to my localStorage and persist once the page was refreshed. That was a big win, and it's a skill that I will need to use going forward for other projects. 

For this project, I was provided with starter code, and I enjoyed trying to figure out where the styling provided in the CSS file would need to go in the HTML file and what would need to be dynamically added in the JavaScript file. Thankfully, the styles were intuitively named. I had no trouble with this task.

I did meet with my tutor while I was working on this project, and she helped me outline this project so that it would be clean and succinct. After we worked through building the remaining functions, I was able to go back and create the remaining rows. I also made them functional.

## Installation
In order to access this repository, clone it from [GitHub](https://github.com/kaylab78/work-day-scheduler) using the command "git clone git@github.com:kaylab78/work-day-scheduler.git" in the command line interface.

## Usage
To view the deployed website, [click here](https://kaylab78.github.io/work-day-scheduler/).

When the user loads the Work Day Scheduler, the current date and time display at the top. The page is split into rows based on the hour listed to the left. There is a corresponding save button to the right.

The user can click in the textbox at each hour of their work day and type information about their event, meeting, appointment, etc. 

When the user clicks the save button, the information in the corresponding text box is saved to their local storage. If the website is refreshed, the information in that textbox displays, unless edited and saved.

The rows on the webpage are color-coded. A gray row indicates that the corresponding hour is in the past. A red row indicates that the current time is within that corresponding hour. A green row indicates that the corresponding hour is in the future.

## Credits
The [original starter code](https://github.com/coding-boot-camp/super-disco) for this project was cloned from Xandromus.

Thank you to Meg Meyers, boot camp tutor, for helping to put me on the right path to work out each function in this project.

The wording for the license on this project is from the MIT License outlined [here](https://choosealicense.com/licenses/mit/).

## License
Copyright (c) 2022 Kayla Backus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.