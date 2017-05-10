Rails.application.routes.draw do
  resources :comments
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { omniauth_callbacks: 'callbacks' }
  get 'articles/updateusers', to: 'articles#updateusers'
  get 'articles/review_article', to: 'articles#review_article', as: 'review_article'
  post 'articles/review_article1', to: 'articles#review_article1', as: 'review_article1'
  get 'assign_article', to: 'articles#assign_article', as: 'assign_article'
  get 'publish_article', to: 'articles#publish_article', as: 'publish_article'
  post 'assign_article1', to: 'articles#assign_article1', as: 'assign_article1'
  post 'articles/publish', to: 'articles#publish'
  resources :articles
  authenticated :user do
    root 'users#index', as: :authenticated_root
  end
  devise_scope :user do
    root to: 'devise/sessions#new'
  end
end
