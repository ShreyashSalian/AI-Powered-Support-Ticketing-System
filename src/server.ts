import "dotenv/config";
import app from "./app";
import { connectDB } from "./config/database/connect";

const port: Number = Number(process.env.PORT) || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`The application is connected to : http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.log(
      `Error while connecting to the databae from the server file : ${err}`,
    );
  });
