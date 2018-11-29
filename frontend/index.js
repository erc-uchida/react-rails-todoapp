import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoLists: props.todoLists, value: '' }
  }

  render() {
    return (
      <div>
        <ul>
          {this.listCreator(this.state.todoLists)}
        </ul>
        <div>
          <h3>TODOリストに追加する</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="追加" />
          </form>
        </div>
      </div>
    )
  }

  listCreator(todoLists) {
    let lists = []

    todoLists.forEach((todo, i, todoLists) => {
      let idName = `todo_input_${i}`

      lists.push(
        <li key={i}>
          <input key={i} type='checkbox' value={todo['title']} id={idName} onClick={(e) => this.handleCheck(e, i)} />
          <label key={i + 1} htmlFor={idName}>
            {todo['title']}
          </label>
        </li>
      )
    })

    return lists
  }

  handleSubmit(e) {
    e.preventDefault()

    let title = this.state.value

    let todoLists = [
      ...this.state.todoLists,
      {
        title: title,
        checked: false
      }
    ]

    this.setState({ todoLists: todoLists, value: '' })
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleCheck(e, index) {
    let stateTodoLists = this.state.todoLists
    let targetTodo = stateTodoLists[index]
    let todoLists = [
      ...stateTodoLists.slice(0, index),
      Object.assign({}, targetTodo, {
        checked: !targetTodo.checked
      }),
      ...stateTodoLists.slice(index + 1)
    ]

    this.setState({ todoLists: todoLists })
  }
}

render(
    <App todoLists={[]} />,
    document.getElementById('container'))
