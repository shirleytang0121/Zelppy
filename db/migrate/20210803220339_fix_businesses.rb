class FixBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :lat, :integer
    remove_column :businesses, :lng, :integer
    add_column :businesses, :lat, :float
    add_column :businesses, :lng, :float
    add_column :businesses, :delivery, :boolean
    add_column :businesses, :takeout, :boolean
    add_column :businesses, :outdoor, :boolean
  end
end
