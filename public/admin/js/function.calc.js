  //fonction qui évalue le chiffre et renvoie la sortie
  function calculer() {

      let a = document.getElementById("output").value
      //eval permet faire le calcul sous forme de caratère a= 2+2  b=4 a pas utiliser en front: pas sécuriser
      let b = eval(a)
      
      document.getElementById("output").value = b

  

     //setItem stock dans le local (hey,value) ex:(2+2,4)
      localStorage.setItem(a, b);

      //initialise la valeur de input span

     document.getElementById("calcule").innerHTML = "";

     //boucle sur le nombre de stockage du local storage
     for (i = 0; i < localStorage.length; i++) {

      //recup tout les key (le calcul)
     x = localStorage.key(i);

     //recup le resultat des chaque key
     result=localStorage.getItem(x)

     //affiche les resultat dans la span ex: 4+1=5
     document.getElementById("calcule").innerHTML += x +" = "+ result + "<br>";
     }


    
      // Accéder à des données enregistrées
    //  alert("resultat = " + localStorage.getItem(a));


      if (localStorage.length>10) {
        
        alert("L'historique est limité à 10 resultats max" + localStorage.clear());

      }

   
  }
  //fonction qui affiche la valeur
  function afficher(val) {
      document.getElementById("output").value += val
  }
  //fonction qui efface l'écran 
  function effacer() {
      document.getElementById("output").value = ""
  }
    
