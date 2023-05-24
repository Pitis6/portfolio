import { ProyectsCard } from "./ProyectsCard"

const data = [
  {
    title: 'Audio E-comerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at, ducimus magnam ullam optio qui deserunt sunt magni repellat minima! Corporis error, modi unde ad praesentium vel cupiditate aut sed!',
    videoPath: 'audiophile.gif' 
  },
  {
    title: 'Rent car E-comerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at, ducimus magnam ullam optio qui deserunt sunt magni repellat minima! Corporis error, modi unde ad praesentium vel cupiditate aut sed!',
    videoPath: 'rentCar.mp4' 
  },
  {
    title: 'To do List',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at, ducimus magnam ullam optio qui deserunt sunt magni repellat minima! Corporis error, modi unde ad praesentium vel cupiditate aut sed!',
    videoPath: 'audiophile.mp4' 
  }
]

export const ProyectsCardContainer = () => {
  return (
    data.map((item,index) => ( 
      <ProyectsCard key={item.title} data={item} index={index}/>
    ))
  )
}


