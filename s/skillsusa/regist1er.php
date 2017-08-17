<?php
	if($_POST['formSubmit'] == "Submit") 
    {
		$errorMessage = "";
		
		if(empty($_POST['formFirstname'])) 
        {
			$errorMessage .= "<li>You forgot to enter your first name!</li>";
		}
		if(empty($_POST['formLastname'])) 
        {
			$errorMessage .= "<li>You forgot to enter your last name!</li>";
		}
		if(empty($_POST['formGender'])) 
        {
			$errorMessage .= "<li>You forgot to select your Gender!</li>";
		}
		if(empty($_POST['formProgramarea'])) 
        {
			$errorMessage .= "<li>You need to select your program area!</li>";
		}
		if(empty($_POST['formGradyear'])) 
        {
			$errorMessage .= "<li>You need to enter your graduation year!</li>";
		}
		if(empty($_POST['formStudentid'])) 
        {
			$errorMessage .= "<li>You need to enter your student id!</li>";
		}
		if(empty($_POST['formShirtsize'])) 
        {
			$errorMessage .= "<li>You need to enter your shirt size!</li>";
		}
		if(empty($_POST['formJacketsize'])) 
        {
			$errorMessage .= "<li>You need to enter your Skills jacket size!</li>";
		}
		if(empty($_POST['formCompetitions'])) 
        {
			$errorMessage .= "<li>You need to enter what Competitions you're planning to complete in!</li>";
		}

        $varFirstname = $_POST['formFirstname'];
		$varLastname = $_POST['formLastname'];
		$varGender = $_POST['formGender'];
		$varProgramarea = $_POST['formProgramarea'];
		$varGradyear = $_POST['formGradyear'];
		$varStudentid = $_POST['formStudentid'];
		$varShirtsize = $_POST['formShirtsize'];
		$varJacketsize = $_POST['formJacketsize'];
		$varCompetitions = $_POST['formCompetitions'];

		if(empty($errorMessage)) 
        {
			$db = @mysql_connect("fdb3.awardspace.net","873956_skill","skillsusa123");
			if(!$db) die("Error connecting to database.");
			mysql_select_db("873956_skill" ,$db);

			$sql = "INSERT INTO test5 (firstname, lastname, Gender, programarea, gradyear, studentid, shirtsize, jacketsize, competitions) VALUES (".
							PrepSQL($varFirstname) . ", " .
							PrepSQL($varLastname) . ", " .
							PrepSQL($varGender) . ", " .
							PrepSQL($varProgramarea) . ", " .
							PrepSQL($varGradyear) . ", " .
							PrepSQL($varStudentid) . ", " .
							PrepSQL($varShirtsize) . ", " .
							PrepSQL($varJacketsize) . ", " .
							PrepSQL($varCompetitions) . ")";
			mysql_query($sql);
			
			echo "Thank you!";
						exit();
		}
	}
            
    // function: PrepSQL()
    // use stripslashes and mysql_real_escape_string PHP functions
    // to sanitize a string for use in an SQL query
    //
    // also puts single quotes around the string
    //
    function PrepSQL($value)
    {
        // Stripslashes
        if(get_magic_quotes_gpc()) 
        {
            $value = stripslashes($value);
        }

        // Quote
        $value = "'" . mysql_real_escape_string($value) . "'";

        return($value);
    }
?>





       <?php
		    if(!empty($errorMessage)) 
		    {
			    echo("<p>There was an error with your form:</p>\n");
			    echo("<ul>" . $errorMessage . "</ul>\n");
            }
        ?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, maximum-scale=1">
		<title>SkillsUSA</title>
		<link rel="icon" href="favicon.png" type="image/png">
		<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" type="text/css" href="css/style.css?<?php echo time(); ?>" />
		<link href="css/font-awesome.css" rel="stylesheet" type="text/css">
		<link href="css/animate.css" rel="stylesheet" type="text/css">
		<!--[if lt IE 9]>
		<script src="js/respond-1.1.0.min.js"></script>
		<script src="js/html5shiv.js"></script>
		<script src="js/html5element.js"></script>
		<![endif]-->
	</head>
	<body>
		<!--Header_section-->
		<header id="header_wrapper">
			<div class="container">
				<div class="header_box">
					<div class="logo"><a href="index.php"><img src="img/logo.png" alt="logo"></a></div>
					<nav class="navbar navbar-inverse">
						<div class="navbar-header">
						</div>
						<div id="main-nav" class="navStyle">
							<ul class="nav navbar-nav" id="mainNav">
								<li><a href="index.php">Home</a></li>
								<li><a href="register.php">Register</a></li>
								<li><a href="shop.php">Shop</a></li>
								<li><a href="faq.html">Faq</a></li>

							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
		<div id="spacing">
			<h2>Register </h2>
		</div>
		<div class="register">
			<div class="container">
