import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './jsxadd/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Ansuman"/>
      <Card username='Siku' post='Staff Engineer'/>
      <Card username='Siku' post='Staff Engineer' link='https://headsupfortails.com/cdn/shop/articles/111_best_cat_names_cat_bathing__cover_image_copy_2_x630.jpg?v=1728024624'/>
      <Card />
    </>
  )
}
export default App
