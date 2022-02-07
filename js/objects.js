'use strict'

// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).

// const student = {
//   name: 'Laurence',
//   surname: 'Wachowski',
//   isMale: true,
//   email: 'LanaWachowski@zion.com',
//   getEmail() {
//     return `${this.email}`;
//   },
//   changeSex() {
//     return !this.isMale;
//   },
// }
// console.log(student);
// console.log(student.getEmail());
// console.log(student.changeSex());


// 2. Cоздать объект, который содержит свойства о факультете и кафедре, методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).

// const professor = {
//   faculty: 'proramming',
//   department: 'JS Development',
//   renameFaculty(newFaculty) {
//     this.faculty = newFaculty;
//   },
// }
// console.log(professor);
// professor.renameFaculty('programm engineering');
// console.log(professor);


// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
// * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

// function Book(author, name, year, publishHouse) {
//   this.author = author;
//   this.name = name;
//   this.year = year;
//   this.publishHouse = publishHouse;
// }
// const bookProto = {};
// bookProto.getBookAge = function() {
//   return 2022 - this.year;
// };
// Book.prototype = bookProto;

// const newBook = new Book('ada', 'asd', 1965, 'qwe')
// console.log(newBook);
// console.log(newBook.getBookAge());
