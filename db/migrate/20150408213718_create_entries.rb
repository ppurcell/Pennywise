class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.date :date
      t.references :category, index: true
      t.text :description
      t.decimal :amount, precision:8, scale:2

      t.timestamps
    end
  end
end
