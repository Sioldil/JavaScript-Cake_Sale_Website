module.exports = (mongoose) => {
  const Category = mongoose.model(
    'category',
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  return Category;
};
