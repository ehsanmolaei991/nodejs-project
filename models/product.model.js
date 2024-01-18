const { ConnectToMongoDB } = require("../utils/mongodb-connect");
const { ObjectId } = require("mongodb");

class ProductModalSchema {
  #collection = null;
  constructor() {
    this.#generate();
  }

  async #generate() {
    const db = await new ConnectToMongoDB().db();
    return (this.#collection = await db.collection("product"));
  }

  async find() {
    return await this.#collection
      .find(
        {},
        {
          sort: {
            _id: "desc",
          },
        }
      )
      .toArray();
  }

  async findOne(id) {
    return await this.#collection.findOne({ _id: ObjectId(id) });
  }

  async create(product) {
    return await this.#collection.insertOne(JSON.parse(product));
  }

  async update(product) {
    return await this.#collection.updateOne(
      { _id: ObjectId(id) },
      {
        $set: { ...product },
      }
    );
  }

  async delete(id) {
    return await this.#collection.deleteOne({ _id: ObjectId(id) });
  }
}

const ProductModal = new ProductModalSchema();

module.exports = { ProductModal };
