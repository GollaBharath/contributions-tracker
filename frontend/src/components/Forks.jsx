import { useEffect, useState } from "react";

export default function Forks({ owner, repo }) {
  const [forks, setForks] = useState({ all_forks: [], num_of_forks: 0 });

  useEffect(() => {
    async function getForks() {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/forks?owner=${owner}&repo=${repo}`
      );
      const data = await response.json();
      setForks(data);
    }
    getForks();
  }, [owner, repo]);

  return (
    <div className="forks-box">
      <div className="repo-title">
        Forks of {owner}/{repo} :
      </div>
      <div className="forks-count">{forks.num_of_forks}</div>
      <ul className="forks-list">
        {forks.all_forks.map((fork, key) => (
          <a href={`https://github.com/${fork}`} key={key}>
            <li>{fork}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
