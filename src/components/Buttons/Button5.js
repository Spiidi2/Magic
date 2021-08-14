function checkInput3() {
    var link = document.getElementById('link5').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button5 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link5'  value = '5. Turn Structure' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button5