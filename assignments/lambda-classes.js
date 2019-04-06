//Lambda Classes

/*Lambda Personnel */

/* Students - ext of Person  */
/* Instructors - ext of Person */
/* Project Managers - ext of Instructors */


/* Objects */
/* Person */
/*
Requirements:
    1. base-class
    2. Attr: name, age, location, gender
    3. Phrase/logs out: "Hello my name is Fred, I am from Bedrock` where `name` and `location`"
    4. Method: name.speak()
*/
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });




/* Students */
/*
Requirements:
    1. Attr: name, age, location, gender
    2. Props: previousBackground, className, favSubjects, 
            listsSubjects - logs out all of the student's favoriteSubjects one by one., 
             PRAssignment - logs out `student.name has submitted a PR for {subject}`
             sprintChallenge - logs out `student.name has begun sprint challenge on {subject}`

*/
const jade = new Student({
    name: "Jade",

});

/* Instructors */
/*
Requirements:
    1. Attr: name, age, location, gender
    2. Props: specialty, favLanguage, catchPhrase
    3. Method: name.demo()
     logs out: "Today we are learning about {subject}' where subject is the param passed in."
    4. Method: name.grade()
     logs out: {student.name} receives a perfect score on {subject}
*/

/* Project Managers */
/*
Requirements:
    1. Props: gradClassName, favInstructor, 
    standUp -  takes in a slack channel 
        logs out: `{name} announces to {channel}, @channel standy times!​​​​​
    debugsCode - takes in a student object and a subject 
        logs out: `{name} debugs {student.name}'s code on {subject}`
*/