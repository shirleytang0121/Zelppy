# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.destroy_all
Hour.destroy_all
Review.destroy_all


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
hour1_1 = Hour.create(
    date: 'Mon',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business1.id
)

hour1_2 = Hour.create(
    date: 'Tue',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business1.id
)


hour1_3 = Hour.create(
    date: 'Wed',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business1.id
)

hour1_4 = Hour.create(
    date: 'Thu',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business1.id
)

hour1_5 = Hour.create(
    date: 'Fri',
    open: '10:00 AM',
    close: '11:00 PM',
    business_id: business1.id
)

hour1_6 = Hour.create(
    date: 'Sat',
    open: '10:00 AM',
    close: '11:00 PM',
    business_id: business1.id
)

hour1_7 = Hour.create(
    date: 'Sun',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business1.id
)



business2 = Business.create(
    name: "Bamboo Ya",
    address: "69-12 Austin St",
    city: "Forest Hills",
    state: "NY",
    zip_code: 11375,
    phone_number: "(929) 374-1432",
    website: 'https://www.bambooyafh.com/',
    lat: 40.721490,
    lng: -73.849060,
    delivery: true,
    takeout: true,
    outdoor: true
)

file2_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/bambooya1.jpg')
file2_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/bambooya2.jpg')
file2_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/bambooya3.jpg')

business2.photos.attach(io: file2_1, filename: "bambooya1.jpg")
business2.photos.attach(io: file2_2, filename: "bambooya2.jpg")
business2.photos.attach(io: file2_3, filename: "bambooya3.jpg")


hour2_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business2.id
)

hour2_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business2.id
)


hour2_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business2.id
)

hour2_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business2.id
)

hour2_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '12:00 AM',
    business_id: business2.id
)

hour2_6 = Hour.create(
    date: 'Sat',
    open: '12:00 PM',
    close: '12:00 AM',
    business_id: business2.id
)

hour2_7 = Hour.create(
    date: 'Sun',
    open: '12:00 PM',
    close: '11:00 PM',
    business_id: business2.id
)




review1_1 = Review.create(
    rating: 5,
    price_range: '$$',
    body: 'We really enjoyed the food',
    business_id: business1.id,
    user_id: 1
)

review1_2 = Review.create(
    rating: 4,
    price_range: '$$',
    body: 'The food is okay',
    business_id: business1.id,
    user_id: 1
)

review2_1 = Review.create(
    rating: 5,
    price_range: '$$',
    body: 'Good food Good service',
    business_id: business2.id,
    user_id: 1
)


review2_2 = Review.create(
    rating: 4,
    price_range: '$$',
    body: 'Nice food.',
    business_id: business2.id,
    user_id: 2
)

