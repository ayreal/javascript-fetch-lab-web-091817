const token = "";
const postData = {
  body: "Great stuff"
};

function getIssues() {
  // debugger;
  const repo = "ayreal/javascript-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(issues) {
  console.log(issues);
  issuesList = document.getElementById("issues");
  // debugger;
  issues.forEach(issue => {
    let newElement = document.createElement("li");
    newElement.innerHTML = `${issue.title}: ${issue.body}`;
    issuesList.appendChild(newElement);
  });
}

function createIssue() {
  const repo = "ayreal/javascript-fetch-lab";
  const issue = {};
  issue.title = document.getElementById("title").value;
  issue.body = document.getElementById("body").value;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues());
}

function showResults(repo) {
  console.log(repo);
  document.getElementById("results").innerHTML = `
    <li><a href="${repo.html_url}">${repo.name}</a></li>
    `;
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
