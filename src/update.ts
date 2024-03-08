import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {
    const singleUpdate = await prisma.post.update({
        where: {
            id: 9
        },
        data: {
            title: "title number 9",
            author: "author number 9"
        }
    })

    const updateMany = await prisma.post.updateMany({
        where: {
            id: 7
        },
        data: {
            title: 'update data 7'
        }
    })
    const updateManydata = await prisma.post.updateMany({
        where: {
            title: 'this is title'
        },
        data: {
            publish: true
        }
    })
    console.log(updateManydata)
}

main()