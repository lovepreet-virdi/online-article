# sddf
class AlterTableArticle < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :reviewer_id, :integer
    remove_column :articles, :reviewer_status, :string

  end
end
