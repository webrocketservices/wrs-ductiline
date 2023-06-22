import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <ToolBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proposals" element={<ProposalsPage />} />
          <Route path="/proposals/:proposalId" element={<ProposalPage />} />
        </Routes>

        <Footer />
    </>
  )
}

export default App
