import { Route, Routes } from "react-router-dom"
import AuthComponent from "./pages/auth"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>home</>}/>
      <Route path="/auth" element={<AuthComponent/>}/>
      <Route path="/about" element={<>about</>}/>

       
  </Routes>
  )
}

export default App