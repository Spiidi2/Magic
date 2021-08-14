function checkInput3() {
    var link = document.getElementById('link8').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button8 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link8'  value = '8. Multiplayer Rules' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button8