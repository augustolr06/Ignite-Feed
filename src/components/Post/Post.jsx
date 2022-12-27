import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header className={styles.header}>

                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/augustolr06.png" />
                    <div className={styles.authorInfo}>
                        <strong>Augusto Lázaro</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>
                
                <time title='26 de Dezembro de 2022 às 17:00h' dateTime='2022-12-26 17:00:02'>Publicado há 1h</time>

            </header>
            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a> </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

    </article>
    )
}


