export function sort(students) {
    var len = students.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (students[j].grade < students[j + 1].grade) {
          var temp = students[j];
          students[j] = students[j + 1];
          students[j + 1] = temp;
        }
      }
    }
    return students;
}