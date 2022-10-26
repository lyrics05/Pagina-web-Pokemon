
export const GET__ALL__POKEMONS="GET__ALL__POKEMONS";
export const GET__POKEMON__DETAIL="GET__POKEMON__DETAIL";
export const CREATE__POKEMON="CREATE__POKEMON";
export const DELETE__POKEMON= "DELETE__POKEMON";


export const getAllPokemon=()=>{
   return function(dispatch){
       fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => dispatch({type:GET__ALL__POKEMONS,payload:data.results}))
   }
}
