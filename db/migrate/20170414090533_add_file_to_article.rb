# dfvgf
class AddFileToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :file, :string
  end
end
