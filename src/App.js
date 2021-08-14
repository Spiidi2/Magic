import Header from './components/Header'
import Button from './components/Buttons/Button'
import Button2 from './components/Buttons/Button2'
import Button3 from './components/Buttons/Button3'
import Button4 from './components/Buttons/Button4'
import Button5 from './components/Buttons/Button5'
import Button6 from './components/Buttons/Button6'
import Button7 from './components/Buttons/Button7'
import Button8 from './components/Buttons/Button8'
import Button9 from './components/Buttons/Button9'
import Content from './components/Content'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className= 'container'>
      <Header />
      <Button />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <SearchBar />
      <p>
      <Content />
      </p>
    </div>
  ) 
}
export default App