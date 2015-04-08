class AddCategoryReferenceToRegisterItem < ActiveRecord::Migration
  def change
    add_reference :register_items, :category, index: true
  end
end
