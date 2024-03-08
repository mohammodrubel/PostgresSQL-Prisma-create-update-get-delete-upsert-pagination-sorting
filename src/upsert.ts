import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {

    // const result = await prisma.post.upsert({
    //     where: {
    //         id: 1
    //     },
    //     update: {
    //         title: 'this is updateTitle'
    //     },
    //     create: {
    //         title: 'title One',
    //         content: 'this is content',
    //         author: 'fardin'
    //     }
    // });

    const result = await prisma.post.upsert({
        where: {
            id: 17
        },
        update: {
            title: 'this is new data'
        },
        create: {
            title: 'title One',
            content: 'this is content',
            author: 'fardin'
        }
    })


    console.log(result)
}

main()