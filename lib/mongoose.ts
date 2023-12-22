import mongoose from 'mongoose';

let isConnected=false;
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)

    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found')
    if (isConnected) return console.log('already connected to MongoDB')
    try{
        const DB = process.env.MONGODB_URL.replace(
          '<PASSWORD>',
          process.env.DATABASE_PASSWORD
        );
        await mongoose.connect(DB,{ useNewUrlParser: true,})
        isConnected=true;
        console.log("connected to mongo db")
    }catch(error){
        console.log(error)
    }
}