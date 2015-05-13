# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = Category.create!(name: 'Adventure', description: 'Entries for Day Trips and Awesome Stuff', color: 'Blue', estimate:1000.00)
f = Category.create!(name: 'Food', description: 'Entries for Food/Drinks/Restaurants', color: 'Purple', estimate:1600.00)
h = Category.create!(name: 'Hostels', description: 'Entries for Sleeping Space', color: 'Red', estimate:1000.00)
m = Category.create!(name: 'Misc.', description: 'Entries for Everything else...', color: 'Green', estimate:150.00)
p = Category.create!(name: 'Preparation', description: 'Entries for things needed to survive', color: 'Green', estimate:100.00)
s = Category.create!(name: 'Souvenirs', description: 'Entries for things to give-away', color: 'Green', estimate:100.00)
to = Category.create!(name: 'Tours', description: 'Entries for sight-seeing stuff', color: 'Green', estimate:500.00)
tr = Category.create!(name: 'Transportation', description: 'Entries for Planes, Trains, & Automobiles', color: 'Green', estimate:800.00)
it = Category.create!(name: 'Initial Tickets', description: 'Entries for getting there', color: 'Dank' , estimate:2010.00)

Entry.create( description:'Around the World and Back', amount:2010.00, date:'2015-05-18', city:'Kansas City', location:'MCI Airport', category:it );
Entry.create( description:'Shitty Econ Car', amount:268.50, date:'2015-05-04', city:'', location:'', category:tr );
Entry.create( description:'Supplies', amount:150.00, date:'2015-05-16', city:'', location:'', category:p );

