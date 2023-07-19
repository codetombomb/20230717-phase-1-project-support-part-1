# Front End Project Support Day 1 - Rendering cards using JSON data

What we are going for:

![chrome-capture-2023-6-18.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21269fc0-b9e1-4d92-8086-22cd8fe50b55/chrome-capture-2023-6-18.gif)

![](https://github.com/codetombomb/20230717-phase-1-project-support-part-1/blob/render-cards-with-bootstrap/demo.gif)

- db.json data
    
    ```json
    {
      "desserts": [
        {
          "id": 1,
          "name": "White chocolate and cake pop ice-cream dessert",
          "image": "https://img.taste.com.au/nohp8XG6/w720-h480-cfill-q80/taste/2016/11/white-chocolate-and-cake-pop-ice-cream-dessert-69514-1.jpeg",
          "description": "Turn Christmas dessert into pop art with these colourful baubles sandwiched between sweet vanilla ice-cream and a crunchy biscuit shell.",
          "recipe": "https://www.taste.com.au/recipes/white-chocolate-cake-pop-ice-cream-dessert/1601d7cc-e350-4cbb-88aa-34351cfa835b?r=baking/jRyaMV6w"
        },
        {
          "id": 2,
          "name": "Fairy bread icebox cake",
          "image": "https://img.taste.com.au/qYclOeMO/w720-h480-cfill-q80/taste/2017/05/fairy-bread-icebox-cake-126271-1.jpg",
          "description": "For the perfect party cake, try this fairy bread icebox cake made from storebought biscuits.",
          "recipe": "https://www.taste.com.au/recipes/fairy-bread-icebox-cake/NlhS4gEQ?r=baking/jRyaMV6w"
        },
        {
          "id": 3,
          "name": "'Better than Brad Pitt' five-layer dessert",
          "image": "https://img.taste.com.au/44mhGT_T/w720-h480-cfill-q80/taste/2016/11/better-than-brad-pitt-five-layer-dessert-108653-1.jpeg",
          "description": "This pudding is an update of a 1970's American dessert known as 'Better than Robert Redford'. It includes chocolate in all its forms - white, dark, milk. Team with cream, and it's a dream come true.",
          "recipe": "https://www.taste.com.au/recipes/better-than-brad-pitt-five-layer-dessert/5cbaf097-b2e1-45fe-a8c7-c3f01af72603?r=baking/jRyaMV6w"
        },
        {
          "id": 4,
          "name": "S'mores waffles",
          "image": "https://img.taste.com.au/EABv3WGL/w720-h480-cfill-q80/taste/2016/11/smores-waffles-94040-1.jpeg",
          "description": "Keep it short and sweet with this s'mores dessert that is ready in a flash.",
          "recipe": "https://www.taste.com.au/recipes/smores-waffles/c1a4f180-fed6-4024-86d9-0cd8c1a858d7"
        },
        {
          "id": 5,
          "name": "Tiramisu fridge cake",
          "image": "https://img.taste.com.au/Vh-59q3a/w720-h480-cfill-q80/taste/2017/03/tiramisufridgecake-123081-1.jpg",
          "description": "Impress your guests with this showstopper tiramisu fridge cake.",
          "recipe": "https://www.taste.com.au/recipes/tiramisu-fridge-cake/hM6a8TuA"
        },
        {
          "id": 6,
          "name": "Double-choc brownie 'sausage rolls'",
          "image": "https://img.taste.com.au/qW-y6zdt/w720-h480-cfill-q80/taste/2016/11/double-choc-brownie-sausage-rolls-109495-1.jpeg",
          "description": "Kids and adults alike will get a kick out of this sweet spin on a footy-party classic. Maybe we should save them for April Fools' Day!",
          "recipe": "https://www.taste.com.au/recipes/double-choc-brownie-sausage-rolls/736510cb-156a-4797-bd59-67004f54ecc1"
        },
        {
          "id": 7,
          "name": "Panna cotta and jaffa mousse with boozy strawberries",
          "image": "https://img.taste.com.au/3sbJz5w0/w720-h480-cfill-q80/taste/2016/11/panna-cotta-and-jaffa-mousse-with-boozy-strawberries-105062-1.jpeg",
          "description": "A special occasion dessert that tastes as spectacular as it looks. Made with care and love it's a perfect end to any dinner party.",
          "recipe": "https://www.taste.com.au/recipes/panna-cotta-jaffa-mousse-boozy-strawberries/1d01a48b-d16d-40db-a9eb-8f3f2637553e"
        },
        {
          "id": 8,
          "name": "Chocolate mousse slice with hazelnut praline",
          "image": "https://img.taste.com.au/1e4esgbH/w720-h480-cfill-q80/taste/2016/11/chocolate-mousse-slice-with-hazelnut-praline-103315-1.jpeg",
          "description": "Cooking for a crowd and want to treat them to a special dessert? Try this chocolate mousse slice that serves 30.",
          "recipe": "https://www.taste.com.au/recipes/chocolate-mousse-slice-hazelnut-praline/4e2f825d-8bb2-42d5-869b-53ce5a3f99da"
        },
        {
          "id": 9,
          "name": "Polka dot angel food cake",
          "image": "https://img.taste.com.au/GW-F168e/w720-h480-cfill-q80/taste/2016/11/polka-dot-angel-food-cake-109841-1.jpeg",
          "description": "Show off your angelic side with this creative vanilla cake dessert. Chocolate ganache covered in sprinkles makes it taste heavenly.",
          "recipe": "https://www.taste.com.au/recipes/polka-dot-angel-food-cake/a6e28310-f2c6-420d-84b2-e2409f3f54ad"
        },
        {
          "id": 10,
          "name": "Vanilla labne tart with sesame sprinkle",
          "image": "https://img.taste.com.au/tk4THvtH/w720-h480-cfill-q80/taste/2017/02/vanillalabnetartwithsesamesprinkle-120342-1.jpg",
          "description": "Whether it's for morning tea or dessert, this decadent nutty tart will win everyone over.",
          "recipe": "https://www.taste.com.au/recipes/vanilla-labne-tart-sesame-sprinkle/aHml6i3o"
        },
        {
          "id": 11,
          "name": "Martha's baked Alaska with chocolate cake and chocolate ice-cream",
          "image": "https://img.taste.com.au/F6lNJIHb/w720-h480-cfill-q80/taste/2016/11/marthas-baked-alaska-with-chocolate-cake-and-chocolate-ice-cream-96960-1.jpeg",
          "description": "Chocolate ice-cream in an oven? If it's bundled up in a thick layer of meringue, the outside caramelises and inside remains brilliantly chilly.",
          "recipe": "https://www.taste.com.au/recipes/marthas-baked-alaska-chocolate-cake-chocolate-ice-cream/f3467658-40da-4732-a8d8-3f1581c64076"
        },
        {
          "id": 12,
          "name": "Apple-filled monkey bread",
          "image": "https://img.taste.com.au/nOhUtumX/w720-h480-cfill-q80/taste/2016/11/apple-filled-monkey-bread-109059-1.jpeg",
          "description": "Gooey dough balls stuffed with seasonal apples and drizzled with caramel make a very sweet dessert indeed.",
          "recipe": "https://www.taste.com.au/recipes/apple-filled-monkey-bread/d736f3c6-e2d3-47c8-a6c0-cbd500b2edba"
        },
        {
          "id": 13,
          "name": "Rich chocolate custard poke cake",
          "image": "https://img.taste.com.au/X8vMpgBU/w720-h480-cfill-q80/taste/2017/06/ricechocolatepokecake-127622-1.jpg",
          "description": "We've put a spin on this popular cake from the 1970's and filled the holes with thick chocolate custard instead of classic jelly.",
          "recipe": "https://www.taste.com.au/recipes/rich-chocolate-custard-poke-cake/RPG5sOwl"
        },
        {
          "id": 14,
          "name": "Fairy bread layered sponge",
          "image": "https://img.taste.com.au/0jCCsCVc/w720-h480-cfill-q80/taste/2017/05/fairy-bread-layered-sponge-126269-1.jpg",
          "description": "For the ultimate party cake, wow a crowd with this spectacular 3-layer fairy bread sponge.",
          "recipe": "https://www.taste.com.au/recipes/fairy-bread-layered-sponge/bQvFObzH"
        },
        {
          "id": 15,
          "name": "Over-the-top chunky chocolate brownie tart",
          "image": "https://img.taste.com.au/IRfD_Usr/w720-h480-cfill-q80/taste/2017/03/over-the-top-chunky-chocolate-brownie-tart-123085-2.jpg",
          "description": "15Over-the-top chunky chocolate brownie tart",
          "recipe": "https://www.taste.com.au/recipes/over-top-chunky-chocolate-brownie-tart/gxphvG5S"
        },
        {
          "id": 16,
          "name": "Chewy pavlova with caramel and Nutella fudge sauce",
          "image": "https://img.taste.com.au/JFXd_u0Q/w720-h480-cfill-q80/taste/2017/02/chewypavlovawithcaramelandnutellafudgesauce-122754-2.jpg",
          "description": "Our sky-high pavlova tower is drizzled with sweet caramel, a gooey Nutella sauce and finished with chocolate eggs.",
          "recipe": "https://www.taste.com.au/recipes/chewy-pavlova-caramel-nutella-fudge-sauce/la5tlSOw"
        },
        {
          "id": 17,
          "name": "Sweet potato pancake stack",
          "image": "https://img.taste.com.au/0W93IUCg/w720-h480-cfill-q80/taste/2016/11/sweet-potato-pancake-stack-109197-1.jpeg",
          "description": "Sweet potato adds a quirky twist to classic pancakes. With ricotta and maple syrup on top, it's delicious whether it's a sweet breakfast, brunch or dessert.",
          "recipe": "https://www.taste.com.au/recipes/sweet-potato-pancake-stack/4c40823a-e2be-4580-977d-de7cc65bdf36"
        },
        {
          "id": 18,
          "name": "Sweet 'sushi' cakes",
          "image": "https://img.taste.com.au/xfGu7toZ/w720-h480-cfill-q80/taste/2016/11/sweet-sushi-cakes-107930-1.jpeg",
          "description": "This adorable sweet 'sushi' plate looks amazing but is ridiculously easy. Bought sponge rolls, melted chocolate and sprinkles!",
          "recipe": "https://www.taste.com.au/recipes/sweet-sushi-cakes/9908e872-26f6-4eb5-98c8-8c7fa959b87c"
        },
        {
          "id": 19,
          "name": "Giant Turkish delight marshmallow meringues",
          "image": "https://img.taste.com.au/SB68cpLu/w720-h480-cfill-q80/taste/2016/11/giant-turkish-delight-marshmallow-meringues-105346-1.jpeg",
          "description": "Love Turkish delight? Love meringue? Love marshmallows? All three favourites come together in this fun tea-time treat.",
          "recipe": "https://www.taste.com.au/recipes/giant-turkish-delight-marshmallow-meringues/ec50f868-4521-4efc-8b44-26e273525b78"
        },
        {
          "id": 20,
          "name": "Grilled cinnamon doughnuts with maple bananas",
          "image": "https://img.taste.com.au/ya3QPWVe/w720-h480-cfill-q80/taste/2016/11/grilled-cinnamon-doughnuts-with-maple-bananas-102416-1.jpeg",
          "description": "We all need a treat to get through the working week, and these ones are ready fast.",
          "recipe": "https://www.taste.com.au/recipes/grilled-cinnamon-doughnuts-maple-bananas/9d2c4a5c-0ab2-425b-b751-1ef8fc350868"
        }
      ]
    }
    ```