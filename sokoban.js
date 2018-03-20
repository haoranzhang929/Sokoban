"use strict";

function getVal(){
    updatedMap.length=0;
    endX.length=0;
    endY.length=0;
    moves=0;
    document.getElementById("sokoban-table").innerHTML = "";
    var val = document.getElementById("select-box").value;
    if(val==0){
        endX=endPointMap.tutorialX;
        endY=endPointMap.tutorialY;
        return updatedMap=tutorial;
    } else if(val==1){
        endX=endPointMap.level1X;
        endY=endPointMap.level1Y;
        return updatedMap=level1;
    } else if (val==2){
        endX=endPointMap.level2X;
        endY=endPointMap.level2Y;
        return updatedMap=level2;
    } else if (val==3){
        endX=endPointMap.level3X;
        endY=endPointMap.level3Y;
        return updatedMap=level3;
    }
}

// generate map according to the updatedMap array
var createMap = function () {
    // moves counter
    document.getElementById("moves").innerHTML = "Steps: "+ moves;
    // clear table
    document.getElementById("sokoban-table").innerHTML = "";
    // create table
    var table = document.getElementById("sokoban-table");
    for (var i = 0; i < updatedMap.length; i++) {
        // append rows according to the length of map
        var row = document.createElement("tr");
        table.appendChild(row);
        for (var j = 0; j < updatedMap[i].length; j++) {
            // append cells after each rows
            // assign class according to the map layout
            var cell = document.createElement("td");
            row.appendChild(cell);
            var pic = document.createElement("img");
            cell.appendChild(pic);
            switch (updatedMap[i][j]) {
                case 0:
                    // empty space
                    pic.src="broken-wall.png";
                    break;
                case 1:
                    // wall
                    pic.src="brick-wall.png";
                    break;
                case 2: // box
                case 5: // box on endpoint
                    pic.src="wooden-crate.png";
                    break;
                case 3:
                    // person
                    pic.src="person.png";
                    person.posX = j;
                    person.posY = i;
                    break;
                case 4:
                    // endpoint
                    pic.src="cancel.png";
                    break;
            }
        }
    }
    checkEnd();
};

