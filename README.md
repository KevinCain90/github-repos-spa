# Github search app

**Framework:**

- React.js

**Packages used:**

- Axios (to fetch the data required to display to the user)
- Tailwind (to style my UI)
- React-modal (to display the readme information)
- React-Markdown (to get the readme data in a more readable format)
- React-icons (to indicate what information the user was seeing)

**Running the app**

To run this project you will need to download it onto your local machine and install all dependencies.

Navigate inside the directory and install all dependencies by entering the following command on your terminal window:

`npm install`

Once completed, run:

`npm start`

**Usage**

Enter a search term into the search bar and see the results that appear below in a grid format.
Each card in the grid will contain information on an individaul repo associated to the search term including:

- Name of repo
- Author
- Link to the repository (opens in new window)
- A state derived 'view more details' toggle that when clicked displays forks, likes, stars and open issues
- A link within view more details to the readme of the repo, rendered inside a modal

**Screenshots**
![image](https://github.com/KevinCain90/github-repos-spa/assets/47657841/1484f871-2008-40d3-8a5a-79f014792063)

<img width="1715" alt="image" src="https://github.com/KevinCain90/github-repos-spa/assets/47657841/4590e5d9-d085-4c58-aa50-5ef396b1bd8b">

<img width="1705" alt="image" src="https://github.com/KevinCain90/github-repos-spa/assets/47657841/ef9188a1-fc3d-4d60-a543-d07e9bbd346d">

**What I would do better with more time**

- Add tests for the search, filtering and displaying of the information journey
- Focus on refining the mobile view of the site
- Add typescript for better type safety and error checking
- Add better error handling for api errors and api timeouts
- Format the readme information better and potentially not use a package for this
- Add pagination to display a certain number of results at a time

**Implementation thoughts & struggles**

My main struggle here was getting the filtering to work, this was mainly down to not wanting to go over the time set for the technical test, but also how the search param and sorting params could be concatinated and passed into the getRepos service.

I also found it challenging getting the readme information and displaying it without impacting the overall UI, which is why i opted for a modal so that it would not impact what the user sees on the search screen.

I chose axios over fetch purely because it performs automatic json data transformation and thought this would save me some time over the course of the challenge.
For smaller projects like this, I would normally go with fetch over axios.

I chose tailwind because I find it quciker to write and maintain my code. I also like how I know exactly what classes refer to what inside my code.
