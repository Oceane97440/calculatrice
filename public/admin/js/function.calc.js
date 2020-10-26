  //fonction qui évalue le chiffre et renvoie la sortie
  function calculer() {
      let a = document.getElementById("output").value
      let b = eval(a)
      document.getElementById("output").value = b

      console.log(a)
      console.log(b)

      localStorage.setItem(a, b);

      // Accéder à des données enregistrées
      alert("resultat = " + localStorage.getItem(a));
      document.getElementById("resultat").value=b

      
      var nbr_resultat= localStorage.length
      console.log(nbr_resultat)

    

      if (nbr_resultat>10) {
        
        alert("historique limité à 10 resultat" + localStorage.clear());

      }

   
  }
  //fonction qui affiche la valeur
  function afficher(val) {
      console.log(val)
      document.getElementById("output").value += val
  }
  //fonction qui efface l'écran 
  function effacer() {
      document.getElementById("output").value = ""
  }