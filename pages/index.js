import Layout from '../components/layout'
import PostLink from '../components/postLink'

const blogList = ['first', 'second', 'third']

const Index = () => (
  <Layout>
    <p>Welcome to next.js</p>
    <h1>A Blog</h1>
    <ul>
      {blogList.map(blog => (
        <PostLink title={`this is ${blog} blog`} key={blog} />
      ))}
    </ul>
  </Layout>
)

export default Index
