const express = require('express');
const router = new express.Router();
const userCridentials = require('./userModule/user')


router.get('/users', async (req, res) => {
    try {
        const getUserData = await userCridentials.find();
        res.send(getUserData);
    } catch (e) {
        res.send(e);
    }
})

router.post('/users', async (req, res) => {
    try {
        const userData = new userCridentials(req.body);
        const uData = await userData.save();
        res.send('user is addded....')
    }
    catch (e) {
        res.send(e);
    }
})


router.patch("/users/:id", async (req, res) => {
    try {
        const updateUser = await userCridentials.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updateUser);
    }
    catch (e) {
        res.send(e);
    }
})

router.delete("/users/:id", async (req, res) => {
    try {
        const deleteUser = await userCridentials.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send()
        }
        res.send(deleteUser)

    }
    catch (e) {
        res.send(e);
    }
})


module.exports = router;