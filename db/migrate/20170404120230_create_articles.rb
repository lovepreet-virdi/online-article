# sddf
class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :description
      t.string :category
      t.references :user, foreign_key: true
      t.integer :reviewer_id
      t.string :reviewer_status, default: nil
    end
  end
end
