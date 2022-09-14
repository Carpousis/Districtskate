import { PrismaClient } from '@prisma/client'

const milesInUnitOfLatitude = 69
const milesInUnitOfLongitude = 54.6

const handler = async (req, res) => { 
    const {latitude, longitude, radius} = req.query
    
    const latitudeRadius = Number(radius, 10)/Number(milesInUnitOfLatitude, 10)
    const longitudeRadius = Number(radius, 10)/Number(milesInUnitOfLongitude, 10)

    const prisma = new PrismaClient()
    await prisma.$connect()
    
    const skateSpots = await prisma.skatespot.findMany({
        where:{ 
            AND: [
                {
                    latitude: { 
                        gte: Number(latitude, 10) - latitudeRadius,
                    }
                },
                {
                    latitude: {
                        lte: Number(latitude, 10) + latitudeRadius,
                    }
                },
                {
                    longitude: {
                        gte: Number(longitude, 10) - longitudeRadius,
                    }
                },
                {
                    longitude: {
                        lte: Number(longitude, 10) + longitudeRadius
                    }
                }
    
            ]
        }
    })
    res.status(200).json(skateSpots)
}


export default handler;