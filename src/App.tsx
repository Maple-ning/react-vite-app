// 根组件
import { StrictMode } from 'react'
import { Router, RouterBeforeEach } from "@/router";

const App = () => {
  return (
    <StrictMode>
      <Router/>
      <RouterBeforeEach />
    </StrictMode>
  )
}

export default App;