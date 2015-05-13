class AddCityToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :city, :string
    add_column :entries, :location, :string
    add_column :categories, :estimate, :decimal, :precision=> 8, :scale => 2
  end
end
