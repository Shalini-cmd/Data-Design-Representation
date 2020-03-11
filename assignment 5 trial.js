db.getCollection("samples_pokemon").find({}, {}).sort({})
db.getCollection("samples_pokemon").find({ "candy_count": { $gt: NumberInt(40) } }, {}).sort({})
db.getCollection("samples_pokemon").find({ "candy_count": { $gt: 40 } }, {})

write in the order you want to execute-->first get all documents with >40 and then select names
db.getCollection("samples_pokemon").find({ "candy_count": { $gte: 40 }}, {"name":1,"_id":0})

#Part 2
use amazon_trial
db.createCollection("reviews")
show reviews
C:\>mongodb\bin\mongoimport --jsonArray  -d amazon_trial -c reviews C:/Users/shali/OneDrive - University of California, Davis/Documents/3 WQ Data Design/Assignments/reviews_electronics.16.json
C:/Program Files/MongoDB/Server/4.2/bin/mongoimport --d amazon_trial --c reviews --file C:/Users/shali/OneDrive - University of California, Davis/Documents/3 WQ Data Design/Assignments/reviews_electronics.16.json
db.reviews.find({})

db.reviews.mapReduce(
                        function(){emit(this.asin,this.overall);},
                        function(key,values){return Array.avg(values)},
                        {
                           out:"avg_scores"
                        }
                     )
db.avg_scores.find({}).limit(100)

db.reviews.mapReduce(
                        mapfunc,
                        reduceFunction2,
                        {
                           out:"wgt_scores"
                        }
                     )
db.wgt_scores.find({}).limit(100)


var reducefunc=function(key,values){  
                                      return Array.avg(values);
                                      }

var mapfunc=function(){
                             var val= this.helpful[0] + 1
                             var value ={ wt: val,
                                         wt_value: this.overall * val,
                                         }
                             emit( this.asin, value );
                  }

                             
db.reviews.mapReduce(
                        mapfunc,
                        reduceFunction2,
                        {
                           out:"weighted_avg_scores",
                           finalize:finalizeFunction2
                        }
                     )
db.weighted_avg_scores.find({} ).limit(100)

var reduceFunction2 = function(key, value) {
                     reducedVal = { wt: 0, wt_value: 0 };

                     for (var idx = 0; idx < value.length; idx++) {
                         reducedVal.wt += value[idx].wt;
                         reducedVal.wt_value += value[idx].wt_value;
                     }

                     return reducedVal;
                  };
                  
 var finalizeFunction2 = function (key, reducedVal) {

                       reducedVal.wt_avg = reducedVal.wt_value/reducedVal.wt;

                       return reducedVal;

                    };
  {},
  [{ $set: { value: { $multiply: [ {$sum: [{ $arrayElemAt: [ "$helpful", 0 ]},1]} , "$overall" ] } } }],
  { multi: true }
)
                            
