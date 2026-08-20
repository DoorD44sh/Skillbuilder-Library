const pageContent = document.getElementById("pageContent");
const navItems = document.querySelectorAll("[data-page]");

const pages = {
    home: {
        title: "Welcome to Skillbuilder",
        text: "Your personal Skill Builder library."
    },
    movesets: {
        title: "Movesets",
        text: "Your saved Skill Builder movesets."
    },
    meshes: {
        title: "Meshes",
        text: "Your saved mesh assets."
    },
    visual: {
        title: "Visual",
        text: "Your saved visual assets."
    },
    particles: {
        title: "Particle Emitter",
        text: "Your saved particle emitter assets."
    },
    sound: {
        title: "Sound",
        text: "Your saved sound assets."
    },
    favorites: {
        title: "Favorites",
        text: "Your favorite library items."
    },
    settings: {
        title: "Settings",
        text: "Skillbuilder settings."
    }
};

navItems.forEach(button => {
    button.addEventListener("click", () => {
        const page = button.dataset.page;

        if (!pages[page]) return;

        pageContent.innerHTML = `
            <h1>${pages[page].title}</h1>
            <p>${pages[page].text}</p>
        `;

        document.querySelectorAll(".nav-item").forEach(item => {
            item.classList.remove("active");
        });

        document.querySelectorAll(`[data-page="${page}"]`).forEach(item => {
            item.classList.add("active");
        });
    });
});

document.getElementById("collapseBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("collapsed");
});
