import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.Git_PAT });

export async function getContributors(req, res) {
  const owner = req.query.owner || "GollaBharath";
  const repo = req.query.repo || "Gamify";
  try {
    const contributors = await octokit.request(
      `GET /repos/${owner}/${repo}/contributors`,
      {
        owner,
        repo,
        headers: { "X-GitHub-Api-Version": "2022-11-28" },
      }
    );
    const contributorsList = contributors.data.map((x) => x.full_name);
    res.json({
      owner: owner,
      repo: repo,
      all_contributors: contributorsList,
      num_of_contributors: contributorsList.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
