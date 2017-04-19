# ffa
class Article < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :category, presence: true
  validates :description, presence: true
  validates :content, presence: true
 # validates :user_id, presence: true
  # has_many :users, through: :assign
  has_many :assigns
  mount_uploader :file, FileUploader
end
