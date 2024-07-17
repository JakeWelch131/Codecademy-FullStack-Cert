const checkMillionDollarIdea = (req, res, next) => {
   const {numWeeks, weeklyRevenue} = req.body;
   const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
   
    if (!numWeeks || !weeklyRevenue || isNaN(totalMoney)) {
        res.status(400).send();
        console.log('400 sent');
    } else if (totalMoney < 1000000){
        res.status(400).send();
        console.log('400 sent due to low money');
    }
    else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
