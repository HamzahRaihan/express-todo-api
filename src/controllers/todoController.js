const Todos = require('../models/todos');
const Users = require('../models/users');

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
    const user = await Users.findById(data.userId);
    console.log('🚀 ~ file: todoController.js:43 ~ addTodo ~ user:', user);
    if (!user._id) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

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
    res.send('User not found');
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

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const findTodo = await Todos.findOne({ _id: id });
    const deleteTodo = await findTodo.deleteOne({ _id: id });

    if (!deleteTodo) {
      return res.status(404).json({
        message: 'Todo with ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Todo has been succesfully deleted',
      deleteTodo,
    });
  } catch (error) {
    res.send('ID not found');
  }
};

module.exports = { getAllTodos, getTodosByID, addTodo, editTodos, deleteTodo };
