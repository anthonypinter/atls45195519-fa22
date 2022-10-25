d3.json("/users.json", function(error, data) {
    console.log(data);

     
    if (error) {
        return console.warn(error);
    }

    d3.select("body")
        .selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function(d) {
            return d.name + ", " + d.location;
        });

});