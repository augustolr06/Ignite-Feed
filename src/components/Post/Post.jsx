import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Triangle } from 'phosphor-react'
import { useState } from 'react'

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
    });

    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(){
        event.preventDefault();
        
        setComments(prevState => [...prevState, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter( comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

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
                        return <p className={styles.links}> <a href=""> {line.content} </a> </p> // a className para esse elemento serve para aplicar o estilo display: inline, fazendo com que cada hashtag possa ficar em um link separado e continuar todas na mesma linha.
                    }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name='comment'
                onChange={handleNewCommentChange}
                value={newCommentText}
                placeholder='Deixe um comentário' />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                        />
                    })
                }
            </div>

    </article>
    )
}


