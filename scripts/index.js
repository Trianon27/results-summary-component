const skils = document.querySelector('.skills');
const skils_list = [
    {
        img: 'assets/images/icon-reaction.svg',
        title: 'Reaction',
        note: '80',
        color: "hsl(0deg 100% 72.37% / 20%)",
        text_color: "hsl(0deg 100% 72.37%)"
    },
    {
        img: 'assets/images/icon-memory.svg',
        title: 'Memory',
        note: '92',
        color: "hsl(39.15deg 100% 67.86% / 20%)",
        text_color: "hsl(39.15deg 100% 67.86%)"
    },
    {
        img: 'assets/images/icon-verbal.svg',
        title: 'Verbal',
        note: '61',
        color: "hsl(146.15deg 44.34% 65.5% / 20%)",
        text_color: "hsl(146.15deg 44.34% 65.5%)"
    },
    {
        img: 'assets/images/icon-visual.svg',
        title: 'Visual',
        note: '72',
        color: "hsl(225.6deg 57.5% 65.9% / 20%)",
        text_color: "hsl(225.6deg 57.5% 65.9%)"
    }
]

//Create card
function createCard() {
    skils_list.forEach((item) => {
        skils.innerHTML += `
        <section class="card" 
        style="
            background-color: ${item.color};
        ">
        <span class="skill"
        style="
            color: ${item.text_color};    
        ">
          <img src=${item.img} alt=${item.title}>
          ${item.title}
        </span>
        <p>
          <span class="note">${item.note}</span> / 100
        </p>
      </section>
        `  
    })
}

createCard();




