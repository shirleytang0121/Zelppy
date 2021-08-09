# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Business.destroy_all
Hour.destroy_all
Review.destroy_all

user1 = User.create(
    email: 'shir@aa.io',
    password: 'abc123',
    firstname: 'Shirley',
    lastname: 'Tang'
)

user2 = User.create(
    email: 'tang@aa.io',
    password: 'abc123',
    firstname: 'Tina',
    lastname: 'White'
)

user3 = User.create(
    email: 'demo@aa.io',
    password: '123456',
    firstname: 'Jack',
    lastname: 'Rice'
)

user4 = User.create(
    email: 'user4@aa.io',
    password: 'abc123',
    firstname: 'Jason',
    lastname: 'Simons'
)

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


business3 = Business.create(
    name: "Sai",
    address: "95-34 Queens Blvd",
    city: "Rego Park",
    state: "NY",
    zip_code: 11374,
    phone_number: "(718) 897-0429",
    website: 'https://www.sainyc.com/',
    lat: 40.730120,
    lng: -73.863600,
    delivery: true,
    takeout: true,
    outdoor: false
)

file3_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sai1.jpg')
file3_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sai2.jpg')
file3_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sai3.jpg')

business3.photos.attach(io: file3_1, filename: "sai1.jpg")
business3.photos.attach(io: file3_2, filename: "sai2.jpg")
business3.photos.attach(io: file3_3, filename: "sai3.jpg")


hour3_1 = Hour.create(
    date: 'Mon',
    open: 'Closed',
    close: 'Closed',
    business_id: business3.id
)

hour3_2 = Hour.create(
    date: 'Tue',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business3.id
)


hour3_3 = Hour.create(
    date: 'Wed',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business3.id
)

hour3_4 = Hour.create(
    date: 'Thu',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business3.id
)

hour3_5 = Hour.create(
    date: 'Fri',
    open: '12:00 PM',
    close: '11:00 PM',
    business_id: business3.id
)

hour3_6 = Hour.create(
    date: 'Sat',
    open: '12:00 PM',
    close: '11:00 PM',
    business_id: business3.id
)

hour3_7 = Hour.create(
    date: 'Sun',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business3.id
)

business4 = Business.create(
    name: "Izakaya Fuku",
    address: "71-28 Roosevelt Ave",
    city: "Jackson Heights",
    state: "NY",
    zip_code: 11372,
    phone_number: "(718) 255-1120",
    website: 'https://www.fukunyc.com/',
    lat: 40.746380,
    lng: -73.893837,
    delivery: true,
    takeout: true,
    outdoor: false
)

file4_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/fuku1.jpg')
file4_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/fuku2.jpg')
file4_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/fuku3.jpg')

business4.photos.attach(io: file4_1, filename: "fuku1.jpg")
business4.photos.attach(io: file4_2, filename: "fuku2.jpg")
business4.photos.attach(io: file4_3, filename: "fuku3.jpg")


hour4_1 = Hour.create(
    date: 'Mon',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

hour4_2 = Hour.create(
    date: 'Tue',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)


hour4_3 = Hour.create(
    date: 'Wed',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

hour4_4 = Hour.create(
    date: 'Thu',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

hour4_5 = Hour.create(
    date: 'Fri',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

hour4_6 = Hour.create(
    date: 'Sat',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

hour4_7 = Hour.create(
    date: 'Sun',
    open: '12:00 PM',
    close: '10:00 PM',
    business_id: business4.id
)

business5 = Business.create(
    name: "Shanghai Zhen Gong Fu",
    address: "86-16 Queens Blvd",
    city: "Elmhurst",
    state: "NY",
    zip_code: 11373,
    phone_number: "(718) 672-2200",
    website: 'https://www.shanghaizhengongfu.com/',
    lat: 40.736000,
    lng: -73.877360,
    delivery: false,
    takeout: true,
    outdoor: true
)

file5_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/zgf1.jpg')
file5_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/zgf2.jpg')
file5_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/zgf3.jpg')

business5.photos.attach(io: file5_1, filename: "zgf1.jpg")
business5.photos.attach(io: file5_2, filename: "zgf2.jpg")
business5.photos.attach(io: file5_3, filename: "zgf3.jpg")


hour5_1 = Hour.create(
    date: 'Mon',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business5.id
)

hour5_2 = Hour.create(
    date: 'Tue',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business5.id
)


hour5_3 = Hour.create(
    date: 'Wed',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business5.id
)

hour5_4 = Hour.create(
    date: 'Thu',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business5.id
)

hour5_5 = Hour.create(
    date: 'Fri',
    open: '10:00 AM',
    close: '10:30 PM',
    business_id: business5.id
)

hour5_6 = Hour.create(
    date: 'Sat',
    open: '10:00 AM',
    close: '10:30 PM',
    business_id: business5.id
)

hour5_7 = Hour.create(
    date: 'Sun',
    open: '10:00 AM',
    close: '10:00 PM',
    business_id: business5.id
)

business6 = Business.create(
    name: "Lucky Chen",
    address: "13553 Northern Blvd",
    city: "Flushing",
    state: "NY",
    zip_code: 11354,
    phone_number: "(718)-353-6978",
    website: '',
    lat: 40.763440,
    lng: -73.831610,
    delivery: true,
    takeout: true,
    outdoor: true
)

file6_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/chen1.jpg')
file6_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/chen2.jpg')
file6_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/chen3.jpg')

business6.photos.attach(io: file6_1, filename: "chen1.jpg")
business6.photos.attach(io: file6_2, filename: "chen2.jpg")
business6.photos.attach(io: file6_3, filename: "chen3.jpg")


hour6_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '10:15 PM',
    business_id: business6.id
)

hour6_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '10:15 PM',
    business_id: business6.id
)


hour6_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '10:15 PM',
    business_id: business6.id
)

hour6_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '10:15 PM',
    business_id: business6.id
)

hour6_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '10:45 PM',
    business_id: business6.id
)

