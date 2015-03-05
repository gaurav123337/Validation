(function($){
	 $.fn.greenify = function(options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "pink",
            backgroundColor: "white",
            border:"5px solid #eeeeee"
        }, options );

        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            border:settings.border
        });
    };
    $.fn.popup = function( action,options ){
    	if ( action === "open") {
            // Open popup code.
	        var settings = $.extend({
	            // These are the defaults.
	            width: "100px",
	            backgroundColor: "orange",
	            opacity:1

	        }, options );
           // Popup the collection based on the settings variable.
           var html = "<div class = 'overlay' style='position:absolute;top:0;left:0;right:0;bottom:0;background:#ececec;width:auto;z-index:9999;' >";

               html += "<div class = 'popUp' >";
           	   html += "test";
           	   html += "</div>";
           	   html += "</div>";
           	   console.log(html,"html");


			console.log(this,"this");
	        //return html;
	        //return this.append(html);
	        return this.wrap(html);
        }

        if ( action === "close" ) {
            // Close popup code.
        }
    };

    /*Plugin for validation*/
    $.fn.validation = function(action,options,compareField,restrictionType) {
 		 // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
          showMe:function(that){
                    if ( (that).prev().length == 0 ) {
                      var html ="";
                      html = "<p class='message' style='color:red;display:inline;float:right;'>";
                      //html = "<p class='message' style='color:red;display:inline-table;position:absolute;left:100%;float:right;'>";
                      //html = "<p class='message' style='color:red;display:inline-table;position:absolute;float:right;'>";
                     // html = "<label class='message' style='color:red;position:absolute;'>";                                       
                      ///$(".message").css('left',that.width() + 50 + 'px');
                      html += options;
                      //html += "</label>";
                      html += "</p>";

                      return that.after(html);
                    }

                   /* if(!((that).prev().hasClass('message'))){
                      //that.prev().remove();
                      var html ="";
                      html = "<p class='message' style='color:red;'>";
                      html += options;
                      html += "</p>";
                      return that.before(html);
                    }*/
                    else{
                      //that.prev().css('display','block');
                      if(((that).prev().hasClass('message'))){
                        that.prev().remove();
                        var html ="";
                        //html = "<p class='message' style='color:red;display:inline-table;position:absolute;left:100%;float:right;'>";
                        //html = "<p class='message' style='color:red;display:inline-table;position:absolute;float:right;'>";
                        //$(".message").css('left',that.width() + 20 + 'px');
                        html = "<p class='message' style='color:red; display:inline;float:right;'>";
                        //$(".message").css('left',that.width() + 50 + 'px');
                        //html = "<label class='message' style='color:red;position:absolute;'>";
                        //$(".message").css('left',that.width() + 20 + 'px');
                        html += options;
                        //html += "</label>";
                        html += "</p>";
                        return that.after(html);
                      }
                    }
                },
          destroyMe: function(that){
            if ( (that).prev().length > 0 ) {
              //that.prev().css('display','none');
              that.prev().remove();
            }
          },
          // create as many regular expressions here as you need:
           digitsOnly : /[1234567890]/g,
           integerOnly : /[0-9\.]/g,
           alphaOnly : /[A-Za-z]/g,

      message: "Please fill me"
        }, options );

	        // Do something for required element here.
	        if ( action === "required") {
		        var textVal1 = this.val();
		        /*if(textVal1 == "" || textVal1 == undefined){
              var html ="";
		        	 html = "<p class='message' style='color:red;'>";
		        		if(options == "" || options == undefined){
		        			html += settings.message;
		        		}
		        		else{
		        			html += options;
		        		}
		        		html += "</p>";
		        }*/

            if(!(textVal1 != "")){
              settings.showMe(this);
            }
            else{
              settings.destroyMe(this);
            }
            //return this.before(html);
	    	}
	    	// Do something for Not same element here.
	    	if( action === "checkValue"){
	    		var textVal1 = document.getElementById(compareField).value.replace(/ /g,'');
	    		var textVal2 = this.val().trim();
		        if(textVal1 !== textVal2){
              settings.showMe(this);
		        }
            else{
              settings.destroyMe(this);
            }
	    	}
      // Do something for same element here.
      if( action === "compare"){
        var textVal1 = document.getElementById(compareField).value.replace(/ /g,'');
        var textVal2 = this.val().trim();
        if(textVal1 == textVal2){
          settings.showMe(this);
        }
        else{
          settings.destroyMe(this);
        }
      }
      // Do something for length here.
      if( action === "lengthCheck"){
        //var textVal1 = document.getElementById(compareField).value.replace(/ /g,'');
        var textVal2 = this.val().trim();
        if(textVal2.length < 7 ){
          settings.showMe(this);
        }
        else{
          settings.destroyMe(this);
        }
      }
      // Do something for IP check here.
      if( action === "ipCheck"){
        var textVal2 = this.val().trim();
        if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(textVal2)))
        {
          settings.showMe(this);
        }
        else{
          settings.destroyMe(this);
        }
      }
      // Do something for numeric check here.
      if( action === "numeric"){
        //var textVal1 = document.getElementById(compareField).value.replace(/ /g,'');
        var textVal2 = this.val().trim();
        if (!(/^(\d+)$/.test(textVal2)))
        {
          settings.showMe(this);
        }
        else{
          settings.destroyMe(this);
        }
      }
      // Do something for port range check here.
      if( action === "portRange") {
        var textVal2 = this.val().trim();
        if (!((/^(\d+)$/.test(textVal2)) )) {
          settings.showMe(this);
        }
       else if (((/^(\d+)$/.test(textVal2)) )) {
          if((textVal2 <= 99 || textVal2 >= 65536) )
            settings.showMe(this);
          else settings.destroyMe(this);
        }

      }
      // Do something for special character on keyUp here.
      if( action === "specialCharCheck") {
        var textVal2 = this.val().trim();
        re = /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
        var isSplChar = re.test(textVal2);
        if(isSplChar)
        {
          var no_spl_char = textVal2.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
          $(this).val(no_spl_char);
        }
      }
      // Do something for Not allowing special character on keyUp here.
      if( action === "restrictCharacters") {
        var textVal2 = this.val().trim();
       // re = /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
        if (!e) var e = window.event
        //if (e.keyCode) code = e.keyCode;
        //else if (e.which) code = e.which;
        if (e.keyCode) code = textVal2.charCodeAt(textVal2.length-1);
        else if (e.which) code = textVal2.charCodeAt(textVal2.length-1);
        var character = String.fromCharCode(code);

        // if they pressed esc... remove focus from field...
        if (code==27) { this.blur(); return false; }

        // ignore if they are press other keys
        // strange because code: 39 is the down key AND ' key...
        // and DEL also equals .
        if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
          if (restrictionType == "digitsOnly") {
            if (character.match(settings.digitsOnly)) {
              return true;
            } else {
              return false;
            }
          }
          else if(restrictionType == "integerOnly"){
            if (character.match(settings.integerOnly)) {
              return true;
            } else {
              return false;
            }
          }
          else if(restrictionType == "alphaOnly"){
            if (character.match(settings.alphaOnly)) {
              return true;
            } else {
              return false;
            }
          }
          else {
            return false;
          }

        }

      }
	};

}(jQuery))
