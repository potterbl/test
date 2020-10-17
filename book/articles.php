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
	<main class="second-main">
	<div class="second-main__inner">
			<?php
				$articles = mysqli_query($connection, "SELECT * FROM `articles`");
				$articles1 = mysqli_query($connection, "SELECT * FROM `articles` ORDER BY `views` DESC");
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