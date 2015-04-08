class CreateDefaultCategories < ActiveRecord::Migration
  def change
    create_table :default_categories do |t|
      t.string :title
      t.text :description
      t.string :color

      t.timestamps
    end
  end
end
