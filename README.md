<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Website Profile Header</title>  
    <style>  
        body {  
            background-image: url('https://picsum.photos/2000/1000');  
            background-size: cover;  
            background-attachment: fixed;  
        }  
        .header {  
            background-color: rgba(0, 0, 0, 0.5);  
            padding: 20px;  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
        }  
        .profile-picture {  
            width: 50px;  
            height: 50px;  
            border-radius: 50%;  
            margin-right: 10px;  
        }  
    </style>  
</head>  
<body>  
    <div class="header">  
        <div style="display: flex; align-items: center;">  
            <img src="https://picsum.photos/200/300" class="profile-picture" alt="Profile Picture">  
            <h2 style="color: white;">John Doe</h2>  
        </div>  
        <nav>  
            <ul style="list-style: none; display: flex; justify-content: space-between; width: 300px;">  
                <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>  
                <li><a href="#" style="color: white; text-decoration: none;">About</a></li>  
                <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>  
            </ul>  
        </nav>  
    </div>  
</body>  
</html>  
