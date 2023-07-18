import { data } from "../../../utils/data"
import { ProyectsCard } from "./ProyectsCard"

const randomIndex = Math.floor(Math.random()*3)
console.log(randomIndex)
export const ProyectsCardContainer = () => {
  return (
    data.map((item,index) => ( 
      <ProyectsCard key={item.title} data={item} index={index}/>
    ))
  )
}


