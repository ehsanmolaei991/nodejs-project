const { MongoClient } = require("mongodb");

class ConnectToMongoDB {
  #DB_URL = "mongodb://127.0.0.1:27017";
  #DB_NAME = "node-tutorial";
  #db = null;
  async #connect() {
    try {
      const client = await new MongoClient(this.#DB_URL);
      const db = await client.db(this.#DB_NAME);
      return db;
    } catch ({ message }) {
      console.log({ message });
    }
  }

  async db() {
    try {
      if (this.#db) return this.#db;

      this.#db = await this.#connect();
      return this.#db;
    } catch ({ message }) {
      console.log({ message });
    }
  }
}

module.exports = {
  ConnectToMongoDB,
};
