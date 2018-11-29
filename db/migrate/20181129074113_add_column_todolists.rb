class AddColumnTodolists < ActiveRecord::Migration[5.1]
  def change
    add_column :todo_lists, :title, :string
    add_column :todo_lists, :checked, :boolean, default: 0
  end
end
