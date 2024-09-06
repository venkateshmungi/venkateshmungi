<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Website Header</title>  
    <script src="https://cdn.tailwindcss.com"></script>  
    <style>  
        .nav-link {  
            @apply text-gray-600 hover:text-gray-900 transition duration-300;  
        }  
        .nav-link.active {  
            @apply text-gray-900;  
        }  
    </style>  
</head>  
<body>  
    <header class="bg-white py-4 shadow-md">  
        <nav class="container mx-auto flex justify-between items-center">  
            <a href="#" class="text-2xl font-bold text-gray-900">Logo</a>  
            <ul class="flex items-center space-x-4">  
                <li><a href="#" class="nav-link">Home</a></li>  
                <li><a href="#" class="nav-link">About</a></li>  
                <li><a href="#" class="nav-link">Contact</a></li>  
            </ul>  
        </nav>  
    </header>  
</body>  
</html>  
