import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {
    const result = await prisma.post.createMany({
        data : [
            {
                "title": "The Art of Baking",
                "content": "Exploring the world of pastries, bread, and confectionery.",
                "author": "Sofia"
            },
            {
                "title": "Unraveling the Secrets of Dark Matter",
                "content": "A scientific exploration into one of the universe's greatest mysteries.",
                "author": "Dr. Chen"
            },
            {
                "title": "Embracing Resilience: Overcoming Adversity",
                "content": "Strategies for bouncing back stronger in the face of challenges.",
                "author": "Maria Rodriguez"
            },
            {
                "title": "Rediscovering Ancient Traditions",
                "content": "Journeying through time to explore forgotten cultural practices.",
                "author": "Rajesh Patel"
            },
            {
                "title": "The Ecology of Change: Adapting to a Dynamic World",
                "content": "Understanding how ecosystems evolve and respond to environmental shifts.",
                "author": "Dr. Emily Johnson"
            },
            {
                "title": "Capturing Moments: The Art of Smartphone Photography",
                "content": "Maximizing your phone's camera capabilities for stunning shots.",
                "author": "David Wong"
            },
            {
                "title": "Cultivating Joy: The Science of Happiness",
                "content": "Insights from psychology and neuroscience on fostering happiness in daily life.",
                "author": "Dr. Sarah Richards"
            },
            {
                "title": "Exploring Earth's Wonders: From Mountains to Oceans",
                "content": "A visual journey through the diverse landscapes of our planet.",
                "author": "Natasha Johnson"
            },
            {
                "title": "Innovations in Robotics: Shaping the Future",
                "content": "Examining cutting-edge developments in robotics and automation.",
                "author": "Dr. Hiroshi Tanaka"
            },
            {
                "title": "The Culinary Fusion: Exploring Cross-Cultural Cuisine",
                "content": "Discovering the delightful blends of flavors from different culinary traditions.",
                "author": "Chef Mei Ling"
            },
            {
                "title": "Mindfulness in Motion: The Art of Tai Chi",
                "content": "Exploring the ancient practice for balance, flexibility, and inner peace.",
                "author": "Li Wei"
            },
            {
                "title": "The Tapestry of Belief: Understanding Global Religions",
                "content": "A comprehensive study of diverse religious traditions and their impact on societies.",
                "author": "Dr. Fatima Khan"
            },
            {
                "title": "Harmony in Sound: Exploring the World of Harmonics",
                "content": "Diving into the physics and beauty of harmonious musical tones.",
                "author": "Elena Petrov"
            },
            {
                "title": "The Literary Renaissance: Modern Voices, Timeless Themes",
                "content": "Examining contemporary literature and its reflection of universal human experiences.",
                "author": "Gabriel Hernandez"
            },
            {
                "title": "Speak with Influence: Mastering Persuasive Communication",
                "content": "Strategies for crafting compelling messages and engaging audiences.",
                "author": "Dr. Sophia Lee"
            },
            {
                "title": "Hidden Worlds: Exploring Subterranean Ecosystems",
                "content": "Journeying beneath the surface to discover the fascinating life below.",
                "author": "Dr. Michael Stewart"
            },
            {
                "title": "Beyond the Cosmos: Exploring Multiverse Theories",
                "content": "A speculative journey into the possibility of parallel universes and alternate realities.",
                "author": "Dr. Elizabeth Chen"
            },
            {
                "title": "The Zen of Gardening: Cultivating Tranquility in Nature",
                "content": "Finding peace and mindfulness through the art of gardening.",
                "author": "Haruki Nakamura"
            },
            {
                "title": "The Symphony of Elements: Exploring Elemental Chemistry",
                "content": "Delving into the building blocks of matter and their interactions.",
                "author": "Dr. Emma Thompson"
            },
        ]      
        
    })

console.log(result)
}

main()