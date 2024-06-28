import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Index from './index.tsx'
import * as Separator from '@radix-ui/react-separator';
import SelectDemo from './components/selection.tsx' 
import Formulario from './components/form.tsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
    <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
    <SelectDemo/>
    <Formulario/>
  </React.StrictMode>,
)
