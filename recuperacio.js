document.addEventListener("DOMContentLoaded", () => {
    selectedIngredient = localStorage.getItem("selectedIngredient   ");
    ingredientsSeleccionats = [];
    localStorage.setItem("ingredientsSeleccionats", JSON.stringify(ingredientsSeleccionats));
    ingredientsSeleccionats = localStorage.getItem("ingredientsSeleccionats") ? JSON.parse(localStorage.getItem("ingredientsSeleccionats")) : [];



    document.getElementById('afegir-ingredient').addEventListener('click', function() {
        
        const ingredientSelect = document.getElementById('ingredient');
        const selectedIngredient = ingredientSelect.options[ingredientSelect.selectedIndex].text;
    
        if (selectedIngredient !== "Ingredients Disponibles") {
            const taulaPreparacio = document.getElementById('taula-preparacio');
            const ingredientDiv = document.createElement('div');
            ingredientDiv.textContent = selectedIngredient;
            taulaPreparacio.appendChild(ingredientDiv);
        }
        ingredientsSeleccionats.push(selectedIngredient);
        localStorage.setItem("ingredientsSeleccionats", JSON.stringify(ingredientsSeleccionats));
        localStorage.setItem("Ingredient Seleccionat", selectedIngredient);
        console.log(selectedIngredient)
        });
    
        document.getElementById('reiniciar-cuina').addEventListener('click', function() {
            const taulaPreparacio = document.getElementById('taula-preparacio');
            taulaPreparacio.innerHTML = '';
        });
});

    
