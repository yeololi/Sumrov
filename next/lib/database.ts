import { MongoClient } from 'mongodb'
const options = { useNewUrlParser: true }
let connectDB: Promise<MongoClient>;
//대충 db 링크랑 옵션 설정하고 
connectDB = new MongoClient(process.env.MONGODB_URI, options).connect()
export { connectDB }