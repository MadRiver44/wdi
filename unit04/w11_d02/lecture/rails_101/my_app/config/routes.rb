Rails.application.routes.draw do
  get '/welcome', to: 'welcome#index'
  get '/about', to: 'about#index'
  resources :people
end


