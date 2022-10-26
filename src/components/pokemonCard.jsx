import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getAllPokemon } from "../redux/actions/actions"
import Card from "./Card"
  
function PokemonCard(props){
    const estado = useSelector((state=>state.pokemons))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllPokemon())
    },[])
     return(
        <div>
       
        {estado.pokemons?.map(pokemon=>{
            return(
                <Card
                key={pokemon.id}
                name={pokemon.name}
                url={pokemon.url}
                />
            )
        })}
    
    </div>
     )
}
export default PokemonCard