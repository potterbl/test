<?php
include('includes/db.php');
$article = mysqli_query($connection, "SELECT * FROM `articles` WHERE `id` = " . (int) $_GET['id']);
$art = mysqli_fetch_assoc($article);
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
			<div class="article__text">
				<h2 style="text-align: center;"><?php echo $art['title']; ?></h2>
				<p><?php
					echo $art['text'];
				?></p>
			</div>
		</div>
	</main>
	<br>
	<?php include('includes/footer.php') ?>
</body>
</html>