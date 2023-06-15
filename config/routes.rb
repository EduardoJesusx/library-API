Rails.application.routes.draw do
  
  resources :books
  resources :book_types
  resources :authors
  
  match '*unmatched_route', to: 'application#route_not_found', via: :all
end