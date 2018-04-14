import * as types from './mutation-types'

const errorHandler = commit => (err) => {  // eslint-disable-line
  commit(types.UPDATE_LOADING, false)
  console.log(err) // eslint-disable-line no-console
  throw err
}

const actions = {
  updateLoading ({commit}, isLoading) {
    commit(types.UPDATE_LOADING, isLoading)
  }
}

export default actions
