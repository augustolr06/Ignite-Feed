import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import './global.css'
import styles from './App.module.css'
import { useEffect, useState } from "react"

/* 
const posts = [
  {
      id: 1,
      author: {
          avatar_url: 'https://github.com/augustolr06.png',
          name: 'Augusto Lázaro',
          role: 'Front-end Developer'
      },
      publishedAt: new Date('2022-12-26 16:27:00'),
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 #novoprojeto #nlw #rocketseat'}
        
      ]
  },
  {
    id: 2,
    author: {
        avatar_url: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Davi Ferreira',
        role: 'UX Designer'
    },
    publishedAt: new Date('2022-12-28 11:07:50'),
    content: [
      {type: 'paragraph', content: 'Bom dia! '},
      {type: 'paragraph', content: 'Bora iniciar mais um design!'},
      {type: 'link', content: '👉 #K-Shop #novoprojeto'}
      
    ]
  }
]
 */




export function App() {

  const [posts, setPosts] = useState([]);
  let fetchInit = false; // Isso resolve o problema do useEffect executando o fetch 2 vezes e duplicando o array de posts (a técnica de usar o array de dependencia do useEffect vazio não resolveu).

  useEffect( () => {
    if(fetchInit === false){
      fetchInit = true;
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => {
        data.map(item => {
          setPosts(prevState => [...prevState, item]);
        })
      })
      .catch(e => console.log(e))
    }
    }, []);


  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {
            posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  publishedAt={new Date(post.publishedAt)}
                  content={post.content}
                />
              )
            }
          )
          }

        </main>
      </div>

    </div>

  )

}








