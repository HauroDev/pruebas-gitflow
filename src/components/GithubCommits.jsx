import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerCommits } from '../utils/RepoStatus'
import styled from './GithubCommits.module.css'

const Commit = ({ node_id, commit: { author, message } }) => {
  return (
    <div className={styled.commit} id={node_id}>
      <h3>{author?.name}</h3>
      <p>{message}</p>
      <p>{author?.date}</p>
    </div>
  )
}

const GitHubCommits = ({ user, repo, branch }) => {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    obtenerCommits(user, repo, branch).then((result) => setCommits(result))
  }, [])

  return (
    <article className={styled.commits__container}>
      {commits?.length != 0 &&
        commits?.map((commit) => <Commit key={commit?.node_id} {...commit} />)}
    </article>
  )
}

export default GitHubCommits
