$(document).ready(function() {

    var clientid
    var ws = $.websocket("ws://Mimas.local:8080/",{
	open: function() {
	    $('#response').html('Connected');
	},
	events: {
	    idmsg:function(x) {
		clientid = x.content
		$('#response').html('client id: ' + clientid);
	    },
	    
	    msg:function(x)  {
		$('#response').append('<br/>' + x.content);
	    }
	}
    });

    $('#sendbutton').click(function() {
	let clientResponse = $("#responsemessage").val()
	let responseObject = {'textresponse': clientResponse, 'clientid' : clientid }
	ws.send('message', responseObject)
	$("#responsemessage").val("")
    });

});
