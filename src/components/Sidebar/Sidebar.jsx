import {PencilLine} from "phosphor-react"

import styles from './Sidebar.module.css'


export function Sidebar(props){
    return(
        <div>
            <aside className={styles.sidebar}>

                <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60" />
                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/augustolr06.png" />
                    <strong className={styles.name}>Nome do usuário</strong>
                    <span className={styles.role}>Cargo do usuário</span>
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





