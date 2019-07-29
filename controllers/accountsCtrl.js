

const newUser = (req, res) => {
    console.log('serving signup page')
    res.render('accounts/signup')
}

module.exports = {
    newUser: newUser,
}