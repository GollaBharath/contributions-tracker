import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.Git_PAT });

export async function getForks(req, res) {
  const owner = req.query.owner || "GollaBharath";
  const repo = req.query.repo || "Gamify";
  try {
    const forks = await octokit.request(`GET /repos/${owner}/${repo}/forks`, {
      owner,
      repo,
      headers: { "X-GitHub-Api-Version": "2022-11-28" },
    });
    const forksList = forks.data.map((fork) => fork.full_name);
    res.json({
      owner: owner,
      repo: repo,
      all_forks: forksList,
      num_of_forks: forksList.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
