import React from "react"

import {PencilLine} from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"

import styles from './Sidebar.module.css'


export function Sidebar(){
    return(
        <div>
            <aside className={styles.sidebar}>

                <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60" />
                <div className={styles.profile}>
                    <Avatar src="https://github.com/augustolr06.png" />
                    <strong className={styles.name}>Augusto Lázaro</strong>
                    <span className={styles.role}>Front-end Developer</span>
                </div>
                <footer>
                    <button>
                        <PencilLine size={20}/>
                        Edite seu perfil
                    </button>
                </footer>

            </aside>
        </div>
    )
}





