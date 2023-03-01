/* eslint-disable @typescript-eslint/no-explicit-any */
// Utility for show github repository issues [open, closed, all] may it be public or private [need auth token with repo permission from github].

// uncomment this piece of code when working with private repositories:
// import dotenv from 'dotenv';
// dotenv.config();
// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// getIssuesFromRepo(repoName, 'open', GITHUB_TOKEN)

const { existsSync, readFileSync } = require("node:fs");
const { join } = require("node:path");
const https = require("node:https");

const repoName = getCurrentProjectGithubRepo();
getIssuesFromRepo(repoName, "open").then((data) => console.table(data)).catch((e) => console.log(`error: ${e.message}`));

/* ########################################################################## */

function getCurrentProjectGithubRepo() {
  const packageJsonPath = join("package.json");
  if (!existsSync(packageJsonPath)) {
    console.log("error: package json was not found in parent directory!");
    return "";
  }

  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
  const repoName = packageJson?.repository?.url
    ?.replace("https://github.com/", "")
    ?.replace(".git", "");
  return repoName;
}

async function getJsonFromRequest(url, githubToken) {
  const requestUrl = new URL(url);

  const headers = !githubToken
    ? { "User-Agent": "ts-dyn-markdown" }
    : {
        "User-Agent": "ts-dyn-markdown",
        Authorization: `Bearer ${githubToken}`,
      };

  const options = {
    hostname: requestUrl.hostname,
    path: requestUrl.pathname + requestUrl.search,
    method: "GET",
    timeout: 3000,
    headers,
  };

  return new Promise((resolve, reject) => {
    https
      .get(options, function (res) {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          const finalResult = JSON.parse(body);
          resolve(finalResult);
        });
      })
      .on("error", function (e) {
        console.log("Got an error: ", e);
        reject(false);
      });
  });
}

async function getIssuesFromRepo( repoName, state = "all", token ) {
  console.log(`getting issues list from repo: [https://api.github.com/repos/${repoName}/issues]`);

  if (repoName === "username/repository" || repoName === "") {
    throw new Error(
      "specify a repository property at package.json in order to get issues list!"
    );
  }

  const githubIssuesLink = `https://api.github.com/repos/${repoName}/issues?state=${state}`;
  const openIssues = await getJsonFromRequest(githubIssuesLink, token);

  if (openIssues?.message) {
    if (openIssues.message === "Not Found") {
      throw new Error(
        "repository was not found, if it is a prive repository, specify the GITHUB token in order to list issues"
      );
    }
    throw new Error(openIssues.message);
  }

  const parsedResults = [...openIssues]
    .map((item) => ({
      number: item.number,
      issue: item.title,
      creator: item.user.login,
      state: item.state,
      labels: item.labels.map((item) => item.name).join(", "),
      assignees: item.assignees.map((item) => item.login).join(", "),
    }))
    .reverse();

  const tableResults = parsedResults.reduce((a, v) => {
    const finalArr = {
      issue: v.issue,
      labels: v.labels,
    };
    return { ...a, [v.number]: { ...finalArr } };
  }, {});

  return tableResults;
}
