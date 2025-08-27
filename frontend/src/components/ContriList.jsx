import { useEffect, useState } from "react";

export default function ContriList({ owner, repo }) {
  const [contributors, setContributors] = useState({
    all_contributors: [],
    num_of_contributors: 0,
  });

  useEffect(() => {
    async function getContributors() {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/contributors?owner=${owner}&repo=${repo}`
      );
      const data = await response.json();
      setContributors(data);
    }
    getContributors();
  }, [owner, repo]);

  return (
    <div className="forks-box">
      <div className="repo-title">
        Contributors of {owner}/{repo} :
      </div>
      <div className="forks-count">{contributors.num_of_contributors}</div>
      <ul className="forks-list">
        {contributors.all_contributors.map((contributor, key) => (
          <a href={`https://github.com/${contributor}`} key={key}>
            <li>{contributor}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
