/* déclaration des variables, deux exemples possibles rencontrés
La version ci-dessous avec 'getElementById()'
ou bien remplacer 'getElementById()' par 'querySelector('img')' */
var image = document.getElementById('photo');
/* 'mouseover' --> action déclenchée au survol de la souris
'mouseout' --> action déclenchée dès que la souris ne survol plus l'élément concerné */
image.addEventListener('mouseover', image2)
function image2(){
  image.src ='assets/img/img2.jpg';
};
image.addEventListener('mouseout', image1)
function image1(){
  image.src ='assets/img/img1.jpeg';
};
