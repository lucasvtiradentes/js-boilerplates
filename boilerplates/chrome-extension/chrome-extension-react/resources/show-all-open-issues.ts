import { existsSync, readFileSync } from 'node:fs';
import https from 'node:https';
import { join } from 'node:path';

async function getJsonFromRequest(url: string) {
  const requestUrl = new URL(url);
  const options: https.RequestOptions = {
    hostname: requestUrl.hostname,
    path: requestUrl.pathname,
    method: 'GET',
    timeout: 3000,
    headers: {
      'User-Agent': 'ts-boilermanager'
    }
  };

  return new Promise((resolve, reject) => {
    https
      .get(options, function (res) {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          const finalResult = JSON.parse(body);
          resolve(finalResult);
        });
      })
      .on('error', function (e) {
        console.log('Got an error: ', e);
        reject(false);
      });
  });
}

async function getIssuesFromRepo(repoName: string) {
  const resultsJson = (await getJsonFromRequest(`https://api.github.com/repos/${repoName}/issues`)) as any[];
  if (!resultsJson) {
    return [];
  }
  const parsedResults = resultsJson
    .filter((item: any) => item.state === 'open')
    .map((item: any) => ({ number: item.number, description: item.title }))
    .reverse();

  const tableResults = parsedResults.reduce((a: any, v: any) => {
    return { ...a, [v.number]: { issue: v.description } };
  }, {});

  return tableResults;
}

function getCurrentProjectGithubRepo() {
  const packageJsonPath = join('package.json');
  if (!existsSync(packageJsonPath)) {
    console.log('package json was not found in parent directory!');
    return;
  }

  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
  const repoName = packageJson?.repository?.url?.replace('https://github.com/', '')?.replace('.git', '');
  return repoName;
}

const repoName = getCurrentProjectGithubRepo() ?? `username/repository`;
if (repoName === 'username/repository') {
  console.log('specify a repository property at package.json in order to get issues list!');
  process.exit(1);
}

console.log(`getting issues list from repo: [${repoName}]`);
getIssuesFromRepo(repoName).then((data) => console.table(data));
