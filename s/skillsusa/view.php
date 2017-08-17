<?php
$pageTitle = "New Member Register";
?>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, maximum-scale=1">
        <title>SkillsUSA</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>

    <div id="viewContainer">
<?php
$dbhost = 'localhost';
$dbuser = 'skillsadmin';
$dbpass = 'skillsusa';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT firstname, lastname, 
               Gender, programarea
        FROM test5
        ORDER BY  firstname ASC';

mysql_select_db('skills');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
    echo "<div id='viewContain'> " .
    "<div id='view'> " .
    "First Name :{$row['firstname']}  <br> ".
         "Last Name: {$row['lastname']} <br> ".
         "Gender: {$row['Gender']} <br> ".
         "Program Area : {$row['programarea']} <br> ".
         "--------------------------------<br>" .
         "</div>" .
         "</div>";
} 

mysql_close($conn);
?>
</div>
<button onclick="myFunction()">Print this page</button>

<script>
function myFunction() {
    window.print();
}
</script>
</body>
</html>