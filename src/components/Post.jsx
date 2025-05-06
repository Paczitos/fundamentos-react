import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/paczitos.png'></img>
                    <div className={styles.authorInfo}>
                        <strong>Artur Amaral</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='06 de Maio às 14:44' dateTime='2025-05-06 14:43:00'> Publicado à 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href=''>jane.design/doctorcare</a></p>
                <p> <a href=''>#novoprojeto</a>
                    <a href=''> #nlw</a>
                    <a href=''>#rocketseat</a></p>
            </div>
        </article>
    );

}