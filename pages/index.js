import Layout from '../components/layout'
import PostLink from '../components/postLink'
import { blogList } from '../constants/blogList'

const Index = () => (
  <Layout>
    <p>Welcome to next.js</p>
    <h1>A Blog</h1>
    <ul>
      {blogList.map(blog => (
        <PostLink
          id={blog.id}
          key={blog.id}
          title={`this is ${blog.title} blog`}
        />
      ))}
    </ul>
  </Layout>
)

export default Index
