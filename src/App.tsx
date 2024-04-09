import { DashboardPage } from "./pages/DashboardPage"
import { ToastContainer } from "react-toastify"
import { ProductProvider } from "./providers/Context"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ProductProvider>
        <DashboardPage />
        <ToastContainer autoClose={4 * 1000} />
      </ProductProvider>
    </>
  )
}

export default App
