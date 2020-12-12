const fs = require('fs');
const http = require('http');
const college = fs.readFileSync('college.json');


//converting json to string
const strCollege = college.toString();
//parsing string to json 
var val = JSON.parse(strCollege);
// console.log(val.collegeName);
// console.log(val.courseOffered.course1);

// creating a http server
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write('<table border = "1">');
    res.write('<tr>');
    res.write('<th> College Name')
    res.write('</th>');

    res.write('<th> Address')
    res.write('</th>');

    res.write('<th> Contact No. ')
    res.write('</th>');

    res.write('<th>Courses Offered')
    res.write('</th>');

    res.write('<th>Has Vacencies')
    res.write('</th>');

    res.write('</tr>');
    //Table Header Design completed.


    //Table body Design initated.
    res.write('<tr>');
    res.write('<td>')
    res.write(val.collegeName);
    res.write('</td>')

    res.write('<td>')
    res.write(val.address);
    res.write('</td>')

    res.write('<td>')
    res.write(val.contactNo)
    res.write('</td>')

    res.write('<td col-span="2">')
    res.write('<ul>');
    res.write('<li>');
    res.write(val.courseOffered.course1);
    res.write('</li>');
    res.write('<li>');
    res.write(val.courseOffered.course2);
    res.write('</li>');
    res.write('</ul>');
    res.write('</td>')



    res.write('<td>')
    res.write(val.hasVacencies);
    res.write('</td>')
    res.write('</tr>');



    res.write('</table>')




    res.end();

}).listen(90);