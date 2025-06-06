import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar} >
            <img  
            className={styles.cover}
            src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=10&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' >   
            </img>
            <div className={styles.profile}>
                <img
                className={styles.avatar}
                src='https://github.com/paczitos.png'></img>
                <strong>Artur Amaral</strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}