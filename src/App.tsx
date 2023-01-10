import React from "react"
import { useEffect, useState } from "react"


import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import { PostsProps } from "./components/Post/Post"

import './global.css'
import styles from './App.module.css'

export function App() {

  const [posts, setPosts] = useState<PostsProps[]>([]);
  let fetchInit = false; // Isso resolve o problema do useEffect executando o fetch 2 vezes e duplicando o array de posts (a técnica de usar o array de dependencia do useEffect vazio não resolveu).

  useEffect( () => {
    if(fetchInit === false && posts.length===0){ 
      fetchInit = true;
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => {
        data.map((item: PostsProps) => {
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
                  key={post.id}
                  id={post.id}
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








