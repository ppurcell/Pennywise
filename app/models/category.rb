class Category < ActiveRecord::Base
  has_many :entries
end
