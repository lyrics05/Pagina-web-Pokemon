import { GET__ALL__POKEMONS } from "../actions/actions";

const initialState = {
    pokemons:[],
    pokemon:{}
}

const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case GET__ALL__POKEMONS:
        return{
            ...state,
            pokemons:state.pokemons.concat(action.payload)
        }
  
    default:
        return state
  }
}

export default reducer