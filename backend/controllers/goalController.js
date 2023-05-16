const asyncHandler = require('express-async-handler')

// Bring in our model
const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        // res.status(400).json({ message: 'Please add a text field' }) // bad request or client error 
        res.status(400)
        throw new Error('Please add a text field') // use the express build in error handling
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT /api/goals/:id  // :id is a parameter within the req object
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }) // new is an option that creates it if it does not exist

    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndRemove(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // await goal.
    // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}