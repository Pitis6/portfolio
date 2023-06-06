import { data } from "../../../utils/data"
import { ProyectsCard } from "./ProyectsCard"



export const ProyectsCardContainer = () => {
  return (
    data.map((item,index) => ( 
      <ProyectsCard key={item.title} data={item} index={index}/>
    ))
  )
}


