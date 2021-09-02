function makeajaxcall (methodType, url, async=true, data=null){
    return new Promise(function(resolve,reject){
        var httprequest = new XMLHttpRequest();
        httprequest.onreadystatechange = function (){
            if(httprequest.readyState == 4){
                if(httprequest.status == 200 ){
                    var responseJsonObj = JSON.parse(this.responseText);
                    resolve(httprequest.responseText);
        
                }
                else{
                    reject("Failed");
                }
            }
            
        }
        httprequest.open(methodType,url,async);
        if(data){
            console.log(JSON.stringify(data));
            httprequest.setRequestHeader('Content-Type', 'application/json');
            httprequest.send(JSON.stringify(data));

        }
        else{
            httprequest.send();
        }
        console.log("Request sent");
    });
}