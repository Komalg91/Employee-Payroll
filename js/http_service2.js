function makelogincall (methodType, url, async=false, data=null){
    return new Promise(function(resolve,reject){
        var httprequest = new XMLHttpRequest();
        httprequest.onreadystatechange = function (){
            if(httprequest.readyState == 4){
                if(httprequest.status >= 200 && httprequest.status<=299){
                    var responseJsonObj = JSON.stringify(this.responseText);
                    resolve(httprequest.responseText);
                }
                else{
                    reject({
                        status : httprequest.status,
                        statusText : httprequest.statusText
                    });
                       console.log("Failed");
                }
            }
            
        }
        console.log("open method");
        httprequest.open(methodType,url,async);
        if(data){
        
            httprequest.setRequestHeader('Content-Type', 'application/json');
            httprequest.send(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }
        else{
            httprequest.send();
        }
    });
}