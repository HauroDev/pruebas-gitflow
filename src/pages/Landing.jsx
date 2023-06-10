import GitHubCommits from '../components/GithubCommits'
import styled from './Landing.module.css'
const Landing = () => {
  return (
    <>
      <h2>Bienvenido Internauta</h2>

      <figure>
        <img
          className={styled.land__picture}
          src='team-spirit.svg'
          alt='tres personas con espiritu de trabajo'
        />
      </figure>

      <p>
        Estas en una pagina de pruebas para practicar el desarrollo de proyectos
        en grupo, el objetivo es entender y saber como trabajar en equipo para
        realizar un proyecto a futuro con amigos o colegas
      </p>

      <section>
        <h2>info del repositorio del proyecto</h2>

        <section>
          <h3>Commits</h3>
          <GitHubCommits
            user='HauroEnojado'
            repo='pruebas-gitflow'
            branch='develop'
          />
        </section>
      </section>
    </>
  )
}

export default Landing
