import { Outlet } from "react-router-dom"

const MainContainer = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default MainContainer