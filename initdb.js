const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Juicy Monkfish Burger',
    slug: 'monkfish-burger',
    image: '/images/burger.jpg',
    summary:
      'A mouth-watering burger featuring a juicy monkfish patty, perfectly seasoned and served in a soft bun.',
    instructions: `
        1. Prepare the monkfish patty:
           Mix 200g of minced monkfish with salt, pepper, and a bit of lemon zest. Form into a patty.
  
        2. Cook the patty:
           Heat a pan with a bit of oil over medium heat. Cook the patty for 3-4 minutes each side, until golden and cooked through.
  
        3. Assemble the burger:
           Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked monkfish patty and top with a slice of cheese.
  
        4. Serve:
           Complete the assembly with the top bun and serve hot with your favorite sauce.
      `,
    creator: 'Monk Fish',
    creator_email: 'monk@fish.com',
  },
  {
    title: 'Spicy Monkfish Curry',
    slug: 'spicy-curry',
    image: '/images/curry.jpg',
    summary:
      'A rich and spicy monkfish curry, infused with exotic spices and creamy coconut milk, perfect for a comforting meal.',
    instructions: `
        1. Prepare the monkfish:
           Cut monkfish into bite-sized pieces and season with salt and curry powder.
  
        2. Sauté monkfish:
           In a pan with oil, sauté the monkfish pieces until they start to brown.
  
        3. Add curry paste and vegetables:
           Stir in 2 tablespoons of curry paste, add your choice of vegetables, and cook for another minute.
  
        4. Simmer with coconut milk:
           Pour in 500ml of coconut milk, add the monkfish, and bring to a simmer. Let it cook for about 15 minutes.
  
        5. Serve:
           Enjoy this spicy monkfish curry with rice or naan bread.
      `,
    creator: 'Jade Maas',
    creator_email: 'jadelovesmonkfish@mf.com',
  },
  {
    title: 'Monkfish Omelette',
    slug: 'monkfish-omelette',
    image: '/images/dumplings.jpg',
    summary:
      'A fluffy omelette filled with tender monkfish pieces, herbs, and cheese, perfect for a protein-packed breakfast or brunch.',
    instructions: `
        1. Prepare the monkfish:
           Dice monkfish into small pieces and season with salt, pepper, and a pinch of paprika.
  
        2. Cook the monkfish:
           Heat a bit of oil in a pan, and sauté the monkfish pieces until they are cooked through.
  
        3. Make the omelette:
           Beat eggs with a splash of milk, salt, and pepper. Pour over the cooked monkfish in the pan. Sprinkle with chopped herbs and grated cheese.
  
        4. Serve:
           Fold the omelette over and serve hot, garnished with fresh herbs.
      `,
    creator: 'Neil Redfearn',
    creator_email: 'redders@bfc.com',
  },
  {
    title: 'Monkfish n Chips',
    slug: 'classic-monkfish-n-chips',
    image: '/images/macncheese.jpg',
    summary:
      'A British classic reimagined with monkfish, served with crispy golden chips and a side of tartar sauce.',
    instructions: `
        1. Prepare the monkfish:
           Cut monkfish into strips, season with salt and pepper, and coat in flour.
  
        2. Batter the fish:
           Dip the monkfish strips into a batter made from flour, beer, salt, and a pinch of baking powder.
  
        3. Fry the fish:
           Heat oil in a deep fryer or large pan. Fry the battered monkfish until golden brown and crispy.
  
        4. Serve:
           Serve hot with a side of chips, tartar sauce, and a wedge of lemon.
      `,
    creator: 'Darren Barnard',
    creator_email: 'leftfoot@bfc.com',
  },
  {
    title: 'Monkfish Pizza',
    slug: 'monkfish-pizza',
    image: '/images/pizza.jpg',
    summary:
      'A unique pizza with tender monkfish pieces, a blend of cheeses, and fresh toppings, baked to perfection on a crispy crust.',
    instructions: `
        1. Prepare the monkfish:
           Season monkfish pieces with olive oil, garlic, salt, and pepper. Sauté until cooked through.
  
        2. Prepare the pizza dough:
           Roll out your pizza dough on a baking sheet.
  
        3. Add toppings:
           Spread a thin layer of tomato sauce on the dough, add cooked monkfish, your favorite veggies, and a generous amount of mozzarella cheese.
  
        4. Bake the pizza:
           Bake in a preheated oven at 220°C for about 15-20 minutes, until the crust is golden and cheese is bubbly.
  
        5. Serve:
           Garnish with fresh basil and enjoy hot.
      `,
    creator: 'Max S',
    creator_email: 'maxs@javascript.com',
  },
  {
    title: 'Monkfish Steak',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary:
      'A perfectly grilled monkfish steak, seasoned with herbs and spices, served with a side of roasted vegetables.',
    instructions: `
        1. Prepare the monkfish:
           Season the monkfish steak with salt, pepper, and a mixture of your favorite herbs.
  
        2. Grill the steak:
           Heat a grill or pan over medium-high heat. Cook the monkfish steak for about 4-5 minutes on each side, depending on thickness.
  
        3. Prepare the sides:
           Toss your choice of vegetables with olive oil, salt, and pepper. Roast in the oven until tender.
  
        4. Serve:
        Serve the grilled monkfish steak with the roasted vegetables on the side.
   `,
    creator: 'Ange',
    creator_email: 'andrew@hmdsc.com',
  },
  {
    title: 'Fresh Monkfish Salad',
    slug: 'fresh-tomato-salad',
    image: '/images/tomato-salad.jpg',
    summary:
      'A refreshing salad with grilled monkfish, mixed greens, ripe tomatoes, and a zesty lemon vinaigrette dressing.',
    instructions: `
        1. Grill the monkfish:
          Season monkfish pieces with salt and pepper. Grill until cooked through and slightly charred.
  
        2. Prepare the salad:
           Toss mixed greens, sliced tomatoes, and grilled monkfish in a large bowl.
  
        3. Dress the salad:
           Whisk together olive oil, lemon juice, salt, and pepper to create a vinaigrette. Drizzle over the salad.
  
        4. Serve:
           Enjoy this light and flavorful monkfish salad as a healthy meal or side dish.
      `,
    creator: 'Laika',
    creator_email: 'laika@gsd.com',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
