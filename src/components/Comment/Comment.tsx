import React from "react";
import { useState } from "react"

import {ThumbsUp, Trash} from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"

import styles from './Comment.module.css'


interface CommentProps{
    content: string,
    onDeleteComment: (comment: string) => void,
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [applaudCount,setApplaudCount] = useState(0);
    
    function handleDeleteComment(){
        console.log("Deletando comentário")
        onDeleteComment(content);
    }

    function handleAppaludComment(){

        setApplaudCount( (previousState) => {
            return previousState + 1;
        });
    }

    return(

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/augustolr06.png" />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Augusto Lázaro</strong>
                            <time 
                            title='27 de Dezembro de 2022 às 10:14h' 
                            dateTime='2022-12-26 17:00:02'>
                                Cerca de 2h
                            </time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment} >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <button className={styles.applaud} onClick={handleAppaludComment} >
                    <ThumbsUp size={20} />Aplaudir • {applaudCount}
                </button>
            </div>
        </div>
    )
}