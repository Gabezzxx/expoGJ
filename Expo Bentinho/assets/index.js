function buscarapi() {
    var BuscarApi = document.getElementById("BuscarApi").value;
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then(response => response.json())
      .then(data => mostrarFilme(data))
      .catch(error => console.error('Erro:', error));
  }
  
  function mostrarApi(data) {
    var ApiContainer = document.getElementById("ApiContainer");
    apiContainer.innerHTML = "";
  
    if (data.data.length === 0) {
      apiContainer.innerHTML = "<p>Nenhuma Api encontrada.</p>";
      return;
    }
  
    data.data.forEach(api => {
      var apiDiv = document.createElement("div");
      apiDiv.classList.add("Api");
  
      var imagem = document.createElement("img");
      imagem.src = carta.images.small;
      imagem.alt = carta.name;
  
      apiDiv.appendChild(imagem);
  
      apiContainer.appendChild(cartaDiv);
    });
  }


  