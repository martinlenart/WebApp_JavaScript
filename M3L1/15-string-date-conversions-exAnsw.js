//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

function dateFromStringTests() {

  //use Date.parse() to check valid date format
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

  console.group('Date from a string in ISO 8601 standard');
  const ISOdateConverted = new Date(Date.parse('2021-12-17T03:24:00'));
  console.log(`ISO converted: ${ISOdateConverted}`);
  console.groupEnd();

  console.group('Date from a custom format non-standard (ex dd/mm/yyyy)');
  // Date *from* custom string (more involved)
  const stringDate = '12/30/2021';

  // Split on the slashes
  const dateArray = stringDate.split('/');

  // Find the individual date ingredients
  const year = dateArray[2];
  const month = dateArray[0];
  const day = dateArray[1];

  // Apply the correction for 0-based month numbering
  const stringDateConverted = new Date(year, month - 1, day);
  console.log(`String converted: ${stringDateConverted}`);
  console.groupEnd();

  console.group('Test for bad date')
  const badDate = '12 bananas';
  let convertedDate = Date.parse(badDate);

  if (Number.isNaN(convertedDate)) {
    // We end up here, because the date object was not created successfully
    console.log(`${badDate} is not a valid date`);
  } else {
    // For a valid Data instance, we end up here
    console.log(`${badDate} is a valid date`);
  }
  console.groupEnd();
}

function dateToStringTests() {
 
  const date = new Date();

  console.group('Date->String using Date build-ins');
  console.log(date.toDateString());
  console.log(date.toLocaleString('sv-SE'));
  console.log(date.toLocaleDateString('sv-SE'));
  console.log(date.toISOString());
  console.groupEnd();
  
  console.group('Date->String custom ');

  // Ensure date numbers less than 10 are padded with an initial 0.
  const day = date.getDate().toString().padStart(2, '0');

  // Ensure months are 0-padded and add 1 to convert the month from its
  // 0-based JavaScript representation
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  // The year is always 4-digit
  const year = date.getFullYear();

  const customDateString = `${year}.${month}.${day}`;
  console.log(`Custom date representation: ${customDateString}`);
  console.groupEnd();


  console.group('Date->String using customized Intl.DateTimeFormat');
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(`Swedish custom format: ${formatter.format(date)}`);
  console.groupEnd();
}

dateFromStringTests();
dateToStringTests();


/* Exercises

1. Write a simple code that checks your birthdate for validity, creates a Date object, and writes it to the conslole in Swedish locale, sve-SE
  //https://metacpan.org/pod/DateTime::Locale::Catalog

*/
