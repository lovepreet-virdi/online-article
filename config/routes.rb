Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { :omniauth_callbacks => 'callbacks' }
  get 'articles/review_article', to: 'articles#review_article', as: 'review_article'
  post 'articles/review_article1', to: 'articles#review_article1', as: 'review_article1'
  get 'assign_article', to: 'articles#assign_article', as: 'assign_article'
  get 'publish_article', to: 'articles#publish_article', as: 'publish_article'
  post 'assign_article1', to: 'articles#assign_article1', as: 'assign_article1'
  resources :articles
  root to: 'users#index'
end
