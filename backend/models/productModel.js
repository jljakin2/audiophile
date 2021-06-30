import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  includes: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      item: {
        type: String,
        required: true,
      },
    },
  ],
  gallery: {
    first: {
      mobile: {
        type: String,
        required: true,
      },
      tablet: {
        type: String,
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
    },
    second: {
      mobile: {
        type: String,
        required: true,
      },
      tablet: {
        type: String,
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
    },
    third: {
      mobile: {
        type: String,
        required: true,
      },
      tablet: {
        type: String,
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
    },
    cart: {
      type: String,
    },
  },
  others: [
    {
      slug: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        mobile: {
          type: String,
          required: true,
        },
        tablet: {
          type: String,
          required: true,
        },
        desktop: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
