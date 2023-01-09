import React, { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Triangle } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

interface Author {
    avatar_url: string,
    name: string,
    role: string,
}

interface PostLine{
    type: "paragraph" | "link",
    content: string,
}

export interface PostsProps{
    id: number,
    author: Author,
    publishedAt: Date,
    content: PostLine[],
}

export function Post({ author, publishedAt, content }: PostsProps){

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState<string[]>([]);

    const [newCommentText, setNewCommentText] = useState<string>('');

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        
        setComments(prevState => [...prevState, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent< HTMLTextAreaElement >){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter( comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent< HTMLTextAreaElement >){
        event.target.setCustomValidity('Esse campo deve ser preenchido.')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                        return <p className={styles.links}> <a href="">{line.content}</a> </p> // a className styles.link serve para aplicar o estilo display: inline, fazendo com que cada hashtag possa ficar em um link separado e continuar todas na mesma linha.
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
                required
                onInvalid={handleNewCommentInvalid}
                placeholder='Deixe um comentário' 
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
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


