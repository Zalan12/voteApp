var mysql=require("mysql");
var pool=mysql.createPool(
    {
        connectionLimit:10,
        host:"localhost",
        database:"voteapp",
        password:null,
        user:"root"

    }
)

module.exports={pool}