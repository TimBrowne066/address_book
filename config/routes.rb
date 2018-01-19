Rails.application.routes.draw do
  root to: "contacts#index"
  resources :contacts
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :contacts
    end
  end
end
