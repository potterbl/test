<?php
include ('includes/db.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title>Books</title>
<!-- 			FONTS			 -->

<link href="https://fonts.googleapis.com/css2?family=Heebo&family=Krona+One&display=swap" rel="stylesheet">

<!-- 			/FONTS 			 -->

<!-- 			CUSTOM			 -->

<link rel="stylesheet" type="text/css" href="includes/css/main.css">

<!-- 			CUSTOM 			 -->
</head>

<body>
	<?php include('includes/header.php') ?>
	<main class="first-main">
		<div class="inner-main">
			<img class="main-book__image" src="includes/image/poster.png">
			<div class="inner-main__text"><h2>Lorem ipsum</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices id justo ut pretium. In hac habitasse platea dictumst. Donec porttitor purus vitae lacus interdum, eget convallis elit eleifend. Aliquam at orci commodo, mollis lacus in, consectetur est. Donec et pellentesque nisl, nec facilisis eros. Maecenas at diam nisl. Ut in scelerisque tortor. Sed sit amet purus nulla. Cras vehicula lacinia nulla vel pellentesque. Vivamus eleifend, metus vitae pulvinar placerat, tellus ipsum accumsan augue, sed tristique felis quam ut lacus. Nulla non erat at velit tristique ultrices vel et sem.</p>
			</div>
		</div>
	</main>
	<br>
	<main class="second-main">
		<a href="/articles.php" style="text-decoration: none;
		margin-left: 25%; "><small>all books</small></a>
		<h2 class="head-second">Most readed</h2>
		<div class="second-main__inner">
			<?php
				$articles = mysqli_query($connection, "SELECT * FROM `articles`");
				$articles1 = mysqli_query($connection, "SELECT * FROM `articles` ORDER BY `views` DESC LIMIT 6");
				 while( $tbook = mysqli_fetch_assoc($articles1) ) {?>
					<a href="/article.php?id=<?php echo $tbook['id']; ?>" class="image"><p class="on-image"><?php echo $tbook['title']; ?></p></a>
			<?php
				};
			?>
		</div>
	</main>
	<br>
	<?php include('includes/footer.php') ?>
</body>
</html>