hour6_6 = Hour.create(
    date: 'Sat',
    open: '11:00 AM',
    close: '10:45 PM',
    business_id: business6.id
)

hour6_7 = Hour.create(
    date: 'Sun',
    open: '11:30 AM',
    close: '10:15 PM',
    business_id: business6.id
)

business7 = Business.create(
    name: "Taiwanese Gourmet",
    address: "8402 Broadway",
    city: "Elmhurst",
    state: "NY",
    zip_code: 11373,
    phone_number: "(718) 429-4818",
    website: 'https://taiwanesegourmet.com/',
    lat: 40.74477,
    lng: -73.885647,
    delivery: true,
    takeout: true,
    outdoor: false
)

file7_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/tg1.jpg')
file7_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/tg2.jpg')
file7_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/tg3.jpg')

business7.photos.attach(io: file7_1, filename: "tg1.jpg")
business7.photos.attach(io: file7_2, filename: "tg2.jpg")
business7.photos.attach(io: file7_3, filename: "tg3.jpg")


hour7_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

hour7_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)


hour7_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

hour7_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

hour7_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

hour7_6 = Hour.create(
    date: 'Sat',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

hour7_7 = Hour.create(
    date: 'Sun',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business7.id
)

business8 = Business.create(
    name: "Gino's Pizza",
    address: "8635 Broadway",
    city: "Elmhurst",
    state: "NY",
    zip_code: 11373,
    phone_number: "(718) 672-8515",
    website: '',
    lat: 40.74477,
    lng: -73.885647,
    delivery: true,
    takeout: true,
    outdoor: false
)

file8_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/gino1.jpg')
file8_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/gino2.jpg')
file8_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/gino3.jpg')

business8.photos.attach(io: file8_1, filename: "gino1.jpg")
business8.photos.attach(io: file8_2, filename: "gino2.jpg")
business8.photos.attach(io: file8_3, filename: "gino3.jpg")


hour8_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business8.id
)

hour8_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business8.id
)

hour8_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business8.id
)

hour8_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business8.id
)

hour8_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business8.id
)

hour8_6 = Hour.create(
    date: 'Sat',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business8.id
)

hour8_7 = Hour.create(
    date: 'Sun',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business8.id
)

business9 = Business.create(
    name: "Shake Shack",
    address: "90-15 Queens Blvd Space 1069",
    city: "Elmhurst",
    state: "NY",
    zip_code: 11373,
    phone_number: "(347) 225-0190",
    website: 'https://www.shakeshack.com/location/queens-center-ny',
    lat: 40.735395,
    lng: -73.876472,
    delivery: true,
    takeout: true,
    outdoor: false
)

file9_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/ss1.png')
file9_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/ss2.jpg')
file9_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/ss3.png')

business9.photos.attach(io: file9_1, filename: "ss1.png")
business9.photos.attach(io: file9_2, filename: "ss2.jpg")
business9.photos.attach(io: file9_3, filename: "ss3.png")


hour9_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

hour9_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)


hour9_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

hour9_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

hour9_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

