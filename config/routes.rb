Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :todo_lists, only: [:index, :create]
  root to: "todo_lists#index"
end
