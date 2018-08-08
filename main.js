$( document ).ready(function() {
    getItems();
});

var DATAGLOBAL;

function getItems(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=100',
        type: 'GET',
        dataType: 'json',

    })

        .done(function(data) {
            DATAGLOBAL=data.results;
            console.log(data);
            var templateScript = $('#people').html();
            var template = Handlebars.compile(templateScript);
            for(let i=0; i< data.results.length ;i++) {
                $('.itemEntry').append(template(data.results[i]));
            }
        });

}


