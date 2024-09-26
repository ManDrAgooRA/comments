import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"

const MainContainer = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainContainer