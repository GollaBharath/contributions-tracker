import { useEffect, useState } from "react";

export default function Forks() {
  const [forks, setForks] = useState({ all_forks: [], num_of_forks: 0 });
  const [owner, setOwner] = useState("GollaBharath");
  const [repo, setRepo] = useState("Gamify");

  useEffect(() => {
    async function getForks() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/forks`
      );
      const data = await response.json();
      setForks(data);
      if (data.all_forks.length > 0) {
        const ownerName = data.owner;
        const repoName = data.repo;
        setOwner(ownerName);
        setRepo(repoName);
      }
    }
    getForks();
  }, []);

  return (
    <div className="forks-box">
      <div className="repo-title">
        Forks of {owner}/{repo} :
      </div>
      <div className="forks-count">{forks.num_of_forks}</div>
      <ul className="forks-list">
        {forks.all_forks.map((fork, key) => (
          <a href={`https://github.com/${fork}`}>
            <li key={key}>{fork}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
