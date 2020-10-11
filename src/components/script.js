// This function constucts a split in the timeline
function constructSplit(games, split) {
    // Loop through all the games in this timeline
    for(var i in games) {
        split += `<li><div class="subtitle">${games[i].subtitle}`;
        
        // Loop through symbol(s) for game
        for(var j in games[i].symbol) {
            split += `<img src="${games[i].symbol[j]}"/>`;
        }
                            
        split += `</div><div class="systems">`;

        // Loop through all the systems the game was made for
        for(var j in games[i].system) {
            if (j == games[i].system.length-1) {
                split += `${games[i].system[j]}`;
            }
            else {
               split += `${games[i].system[j]} | `; 
            }
        }
        
        split += `</div></li>`;
    }
    split += `</ul>`;
    return split;
}

$(document).ready(function() {
    // Parse JSON game data using AJAX
    $.ajax({
        method: "get",
        url: "http://localhost:3000/games",
        async: false,
        dataType: "json",
        success: function(games) {

            // Construct timeline
            var prime = constructSplit(games.prime, `<ul>`);
            var diverged = constructSplit(games.diverged, `<ul>`);
            var converged = constructSplit(games.converged, `<ul>`);

            // Add DHTML
            $("#prime").html(prime);
            $("#diverged").html(diverged);
            $("#converged").html(converged);
        }
    });
});
