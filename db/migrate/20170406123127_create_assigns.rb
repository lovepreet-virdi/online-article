# sddf
class CreateAssigns < ActiveRecord::Migration[5.0]
  def change
    create_table :assigns do |t|
      t.references :user, foreign_key: true
      t.string :reviewer_status, default: 'N/A'
      t.references :article, foreign_key: true
      t.string :title
      t.string :description
      t.string :category
      t.timestamps
    end
  end
end
