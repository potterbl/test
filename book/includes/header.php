<?php include('db.php');
$categorie = mysqli_query($connection, "SELECT * FROM `categories`");
?>

<header>
		<div class="reg"><p>reg/log in</p></div>
		<div class="main-header">
			<div class="inner-header"><p>icon</p></div>
			<div class="inner-header"><a href="/" style="text-decoration: none;">NAME</a></div>
			<div class="inner-header">
			<form method="get" action="search.php" >
				<input type="text" name="search" placeholder="search.." required="">
				<input type="submit" name="subBtn" value="search">
			</form></div>
		</div>
		<hr class="header-hr">
	</header>
		<div class="lick-header"><p class="sticky__p"><?php
		while ( $cat = mysqli_fetch_assoc($categorie) ) {?>
			<a href="/categorie.php?cat=<?php echo $cat['id']; ?>" style="text-decoration: none;"><?php echo $cat['title'] . " ";?></a>
		<?php	
		}
		?></p></div>
<br>