# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create(name: 'Groceries', description: 'Entries for General Food Expenses', color: 'Blue')
Category.create(name: 'Utilities', description: 'Entries for Monthly Utilities and recurring costs', color: 'Purple')
Category.create(name: 'Entertainment', description: 'Entries for things that are expendable', color: 'Red')
Category.create(name: 'Misc', description: 'Entries for random expenses without a category', color: 'Green')