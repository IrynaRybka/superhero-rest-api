const { model, Schema } = require('mongoose');

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: 'public/avatars/garfield.png',
    }
  },
  {
    timestamps: true,
  },
);

const Hero = model('Hero', heroSchema);

module.exports = Hero;
