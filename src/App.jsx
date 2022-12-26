import { Header } from "./components/Header/Header"
import { Post } from "./Post"

import './global.css'


export function App() {

  return (

    <div>
      <Header />

      <Post 
        author="Augusto Lázaro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum. Incidunt voluptates ex error, illo soluta harum laudantium magni minima voluptatem quas quam! Voluptas magni enim ad distinctio est! Quas?"
      />

      <Post
        author="Aline Ferreira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta voluptas esse, libero maxime aliquid aut magnam ullam vitae repellat eaque distinctio perferendis illo dolorem ad, dignissimos unde tenetur maiores?"
      />
    </div>

  )

}







