import {ThumbsUp, Trash} from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"

import styles from './Comment.module.css'

export function Comment({content}){
    return(

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/augustolr06.png" />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Augusto Lázaro</strong>
                            <time title='27 de Dezembro de 2022 às 10:14h' dateTime='2022-12-26 17:00:02'>Cerca de 2h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <button className={styles.applaud}>
                    <ThumbsUp size={20} />Aplaudir • 02
                    </button>
            </div>
        </div>
    )
}