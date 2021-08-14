function checkInput3() {
    var link = document.getElementById('link7').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button7 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link7'  value = '7. Additional Rules' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button7