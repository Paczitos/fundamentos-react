import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Artur Amaral"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim veniam porro quia ducimus cumque soluta expedita eum corporis minus consectetur? Excepturi inventore veritatis praesentium necessitatibus fuga iusto recusandae quae assumenda."
      />
    </div>
  )
}
