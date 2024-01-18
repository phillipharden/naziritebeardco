# Nazirite Beard Company, Inc
<br>

## MongoDB

https://cloud.mongodb.com/v2/656142bd33d2300fbbd2debd#/clusters


<br>


## Mongoose

[mongoosejs.com](https://mongoosejs.com/)


db.js file:

`import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
* 
export default connectDB;`




seeder.js
add or delete database

The commands are in the package.json listed under:

`"data:import": "node backend/seeder.js",`

`"data:destroy": "node backend/seeder.js -d"`
