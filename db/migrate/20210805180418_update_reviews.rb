class UpdateReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :body, :string
    add_column :reviews, :price_range, :string
    add_column :reviews, :rating, :integer, null:false
    add_column :reviews, :user_id, :integer, null:false
    add_column :reviews, :business_id, :integer, null:false
  end
end
