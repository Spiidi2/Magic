function checkInput4() {
    var link = document.getElementById('link4').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button4 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link4'  value = '4. Zones' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput4} value="Go"/>

      </div>
    );
  };

export default Button4