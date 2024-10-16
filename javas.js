const data = [
    {
      "id": "hong-kong-boba-tea-kit-for-6",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "New Territories",
      "dsc": "Hong Kong Boba Tea Kit for 6",
      "price": 59,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "guys-caliente-margaritas-for-12",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Guy Fieri",
      "dsc": "Guy's Caliente Margaritas for 12",
      "price": 69,
      "rate": 5,
      "country": "Flavortown, USA"
    },
    {
      "id": "woodford-reserve-mint-julep-syrup",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Woodford Reserve",
      "dsc": "Woodford Reserve Mint Julep Syrup",
      "price": 39,
      "rate": 4,
      "country": "Louisville, KY"
    },
    {
      "id": "new-orleans-hurricane-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Franco's Hurricane Mix",
      "dsc": "New Orleans Hurricane Mix",
      "price": 39,
      "rate": 5,
      "country": "Natchitoches, LA"
    },
    {
      "id": "evan-williams-gourmet-mint-julep-mix-2-pack",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Evan Williams",
      "dsc": "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
      "price": 39,
      "rate": 4,
      "country": "Louisville, KY"
    },
    {
      "id": "margarita-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Johnny Sanchez",
      "dsc": "Margarita Mix",
      "price": 59,
      "rate": 5,
      "country": "New Orleans, LA"
    },
    {
      "id": "woodford-reserve-mint-julep-syrup-2-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Woodford Reserve",
      "dsc": "Woodford Reserve Mint Julep Syrup - 2 Pack",
      "price": 59,
      "rate": 5,
      "country": "Louisville, KY"
    },
    {
      "id": "evan-williams-gourmet-mint-julep-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Evan Williams",
      "dsc": "Evan Williams Gourmet Mint Julep Mix",
      "price": 25,
      "rate": 5,
      "country": "Louisville, KY"
    },
    {
      "id": "knock-you-naked-strawberry-margarita-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132264/knock-you-naked-strawberry-margarita-mix.c51ce9329ab84709e5b1d3d474cbb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Fat Mama's Tamales",
      "dsc": "\"Knock-You-Naked\" Strawberry Margarita Mix",
      "price": 39,
      "rate": 4,
      "country": "Natchez, MS"
    },
    {
      "id": "cold-brew-concentrate-variety-6-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134399/cold-brew-concentrate-variety-6-pack.ee2c1ff6e21556a824d07fcd6dc96682.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "Cold Brew Concentrate Variety - 6 Pack",
      "price": 60,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "organic-shots-bundle-12-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Juice Press",
      "dsc": "Organic Shots Bundle-12 Pack",
      "price": 69,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "papaya-king-tropical-drink",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Papaya King",
      "dsc": "Papaya King - Tropical Drink",
      "price": 69,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "dels-x-iggys-frozen-lemonade-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136231/Iggys-Del-Lemonade-Mix-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Iggy's",
      "dsc": "Del's x Iggy's Frozen Lemonade Mix",
      "price": 10,
      "rate": 4,
      "country": "Warwick, RI"
    },
    {
      "id": "unicorn-parade-milkshake-kit-for-8",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "New Territories",
      "dsc": "Unicorn Parade Milkshake Kit for 8",
      "price": 109,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "15193-old-honey-barn-mint-julep-mixer-750ml",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133924/old-honey-barn-mint-julep-750ml.169d91ce479cb7cd99ed97b2148ff6ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Old Honey Barn Mint Julep",
      "dsc": "Old Honey Barn Mint Julep - 750ml Fifth",
      "price": 34,
      "rate": 5,
      "country": "Louisville, KY"
    },
    {
      "id": "15323-cocktail-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132819/cocktail-party-4-pack.97b92c6a6c87168fc547da5f7bed8c73.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Rick's Picks",
      "dsc": "Cocktail Party 4 PACK",
      "price": 49,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "chickpea-chiller-kit-for-6",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "The Hummus & Pita Co.",
      "dsc": "Chickpea Chiller Kit for 6",
      "price": 89,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "16591-knock-you-naked-margarita-mix",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70442/knock-you-naked-margarita-mix.e5d122df55fdae061eb72e95336328a0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Fat Mama's Tamales",
      "dsc": "\"Knock-You-Naked\" Margarita Mix",
      "price": 39,
      "rate": 5,
      "country": "Natchez, MS"
    },
    {
      "id": "hazelnut-mocha-cold-brew-concentrate-6-pack",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/65884/hazelnut-mocha-cold-brew-concentrate-6-pack.f5cfd77c0666af4bbbc6243a4c613ce7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "Hazelnut Mocha Cold Brew Concentrate - 6 Pack",
      "price": 60,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "15194-old-honey-barn-mint-julep-mixer-200ml",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/950/old-honey-barn-mint-julep-mixer-200ml.e0b131d6d9b69963706b43fd4334ab74.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Old Honey Barn Mint Julep",
      "dsc": "Old Honey Barn Mint Julep Mixer - 200ml Flask",
      "price": 25,
      "rate": 5,
      "country": "Louisville, KY"
    },
    {
      "id": "mr-grumpy-milkshake-kit-for-8",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/75112/mr-grumpy-milkshake-kit-for-8.174f846e3252d7c668d034776db22cd6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "New Territories",
      "dsc": "Mr. Grumpy Milkshake Kit for 8",
      "price": 109,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "low-sugar-juice-cleanse-7-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104418/low-sugar-juice-cleanse-7-pack.9496c3e8b94cb767497158f4502536e8.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Juice Press",
      "dsc": "Low Sugar Juice Cleanse-7 Pack",
      "price": 79,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "kentucky-derby-mint-julep-gift-set",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/103859/kentucky-derby-mint-julep-gift-set.79720eda4e9c8e3fcf9ecb5c79827f2c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Woodford Reserve",
      "dsc": "Kentucky Derby Mint Julep Gift Set",
      "price": 59.95,
      "rate": 4,
      "country": "Louisville, KY"
    },
    {
      "id": "french-vanilla-cold-brew-concentrate-6-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134205/french-vanilla-cold-brew-concentrate-6-pack.aada7a4ffa58cae68695d132fece746c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "French Vanilla Cold Brew Concentrate - 6 Pack",
      "price": 60,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "iggys-soda-4-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136853/Iggys-Soda-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Iggy's",
      "dsc": "Iggy's Soda - 4 Pack",
      "price": 11,
      "rate": 4,
      "country": "Warwick, RI"
    },
    {
      "id": "002-charleston-bloody-mary-mix-weekender-bold-and-spicy",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66364/weekender-charleston-bloody-mary-mix-bold-and-spicy.c372868c9937e407a299a22001e210e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Charleston Beverage Company",
      "dsc": "Weekender | Charleston Bloody Mary Mix Bold & Spicy",
      "price": 39.95,
      "rate": 4,
      "country": "Charleston, SC"
    },
    {
      "id": "nola-cold-brew-concentrate-bag-in-box",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104363/nola-cold-brew-concentrate-bag-in-box.3df6fde8bd83f29235565984ae8ed22b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "NOLA Cold Brew Concentrate Bag-in-Box",
      "price": 40,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "002-original-cold-brewed-coffee-syrup",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/1228/original-cold-brewed-coffee-syrup.9a2306691f0a5681e98300a98cd1c243.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Dave's Coffee",
      "dsc": "Original Cold Brewed Coffee Syrup - 3 Pack",
      "price": 49,
      "rate": 4,
      "country": "Charlestown, RI"
    },
    {
      "id": "signature-juice-cleanse-7-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104373/signature-juice-cleanse-7-pack.7db8a0fcef0a9bfb72bcaa5c6d635470.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Juice Press",
      "dsc": "Signature Juice Cleanse-7 Pack",
      "price": 79,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "metal-drink-bottle",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87464/metal-drink-bottle.2ebe632ef74921a6a2c5cf8b6cdddc4b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Russ & Daughters",
      "dsc": "Metal Drink Bottle",
      "price": 24,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "greens-juice-bundle-5-pack",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/90472/greens-juice-bundle-5-pack.2301dfa6fc273a6bf41c235733590aaf.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Juice Press",
      "dsc": "Greens Juice Bundle-5 Pack",
      "price": 69,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "16990-frozen-hot-chocolate-party-gift-box",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131963/frozen-hot-chocolate-party-gift-box.d59c47117dedfc24b39ca5359564e26e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Serendipity",
      "dsc": "Frozen Hot Chocolate Party Gift Box",
      "price": 39.95,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "duck-duck-goat-kit-for-2",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/71796/duck-duck-goat-dinner-for-2-meal-kit.ab94e26065d34ca87a138379f9f20887.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Stephanie Izard of Girl & The Goat",
      "dsc": "Duck Duck Goat Dinner & Drinks Kit for 2",
      "price": 119,
      "rate": 5,
      "country": "Chicago, IL"
    },
    {
      "id": "15451-bold-and-spicy-8-oz-case",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/55350/bold-and-spicy-8-oz-case.d62f69b498aa580d5101214262b18672.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Charleston Beverage Company",
      "dsc": "Bold and Spicy 8 oz. Case",
      "price": 59,
      "rate": 5,
      "country": "Charleston, SC"
    },
    {
      "id": "immune-boosting-juice-bundle-6-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133353/immune-boosting-juice-bundle-6-pack.9ddda68328b0b72d6a0872d1d967272e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Juice Press",
      "dsc": "Immune Boosting Juice Bundle-6 Pack",
      "price": 69,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "nola-cold-brew-concentrate-6-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134045/nola-cold-brew-concentrate-6-pack.51aeb42af09ff5b076dac0310b92bb9c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "NOLA Cold Brew Concentrate - 6 Pack",
      "price": 60,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "kermits-double-strength-key-lime-juice",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132276/kermits-double-strength-key-lime-juice.38a582bc4996cca8e8f1e52476001c60.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Kermit's Key West Key Lime Shoppe",
      "dsc": "Kermit's Double-Strength Key Lime Juice - 2 Pack",
      "price": 29,
      "rate": 4,
      "country": "Key West, FL"
    },
    {
      "id": "16991-hot-chocolate",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/6979/hot-chocolate-mix.9be2c47c82bad10c222bded8baaa9de7.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Serendipity",
      "dsc": "Hot Chocolate Mix",
      "price": 35,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "nola-cold-brew-concentrate-12-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134067/nola-cold-brew-concentrate-12-pack.71a8cd3ae912d3fe69ed92bb507b3b29.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "NOLA Cold Brew Concentrate - 12 Pack",
      "price": 60,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "POB1-pat-obriens-new-orleans-drink-mixes",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/27512/pat-obriens-new-orleans-drink-mixes.977ee6c9de74923c63a180468ff94a86.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Pat O'Brien's Hurricanes",
      "dsc": "Pat O'Brien's New Orleans Drink Mixes",
      "price": 25,
      "rate": 5,
      "country": "New Orleans, LA"
    },
    {
      "id": "15703-frrrozen-mint-hot-chocolate",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/55314/frrrozen-mint-hot-chocolate.742cfc89989890eb38dc3092f189b967.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Serendipity",
      "dsc": "Frrrozen Mint Hot Chocolate",
      "price": 29,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "234234-frrrozen-hot-chocolate",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134225/frrrozen-hot-chocolate.867217d2781ea3db60b7ea2b116f9cd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Serendipity",
      "dsc": "Frrrozen Hot Chocolate",
      "price": 29,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "15702-frrrozen-salted-caramel-hot-chocolate",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133019/frrrozen-salted-caramel-hot-chocolate.1efee40abefcefda7716fa965375f399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Serendipity",
      "dsc": "Frrrozen Salted Caramel Hot Chocolate",
      "price": 29,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "003-bender-charleston-bloody-mary-mix-bold-and-spicy",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66370/bender-charleston-bloody-mary-mix-bold-and-spicy.72a356456124c0663bd8c0d9110414b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Charleston Beverage Company",
      "dsc": "Bender | Charleston Bloody Mary Mix Bold & Spicy",
      "price": 59,
      "rate": 5,
      "country": "Charleston, SC"
    },
    {
      "id": "lil-easy-nola-cold-brew-12-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132671/lil-easy-nola-cold-brew-12-pack.f80c2041d4720acb3f099e41bab2b436.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Grady's Cold Brew",
      "dsc": "Lil' Easy NOLA Cold Brew - 12 Pack",
      "price": 40,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "hot-dogs-tropical-drink",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133348/papaya-king-hot-dogs-tropical-drink.0e00794e37b13765181d2d7f0785cd9a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Papaya King",
      "dsc": "Papaya King Hot Dogs + Tropical Drink",
      "price": 99,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "virtual-cocktail-party-kit",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102046/virtual-cocktail-party-kit.32af5b8dcdc21513673ff28a32f79edc.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Tipsy Scoop Boozy Ice Cream",
      "dsc": "Boozy Ice Cream Cocktail Party Kit",
      "price": 109,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "002-cafe-du-monde-coffee-and-beignets",
      "img": "https://goldbelly.imgix.net/uploads/product_image/image/55362/cafe-du-monde-coffee-and-beignet-mix.c9db4d8ac11248a827f9e5dbf056fe7f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Cafe du Monde Beignets",
      "dsc": "Cafe du Monde Coffee & Beignet Mix",
      "price": 29,
      "rate": 5,
      "country": "New Orleans, LA"
    }
  ]

   const drinks = document.querySelector(".drinks")
   console.log(drinks.innerHTML)


data.forEach(item =>{
  drinks.innerHTML += `  <div class="drink">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} AZN</p>
                <button>+</button>
            </div>   `
})

