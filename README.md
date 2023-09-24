## Pre-Reqs already installed

- Yarn
- npm

## Steps to launch

- Navigate to directory in shell of your choosing
- yarn start
- Navigate to localhost:3000 (default for npm / yarn)

## Summary

- List Page that lists all entries retrieved from the API call
  - All "inactive" locations are hidden by default, but I included a checkbox to show inactive locations. They will be highlighted in red once shown.
- Details page that lists the Name and _primary_ address of the selected item
- Validated that network calls only occur once on navigating to the page the first time. Navigating within the page does not cause further API calls.

### Library Usage

- Mainly stuck to mui for the sake of consistency and as it was recommended
- Used Axios for making the API calls required

### Project Expansions

- No notes were currently available, but adding a field for them with a submit button to update the data stored online through an API call would be a good start.
- It might be more informative to include all addresses on the details page, or at least a way to list them out, as currently there's no possibility to do so.
- I implemented for a way to show inactive sites, but better that that would be a selectable filter between all of the different fields, or even a search bar that filters as you type.

## Known issues

- Refreshing on the "Details" page after selecting an item will cause an error as the contexts are cleared within react
  - This could be resolved by storing the data in local storage or making a new api call if the contexts were found to be empty.
  - I wasn't sure how deep to go into improving / expanding on this project so leaving this discovery as is with potential solutions ready.

\-

\-

\-

### PS

Fun little project, fairly open ended and didn't run into any roadblocks trying to implement it. Appreciate the callout on the time constraint because it'd be easy enough to keep trying to find ways to improve it, but I don't feel that's the point of the assignment.

If I didn't go into enough detail within here, please let me know! I'm Hhppy to discuss any portion of this further.
