import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout'
import PostLink from '../components/postLink'
import { blogList } from '../constants/blogList'

const Index = props => (
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

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink id={show.id} key={show.id} title={show.name} />
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return {
    shows: data,
  }
}

export default Index
