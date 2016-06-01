function calculate(amount) {
    var tax;
    
    if(amount < 16000){
        tax = 0 ;
    }
    else if(amount < 52500){
        tax = (amount - 16000) * 10/100; 
    }
    
    else if(amount < 113000){
        tax = (amount - 52500) * 16/100 + 3650;                  
    }
    else if( amount < 184500){
        tax = (amount - 113000) * 24/100 + 13300;    
    }
    else {
        tax = (amount - 184500) * 36/100 + 30490;    
    }    
    return tax;
    }

function calculator() {
    var income = document.getElementById("input").value;
    var tax = calculate(income);
    var output = document.getElementById("output");
    output.value = tax;
}

function drawGraph() {

    
    var trace, data, layout, xData = [], yData = [];
    
    var x = 250000 / 1000;
    for(var i = 0; i < x; i++) {
        xData[i] = i * 1000;
        yData[i] = calculate(xData[i]);
    }


    trace = {
        x: xData, // x values
        y: yData, // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "A simple graph in Plotly",
        yaxis: {
            title: "y-axis", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "x-axis",
            zerolinewidth: 1.5,
            range: [0, 5] // sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();