import axios from 'axios'

export const obtenerInformacionRepositorio = async (usuario, repositorio) => {
  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}`
    const respuesta = await axios.get(url)
    return respuesta.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const obtenerCommits = async (usuario, repositorio, rama = '') => {
  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}/commits${
      rama ? `?sha=${rama}` : ''
    }`
    const respuesta = await axios.get(url)
    return respuesta.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const obtenerIssues = async (usuario, repositorio, rama = '') => {
  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}/issues?state=open`
    const respuesta = await axios.get(url)
    return respuesta.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const obtenerColaboradores = async (usuario, repositorio, rama = '') => {
  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}/contributors`
    const respuesta = await axios.get(url)
    return respuesta.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const obtenerReleases = async (usuario, repositorio, rama = '') => {
  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}/releases`
    const respuesta = await axios.get(url)
    return respuesta.data
  } catch (error) {
    console.error(error)
    return null
  }
}

