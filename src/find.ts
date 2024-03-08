import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {
    // find all data 
    // const result = await prisma.post.findMany()

    // find single data  find first and find first or throw error 
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where:{
    //         publish:false
    //     }
    // })
    // find single data find unique *without unique we get ERROR
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 17
        }
    })
    console.log({ findUnique })
}

main()