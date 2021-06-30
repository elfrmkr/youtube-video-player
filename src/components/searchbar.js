import React from 'react';

class SearchBar extends React.Component{

 state = {term: ''};
  
 onInputChange = event => {
    this.setState({term: event.target.value});
};
onFormSubmit = event => {
    event.preventDefault(); // do not refresh when press enter
    //make sure callback from component
    this.props.onFormSubmit(this.state.term) // our parent is called the value of the term
};
render(){
    return(
    <div className = "search-bar ui segment">
        <form onSubmit = {this.onFormSubmit} className = "ui-form">
            <div className = "field">
                <label>Video Search {' '}</label>
                <input 
                type = "text"
                value = {this.state.term}
                onChange = {this.onInputChange}/>
            </div>
        </form>
    </div>)
}
};

export default SearchBar;