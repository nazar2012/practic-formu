import './App.css'
import { Component } from 'react'
import FilterName from './components/FilterName/FilterName'
import UserList from './components/FilterName/UserList/UserList'

class App extends Component {

  state = {
    users: [
      {
        name: "Nazar",
        phone: "+380991112233",
        email: "nazar@gmail.com"
      },
      {
        name: "Ivan",
        phone: "+380671234567",
        email: "ivan@gmail.com"
      },
      {
        name: "Olena",
        phone: "+380501112244",
        email: "olena@gmail.com"
      },
      {
        name: "Maksym",
        phone: "+380731234999",
        email: "maksym@gmail.com"
      },
    ],

    filter: ""
  }

  handleChangeInput = (evt) => {
    this.setState({filter: evt.target.value})
  }

  render() { 

    const {users, filter} = this.state
    
    const filteredUs = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
    })

    return (
      <>
        <FilterName filter={this.state.filter} onFilter={this.handleChangeInput}/>
        <UserList filtered={filteredUs}/>
      </>
    )
  }
}

export default App
