import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/Foodbox/FoodBox'
import FoodForm from './components/FoodForm/FoodForm'
import Searchbar from './components/Searchbar/Searchbar'
import TodaysFood from './components/TodaysFood/TodaysFood'

class App extends Component {

  state = {
    foods: foods,
    results: [],
    render: false,
    name: "",
    calories: "",
    quantity: 0,
    image: "",
    search: "",
    todaysFood: [],
  }

  showForm = () => {
    this.setState({render : true})
  }

  handleInput = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  addRecipe = (e) => {
    e.preventDefault()
    const newFoods = [...this.state.foods]
    newFoods.unshift({
      name : this.state.name,
      calories : this.state.calories,
      image : this.state.image
    })
    this.setState({foods: newFoods, render: false})
  }

  searchFood = (e) => {
    let searchWord = e.target.value
    let results = this.state.foods.filter(food => food.name.includes(searchWord))
    this.setState({search: searchWord, results: results})
  }

  addFood = (e, index) => {
    const newFoods = [...this.state.foods]
    const todaysFood = [...this.state.todaysFood]
    todaysFood.unshift({
      name: newFoods[index].name,
      quantity: +newFoods[index].quantity,
      calories: newFoods[index].calories * +newFoods[index].quantity,
    })
    console.log(todaysFood)
    this.setState({todaysFood: todaysFood})
  }

  handleQuantity = (e,index) => {
    if(this.state.search) {
      const filtered = [...this.state.results]
      filtered[index].quantity = e.target.value
      this.setState({results : filtered})
    } else {
      const newFoods = [...this.state.foods]
      newFoods[index].quantity = e.target.value
      this.setState({foods : newFoods})
    }
    
  }

  showFoodBoxes = (array) => {
      return array.map((food, index) => {
      return <FoodBox key= {index}
      name = {food.name}
      calories = {food.calories}
      image = {food.image}
      quantity = {food.quantity}
      function = {(e) => this.handleQuantity(e,index)}
      add = {(e) => this.addFood(e, index)}
      />
      })
  }
 

  render() {
    return (
      <div className="App">

        <div className="box">
          <button className="button is-info" onClick={() => this.showForm()}>addRecipe</button>

          <div className="search-bar">
                  <Searchbar
                  function = {(e) => this.searchFood(e)}
                  search = {this.state.search}
            />
          </div>
            
          <div className="addRecipe">
                  <FoodForm
                  submit = {(e) => this.addRecipe(e)}
                  function = {(e) => this.handleInput(e)}
                  render = {this.state.render}
                  name = {this.state.name}
                  calories = {this.state.calories}
                  image = {this.state.image}
            />
          </div>
        </div>
          <div>
                <div class="column content">
                <h2 class="subtitle">Today's foods</h2>
                {this.state.todaysFood.map((food, index) => (
                  <TodaysFood
                  key={index}
                  quantity={food.quantity}
                  name={food.name}
                  calories={food.calories}
                />
                ))}
                <strong>Total amount of calories is {this.state.todaysFood.map(food => food.calories).reduce((a,b) => (
                  a + b
                ),0)}</strong>
                </div>
          </div>
        

        <p className="App-intro">
                {this.state.search ? this.showFoodBoxes(this.state.results) :  this.showFoodBoxes(this.state.foods)}
        </p>


      </div>
    );
  }
}

export default App;
