import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.Git_PAT });

export async function getStars(req, res) {
  const owner = req.query.owner || "GollaBharath";
  const repo = req.query.repo || "Gamify";
  try {
    const repoData = await octokit.request(`GET /repos/${owner}/${repo}`, {
      owner,
      repo,
      headers: { "X-GitHub-Api-Version": "2022-11-28" },
    });
    // Fetch stargazers list
    const stargazers = await octokit.request(
      `GET /repos/${owner}/${repo}/stargazers`,
      {
        owner,
        repo,
        headers: { "X-GitHub-Api-Version": "2022-11-28" },
      }
    );
    const stargazersList = stargazers.data.map((x) => x.login);
    res.json({
      owner: owner,
      repo: repo,
      num_of_stars: repoData.data.stargazers_count,
      all_stargazers: stargazersList,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
