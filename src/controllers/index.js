const test = async (req, res) => {
    
    res.status(200).send({
        'test': true
    })
};

module.exports = {
    test
};