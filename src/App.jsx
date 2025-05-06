import './global.css'
import { Post } from './components/Post'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>

        <main>
          <Post
            author="Artur Amaral"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim veniam porro quia ducimus cumque soluta expedita eum corporis minus consectetur? Excepturi inventore veritatis praesentium necessitatibus fuga iusto recusandae quae assumenda."
          />
        </main>
      </div>
    </div>
  )
}
