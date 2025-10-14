<?php
    $file_content="konten-$halaman.html";

    if (file_exists($file_content))
        {
            include $file_content;
    }
    else {
        echo "
        <main class='container'>
        <div class='alert alert-warning'>Halaman tidak ditemukan</div>
        ";
    }
        
?>