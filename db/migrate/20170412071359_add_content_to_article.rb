class AddContentToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :content, :text
  end
end
