# dgdrgf
class Assign < ApplicationRecord
  belongs_to :user
  belongs_to :article
  alias_attribute :reviewer_id, :user_id
  validates :article, presence: true
  validates :user, presence: true
  validates :user_id, uniqueness: { scope: :article_id,
  message: 'Article to each user must be assigned only once.' }
end
