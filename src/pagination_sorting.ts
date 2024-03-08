import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const paginationSorting = async () => {
    // offset pagination 
    // const offsetData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 3
    // })
    // console.log(offsetData)

    //cursor pagination
    // const cursorPagination = await prisma.post.findMany({
    //     skip: 2,
    //     take: 2,
    //     cursor: {
    //         id: 30
    //     }
    // })
    // console.log(cursorPagination)

    const sortedData = await prisma.post.findMany({
        orderBy: {
            // title:'asc'
            id: 'desc'
        },
        // we can add condition like 
        where: {
            title: 'title 1'
        },
        // we can use pagination 
        skip: 1,
        take: 1
    })

    console.log(sortedData)

}

paginationSorting()