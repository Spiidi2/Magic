function checkInput2() {
    var link = document.getElementById('link').value;
    window.find(link);
    window.find(link);
    window.find(link); 
}

const Button = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link'  value = '1. Game Concepts' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput2} value="Go"/>

      </div>
    );
  };

export default Button
