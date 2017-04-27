# sddf
class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :description
      t.string :category
      t.references :user, foreign_key: true
      t.integer :reviewer_id
      t.text :content, null: false
      t.column :file, :string
    end
  end
end
