"use strict";
// 0 indicates empty area
// 1 is the 'wall'
// 2 is 'box'
// 3 is the 'character'
// 4 is the end point
// 5 is box on end point

// map data
const tutorial = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,3,2,0,4,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
];
const level1 = [
    [0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,4,1,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,0],
    [0,1,1,1,2,0,2,4,1,0],
    [0,1,4,0,2,3,1,1,1,0],
    [0,1,1,1,1,2,1,0,0,0],
    [0,0,0,0,1,4,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0]
];
const level2 = [
    [1,1,1,1,1,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0],
    [1,0,2,2,1,0,1,1,1,0],
    [1,3,2,0,1,0,1,4,1,0],
    [1,1,1,0,1,1,1,4,1,0],
    [0,1,1,0,0,0,0,4,1,0],
    [0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,0,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,0]
];
const level3 = [
    [0,1,1,1,1,1,0,0],
    [0,1,3,0,1,1,1,0],
    [0,1,0,2,0,0,1,0],
    [1,1,1,0,1,0,1,1],
    [1,4,1,0,1,0,0,1],
    [1,4,2,0,0,1,0,1],
    [1,4,0,0,0,2,0,1],
    [1,1,1,1,1,1,1,1]
];
// to store positions of end points from map in order to recreate endpoints if it's clear by box or person
var endPointMap ={
    "tutorialX":[5],
    "tutorialY":[2],
    "level1X":[4,7,2,5],
    "level1Y":[1,3,4,6],
    "level2X":[7,7,7],
    "level2Y":[3,4,5],
    "level3X":[1,1,1],
    "level3Y":[4,5,6]
};

// Global Variables
var endX = [];
var endY = [];
var updatedMap = [];
var person = {
    posX: 0,
    posY: 0
};
var moves = 0;


