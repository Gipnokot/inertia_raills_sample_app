class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :email, presence: true, length: { maximum: 150 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :bio, length: { maximum: 500 }
end
