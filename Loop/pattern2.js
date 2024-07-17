function printHollowSquare(N) {
    // Iterate over each row
    for (let i = 1; i <= N; i++) {
        let line = ''; 
        
        for (let j = 1; j <= N; j++) {
            if (i === 1 || i === N || j === 1 || j === N) {
                
                line += '*';
            } else {
                
                line += ' ';node 
            }
        }

        
        console.log(line);
    }
}


let N = 6;


printHollowSquare(N);

// html stands for hyper text markup language it is a standard text formatting language that used to create and display pages on internet html created by tim bernesly in the year of 1991 but published in 1954 1. what is html tag : html tag is used to place the elements in a proper and appropriate format and display it on web site tags use the symbols < and > to set them a part from html content . what is html attribute : attributes are the properties that can be added to am html tag that change the way the tag behave or displayed . 
