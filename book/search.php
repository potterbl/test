<?php
include('includes/db.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title>Поиск по запросу : <?php echo $_GET['search']; ?></title>
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
		<h2 class="head-second">Результаты поиска по запросу "<?php echo $_GET['search'];?>"</h2>
		<div class="second-main__inner">
			<?php
				$fs = $_GET['search'];
				$search_r = mysqli_query($connection, "SELECT * FROM `articles` WHERE `title` LIKE '$fs' OR `text` LIKE '%$fs%' ");
				while( $sres = mysqli_fetch_assoc($search_r) ) {
				?>
				<a href="article.php?id=<?php echo $sres['id']; ?>"  class="image">
					<p class="on-image"><?php echo $sres['title']?></p></a>
				<?php
					}
				?>
		</div>
	</main>
	<br>
	<?php include('includes/footer.php') ?>
</body>
</html>