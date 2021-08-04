class CreateHours < ActiveRecord::Migration[5.2]
  def change
    create_table :hours do |t|
      t.string :date, null:false
      t.string :open, null:false
      t.string :close, null:false
      t.integer :business_id, null:false
      t.timestamps
    end
  end
end
