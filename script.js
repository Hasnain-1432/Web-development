document.getElementById('Calculate').addEventListener
('click', function () 

{
    let dataScience = parseFloat(document.getElementById('dataScience').value) || 0;
    
    let artificalintelligence = parseFloat(document.getElementById('artificalintelligence').value) || 0;

    let dataCommunication = parseFloat(document.getElementById('dataCommunication').value) || 0;

    let compiler = parseFloat(document.getElementById('compiler').value) || 0;



    let obtainedmarks = dataScience + artificalintelligence + dataCommunication + compiler;

           let maxmarks = 400;

           let percentage = (obtainedmarks / maxmarks) * 100;
           let grade = '';
           let result = 'pass';

    // Condition Use

    if (percentage >= 90) {
        grade = 'A';
        
    }
    else if (percentage >= 80) {
        grade = 'B+';
    }
    else if (percentage >= 70) {
        grade = 'B';
    }
    else if (percentage >= 60) {
        grade = 'C';
    }
    else if (percentage >= 60) {
        grade = 'C';
    }
    else if (percentage >= 50) {
        grade = 'D';
    }
    else {
        grade ='F';
        result= 'fail';

    }
    document.getElementById('obtainedmarks').value =obtainedmarks;
    document.getElementById('percentage').value = percentage.toFixed(2) + '%';
    document.getElementById('grade').value = grade;
    document.getElementById('result').value = result;

});


