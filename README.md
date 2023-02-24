# Student sorting application

Frameworkless application for sorting and displaying student data. Decided to go frameworkless due to unneccessary complexity and boilerplate brought by major UI frameworks.
Structure is pretty simple. Everything that is needed for display of data is within `sorter.html` file. Sorting methods can be added by slightly tweaking html file and adding and import to it, which references file containing newly-implemented sort.
To run it - simply open in your browser. For testing purposes, `students.csv` file can be used.

## Input data

Data is expected to be in a form of comma-separated values, containing no header row and line structure as follows:
```
Foo Bar, 8
Bar Foo, 8.5
```
Where first value is of type string and second value if of type number.