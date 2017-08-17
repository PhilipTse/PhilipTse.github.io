<?php include("includes/products.php");

if (isset($_GET["id"])) {
    $product_id = $_GET["id"];
    if (isset($products[$product_id])) {
        $product = $products[$product_id];
    }
}
if (!isset($product)) {
    header("Location: shops.php");
    exit(); 
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

        <div class="section page">

            <div class="wrapper">

                <div class="breadcrumb"><a href="shops.php">Shirts</a> &gt; <?php echo $product["name"]; ?></div>

                <div class="shirt-picture">
                    <span>
                        <img src="<?php echo $product["img"]; ?>" alt="<?php echo $product["name"]; ?>">
                    </span>
                </div>

                <div class="shirt-details">

                    <h1><span class="price">$<?php echo $product["price"]; ?></span> <?php echo $product["name"]; ?></h1>

                    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="<?php echo $product["paypal"]; ?>">
                        <input type="hidden" name="item_name" value="<?php echo $product["name"]; ?>">
                        <table>
                        <tr>
                            <th>
                                <input type="hidden" name="on0" value="Size">
                                <label for="os0">Size</label>
                            </th>
                            <td>
                                <select name="os0" id="os0">
                                    <?php foreach($product["sizes"] as $size) { ?>
                                    <option value="<?php echo $size; ?>"><?php echo $size; ?> </option>
                                    <?php } ?>
                                </select>
                            </td>
                        </tr>
                        </table>
                        <input type="submit" value="Add to Cart" name="submit">
                    </form>


                </div>

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