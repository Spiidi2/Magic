function checkInput3() {
    var link = document.getElementById('link9').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button9 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link9'  value = '9. Casual Variants' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button9