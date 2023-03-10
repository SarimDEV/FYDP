module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      ingredients: [{
        name: String,
        spiceId: Number,
        amount: Number
      }],
      description: String,
      published: Boolean,
      image: String,
      username: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Recipe = mongoose.model("recipe", schema);
  return Recipe;
};
