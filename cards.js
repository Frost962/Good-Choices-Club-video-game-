const cards = [
  {
    name: "cola-orange",
    img: "Cola.png",
    info: "<b>BAD CHOICE:</b> Cola: Cola is high in sugar and can lead to dental problems and fast weight gain. <br><b> GOOD CHOICE: </b> Orange juice: Oranges are filled with a special vitamin called vitamin C, which helps keep our bodies healthy, strong and full of energy. <br><b>FUN FACT:</b> Did you know that it takes about 13 oranges to make just one glass of orange juice?",
  },

  {
    name: "Chips-Carrots",
    img: "Chips.jfif",
    info: "<b>BAD CHOICE:</b> Chips are often high in oils and fat, which can be bad for your heart and can make you feel lazy and tired. <br><b>GOOD CHOICE:</b> Carrots: Carrots are a type of vegetable that are crunchy and sweet. They are filled with important vitamins and minerals that can help your body stay healthy, like Vitamin A, which can help you see better in the dark! <br><b>FUN FACT:</b> Carrots were originally purple and white, not orange. Orange carrots were bred by Dutch farmers in the 17th century",
  },

  {
    name: "Sad-Happy-Animal",
    img: "sadAnimal.png",
    info: "<b>BAD CHOICE:</b> When we don't take care of animals, it can have a big impact on the environment. For example, if we throw garbage in the ocean, it can hurt sea animals and their habitats and that would affect the ocean life circle. <br><b>GOOD CHOICE:</b> Animals come in all shapes and sizes. Some are big, like elephants, and some are small, like ladybugs. Animals have feelings just like we do. They can be happy, sad, scared or excited. If we take care of animals, they can help us in many ways. For example, bees help pollinate plants, which helps us grow our food. <br><b>FUN FACT:</b> Kangaroos can hop at speeds up to 30 mph",
  },

  {
    name: "breaking-tree-planting-tree",
    img: "breakingTree.jpg",
    info: "<b>BAD CHOICE:</b> Cutting or destroying trees, When we cut down trees, we're taking away homes and habitats for animals like birds and squirrels, trees are also really good at cleaning the air, and when we destroy them, there's less clean air for us to breathe. <br><b>GOOD CHOICE:</b> Planting trees. Planting trees is like giving a big hug to the Earth! Trees are amazing because they give us fresh air to breathe and help keep the planet healthy and full of shades <br><b>FUN FACT:</b> Trees communicate with each other through a complex system of chemical signals and underground fungal networks.",
  },

  {
    name: "dont-Waste-Water-girl-Brushing",
    img: "dontWasteWater.png",
    info: "<b>BAD CHOICE:</b> When we use more water than we need to, like leaving the faucet on while brushing our teeth or taking long showers, it can make it harder for everyone to have enough water to drink, wash, and play with. <br><b>GOOD CHOICE:</b> By saving water, we're helping to protect the environment and making sure there's enough water for everyone and everything. <br><b>FUN FACT: </b> The human body is made up of roughly 60% water.",
  },

  {
    name: "Littering-collecting-Trash",
    img: "Littering.jfif",
    info: "<b>BAD CHOICE:</b> Littering can harm the environment, wildlife and affect humans negatively. Litter takes a long time to decompose and can cause pollution and soil erosion, also littering can harm animals, like birds and marine animals, who can mistake trash for food or get tangled in it. <br> <b>GOOD CHOICE:</b> When we properly dispose of trash, we help keep our environment clean and healthy for animals and humans, By not littering, we can help prevent pollution and keep our air, water, and soil clean and safe for everyone to enjoy. <br><b>FUN FACT:<b> Composting is a great way to reduce food waste and create nutrient-rich soil for gardens.",
  },

  {
    name: "Jogging-noJogging",
    img: "Jogging.jpg",
    info: "<b>BAD CHOICE:</b> If we don't run or at least basic exercise, our bodies might start to feel lazy and tired, like a sleepy bear who just wants to take a nap all day! also we can do it in a fun way like dancing, jumping around or going for a walk with family or friends. <br><b>GOOD CHOICE:</b> Running is like a superpower that can make your heart strong and your legs powerful! When you run, you're giving your heart a workout, which helps keep it healthy and happy. Running also helps make your legs super strong, so you can jump higher, run faster, and have lots of fun playing with your friends. <br><b>FUN FACT:</b> The human heart creates enough pressure to squirt blood (30 feet/ 9 meters) when we run!",
  },
  {
    name: "fruits-Candy-freshFruits",
    img: "freshFruits.jpg",
    info: "<b>BAD CHOICE:</b> Candies are often high in sugar, which can lead to cavities and tooth decay, eating too much candy can lead to a sugar crash, which can make kids feel tired and sluggish. <br><b>GOOD CHOICE:</b> Fruits are a delicious and natural way to satisfy a sweet tooth, also fresh fruits are a great source of vitamins and minerals that are important for growing bodies specially when we are kids. <br><b>FUN FACT: </b> A strawberry isn't an actual berry, but a banana is!",
  },

  {
    name: "ocean-Contamination-Recycling",
    img: "Recycling.png",
    info: "<b>BAD CHOICE:</b> If you throw away your aluminium cans, they can stay in that can form for up to 500 years or more, so recycling is the way to go, also not recycling what can be recycled can harm the environment and contribute to pollution. <br><b>GOOD CHOICE:</b> Recycling isn't just good for the environment, it's essential. Recycling can help reduce waste and conserve world natural resources and protect wild life and human life. <br><b>FUN FACT:</b> Did you know that the average person creates almost 2.5 kilograms of trash per day!",
  },
  {
    name: "lazy-Boy-girl-Stretching",
    img: "girlStretching.png",
    info: "<b>BAD CHOICE:</b> Not stretching our bodies and sitting for extended periods of time can lead to poor posture, back pain, and a lack of physical activity as well can lead to muscle stiffness and injury for both kids and adults. <br><b>GOOD CHOICE:</b> Stretching keeps the muscles flexible, strong, and healthy, and we need that flexibility to maintain a range of motion in the joints. Without it, the muscles shorten and become tight. Then, when you zqnt to use the muscles for activity, they are weak and unable to extend all the way. <br><b>FUN FACT:</b> Regular stretching can help improve your range of motion and overall flexibility, means your jumps will be way higher!",
  },

  {
    name: "Littering-collecting-Trash",
    img: "collectingTrash.png",
    info: "<b>BAD CHOICE:</b> Littering can harm the environment, wildlife and affect humans negatively. Litter takes a long time to decompose and can cause pollution and soil erosion, also littering can harm animals, like birds and marine animals, who can mistake trash for food or get tangled in it. <br><b>GOOD CHOICE:</b> When we properly dispose of trash, we help keep our environment clean and healthy for animals and humans, By not littering, we can help prevent pollution and keep our air, water, and soil clean and safe for everyone to enjoy. <br><b>FUN FACT:<b> Composting is a great way to reduce food waste and create nutrient-rich soil for gardens.",
  },

  {
    name: "Sad-Happy-Animal",
    img: "happyAnimal.jfif",
    info: "<b>BAD CHOICE:</b> When we don't take care of animals, it can have a big impact on the environment. For example, if we throw garbage in the ocean, it can hurt sea animals and their habitats and that would affect the ocean life circle. <br><b>GOOD CHOICE:</b> Animals come in all shapes and sizes. Some are big, like elephants, and some are small, like ladybugs. Animals have feelings just like we do. They can be happy, sad, scared or excited. If we take care of animals, they can help us in many ways. For example, bees help pollinate plants, which helps us grow our food. <br><b>FUN FACT</b> Kangaroos can hop at speeds up to 30 mph",
  },

  {
    name: "Chips-Carrots",
    img: "Carrots.jfif",
    info: "<b>BAD CHOICE:</b> Chips are often high in oils and fat, which can be bad for your heart and can make you feel lazy and tired. <br><b>GOOD CHOICE:</b> Carrots: Carrots are a type of vegetable that are crunchy and sweet. They are filled with important vitamins and minerals that can help your body stay healthy, like Vitamin A, which can help you see better in the dark! <br><b>FUN FACT:</b> Carrots were originally purple and white, not orange. Orange carrots were bred by Dutch farmers in the 17th century.",
  },

  {
    name: "cola-orange",
    img: "orangeJuice.png",
    info: "<b>BAD CHOICE:</b> Cola: Cola is high in sugar and can lead to dental problems and fast weight gain. <br><b>GOOD CHOICE: </b> Orange juice: Oranges are filled with a special vitamin called vitamin C, which helps keep our bodies healthy, strong and full of energy <br><b>FUN FACT:</b> Did you know that it takes about 13 oranges to make just one glass of orange juice?",
  },

  {
    name: "breaking-tree-planting-tree",
    img: "plantingTree.jpg",
    info: "<b>BAD CHOICE:</b> Cutting or destroying trees, When we cut down trees, we're taking away homes and habitats for animals like birds and squirrels, trees are also really good at cleaning the air, and when we destroy them, there's less clean air for us to breathe. <br><b>GOOD CHOICE:<b> Planting trees. Planting trees is like giving a big hug to the Earth! Trees are amazing because they give us fresh air to breathe and help keep the planet healthy and full of shades <br><b>FUN FACT:</b> Trees communicate with each other through a complex system of chemical signals and underground fungal networks.",
  },

  {
    name: "dont-Waste-Water-girl-Brushing",
    img: "girlBrushing.jfif",
    info: "<b>BAD CHOICE:</b> When we use more water than we need to, like leaving the faucet on while brushing our teeth or taking long showers, it can make it harder for everyone to have enough water to drink, wash, and play with. <br><b>GOOD CHOICE:</b> By saving water, we're helping to protect the environment and making sure there's enough water for everyone and everything. <br><b>FUN FACT: </b> The human body is made up of roughly 60% water.",
  },

  {
    name: "Jogging-noJogging",
    img: "noJogging.png",
    info: "<b>BAD CHOICE:</b> If we don't run or at least basic exercise, our bodies might start to feel lazy and tired, like a sleepy bear who just wants to take a nap all day! also we can do it in a fun way like dancing, jumping around or going for a walk with family or friends. <br><b>GOOD CHOICE:</b> Running is like a superpower that can make your heart strong and your legs powerful! When you run, you're giving your heart a workout, which helps keep it healthy and happy. Running also helps make your legs super strong, so you can jump higher, run faster, and have lots of fun playing with your friends. <br><b>FUN FACT:</b> The human heart creates enough pressure to squirt blood (30 feet/ 9 meters) when we run!",
  },
  {
    name: "fruits-Candy-freshFruits",
    img: "fruitsCandy.jpg",
    info: "<b>BAD CHOICE:</b> Candies are often high in sugar, which can lead to cavities and tooth decay, eating too much candy can lead to a sugar crash, which can make kids feel tired and sluggish. <br><b>GOOD CHOICE:</b> Fruits are a delicious and natural way to satisfy a sweet tooth, also fresh fruits are a great source of vitamins and minerals that are important for growing bodies specially when we are kids. <br><b>FUN FACT: </b> A strawberry isn't an actual berry, but a banana is!",
  },

  {
    name: "ocean-Contamination-Recycling",
    img: "oceanContamination.jpg",
    info: "<b>BAD CHOICE:</b> If you throw away your aluminium cans, they can stay in that can form for up to 500 years or more, so recycling is the way to go, also not recycling what can be recycled can harm the environment and contribute to pollution.<br><b>GOOD CHOICE:</b> Recycling isn't just good for the environment, it's essential. Recycling can help reduce waste and conserve world natural resources and protect wild life and human life. <br><b>FUN FACT:</b> Did you know that the average person creates almost 2.5 kilograms of trash per day!",
  },

  {
    name: "lazy-Boy-girl-Stretching",
    img: "lazyBoy.jpg",
    info: "<b>BAD CHOICE:</b> Not stretching our bodies and sitting for extended periods of time can lead to poor posture, back pain, and a lack of physical activity as well can lead to muscle stiffness and injury for both kids and adults.<br><b>GOOD CHOICE:</b> Stretching keeps the muscles flexible, strong, and healthy, and we need that flexibility to maintain a range of motion in the joints. Without it, the muscles shorten and become tight. Then, when you zqnt to use the muscles for activity, they are weak and unable to extend all the way. <br><b>FUN FACT:</b> Regular stretching can help improve your range of motion and overall flexibility, means your jumps will be way higher!",
  },
];

// Exporting the cards variable

export default cards;
