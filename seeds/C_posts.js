exports.seed = function (knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('posts').del(),

		// Inserts seed entries
		knex('posts').insert({
			user_id: 2,
			category: 2,
			timestamp: "2016-04-13T16:20:02-05:00",
			dish_name: "Cajun Chicken & Waffles",
			rest_name: "Liberty Kitchen",
			price: 14,
			picture_path: "/pictures/cajun_chicken_waffles.jpg",
			veggie: false,
			gluten_free: false,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 1,
			category: 2,
			timestamp: "2016-04-13T16:19:02-05:00",
			dish_name: "White Mushroom Pizza",
			rest_name: "Unit D Pizzeria",
			price: 16,
			picture_path: "/pictures/mushroom_pizza.jpg",
			veggie: true,
			gluten_free: false,
			spicy: false,
			rating: 4
		}),
		knex('posts').insert({
			user_id: 3,
			category: 3,
			timestamp: "2016-04-13T16:18:02-05:00",
			dish_name: "Hoedeopbap- Sashimi Bibimbap",
			rest_name: "Hanabi",
			price: 15,
			picture_path: "/pictures/hoedeopbap.jpg",
			veggie: false,
			gluten_free: true,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 4,
			category: 2,
			timestamp: "2016-04-13T16:13:02-05:00",
			dish_name: "Smoked Duck Pastrami Sandwich",
			rest_name: "Noble Pig Sandwich Co.",
			price: 9,
			picture_path: "/pictures/duck_pastrami_sandwich.jpg",
			veggie: false,
			gluten_free: false,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 5,
			category: 2,
			timestamp: "2016-04-13T16:05:02-05:00",
			dish_name: "Blueberry Swirl & Honeyed Peaches",
			rest_name: "Lick Honest Ice Creams",
			price: 5,
			picture_path: "/pictures/blueberry_swirl_ice_cream.jpg",
			veggie: true,
			gluten_free: true,
			spicy: false,
			rating: 4
		}),
		knex('posts').insert({
			user_id: 3,
			category: 1,
			timestamp: "2016-04-13T16:08:02-05:00",
			dish_name: "Green Chile Queso",
			rest_name: "Torchy's Tacos",
			price: 5,
			picture_path: "/pictures/green_chile_queso.jpg",
			veggie: true,
			gluten_free: true,
			spicy: true,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 2,
			category: 2,
			timestamp: "2016-04-13T13:24:02-05:00",
			dish_name: "Double Cheese Burger",
			rest_name: "Shake Shack",
			price: 8,
			picture_path: "/pictures/shake_shack.jpg",
			veggie: false,
			gluten_free: false,
			spicy: false,
			rating: 4
		}),
		knex('posts').insert({
			user_id: 1,
			category: 4,
			timestamp: "2016-04-13T14:27:02-05:00",
			dish_name: "Brick Toast",
			rest_name: "TeaHaus",
			price: 6,
			picture_path: "/pictures/brick_toast.jpg",
			veggie: true,
			gluten_free: false,
			spicy: false,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 3,
			category: 3,
			timestamp: "2016-04-13T16:33:02-05:00",
			dish_name: "Tonkotsu Original Ramen",
			rest_name: "Ramen Tatsu Ya",
			price: 9,
			picture_path: "/pictures/ramen.jpg",
			veggie: false,
			gluten_free: false,
			spicy: true,
			rating: 5
		}),
		knex('posts').insert({
			user_id: 5,
			category: 3,
			timestamp: "2016-04-13T16:35:02-05:00",
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
			timestamp: "2016-04-13T18:20:02-05:00",
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
			timestamp: "2016-04-13T16:44:02-05:00",
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
			timestamp: "2016-04-13T11:20:02-05:00",
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
			timestamp: "2016-04-13T13:20:02-05:00",
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