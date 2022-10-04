import Nav from "./Nav"

const Layout = ({children}) => {
  return (
    <div className="mx-10">
      <Nav/>
      {children}
    </div>
  )
}

export default Layout