import { useEffect, useState } from "react";

export default function StarsBlock({ owner, repo }) {
  const [stars, setStars] = useState({ num_of_stars: 0, all_stargazers: [] });

  useEffect(() => {
    async function getStars() {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/stars?owner=${owner}&repo=${repo}`
      );
      const data = await response.json();
      setStars(data);
    }
    getStars();
  }, [owner, repo]);

  return (
    <div className="forks-box">
      <div className="repo-title">
        Stars of {owner}/{repo} :
      </div>
      <div className="forks-count">{stars.num_of_stars}</div>
      <ul className="forks-list">
        {stars.all_stargazers &&
          stars.all_stargazers.map((user, key) => (
            <a href={`https://github.com/${user}`} key={key}>
              <li>{user}</li>
            </a>
          ))}
      </ul>
    </div>
  );
}
