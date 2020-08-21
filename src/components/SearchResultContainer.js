import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults:[]
  };

  // When component mounts fetch users from the API
  componentDidMount() {
  this.getUsers();
  }
  // Fetch users 
  getUsers =() => {
    API.getUsers()
      .then(res => this.setState({ results: res.data.results, filteredResults: res.data.results }))
      .catch(err => console.log(err));
  };
  // Filter users by first and last name
  filterUsers =(name) => {
    let lowerName = name.toLowerCase();
     let filteredUsers = this.state.results.filter ((user)=>{
      
        return user.name.first.toLowerCase().includes(lowerName) || user.name.last.toLowerCase().includes(lowerName) 
     })
     this.setState({
       filteredResults:filteredUsers
     })
  }
  // State var with input value
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, firter the users by the search value
  handleFormSubmit = event => {
    event.preventDefault();
    this.filterUsers(this.state.search);
  };
  // Sorts the users by last name when sort btn is clicked
  handleSortByName = (event)=> {
     event.preventDefault();
     let sortedUsers = this.state.filteredResults.sort ((userOne, userTwo)=>{
     return (userOne.name.last > userTwo.name.last)? 1:-1;
     })
     this.setState({
       filteredResults:sortedUsers
     })
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleSortByName={this.handleSortByName}
        />
        <ResultList results={this.state.filteredResults} />
      </div>
    );
  }
}

export default SearchResultContainer;