<form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">

			<div id="row-1">
				<label for='formFirstname'>Which is your first name??</label><br/>
				<input type="text" name="formFirstname" maxlength="50" value="<?=$varFirstname;?>" />
			</div>
			<div id="row-2">
				<label for='formLastname'>What is your last name?</label><br/>
				<input type="text" name="formLastname" maxlength="50" value="<?=$varLastname;?>" />
			</div>
			<div id="row-1">
				<label for='formGender'>What is your Gender?</label><br/>
				<select name="formGender">
					<option value="">Select...</option>
					<option value="M"<? if($varGender=="M") echo(" selected=\"selected\"");?>>Male</option>
					<option value="F"<? if($varGender=="F") echo(" selected=\"selected\"");?>>Female</option>
				</select>
			</div>
			<div id="row-2">
				<label for='formGradyear'>What is your graduation year?</label><br/>
				<input type="text" name="formGradyear" maxlength="50" value="<?=$varGradyear;?>" />
			</div>
			<div id="row-1">
				<label for='formProgramarea'>What is your Program Area?</label><br/>
				<select name="formProgramarea">
					<option value="">Select...</option>
					<option value="web"<? if($varProgramarea=="web") echo(" selected=\"selected\"");?>>Web Design & Development</option>
					<option value="game"<? if($varProgramarea=="game") echo(" selected=\"selected\"");?>>Video Game Technology</option>
					<option value="fashion"<? if($varProgramarea=="fashion") echo(" selected=\"selected\"");?>>Fashion Design</option>
					<option value="interior"<? if($varProgramarea=="interior") echo(" selected=\"selected\"");?>>Interior Design</option>
					<option value="engineering"<? if($varProgramarea=="engineering") echo(" selected=\"selected\"");?>>Entertainment Engineering</option>
					<option value="nursing"<? if($varProgramarea=="nursing") echo(" selected=\"selected\"");?>>Nursing</option>
					<option value="respiratory"<? if($varProgramarea=="respiratory") echo(" selected=\"selected\"");?>>Respiratory Therapy</option>
					<option value="automotive"<? if($varProgramarea=="automotive") echo(" selected=\"selected\"");?>>Automotive Service Technology</option>
					<option value="culinary"<? if($varProgramarea=="culinary") echo(" selected=\"selected\"");?>>Culinary Arts</option>
					<option value="dental"<? if($varProgramarea=="dental") echo(" selected=\"selected\"");?>>Dental Assiting</option>
					<option value="hospitality"<? if($varProgramarea=="hospitality") echo(" selected=\"selected\"");?>>Hospitality Travel & Tourism</option>


				</select>
				</div>
					<div id="row-2">
				<label for='formStudentid'>What is your student id?</label><br/>
				<input type="text" name="formStudentid" maxlength="50" value="<?=$varStudentid;?>" />
			</div>

		

			<div id="row-1">
				<label for='formShirtsize'>What is your shirt size?</label><br/>
				<select name="formShirtsize">
					<option value="">Select...</option>
					<option value="S"<? if($varShirtsize=="S") echo(" selected=\"selected\"");?>>Small</option>
					<option value="M"<? if($varShirtsize=="M") echo(" selected=\"selected\"");?>>Medium</option>
					<option value="L"<? if($varShirtsize=="L") echo(" selected=\"selected\"");?>>Large</option>
					<option value="XL"<? if($varShirtsize=="XL") echo(" selected=\"selected\"");?>>Extra Large</option>
				</select>
			</div>
			<div id="row-2">
				<label for='formJacketsize'>What is your Jacket size?</label><br/>
				<select name="formJacketsize">
					<option value="">Select...</option>
					<option value="S"<? if($varJacketsize=="S") echo(" selected=\"selected\"");?>>Small</option>
					<option value="M"<? if($varJacketsize=="M") echo(" selected=\"selected\"");?>>Medium</option>
					<option value="L"<? if($varJacketsize=="L") echo(" selected=\"selected\"");?>>Large</option>
					<option value="XL"<? if($varJacketsize=="XL") echo(" selected=\"selected\"");?>>Extra Large</option>
				</select>
			</div>

						<div id="row-1">
				<label for='formCompetitions'>What compettions are you competing in?</label><br/>
				<select name="formCompetitions">
					<option value="">Select...</option>
					<option value="none"<? if($varCompetitions=="none") echo(" selected=\"selected\"");?>>None</option>
					<option value="1"<? if($varCompetitions=="1") echo(" selected=\"selected\"");?>>3-D Visualization and Animation</option>
					<option value="2"<? if($varCompetitions=="2") echo(" selected=\"selected\"");?>>Action Skills</option>
					<option value="3"<? if($varCompetitions=="3") echo(" selected=\"selected\"");?>>Additive Manufacturing</option>
					<option value="4"<? if($varCompetitions=="4") echo(" selected=\"selected\"");?>>Advertising Design</option>
					<option value="5"<? if($varCompetitions=="5") echo(" selected=\"selected\"");?>>American Spirit</option>
					<option value="6"<? if($varCompetitions=="6") echo(" selected=\"selected\"");?>>Architectural Drafting</option>
					<option value="7"<? if($varCompetitions=="7") echo(" selected=\"selected\"");?>>Audio/Radio Production</option>
					<option value="8"<? if($varCompetitions=="8") echo(" selected=\"selected\"");?>>Automated Manufacturing Technology</option>
					<option value="9"<? if($varCompetitions=="9") echo(" selected=\"selected\"");?>>Automotive Refinishing Technology</option>
					<option value="10"<? if($varCompetitions=="10") echo(" selected=\"selected\"");?>>Automotive Service Technology</option>
					<option value="11"<? if($varCompetitions=="11") echo(" selected=\"selected\"");?>>Aviation Maintenance Technology</option>
					<option value="12"<? if($varCompetitions=="12") echo(" selected=\"selected\"");?>>Basic Health Care Skills</option>
					<option value="13"<? if($varCompetitions=="13") echo(" selected=\"selected\"");?>>Broadcast News Production</option>
					<option value="14"<? if($varCompetitions=="14") echo(" selected=\"selected\"");?>>Building Maintenance</option>
					<option value="15"<? if($varCompetitions=="15") echo(" selected=\"selected\"");?>>Cabinetmaking</option>
					<option value="16"<? if($varCompetitions=="16") echo(" selected=\"selected\"");?>>Career Pathways Showcase</option>
					<option value="17"<? if($varCompetitions=="17") echo(" selected=\"selected\"");?>>Carpentry</option>
					<option value="18"<? if($varCompetitions=="18") echo(" selected=\"selected\"");?>>Chapter Business Procedure</option>
					<option value="19"<? if($varCompetitions=="19") echo(" selected=\"selected\"");?>>Chapter Display</option>
					<option value="20"<? if($varCompetitions=="20") echo(" selected=\"selected\"");?>>CNC Milling Specialist</option>
					<option value="21"<? if($varCompetitions=="21") echo(" selected=\"selected\"");?>>CNC Technician</option>
					<option value="22"<? if($varCompetitions=="22") echo(" selected=\"selected\"");?>>CNC Turning Specialist</option>
					<option value="23"<? if($varCompetitions=="23") echo(" selected=\"selected\"");?>>Collision Repair Technology</option>
					<option value="24"<? if($varCompetitions=="24") echo(" selected=\"selected\"");?>>Commercial Baking</option>
					<option value="25"<? if($varCompetitions=="25") echo(" selected=\"selected\"");?>>Community Action Project</option>
					<option value="26"<? if($varCompetitions=="26") echo(" selected=\"selected\"");?>>Community Service</option>
					<option value="27"<? if($varCompetitions=="27") echo(" selected=\"selected\"");?>>Computer Programming</option>
					<option value="28"<? if($varCompetitions=="28") echo(" selected=\"selected\"");?>>Cosmetology</option>
					<option value="29"<? if($varCompetitions=="29") echo(" selected=\"selected\"");?>>Crime Scene Investigation</option>
					<option value="30"<? if($varCompetitions=="30") echo(" selected=\"selected\"");?>>Criminal Justice</option>
					<option value="31"<? if($varCompetitions=="31") echo(" selected=\"selected\"");?>>Culinary Arts</option>
					<option value="32"<? if($varCompetitions=="32") echo(" selected=\"selected\"");?>>Customer Service</option>
					<option value="33"<? if($varCompetitions=="33") echo(" selected=\"selected\"");?>>Dental Assisting</option>
					<option value="34"<? if($varCompetitions=="34") echo(" selected=\"selected\"");?>>Diesel Equipment Technology</option>
					<option value="35"<? if($varCompetitions=="35") echo(" selected=\"selected\"");?>>Digital Cinema Production</option>
					<option value="36"<? if($varCompetitions=="36") echo(" selected=\"selected\"");?>>Early Childhood Education</option>
					<option value="37"<? if($varCompetitions=="37") echo(" selected=\"selected\"");?>>Electrical Construction Wiring</option>
					<option value="38"<? if($varCompetitions=="38") echo(" selected=\"selected\"");?>>Electronics Technology</option>
					<option value="39"<? if($varCompetitions=="39") echo(" selected=\"selected\"");?>>Employment Application Process</option>
					<option value="40"<? if($varCompetitions=="40") echo(" selected=\"selected\"");?>>Engineering Technology/Design</option>
					<option value="41"<? if($varCompetitions=="41") echo(" selected=\"selected\"");?>>Entrepreneurship</option>
					<option value="42"<? if($varCompetitions=="42") echo(" selected=\"selected\"");?>>Esthetics</option>
					<option value="43"<? if($varCompetitions=="43") echo(" selected=\"selected\"");?>>Extemporaneous Speaking</option>
					<option value="44"<? if($varCompetitions=="44") echo(" selected=\"selected\"");?>>Firefighting</option>
					<option value="45"<? if($varCompetitions=="45") echo(" selected=\"selected\"");?>>First Aid/CPR</option>
					<option value="46"<? if($varCompetitions=="46") echo(" selected=\"selected\"");?>>Graphic Communications</option>
					<option value="47"<? if($varCompetitions=="47") echo(" selected=\"selected\"");?>>Graphic Imaging Sublimation</option>
					<option value="48"<? if($varCompetitions=="48") echo(" selected=\"selected\"");?>>Health Knowledge Bowl</option>
					<option value="49"<? if($varCompetitions=="49") echo(" selected=\"selected\"");?>>Health Occupations Professional Portfolio</option>
					<option value="50"<? if($varCompetitions=="50") echo(" selected=\"selected\"");?>>Heating, Ventilation, Air Conditioning & Refrigeration</option>
					<option value="51"<? if($varCompetitions=="51") echo(" selected=\"selected\"");?>>Humanoid Robotics</option>
					<option value="52"<? if($varCompetitions=="52") echo(" selected=\"selected\"");?>>Industrial Motor Control</option>
					<option value="53"<? if($varCompetitions=="53") echo(" selected=\"selected\"");?>>Information Technology Services</option>
					<option value="54"<? if($varCompetitions=="54") echo(" selected=\"selected\"");?>>Interactive Application and Game Development</option>
					<option value="55"<? if($varCompetitions=="55") echo(" selected=\"selected\"");?>>Internetworking</option>
					<option value="56"<? if($varCompetitions=="56") echo(" selected=\"selected\"");?>>Job Interview</option>
					<option value="57"<? if($varCompetitions=="57") echo(" selected=\"selected\"");?>>Job Skill Demonstration A</option>
					<option value="58"<? if($varCompetitions=="58") echo(" selected=\"selected\"");?>>Job Skill Demonstration Open</option>
					<option value="59"<? if($varCompetitions=="59") echo(" selected=\"selected\"");?>>Major Appliance and Refrigeration Technology</option>
					<option value="60"<? if($varCompetitions=="60") echo(" selected=\"selected\"");?>>Marine Service Technology</option>
					<option value="61"<? if($varCompetitions=="61") echo(" selected=\"selected\"");?>>Masonry</option>
					<option value="62"<? if($varCompetitions=="62") echo(" selected=\"selected\"");?>>Mechatronics</option>
					<option value="63"<? if($varCompetitions=="63") echo(" selected=\"selected\"");?>>Medical Assisting</option>
					<option value="64"<? if($varCompetitions=="64") echo(" selected=\"selected\"");?>>Medical Math</option>
					<option value="65"<? if($varCompetitions=="65") echo(" selected=\"selected\"");?>>Medical Terminology</option>
					<option value="66"<? if($varCompetitions=="66") echo(" selected=\"selected\"");?>>Mobile Electronics Installation</option>
					<option value="67"<? if($varCompetitions=="67") echo(" selected=\"selected\"");?>>Mobile Robotics Technology</option>
					<option value="68"<? if($varCompetitions=="68") echo(" selected=\"selected\"");?>>Motorcycle Service Technology</option>
					<option value="69"<? if($varCompetitions=="69") echo(" selected=\"selected\"");?>>Nail Care</option>
					<option value="70"<? if($varCompetitions=="70") echo(" selected=\"selected\"");?>>Nurse Assisting</option>
					<option value="71"<? if($varCompetitions=="71") echo(" selected=\"selected\"");?>>Occupational Health and Safety</option>
					<option value="72"<? if($varCompetitions=="72") echo(" selected=\"selected\"");?>>Opening and Closing Ceremonies</option>
					<option value="73"<? if($varCompetitions=="73") echo(" selected=\"selected\"");?>>Outstanding Chapter</option>
					<option value="74"<? if($varCompetitions=="74") echo(" selected=\"selected\"");?>>Photography</option>
					<option value="75"<? if($varCompetitions=="75") echo(" selected=\"selected\"");?>>Pin Design</option>
					<option value="76"<? if($varCompetitions=="76") echo(" selected=\"selected\"");?>>Plumbing</option>
					<option value="77"<? if($varCompetitions=="77") echo(" selected=\"selected\"");?>>Power Equipment Technology</option>
					<option value="78"<? if($varCompetitions=="78") echo(" selected=\"selected\"");?>>Practical Nursing</option>
					<option value="79"<? if($varCompetitions=="79") echo(" selected=\"selected\"");?>>Prepared Speech</option>
					<option value="80"<? if($varCompetitions=="80") echo(" selected=\"selected\"");?>>Principles of Engineering/Technology</option>
					<option value="81"<? if($varCompetitions=="81") echo(" selected=\"selected\"");?>>Promotional Bulletin Board</option>
					<option value="82"<? if($varCompetitions=="82") echo(" selected=\"selected\"");?>>Quiz Bowl</option>
					<option value="83"<? if($varCompetitions=="83") echo(" selected=\"selected\"");?>>Related Technical Math</option>
					<option value="84"<? if($varCompetitions=="84") echo(" selected=\"selected\"");?>>Residential Systems Installation and Maintenance</option>
					<option value="85"<? if($varCompetitions=="85") echo(" selected=\"selected\"");?>>Restaurant Service</option>
					<option value="86"<? if($varCompetitions=="86") echo(" selected=\"selected\"");?>>Robotics: Urban Search and Rescue</option>
					<option value="87"<? if($varCompetitions=="87") echo(" selected=\"selected\"");?>>Robotics and Automation Technology</option>
					<option value="88"<? if($varCompetitions=="88") echo(" selected=\"selected\"");?>>Screen Printing Technology</option>
					<option value="89"<? if($varCompetitions=="89") echo(" selected=\"selected\"");?>>Sheet Metal</option>
					<option value="90"<? if($varCompetitions=="90") echo(" selected=\"selected\"");?>>T-shirt Design</option>
					<option value="91"<? if($varCompetitions=="91") echo(" selected=\"selected\"");?>>Team Engineering Challenge</option>
					<option value="92"<? if($varCompetitions=="92") echo(" selected=\"selected\"");?>>TeamWorks</option>
					<option value="93"<? if($varCompetitions=="93") echo(" selected=\"selected\"");?>>Technical Computer Applications</option>
					<option value="94"<? if($varCompetitions=="94") echo(" selected=\"selected\"");?>>Technical Drafting</option>
					<option value="95"<? if($varCompetitions=="95") echo(" selected=\"selected\"");?>>Telecommunications Cabling</option>
					<option value="96"<? if($varCompetitions=="96") echo(" selected=\"selected\"");?>>Television (Video) Production</option>
					<option value="97"<? if($varCompetitions=="97") echo(" selected=\"selected\"");?>>Web Design</option>
					<option value="98"<? if($varCompetitions=="98") echo(" selected=\"selected\"");?>>Welding</option>
					<option value="99"<? if($varCompetitions=="99") echo(" selected=\"selected\"");?>>Welding Fabrication</option>
					<option value="100"<? if($varCompetitions=="100") echo(" selected=\"selected\"");?>>Welding Art/Sculpture</option>
				</select>
			</div>
			<input id="submit_btn" type="submit" name="formSubmit" value="Submit" />
		</form>
		</div>
</div>


		
		<!--Footer-->
		<footer class="footer_wrapper" id="contact">
			<div class="container">
				<div class="footer_bottom"><span>Copyright © Philip Tse. </span> </div>
			</div>
		</footer>
		<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery-scrolltofixed.js"></script>
		<script type="text/javascript" src="js/custom.js"></script>
	</body>
</html>