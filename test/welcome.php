<?php
session_start();
if(!isset($_SESSION['user_session'])){
	header("Location: index.php");
} ?>
<div>
		Hello, <?php echo $_SESSION['user_session'] ?><br><br>Welcome to the page.<br><br>
    </div>		
</div>
