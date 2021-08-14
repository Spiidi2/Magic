const Header = ({ title, onChange }) => {
         return (
          <header className= 'header'>
               <h1>{title}</h1>     
          </header> 
     )
}

Header.defaultProps = {
     title: 'Magig And Gathering',
}

export default Header