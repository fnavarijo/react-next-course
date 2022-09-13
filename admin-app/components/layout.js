function Layout({ children }) {
  return (
    <>
      <nav style={{ backgroundColor: '#EFC88B' }}>
        <span>Inicio</span>
        <span>Contacto</span>
        <span>Admin</span>
      </nav>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;
