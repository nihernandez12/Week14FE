import {v4 as uuidv4} from 'uuid';

export const STORE = [

    {

            id: uuidv4(),
            title:'Saving Private Ryan',
            year: 1998,
            synopsis:
                "Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.",
            imgSrc: "https://th.bing.com/th/id/OIP.TIvJkjF-FVkBoIcK-MI56QHaK5?w=116&h=180&c=7&r=0&o=5&pid=1.7",
            categories: ["Drama", "War", "Action"],
            reviews: [
                {
                    id: 1,
                    user: "Cesar",
                    review: "Incredibly detailed, deep, and great character development.",
                    rating: 4
                },
                {
                    id: 2,
                    user: "Ronan",
                    review: "Lot's of explosions and intense moments. Will watch again",
                    rating: 3
                },
                {
                    id: 3,
                    user: "Nicole",
                    review: "Very good movie!",
                    rating: 4
                },
                {
                    id: 4,
                    user: "Becky",
                    review: "It had too much blood and explosions.",
                    rating: 2
                }
                
            ]
    },
    {

            id: uuidv4(),
            title:'The Shining',
            year: 1980,
            synopsis:
             "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
            imgSrc: "https://th.bing.com/th/id/OIP.9yFjMeAGaOiVoijR9XHDSgHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7",
            categories: ["Horror", "Thriller", "Suspense"],
            reviews: [
                {
                    id: 1,
                    user: "Robert",
                    review: "It was alright",
                    rating: 3
                },
                {
                    id: 2,
                    user: "Tony",
                    review: "A masterpiece.",
                    rating: 5
                },
                {
                    id: 3,
                    user: "Ruby",
                    review: "It was a little too intense.",
                    rating: 2
                 }
         ]
    },
    {

            id: uuidv4(),
            title:'Jurrasic World',
            year: 2015,
            synopsis:
             "Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok. Now, it's up to a former military man and animal expert (Chris Pratt) to use his special skills to save two young brothers and the rest of the tourists from an all-out, prehistoric assault.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZurhyRd1YojQm2mvKQvhOPIpRtitnU-Ssvw&s",
            categories: ["Action", "Adventure", "Science Fiction"],
            reviews: [
                {
                    id: 1,
                    user: "Dani",
                    review: "There were cool dinosaurs and lots of action.",
                    rating: 5
                },
                {
                    id: 2,
                    user: "Tiago",
                    review: "I fell asleep, but it was alright",
                    rating: 2
                },
                {
                    id: 3,
                    user: "Isabelle",
                    review: "Looked very realstic and good acting. Liked the movie.",
                    rating: 4
                },
                {
                    id: 4,
                    user: "Daisy",
                    review: "Um. It was okay.",
                    rating: 3
                }
            
        
        ]
    },
];