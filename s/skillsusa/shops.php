<?php include("includes/products.php"); ?> 
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
								<li><a href="about.html">About</a></li>
								<li><a href="register.php">Join</a></li>
								<li><a href="shop.php">Shop</a></li>
								<li><a href="faq.html">Faq</a></li>

							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>


	<div class="section shirts page">
			<div class="wrapper">
		<h2>Southwest CTA SkillsUSA Shop </h2>
			<ul class="products">
				<?php foreach($products as $product_id => $product) {
						echo "<li>";
						echo '<a href="shop.php?id=' . $product_id . '">';
						echo '<img src ="' . $product["img"] . '"alt="' . $product["name"] . '">';
						echo "<p>View Details</p>";
						echo "</a>";
						echo "</li>";
					} 
				?>
			</ul>

			</div>
	</div>
<!--Footer-->
		<footer class="footer_wrapper" id="contact">
			<div class="container">
				<div class="footer_bottom"><span>Copyright © <a href="http://www.iPhilip.me" style="color:#cccccc;"> Philip Tse</a> </span> </div>
			</div>
		</footer>
		<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery-scrolltofixed.js"></script>
		<script type="text/javascript" src="js/custom.js"></script>
	</body>
</html>