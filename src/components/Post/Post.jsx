
import { format, formatDistanceToNow } from 'date-fns'

import { ptBR } from 'date-fns/locale'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }){

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header className={styles.header}>

                <div className={styles.author}>
                    <Avatar src={author.avatar_url} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time 
                title={publishedDateFormated} 
                dateTime={publishedAt.toISOString()} >
                    {"Publicado " + publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph'){
                            return <p>{line.content}</p>
                        } 
                        else if (line.type === 'link') {
                        return <p> <a href=""> {line.content} </a> </p>
                    }
                    })
                }
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
            </div>

    </article>
    )
}


