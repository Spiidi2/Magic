function checkInput3() {
    var link = document.getElementById('link2').value;
    window.find(link);
    window.find(link);
    window.find(link);  
}

const Button2 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link2'  value = '2. Parts of a Card' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button2