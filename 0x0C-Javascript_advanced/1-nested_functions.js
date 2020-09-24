var globalVariable = 'Welcome'

function outer() {
    alert(globalVariable);
    var courses = 'Holberton'
    
    function inner() {
        alert(globalVariable + ' ' + courses);
        
        function inception() {
            alert(globalVariable + ' ' + courses + exclamation);
        }
        inception();
    }
    var exclamation = '!'
    inner();
}
outer();