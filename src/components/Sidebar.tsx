import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1680925723180-ff3cb559c9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""
             />

            <div className={styles.profile}>
                <Avatar src="https://github.com/diego3g.png" />

                <strong>Vini Sim</strong>
                <span>System Enginer</span>
            </div>

            <footer>
                <a href="#">Edit Profile</a>
            </footer>
        </aside>
    )
}
