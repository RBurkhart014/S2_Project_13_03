"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Ryan Burkhart
   Date: 3/26/19  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;

window.onload = init;

//ran the init function and gave all the variables specifications

function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataSet.clueA;
      var downID = currentLetter.dataSet.clueD;
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");
}

//gave the variables specific references 

function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.background = "";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";

      if (currentLetter.dataSet.clueA !== undefined) {
            acrossClue = document.getElementById(currentLetter.dataSet.clueA);
            acrossClue.style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-a =" + currentLetter.dataSet.clueA + "]");
            
            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.color = "rgb(231, 231, 255)";
            }
      }

      if (currentLetter.dataSet.clueD !== undefined) {
            downClue = document.getElementById(currentLetter.dataSet.clueD);
            downClue.style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-a =" + currentLetter.dataSet.clueD + "]");
            
            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.color = "rgb(255, 231, 231)";
            }

      }
}

//attempted to give the crossword some funtions & styles but didnt finish




/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
