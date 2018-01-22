Rails.application.routes.draw do
  root to: "contacts#index"
  resources :contacts
  namespace :api do
    namespace :v1 do
      resources :contacts
    end
  end
end
