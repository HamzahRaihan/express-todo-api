const Todos = require('../models/todos');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find().populate('userId', 'name');
    res.status(200).json({
      message: 'Get all todos',
      data: todos,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getTodosByID = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todos.findById(id).populate('userId', 'name').exec();

    if (!todos) {
      return res.status(404).json({
        message: 'Todos with id ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Get todos with id ' + id,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addTodo = async (req, res) => {
  try {
    const data = req.body;

    const newTodos = {
      todo: data.todo,
      isComplete: false,
      userId: data.userId,
    };
    const addTodos = await Todos.create(newTodos);

    res.status(201).json({
      message: 'Todos has been added succesfully',
      addTodos,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const editTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const todos = await Todos.findOne({ _id: id });

    const editedTodos = {
      todo: data.todo,
      isComplete: data.isComplete,
    };
    const edited = await todos.updateOne(editedTodos);

    res.status(201).json({
      message: 'Todos has succesfully made a change',
      edited,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Internal Error',
    });
  }
};

module.exports = { getAllTodos, getTodosByID, addTodo, editTodos };