hour9_6 = Hour.create(
    date: 'Sat',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

hour9_7 = Hour.create(
    date: 'Sun',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business9.id
)

business10 = Business.create(
    name: "Emoji Burger",
    address: "80-07 37th Ave",
    city: "Jackson Heights",
    state: "NY",
    zip_code: 11372,
    phone_number: "(917) 832-6427",
    website: 'https://emojiburgerjacksonheights.bestcafes.online/',
    lat: 40.749916,
    lng: -73.88281,
    delivery: true,
    takeout: true,
    outdoor: true
)

file10_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/emoji_burger1.jpg')
file10_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/emoji_burger2.jpg')
file10_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/emoji_burger3.jpg')

business10.photos.attach(io: file10_1, filename: "emoji_burger1.jpg")
business10.photos.attach(io: file10_2, filename: "emoji_burger2.jpg")
business10.photos.attach(io: file10_3, filename: "emoji_burger3.jpg")


hour10_1 = Hour.create(
    date: 'Mon',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business10.id
)

hour10_2 = Hour.create(
    date: 'Tue',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business10.id
)


hour10_3 = Hour.create(
    date: 'Wed',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business10.id
)

hour10_4 = Hour.create(
    date: 'Thu',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business10.id
)

hour10_5 = Hour.create(
    date: 'Fri',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business10.id
)

hour10_6 = Hour.create(
    date: 'Sat',
    open: '11:00 AM',
    close: '11:00 PM',
    business_id: business10.id
)

hour10_7 = Hour.create(
    date: 'Sun',
    open: '11:00 AM',
    close: '10:00 PM',
    business_id: business10.id
)

business11 = Business.create(
    name: "Sik Gaek",
    address: "49-11 Roosevelt Ave",
    city: "Woodside",
    state: "NY",
    zip_code: 11377,
    phone_number: "(718) 205-4555",
    website: 'http://sikgaekwoodside.com/',
    lat: 40.745435,
    lng: -73.905214,
    delivery: true,
    takeout: true,
    outdoor: true
)

file11_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sikgaek1.jpg')
file11_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sikgaek2.jpg')
file11_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/sikgaek3.jpg')

business11.photos.attach(io: file11_1, filename: "sikgaek1.jpg")
business11.photos.attach(io: file11_2, filename: "sikgaek2.jpg")
business11.photos.attach(io: file11_3, filename: "sikgaek3.jpg")


hour11_1 = Hour.create(
    date: 'Mon',
    open: '1:00 PM',
    close: '12:00 AM',
    business_id: business11.id
)

hour11_2 = Hour.create(
    date: 'Tue',
    open: '1:00 PM',
    close: '12:00 AM',
    business_id: business11.id
)


hour11_3 = Hour.create(
    date: 'Wed',
    open: '1:00 PM',
    close: '12:00 AM',
    business_id: business11.id
)

hour11_4 = Hour.create(
    date: 'Thu',
    open: '1:00 PM',
    close: '12:00 AM',
    business_id: business11.id
)

hour11_5 = Hour.create(
    date: 'Fri',
    open: '1:00 PM',
    close: '1:00 AM',
    business_id: business11.id
)

hour11_6 = Hour.create(
    date: 'Sat',
    open: '1:00 PM',
    close: '1:00 AM',
    business_id: business11.id
)

hour11_7 = Hour.create(
    date: 'Sun',
    open: '1:00 PM',
    close: '12:00 AM',
    business_id: business11.id
)

business12 = Business.create(
    name: "Doma",
    address: "43-43 41st St",
    city: "Sunnyside",
    state: "NY",
    zip_code: 11104,
    phone_number: "(718) 707-0615",
    website: '',
    lat: 40.738853,
    lng: -73.926662,
    delivery: true,
    takeout: true,
    outdoor: false
)

file12_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/doma1.jpg')
file12_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/doma2.jpg')
file12_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/doma3.jpg')

business12.photos.attach(io: file12_1, filename: "doma1.jpg")
business12.photos.attach(io: file12_2, filename: "doma2.jpg")
business12.photos.attach(io: file12_3, filename: "doma3.jpg")


hour12_1 = Hour.create(
    date: 'Mon',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

hour12_2 = Hour.create(
    date: 'Tue',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)


hour12_3 = Hour.create(
    date: 'Wed',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

hour12_4 = Hour.create(
    date: 'Thu',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

hour12_5 = Hour.create(
    date: 'Fri',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

hour12_6 = Hour.create(
    date: 'Sat',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

hour12_7 = Hour.create(
    date: 'Sun',
    open: '11:30 AM',
    close: '10:30 PM',
    business_id: business12.id
)

business13 = Business.create(
    name: "Starbucks",
    address: "86-51 Broadway",
    city: "Elmhurst",
    state: "NY",
    zip_code: 11373,
    phone_number: "(718) 565-2021",
    website: 'https://www.starbucks.com/',
    lat: 40.740802,
    lng: -73.879126,
    delivery: false,
    takeout: true,
    outdoor: false
)

file13_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/starbucks1.jpg')
file13_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/starbucks2.jpg')
file13_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/starbucks3.jpg')

business13.photos.attach(io: file13_1, filename: "starbucks1.jpg")
business13.photos.attach(io: file13_2, filename: "starbucks2.jpg")
business13.photos.attach(io: file13_3, filename: "starbucks3.jpg")


hour13_1 = Hour.create(
    date: 'Mon',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

hour13_2 = Hour.create(
    date: 'Tue',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)


hour13_3 = Hour.create(
    date: 'Wed',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

hour13_4 = Hour.create(
    date: 'Thu',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

hour13_5 = Hour.create(
    date: 'Fri',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

hour13_6 = Hour.create(
    date: 'Sat',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

hour13_7 = Hour.create(
    date: 'Sun',
    open: '	6:00 AM',
    close: '9:00 PM',
    business_id: business13.id
)

business14 = Business.create(
    name: "MÖGE TEE",
    address: "70-15A Austin St",
    city: "Forest Hill",
    state: "NY",
    zip_code: 11375,
    phone_number: "(347) 644-1702",
    website: 'https://mogeteeusa.com/',
    lat: 40.720915,
    lng: -73.8463,
    delivery: true,
    takeout: true,
    outdoor: true
)

file14_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/moge_tea1.jpg')
file14_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/moge_tea2.jpg')
file14_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/moge_tea3.jpg')

business14.photos.attach(io: file14_1, filename: "moge_tea1.jpg")
business14.photos.attach(io: file14_2, filename: "moge_tea2.jpg")
business14.photos.attach(io: file14_3, filename: "moge_tea3.jpg")


hour14_1 = Hour.create(
    date: 'Mon',
    open: '10:30 AM',
    close: '9:30 PM',
    business_id: business14.id
)

hour14_2 = Hour.create(
    date: 'Tue',
    open: '10:30 AM',
    close: '9:30 PM',
    business_id: business14.id
)


hour14_3 = Hour.create(
    date: 'Wed',
    open: '10:30 AM',
    close: '9:30 PM',
    business_id: business14.id
)

hour14_4 = Hour.create(
    date: 'Thu',
    open: '10:30 AM',
    close: '9:30 PM',
    business_id: business14.id
)

hour14_5 = Hour.create(
    date: 'Fri',
    open: '10:30 AM',
    close: '10:00 PM',
    business_id: business14.id
)

hour14_6 = Hour.create(
    date: 'Sat',
    open: '10:30 AM',
    close: '10:00 PM',
    business_id: business14.id
)

hour14_7 = Hour.create(
    date: 'Sun',
    open: '10:30 AM',
    close: '9:30 PM',
    business_id: business14.id
)

business15 = Business.create(
    name: "Astoria Coffee",
    address: "30-04 30th St",
    city: "Astoria",
    state: "NY",
    zip_code: 11102,
    phone_number: "(347) 619-3915",
    website: 'https://www.astoriacoffeeny.com/',
    lat: 40.768545,
    lng: -73.920909,
    delivery: true,
    takeout: true,
    outdoor: false
)

file15_1= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/astoria1.jpg')
file15_2= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/astoria2.jpg')
file15_3= URI.open('https://my-zelppy-seed.s3.us-east-2.amazonaws.com/astoria3.jpg')

business15.photos.attach(io: file15_1, filename: "astoria1.jpg")
business15.photos.attach(io: file15_2, filename: "astoria2.jpg")
business15.photos.attach(io: file15_3, filename: "astoria3.jpg")


hour15_1 = Hour.create(
    date: 'Mon',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

hour15_2 = Hour.create(
    date: 'Tue',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)


hour15_3 = Hour.create(
    date: 'Wed',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

hour15_4 = Hour.create(
    date: 'Thu',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

hour15_5 = Hour.create(
    date: 'Fri',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

hour15_6 = Hour.create(
    date: 'Sat',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

hour15_7 = Hour.create(
    date: 'Sun',
    open: '7:00 AM',
    close: '5:00 PM',
    business_id: business15.id
)

review1_1 = Review.create(
    rating: 5,
    price_range: '$$',
    body: 'We really enjoyed the food',
    business_id: business1.id,
    user_id: user1.id
)

review1_2 = Review.create(
    rating: 4,
    price_range: '$$',
    body: 'The food is okay',
    business_id: business1.id,
    user_id: user2.id
)

review2_1 = Review.create(
    rating: 5,
    price_range: '$$',
    body: 'Good food Good service',
    business_id: business2.id,
    user_id: user2.id
)


review2_2 = Review.create(
    rating: 4,
    price_range: '$$',
    body: 'Nice food.',
    business_id: business2.id,
    user_id: user1.id
)

