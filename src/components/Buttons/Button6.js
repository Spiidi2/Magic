function checkInput3() {
    var link = document.getElementById('link6').value;
    window.find(link);
    window.find(link);
    window.find(link);
}

const Button6 = () => {
    return (
      <div className="Search">
    
        <input type="text" className = 'hyperlink' id='link6'  value = '6. Spells, Abilities, and Effects' disabled  />
        <input type="button" className='btn2' id= "open_link" onClick={checkInput3} value="Go"/>

      </div>
    );
  };

export default Button6