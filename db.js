var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fast_food",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM inventory", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

var get_all_inventory = function(){
  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM inventory", function (err, result, fields) {
        if (err) throw err;
          return result;
        });
      });
};

var set_new_item = function(item, count){  
    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO inventory (item_name, item_count) VALUES ('" + item+ "', '"+ count+"')";
        con.query(sql, function (err, result) {
        if (err) throw err;
        return "1 record inserted, ID: " + result.insertId;
        });
    });
}

// var getinv = JSON.strinify(get_all_inventory);
// var newItem = JSON.strinify(set_new_item);
// module.exports.getinv = getinv;
// module.exports.newItem = newItem;

module.exports.getInv = get_all_inventory;
module.exports.newItem = set_new_item;


"use strict"
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fast_food"
});

function get_all_inventory () {

    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM inventory", function (err, result) {
            if (err) throw err;
            // console.log("calling inside the function", result);
            resolve(JSON.parse(JSON.stringify(result)));
        })

    });
}
get_all_inventory().then(result => {console.log(result)});


// function set_new_item(item_name, item_count){

//     con.query("INSERT INTO inventory (item_name, item_count) VALUES ('" +  item_name + "', '" + item_count + "')", function (err, result) {
//         if (err) throw err;
//         return "your order was recieved"; 
//     });
// };
    
    // set_new_item('fries', 4);
    
    
    // module.exports = get_all_inventory, set_new_item {
//     console.log()
// };
    // function get_all_inventory() {
    //     con.query('SELECT * FROM inventory', function (err, result) {
    //         if (err) throw err;
    //         return(result);
    //     }
    //     )
    //     return result;

    // }

    // get_all_inventory();


//     function set_new_item(item_name, item_count) {

// }

