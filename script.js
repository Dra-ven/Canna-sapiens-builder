document.querySelectorAll(".trait-options").forEach((container) => {
    container.addEventListener("click", (event) => {
        const box = event.target.closest(".trait-box");
        if (!box) return; 
    
        const traitType = container.id.replace("-options", ""); 
        const selectedTrait = box.dataset.trait;
    
        container.querySelectorAll(".trait-box").forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
    
        document.getElementById(`${traitType}-trait`).src = `img/${selectedTrait}.png`;
    });
    });
    
    const traits = {
        background: ["blue", "white", "red", "green", "dred", "pink", "grey", "brown", "black", "gold", "purple", "gr1", "gr2", "gr3", "gr4", "gr5","gr6"],
        eyes: ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "e11", "e12", "e13", "e14", "e15", "e16", "e17", "a2", "a3", "a6"],
        clothing: ["c1", "c2", "c3", "c4", "c5", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16", "c17", "c19", "c20", "c21", "c22", "c23", "c24", "c25", "c26", "c27", "c28", "c29", "c30", "c31", "c32", "c33", "c34", "c35", "c36", "c37", "c38", "c39", "c40", "c41", "c42", "c43"],
        mouth: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11", "m12", "m13", "m14"],
        hand: ["hs1", "hs2", "hs3", "hs4", "hs5", "hs6", "hs7", "hs8", "hs9", "hs10", "hs11", "hs12", "hs13", "hs14", "hs15", "hs16", "hs17", "hs18", "hs19", "hs20", "hs21"],
        accessories: ["a4", "a5", "a7"],
        hair: ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "hw1", "hw2", "hw3", "hw4", "hw5", "hw6", "hw7", "hw8"]
    };
    
    document.getElementById('randomize-btn').addEventListener('click', () => {
        Object.keys(traits).forEach((traitType) => {
            const options = traits[traitType];
            const randomTrait = options[Math.floor(Math.random() * options.length)];
            document.getElementById(`${traitType}-trait`).src = `img/${randomTrait}.png`;
        });
    });

    function saveImage() {
        const previewElement = document.getElementById("canna-preview");
        html2canvas(previewElement).then((canvas) => {
            const link = document.createElement("a");
            link.download = "canna-design.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    }
    document.getElementById('save-image-btn').addEventListener('click', saveImage);
