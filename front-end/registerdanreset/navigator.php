<?php
include("navbar.html");

$halaman='register';
if(!empty($_GET['menu']))
{
    $halaman = $_GET['menu'];
}

include("konten.php");
include("footer.html");
?>