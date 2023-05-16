const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// // get
// // router.get('/', (req, res) => {
// //     res.status(200).json({ message: 'Get goals' })
// // })
// router.get('/', getGoals)
// 
// // post
// router.post('/', setGoal)
// 
// // put
// // router.put('/:id', (req, res) => { // :id is a parameter within the req object
// //     res.status(200).json({ message: `Update goal ${req.params.id}` })
// // })
// router.put('/:id', updateGoal)
// 
// // delete 
// router.delete('/:id', deleteGoal)

// these can be done more efficiently, if theyre similar enough (meaning they have the same route), with one liners (gotten from above)
router.route('/').post(protect, setGoal).get(protect, getGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router // do this so we can use this with other files