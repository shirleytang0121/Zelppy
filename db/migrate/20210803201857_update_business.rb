class UpdateBusiness < ActiveRecord::Migration[5.2]
  def change
    add_index :businesses, :name
  end
end
