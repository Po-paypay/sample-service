const  { Octokit } = require("@octokit/rest");

const main = (async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });
  const data = await github.pulls.create({
    owner: process.env.REPO_OWNER,
    repo: process.env.REPO_NAME,
    head: process.env.HEAD_BRANCH,
    base: process.env.BASE_BRANCH,
    title: process.env.PR_TITLE
  });
  console.log(`PR_NUMBER=${data.number}`)
})();

