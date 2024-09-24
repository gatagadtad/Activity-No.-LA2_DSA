// Student constructor function to store the details
function Student(firstName, middleName, lastName, birthDate, birthPlace, address, courseYear, dreamJob) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
    this.address = address;
    this.courseYear = courseYear;
    this.dreamJob = dreamJob;
}

// Data for each student
const student1 = new Student(
  "Kim", "Chan", "Domingo", 
  "June 10, 2002", 
  { barangay: "Bagani Campo", city: "Candon City, Ilocos Sur", country: "Philippines", zipCode: "2710" },
  { barangay: "Oaig Daya", city: "Candon City, Ilocos Sur", country: "Philippines", zipCode: "2710" },
  { course: "Computer Science", year: "3rd year" },
  "Software Engineering"
);

const student2 = new Student(
  "Maria", "Ramos", "Makiling", 
  "January 1, 2001", 
  { barangay: "Bayugao Este", city: "Sta. Cruz, Ilocos City", country: "Philippines", zipCode: "2713" },
  { barangay: "Weste", city: "Sta. Cruz, Ilocos Sur", country: "Philippines", zipCode: "2713" },
  { course: "Computer Science", year: "4th year" },
  "Graphic Designer"
);

const student3 = new Student(
  "Andi", "Juan", "Rivera", 
  "July 5, 2005", 
  { barangay: "Sagat", city: "Sta. Cruz, Ilocos Sur", country: "Philippines", zipCode: "2713" },
  { barangay: "Norte", city: "Tagudin, Ilocos", country: "Philippines", zipCode: "2714" },
  { course: "IT", year: "2nd year" },
  "Software Designer"
);

// Function to format the student information into a sentence
function formatStudentInfo(student) {
  const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toUpperCase();
  const fullNameLowerCase = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
  
  const birthPlace = `${student.birthPlace.barangay.toUpperCase()}, ${student.birthPlace.city.toUpperCase()}, ${student.birthPlace.country.toUpperCase()} ${student.birthPlace.zipCode}`;
  const address = `${student.address.barangay.toUpperCase()}, ${student.address.city.toUpperCase()}, ${student.address.country.toUpperCase()} ${student.address.zipCode}`;
  
  const course = `bachelor of science in ${student.courseYear.course.toLowerCase()}`;
  
  // Formatted output string
  const output = `[${fullName}] was born [${student.birthDate}] at [${birthPlace}], and currently living at [${address}]. [${fullNameLowerCase}] is taking up [${course}] and dreams to be [${student.dreamJob}] after graduation.`;
  
  console.log(output);
}

// Display all students' formatted information
formatStudentInfo(student1);
formatStudentInfo(student2);
formatStudentInfo(student3);
