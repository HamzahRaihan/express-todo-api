const { Schema, model } = require('mongoose');

const TodoSchema = new Schema(
  {
    todo: {
      type: String,
    },
    isComplete: {
      type: Boolean,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    // image: { type: String },
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);

const Todos = model('Todos', TodoSchema);

module.exports = Todos;
