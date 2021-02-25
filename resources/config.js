function getDatabaseCreds(){
    var options ={
        hostname : "localhost",
        username : "root",
        password : "",
        name : "sql_demo",        
    }
    return options
}
module.exports = {
    
    getDatabaseCreds,
    
}