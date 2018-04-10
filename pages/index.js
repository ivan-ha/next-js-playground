import Link from 'next/link'

const linkStyles = {
  fontSize: 20,
}

const Index = () => (
  <div>
    <Link href="/about">
      <a style={linkStyles}>About Page</a>
    </Link>
    <Link href="/about">
      <button>Just another link to About Page</button>
    </Link>
    <p>Welcome to next.js</p>
  </div>
)

export default Index
