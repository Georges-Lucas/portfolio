<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/accueil.css">
    <title>Accueil - Portfolio</title>
</head>
<body>
    <header>
        <h1>Acceuil</h1>
        <nav>
            <a href="./pages/cv.html">CV</a>
            <a href="./pages/A_propos.html">A-propos</a>
        </nav>
    </header>

    <main>
        <?php 
            fetch("https://api.github.com/users/SafiDial");

        //    "https://api.github.com/users/SafiDial";
           
        ?>
    </main>

    <footer>
        <p>Georges-Lucas GRONDIN© - 2024</p>
    </footer>
    <script src="./js/script.js"></script>
</body>
</html>