function dateFromStringTests() {

  //use Date.parse() to check valid date format
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

  // Date *from* string (in ISO 8601 standard)
  const ISOdateConverted = new Date(Date.parse('2021-12-17T03:24:00'));
  console.log(`ISO converted: ${ISOdateConverted}`);

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


  console.log('\nTest for bad date')
  const badDate = '12 bananas';
  convertedDate = Date.parse(badDate);
  
  if (Number.isNaN(convertedDate)) {
    // We end up here, because the date object was not created successfully
    console.log(`${badDate} is not a valid date`);
  } else {
    // For a valid Data instance, we end up here
    console.log(`${badDate} is a valid date`);
  }
}

function dateToStringTests() {
  // Date *to* custom string
  const date = new Date();

  // Ensure date numbers less than 10 are padded with an initial 0.
  const day = date.getDate().toString().padStart(2, '0');

  // Ensure months are 0-padded and add 1 to convert the month from its
  // 0-based JavaScript representation
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  // The year is always 4-digit
  const year = date.getFullYear();

  const customDateString = `${year}.${month}.${day}`;
  console.log(`Custom date representation: ${customDateString}`);

  //Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

// Date *to* localized string 
  const usDate = new Intl.DateTimeFormat('en-US').format(date);
  const ukDate = new Intl.DateTimeFormat('en-GB').format(date);
  const jpDate = new Intl.DateTimeFormat('ja-JP').format(date);
  console.log(`US: ${usDate}`);
  console.log(`UK: ${ukDate}`);
  console.log(`Japanese: ${jpDate}`);

  // Customized German date format
  const formatter = new Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(`Custom German: ${formatter.format(date)}`);
}

dateFromStringTests();
dateToStringTests();



/* Exercises

1. Write a simple code that checks your birthdate for validity, creates a Date object, and writes it to the conslole in Swedish locale, sve-SE
  //https://metacpan.org/pod/DateTime::Locale::Catalog

  */
