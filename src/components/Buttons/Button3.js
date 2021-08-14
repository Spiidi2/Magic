function checkInput3() {
    var link = document.getElementById('link3').value;
    window.find(link);
    window.find(link);
    window.find(link); 
}

const Button3 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link3'  value = '3. Card Types' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };
  
export default Button3