# sddf
class Addnametodeviseuser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_column :users, :role, :boolean, default: false
  end
end
