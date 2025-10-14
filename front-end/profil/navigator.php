<?php
include("../template-frontend/navbar.html");
include("../template-frontend/header.php");
$halaman='utama';
if(!empty($_GET['menu']))
{
    $halaman = $_GET['menu'];
}
include("konten.php");
include("../template-frontend/footer.html");
?>
