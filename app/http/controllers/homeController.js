const controller = require("app/http/controllers/controller");
const epub = require('epub-gen')

class homeController extends controller {
  async index(req, res) { 
    try { 
    let check = await this.validationData(req);
    if (!check.status)
    {
      return res.json(check.messages)
    }
      const options = 
      {
        title: 'Fidibo',
        author: 'Fidibo',
        output: req.body.title + '.epub',
        content: 
        [
          {
              title: "Fidibo", 
              data: "<h2>Fidibo</h2>"
          }
         ]
      };
  
       new epub(options).promise;
       return res.json(`file has been saved as ${req.body.title + '.epub'}`)

  } 
  catch(e) 
  {
    console.log(e)
   }

  }

}

module.exports = new homeController();