function play() {
    document.getElementById("instruction").innerHTML="";
    createMap();
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                //left key
                //check position
                switch(updatedMap[person.posY][person.posX-1]){
                    case 0:
                    case 4:
                        //case empty or end point
                        //then person move left
                        updatedMap[person.posY][person.posX-1]=3;
                        //reset original position
                        updatedMap[person.posY][person.posX]=0;
                        moves += 1;
                        break;
                    case 1:
                        //case wall
                        //do nothing
                        break;
                    case 2:
                    case 5:
                        // box and box on end point
                        // check if box left empty
                        switch (updatedMap[person.posY][person.posX-2]){
                            case 0:
                                //if empty
                                //box move left
                                updatedMap[person.posY][person.posX-2]=2;
                                // person move left
                                updatedMap[person.posY][person.posX-1]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                            case 1:
                            case 2:
                                //if wall or box
                                break;
                            case 4:
                                //if endpoint
                                //box move left
                                updatedMap[person.posY][person.posX-2]=5;
                                // person move left
                                updatedMap[person.posY][person.posX-1]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                        }
                        break;
                }
                createEnd();
                createMap();
                break;
            case 38:
                //up key
                //check position
                switch(updatedMap[person.posY-1][person.posX]){
                    case 0:
                    case 4:
                        //case empty or end point
                        //then person move up
                        updatedMap[person.posY-1][person.posX]=3;
                        //reset original position
                        updatedMap[person.posY][person.posX]=0;
                        moves += 1;
                        break;
                    case 1:
                        //case wall
                        //do nothing
                        break;
                    case 2:
                    case 5:
                        // box and box on end point
                        // check if box up empty
                        switch (updatedMap[person.posY-2][person.posX]){
                            case 0:
                                //if empty
                                //box move up
                                updatedMap[person.posY-2][person.posX]=2;
                                // person move up
                                updatedMap[person.posY-1][person.posX]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                            case 1:
                            case 2:
                                //if wall or box
                                break;
                            case 4:
                                //if endpoint
                                //box move up
                                updatedMap[person.posY-2][person.posX]=5;
                                // person move up
                                updatedMap[person.posY-1][person.posX]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                        }
                        break;
                }
                createEnd();
                createMap();
                break;
            case 39:
                //right key
                //check position
                switch(updatedMap[person.posY][person.posX+1]){
                    case 0:
                    case 4:
                        //case empty or end point
                        //then person move right
                        updatedMap[person.posY][person.posX+1]=3;
                        //reset original position
                        updatedMap[person.posY][person.posX]=0;
                        moves += 1;
                        break;
                    case 1:
                        //case wall
                        //do nothing
                        break;
                    case 2:
                    case 5:
                        // box and box on end point
                        // check if box right empty
                        switch (updatedMap[person.posY][person.posX+2]){
                            case 0:
                                //if empty
                                //box move right
                                updatedMap[person.posY][person.posX+2]=2;
                                // person move right
                                updatedMap[person.posY][person.posX+1]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                            case 1:
                            case 2:
                                //if wall or box
                                break;
                            case 4:
                                //if endpoint
                                //box move right
                                updatedMap[person.posY][person.posX+2]=5;
                                // person move right
                                updatedMap[person.posY][person.posX+1]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                        }
                        break;
                }
                createEnd();
                createMap();
                break;
            case 40:
                //down key
                //check position
                switch(updatedMap[person.posY+1][person.posX]){
                    case 0:
                    case 4:
                        //case empty or end point
                        //then person move down
                        updatedMap[person.posY+1][person.posX]=3;
                        //reset original position
                        updatedMap[person.posY][person.posX]=0;
                        moves += 1;
                        break;
                    case 1:
                        //case wall
                        //do nothing
                        break;
                    case 2:
                    case 5:
                        // box and box on end point
                        // check if box down empty
                        switch (updatedMap[person.posY+2][person.posX]){
                            case 0:
                                //if empty
                                //box move down
                                updatedMap[person.posY+2][person.posX]=2;
                                // person move down
                                updatedMap[person.posY+1][person.posX]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                            case 1:
                            case 2:
                                //if wall or box
                                break;
                            case 4:
                                //if endpoint
                                //box move down
                                updatedMap[person.posY+2][person.posX]=5;
                                // person move down
                                updatedMap[person.posY+1][person.posX]=3;
                                // reset original position
                                updatedMap[person.posY][person.posX]=0;
                                moves += 1;
                                break;
                        }
                        break;
                }
                createEnd();
                createMap();
                break;
        }
    }
}

function checkEnd(){
    var winTarget = endX.length;
    var boxOnEnd = 0;
    for (var i = 0; i < updatedMap.length; i++) {
        for (var j = 0; j < updatedMap[i].length; j++) {
            switch (updatedMap[i][j]) {
                case 5:
                    boxOnEnd++;
                    break;
            }
        }
    }
    setTimeout(function(){
        if (boxOnEnd===winTarget) {
            alert("Level complete, it takes you "+moves+" steps, well done!");
            document.getElementById("sokoban-table").innerHTML = "";
            document.getElementById("moves").innerHTML = "";
            document.getElementById("instruction").innerHTML="<br/><br/><br/><h3>Congratulations!</h3><h3>Please select another level</h3>"
        }
    },100)
}

// check if endpoints are cleared by person or box
// if cleared, recreate it to the map when person or box moved
function createEnd(){
    if (endX[0]===person.posX && endY[0]===person.posY){
        updatedMap[endY[0]][endX[0]] = 4;
    }else if(endX[1]===person.posX && endY[1]===person.posY){
        updatedMap[endY[1]][endX[1]] = 4;
    }else if(endX[2]===person.posX && endY[2]===person.posY){
        updatedMap[endY[2]][endX[2]] = 4;
    }else if(endX[3]===person.posX && endY[3]===person.posY){
        updatedMap[endY[3]][endX[3]] = 4;
    }
}

