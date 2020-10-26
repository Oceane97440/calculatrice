const controller = {};


controller.index = async (req, res, next) => {

    try {
        res.render('index.ejs')
      
    } catch (error) {
       console.log(error)
    }
 
  
 
 
 }





























module.exports = controller;