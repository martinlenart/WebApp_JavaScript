//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

//hints for exercises
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

// To use ES6 modules as html script set the type="module" in the script tag
// <script type="module" src="./script/students.js" ></script>

import studentScore from './studentScore.js';

//create som students to fill in the list
let students = studentScore.createRandom(10);

//sort the students according to avg score 
students = initializeTable(students);
implementAddButton();


//Helper functions
function initializeTable(students) {

    students = students.sort((first, second) => {

        //lets simply sort the students based on avg score, descending order
        return second.scores.avg - first.scores.avg;
    });

    renderTable(students);
    implementDelButtom();
    return students;
}

//implement the add button
function implementAddButton() {
    const addButtons = document.querySelectorAll('.addButton');
    addButtons.forEach((button) => {
        button.addEventListener('click', (event) => {

            //here I find it easier to empty the table completely, add a new student, sort and redraw the table

            //EXERCISE:
            //write code to remove all children in existing footer

            //write code to add a new student to students

            //write code to redraw the table, initialize the table
        });
    });
}

//inplement the delete buttons
function implementDelButtom() {
    const delButtons = document.querySelectorAll('.delButton');
    delButtons.forEach((button) => {
        button.addEventListener('click', (event) => {

            let rowNode = event.currentTarget.parentNode;

            //Note: traverse upwards until a node is found with a className that contains 
            //a word trFluid (that starts and ends with wordboundaries)
            while (rowNode.className.search(/\btrFluid\b/g) === -1) {
                rowNode = rowNode.parentNode;
            }

            //Note: read the data-row-id with syntax dataset.rowId
            console.log(rowNode.dataset.rowId);

            //EXERCISE:
            //write code to find and delete the data corresponding to student with studentId correspodnign to rowId

            //write code to remove the row itself from the DOM

            //write code to recalculate the footerdata and update it

            //write code to remove all children in existing footer

            //write code to recalculate the footerdata, render the footer row and append to tfoot
        });
    });
}


function calculateFooterData(students) {

    if (students.length === 0)
        return new studentScore({}, { minScore: null, maxScore: null, avgScore: null, lastScore: null });

    const avgTot = students.reduce((prev, current) => { return prev + current.scores.avg / students.length; }, 0);
    const lastTot = students.reduce((prev, current) => { return prev + current.scores.last / students.length; }, 0);

    //using map to create an array of min values followed by spread operator to create individual values into Math.min()
    const minValues = students.map((s) => s.scores.min);
    const minTot = Math.min(...minValues);
    //console.log(...minValues);
    //console.log(minTot);
    //and do the same in just one line of code
    const maxTot = Math.max(...students.map((s) => s.scores.max));
    //console.log(maxTot);
    //notice how I create a StudentScore and use named parameters to set the sums
    const footerData = new studentScore({}, { minScore: minTot, maxScore: maxTot, avgScore: avgTot, lastScore: lastTot });
    return footerData;
}

//Render the table
function renderTable(tableData) {

    const tbody = document.querySelector('.tbodyFluid');
    const tfoot = document.querySelector('.tfootFluid');

    //Render all the table rows
    for (const rowData of tableData) {

        const row = renderRow(rowData);
        tbody.appendChild(row);
    }

    //calculate values for the footer and render
    const footerData = calculateFooterData(students);
    const footRow = renderRow(footerData);
    tfoot.appendChild(footRow);
};

function renderRow(rowData) {

    //create the first group2 by nesting two group1 elements, each containing the data
    const g1_1 = create_trFluid_Grouping1('', rowData.firstName, rowData.lastName);
    const g1_2 = create_trFluid_Grouping1('', rowData.email, rowData.birthDate);
    const g2_1 = create_trFluid_Grouping2('', g1_1, g1_2);

    //create second group2 - this is anum group for correct formatting
    const g1_3 = create_trFluid_Grouping1('num', rowData.scores.min, rowData.scores.max);
    const g1_4 = create_trFluid_Grouping1('num', rowData.scores.avg?.toFixed(2), rowData.scores.last?.toFixed(2));
    const g1_5 = create_trFluid_Grouping1('button', '<button class="delButton">del</button>', '<button class="editButton">edit</button>');
    const g2_2 = create_trFluid_Grouping2('num', g1_3, g1_4, g1_5);

    //create a full row by nesting the two group2
    const row = create_trFluid(rowData.studentId, g2_1, g2_2);
    //console.log(row);
    //now find the place in the table where to append the row
    return row;
}

function create_trFluid_Grouping1(classAppendix, ...groupData) {

    //I use the ... rest operator as I dont know how many parameters it is going to be
    //create first grouping1
    const g1 = document.createElement('div');
    g1.className = `trFluid_Grouping1 ${classAppendix}`;

    //create tdFluents and append to the grouping
    for (const item of groupData) {

        const td = document.createElement('div');
        td.className = `tdFluent ${classAppendix}`;

        if (classAppendix !== 'button')
            td.textContent = item;
        else
            td.innerHTML = item;

        g1.appendChild(td);
    }
    return g1;
}

function create_trFluid_Grouping2(classAppendix, ...group1) {

    //create first grouping2
    const g2 = document.createElement('div');
    g2.className = `trFluid_Grouping2 ${classAppendix}`;

    //create tdFluents and append to the grouping
    for (const item of group1) {

        g2.appendChild(item);
    }
    return g2;
}
function create_trFluid(dataRowId, ...group2) {

    //create first row
    const r = document.createElement('div');
    r.className = 'trFluid';

    if (typeof dataRowId !== 'undefined')
        r.dataset.rowId = dataRowId;

    //create tdFluents and append to the grouping
    for (const item of group2) {

        r.appendChild(item);
    }
    return r;
}
