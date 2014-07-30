/**
 * JeolsuController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

//  module.exports = function (req, res, ok) {

//       Blog.find()
//        .limit(3)
//        .sort('createdAt desc')
//        .where({ isPublished: 1 })
//        .exec(function(err, footerposts) {

//            res.footerposts = footerposts;
//            return ok();
//      });           
// };

module.exports = {


  list: function(req, res) {
    var limit = req.param('limit') || '50';
    limit = Number(limit);
    Paperkinds.find().limit(limit).sort('_id')
      .exec(function(err, rows) {
        res.json(rows);
      });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to JeolsuController)
   */
  _config: {}


};