function checkInput() {
    var query = document.getElementById('search').value;
    window.find(query);
    return true;
}

const SearchBar = ({onChange, placeholder}) => {
    return (
      <div className="Search">
    
        <input type="text" className = 'submit' id='search'onChange={onChange} placeholder={placeholder}/>
        <input type="button" className='btn3' id="submit_form" onClick={checkInput} value="Search"/>

      </div>
    );
  };

export default SearchBar