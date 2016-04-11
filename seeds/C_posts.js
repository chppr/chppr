exports.seed = function (knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('posts').del(),

		// Inserts seed entries
		knex('posts').insert({
			user_id: 5,
			category: 3,
			timestamp: "04:30:00PM",
			dish_name: "'Strawberry Fields Forever' Salad",
			rest_name: "Leaf",
			price: 11,
			picture_path: "/pictures/salad.jpg",
			veggie: true,
			gluten_free: true,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 6,
			category: 2,
			timestamp: "05:30:00PM",
			dish_name: "Kiwi Spinach Smoothie",
			rest_name: "Daily Juice",
			price: 9,
			picture_path: "/pictures/kiwi.jpg",
			veggie: true,
			gluten_free: true,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 2,
			category: 4,
			timestamp: "07:30:00PM",
			dish_name: "Carrot Ginger Cayenne Power Up",
			rest_name: "JuiceLand",
			price: 11,
			picture_path: "/pictures/carrot.jpg",
			veggie: true,
			gluten_free: true,
			spicy: true,
			rating: 3
		}),
		knex('posts').insert({
			user_id: 1,
			category: 2,
			timestamp: "06:30:00PM",
			dish_name: "Stadium Hot Dogs with Jalapeno",
			rest_name: "Bobs Ballpark",
			price: 5,
			picture_path: "/pictures/spicydog.jpg",
			veggie: false,
			gluten_free: false,
			spicy: true,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 3,
			category: 1,
			timestamp: "08:30:00PM",
			dish_name: "Carne Asada Tacos",
			rest_name: "King Taco",
			price: 7,
			picture_path: "/pictures/tacos.jpg",
			veggie: false,
			gluten_free: false,
			spicy: false,
			rating: 5
		})
	);
};