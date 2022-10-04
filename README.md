<!DOCTYPE html>
<html lang="en">
<head>
<title>Stringify.me</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
</head>

<body onload="onLoad()">

<div id="maindiv"></div>


<script>
function onLoad(){
  fetch('profile.json')
  .then((resp) => resp.json()) 
  .then(function(profilejson) {
	  const templateurl  = profilejson.theme.url.replace("github.com", "raw.githubusercontent.com") + "/master/template.html";
	  fetch(templateurl)
	  .then((resp) => resp.text()) 
	  .then(function(template) {
			document.title = profilejson.basics.name;
			profilejson.basics.picture_fullpath = profilejson.basics.picture;
			var __html = Mustache.render(template, profilejson);
			document.getElementById("maindiv").innerHTML = __html;
		});
    });
}

</script>

</body>
</html>
<h1 align="left">Hi 👋, I am Vekatesh Mungi</h1>
<img src="https://pbs.twimg.com/profile_images/838312650190778373/uhsvbpKW_400x400.jpg">
<h3 align="left"><i>I am Data scientist with two years of experience and strong presentation and interpersonal skills.</i></h3>

- 🔭 I’m currently working on **Machine Learning Projects**

- 👯 I’m looking to collaborate on **OpenSource Projects**

- 👨‍💻 All of my projects are available at [https://github.com/venkateshmungi?tab=repositories](https://github.com/venkateshmungi?tab=repositories)

- 💬 Ask me about **Machine Learning , AI**

- 📫 How to reach me **venkateshmungi1247@gmail.com**
<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://hadoop.apache.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" alt="hadoop" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </a> <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer"> <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width="40" height="40"/> </a> <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> </p>
