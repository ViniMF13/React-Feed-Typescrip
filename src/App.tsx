import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "vinicius F",
      role: 'System Enginer',
    },
    content: [
      {type: 'paragraph', content: 'fala galeraa', },
      {type: 'paragraph', content: 'Estou contratando devs para o meu novo Negócio!!! Link para se candidatar abaixo.', },
      {type: 'link', content: 'blackMarketCompany', },
    ],
    publishedAt: new Date('2023-04-22 20:54:34'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/sammuelReis.png",
      name: "Sammu El",
      role: 'Systems Analist',
    },
    content: [
      {type: 'paragraph', content: 'fala galeraa', },
      {type: 'paragraph', content: 'Estou contratando devs para o meu novo Negócio!!! Link para se candidatar abaixo.', },
      {type: 'link', content: 'blackMarketCompany', },
    ],
    publishedAt: new Date('2023-04-21 22:14:59'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
                <Post
                  key={post.publishedAt}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
               />     
            )
          })}
        </main>
      
      </div>
    
    </div>
  )
}

export default App
