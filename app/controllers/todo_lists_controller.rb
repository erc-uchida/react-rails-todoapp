class TodoListsController < ApplicationController
    def index
      todolists = TodoList.all.to_a.map do |list|
        { id: list.id, title: list.title, checked: list.checked }
      end
      @state = { todoLists: todolists }
    end
  
    def create
      params["todo_lists"].each do |param|
        puts param
        id_param = param["id"]
        title_param = param[:title]
        checked_param = param[:checked]
        if id_param.present?
          TodoList.find(id_param).update(title: title_param, checked: checked_param)
        else
          TodoList.create(title: title_param, checked: checked_param)
        end
      end
      redirect_to root_path
    end

    def list
      @todo_lists = TodoList.all
    end

    def fetch
      state = []
      TodoList.all.each do |todo|
        state << { title: todo.title, checked: todo.checked, id: todo.id }
      end

      render json: state
    end
  end
  