class CreateRegisterItems < ActiveRecord::Migration
  def change
    create_table :register_items do |t|
      t.text :description
      t.date :date
      t.decimal :value

      t.timestamps
    end
  end
end
