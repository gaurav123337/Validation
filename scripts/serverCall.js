/*for serverCall*/
function sendRequest(pageurl,callback){
  var pageurl = pageurl + "StateManager";
 return	$.ajax({
   		//url: "StateManager",
    url: pageurl,
   		//type:post,
   		//datatype:json,
   		//async:true,
   		//beforeSend: function( xhr ) {
		    //"<p>" + "Loading ..." + "</p>";
		//},
   		success : function(result){ // callback){
        console.log(result);
       // alert("IN success test");
   		},
   		error : function(a){
        console.log(a);
   			//alert("In error test"+ a.toSource());
        return false;
   		}
    });
}

/*for systemLogin*/
function systemLogin(url,callback){
  var pageurl = url + "LoginManager"
  var user = $("#username").val();
  var psd = $("#pwd").val();
  var json = { json: "{action : authenticate ,sysuser:" + user+ ",syspwd: "+psd+"}" };
  console.log(json,"json");
  return $.ajax({
    url: pageurl,
    type:"post",
    datatype:"json",
    data: json,

    success: function( data ){
      //alert("in success");
    },
    error : function(a){
      alert("In error");
    }
  });
}

/*for changePassword*/
function changePwd(url,callback){
  var pageurl = url + "LoginManager"
  var oldpwd = $(".oldPwd").val();
  var newpwd = $(".newPwd").val();
  var jsonVal = { json: "{action : cpassword , oldpwd:" + oldpwd+ ",newpwd: "+newpwd+"}" };
  console.log(jsonVal,"json");
  return $.ajax({
    url: pageurl,
    type:"post",
    datatype:"json",
    data: jsonVal,
    success: function( data ){
      return data;
    },
    error : function(a){
      //alert("In error");
      return false;
    }
  });
}

/*for Connection*/
function verifyDb(param, url, callback){
  var pageurl = url + "EvaDbManager"; // serviceName that will be called

  console.log(param,"json");
  return $.ajax({
    url: pageurl,
    type:"post",
    datatype:"json",
    data: param,
    success: function( data ){
      return data;
    },
    error : function(a){
      return a;
    }
  });
}

/*for changePassword db*/
function cPwd(url,callback){
    var pageurl = url + "EvaLoginServlet"
    var oldpwd = $(".oldPwd").val();
    var user = $("#userName").text();
    //var user = <%= session.getAttribute("userid")%>;
    var newpwd = $(".newPwd").val();
    var jsonVal = { json: "{action : cpassword , oldpwd:" + oldpwd+ ",newpwd: "+newpwd+", uname: "+user+"}" };
    console.log(jsonVal,"json");
    return $.ajax({
        url: pageurl,
        type:"post",
        datatype:"json",
        data: jsonVal,
        success: function( data ){
            return data;
        },
        error : function(a){
            //alert("In error");
            return false;
        }
    });
}

/*for userLogin db*/
function authenticate(url,callback){
    var pageurl = url + "EvaLoginServlet"
    var user = $("#uname").val();
    var psd = $("#pass").val();
    var json = { json: "{action : authenticate ,uname:" + user+ ",passwd: "+psd+"}" };
    console.log(json,"json");
    return $.ajax({
        url: pageurl,
        type:"post",
        datatype:"json",
        data: json,

        success: function( data ){
            return data;
        },
        error : function(a){
            alert("In error");
            return false;
        }
    });
}

