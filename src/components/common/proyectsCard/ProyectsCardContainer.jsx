import { data } from "../../../utils/data"
import { ProyectsCard } from "./ProyectsCard"
import  random  from "../../../services/randomSet"


export const ProyectsCardContainer = () => {

const randomProyect = random()

  return randomProyect.map((item) => (
    <ProyectsCard key={data[item].title} data={data[item]} index={item} />
  ));
}


