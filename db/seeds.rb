# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.destroy_all

business1 = Business.create(
    name: "Rosa's Pizza",
    address: "43 Great Neck Rd",
    city: "Great Neck",
    state: "NY",
    zip_code: 11021,
    phone_number: "(516) 466-7722",
    website: 'https://www.rosaspizzagn.com/',
    lat: 40.786240,
    lng: -73.727840,
    delivery: true,
    takeout: true,
    outdoor: true
)

file1_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/rosa_pizza1.jpg')
file1_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/rosa_pizza2.jpg')
file1_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/rosa_pizza3.jpg')

business1.photos.attach(io: file1_1, filename: "rosa_pizza1.jpg")
business1.photos.attach(io: file1_2, filename: "rosa_pizza2.jpg")
business1.photos.attach(io: file1_3, filename: "rosa_pizza3.jpg")
