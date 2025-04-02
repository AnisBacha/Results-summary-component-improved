

document.addEventListener("DOMContentLoaded", async () => {
    const summary = document.getElementById('summary')

    try{
        const createItem = (parent, item) =>{
            const scoreCard = document.createElement("div");
            scoreCard.classList.add("main__score-card");
    
    
            const categorySpan = document.createElement("div");
            categorySpan.style.display= 'flex';
            
            categorySpan.innerHTML = `<img class='icon' src=".${item.icon}" alt="icon"> <p class='category'> ${item.category} </p>`;
            categorySpan.querySelector(".category").style.color = item.color;


            const scoreSpan = document.createElement("p");
            scoreSpan.innerHTML = `<strong class="score">${item.score} </strong> <span class="total-score">/ 100</span>`;

            scoreCard.appendChild(categorySpan);
            scoreCard.appendChild(scoreSpan);
            parent.appendChild(scoreCard);

        }
        

        const response = await fetch("../data.json");
        const data = await response.json(); // Convert response to JSON
        console.log("Fetched Data:", data); // Debugging check

        data.forEach(item => {
            createItem(summary, item) 
            
         });
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }

    
    
});

