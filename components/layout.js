import Header from './header'

const commonStyles = {
  margin: 20,
  padding: 20,
  border: '1ps solid #ddd',
}

const Layout = props => (
  <div style={commonStyles}>
    <Header />
    {props.children}
  </div>
)

export default Layout
