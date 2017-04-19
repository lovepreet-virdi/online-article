class AlterAssign < ActiveRecord::Migration[5.0]
  def change
    remove_column :assigns, :title, :string
    remove_column :assigns, :description, :string
    remove_column :assigns, :category, :string
  end
end
