import Layout from '../components/layout'

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>Some blog content.</p>
  </div>
)

const Post = props => (
  <Layout>
    <Content {...props} />
  </Layout>
)

export default Post
