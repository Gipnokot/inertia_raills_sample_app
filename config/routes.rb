Rails.application.routes.draw do
  # Inertia.js маршруты для пользователей
  resources :users

  # Пример маршрута для теста Inertia
  get "inertia-example", to: "inertia_example#index"

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # PWA
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Главная страница (если нужна)
  # root "users#index"
end
