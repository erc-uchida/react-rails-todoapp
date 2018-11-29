import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    const { todoLists } = this.props
    return (
      <div>
        <ul>
          {this.listCreator(todoLists)}
        </ul>
      </div>
    )
  }

  listCreator(todoLists) {
    let lists = []

    todoLists.forEach((todo, i, todoLists) => {
      let idName = `todo_input_${i}`

      lists.push(
        <li key={i}>
          <input key={i} type='checkbox' value={todo['title']} id={idName} />
          <label key={i + 1} htmlFor={idName}>
            {todo['title']}
          </label>
        </li>
      )
    })

    return lists
  }
}

render(
  <App todoLists={[{title: "テスト"}, {title: "テスト2"}]} />,
  document.getElementById('container'))
