window.onload = function(){
    var topic = ['The Smurfs', 'Darkwing Duck', 'Thundercats', 'The Simpsons', 'Duck Tales', 'Ahhh Real Monsters', 'Recess', ' Disenchantment'];

    //<button data="Smurfs">The Smurfs</button>
    
    function apicall(event) {
        var topic = event.target.textContent

        console.log(topic)

        //  do the API call with the topic 
        var queryUrl="http://api.giphy.com/v1/gifs/search?q=" + cartoons
        + "&api_key=FhWCaHMSxSlbKpCcaz5X727F2o9CEy6M"
        
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response){
            for (let i = 0; i < topic.length; i++) {  //from the array this tells it to move to the next one
                const current_topic = topic[i];
                var button = $('<button/>',{  // the syntax of making a button in jquery
                    text : current_topic, // text will be the current topic
                    id : current_topic, // id of the button will be the current topic
                    click : function(event){ // this method is calling the apicall function
                        apicall(event)  //the call
                    },
                })
            
                $('#buttons-container').append(button)
          }
    

        // THEN after API call returns, create the gif(s) html elements

        // then append HTML elements into the gifs-container 
    }
    
    
   
        
    }
}


