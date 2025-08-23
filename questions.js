// Base de données des questions QCM Arbitrage Football - Lois du Jeu 2025/26
// Structure organisée par rôle d'arbitre avec thèmes et niveaux de difficulté

const questionsByRole = {
    // Questions pour Arbitre Central
    central: [
        // LOI 1 : LE TERRAIN DE JEU
        {
            id: 1,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Quelle est la largeur maximale autorisée d'un terrain de football international ?",
            options: ["68 m", "75 m", "90 m", "100 m"],
            answer: "68 m",
            difficulty: "easy",
            explanation: "La largeur maximale d'un terrain international est de 68 m (minimum 64 m, maximum 68 m)"
        },
        {
            id: 2,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Quelle est la longueur minimale d'un terrain pour un match international ?",
            options: ["90 m", "100 m", "105 m", "110 m"],
            answer: "100 m",
            difficulty: "easy",
            explanation: "La longueur minimale pour un match international est de 100 m (maximum 110 m)"
        },
        {
            id: 3,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Quelle est la taille standard d'un but de football ?",
            options: ["7,32 m de large et 2,44 m de haut", "7 m de large et 2,50 m de haut", "8 m de large et 2,40 m de haut", "7,50 m de large et 2,45 m de haut"],
            answer: "7,32 m de large et 2,44 m de haut",
            difficulty: "easy",
            explanation: "Les dimensions standard sont 7,32 m × 2,44 m selon les Lois du Jeu FIFA"
        },
        {
            id: 4,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Où doit être placé le drapeau de coin ?",
            options: ["À 1 m du coin", "Directement dans l'angle du terrain", "À 0,5 m du coin", "Il n'est pas obligatoire"],
            answer: "Directement dans l'angle du terrain",
            difficulty: "medium",
            explanation: "Le drapeau doit être placé directement dans l'angle du terrain avec un mât non pointu d'au moins 1,50 m de hauteur"
        },
        {
            id: 5,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Le rond central a quel rayon ?",
            options: ["7,32 m", "8 m", "9,15 m", "10 m"],
            answer: "9,15 m",
            difficulty: "medium",
            explanation: "Le rayon du rond central est de 9,15 m, soit la même distance que pour les coups francs"
        },
        {
            id: 6,
            theme: "Loi 1 - Le terrain de jeu",
            question: "La surface de réparation mesure :",
            options: ["12 m × 20 m", "16,5 m × 40,3 m", "18 m × 40 m", "20 m × 50 m"],
            answer: "16,5 m × 40,3 m",
            difficulty: "medium",
            explanation: "La surface de réparation mesure 16,5 m de profondeur × 40,3 m de large (16,5 m de chaque côté du but + 7,32 m de largeur du but)"
        },
        {
            id: 7,
            theme: "Loi 1 - Le terrain de jeu",
            question: "Quelle est la distance entre le point de penalty et la ligne de but ?",
            options: ["9,15 m", "10 m", "11 m", "12 m"],
            answer: "11 m",
            difficulty: "easy",
            explanation: "La distance est de 11 m entre le point de penalty et la ligne de but"
        },

        // LOI 2 : LE BALLON
        {
            id: 8,
            theme: "Loi 2 - Le ballon",
            question: "Quelle est la circonférence réglementaire d'un ballon de football ?",
            options: ["60-62 cm", "66-70 cm", "68-70 cm", "70-72 cm"],
            answer: "68-70 cm",
            difficulty: "medium",
            explanation: "La circonférence doit être comprise entre 68 et 70 cm au début du match"
        },
        {
            id: 9,
            theme: "Loi 2 - Le ballon",
            question: "Quel est le poids réglementaire d'un ballon au début du match ?",
            options: ["400-450 g", "410-450 g", "420-450 g", "430-460 g"],
            answer: "410-450 g",
            difficulty: "medium",
            explanation: "Le poids doit être compris entre 410 et 450 grammes au début du match"
        },
        {
            id: 10,
            theme: "Loi 2 - Le ballon",
            question: "Si le ballon éclate pendant le match, que doit faire l'arbitre ?",
            options: ["Arrêter le jeu immédiatement", "Laisser continuer jusqu'à la prochaine sortie", "Attendre que l'action se termine", "Donner un coup franc"],
            answer: "Arrêter le jeu immédiatement",
            difficulty: "easy",
            explanation: "L'arbitre doit arrêter le jeu immédiatement et reprendre par une balle à terre à l'endroit où le ballon défectueux était situé"
        },

        // LOI 3 : LES JOUEURS
        {
            id: 11,
            theme: "Loi 3 - Les joueurs",
            question: "Combien de joueurs maximum peut avoir une équipe sur le terrain ?",
            options: ["10", "11", "12", "15"],
            answer: "11",
            difficulty: "easy",
            explanation: "Une équipe peut avoir maximum 11 joueurs sur le terrain, incluant le gardien de but"
        },
        {
            id: 12,
            theme: "Loi 3 - Les joueurs",
            question: "Quel est le nombre minimum de joueurs pour qu'une équipe puisse continuer le match ?",
            options: ["6", "7", "8", "9"],
            answer: "7",
            difficulty: "medium",
            explanation: "Une équipe doit avoir au minimum 7 joueurs pour continuer le match"
        },
        {
            id: 13,
            theme: "Loi 3 - Les joueurs",
            question: "Combien de remplacements maximum sont autorisés en match officiel ?",
            options: ["3", "5", "7", "Illimité"],
            answer: "5",
            difficulty: "easy",
            explanation: "Depuis 2020, 5 remplacements sont autorisés en match officiel, répartis sur 3 fenêtres de remplacement"
        },

        // LOI 4 : L'ÉQUIPEMENT DES JOUEURS
        {
            id: 14,
            theme: "Loi 4 - L'équipement",
            question: "Quelle est la couleur obligatoire des protège-tibias ?",
            options: ["Blanc", "Noir", "Même couleur que les chaussettes", "Peu importe"],
            answer: "Peu importe",
            difficulty: "medium",
            explanation: "Il n'y a pas de couleur obligatoire pour les protège-tibias, ils doivent simplement être recouverts par les chaussettes"
        },
        {
            id: 15,
            theme: "Loi 4 - L'équipement",
            question: "Le port des bijoux est-il autorisé ?",
            options: ["Oui, tous types", "Seulement les alliances", "Seulement si ils sont recouverts", "Non, interdits"],
            answer: "Non, interdits",
            difficulty: "easy",
            explanation: "Tous les bijoux sont interdits et doivent être retirés. Les alliances plates peuvent être recouvertes par du sparadrap"
        },

        // LOI 5 : L'ARBITRE
        {
            id: 16,
            theme: "Loi 5 - L'arbitre",
            question: "L'arbitre peut-il revenir sur une décision après avoir repris le jeu ?",
            options: ["Oui, toujours", "Oui, avec l'aide de la VAR", "Seulement pour les cartons", "Non, jamais"],
            answer: "Non, jamais",
            difficulty: "medium",
            explanation: "Une fois le jeu repris, l'arbitre ne peut plus revenir sur sa décision, sauf avec assistance VAR pour certaines situations"
        },
        {
            id: 17,
            theme: "Loi 5 - L'arbitre",
            question: "Dans quels cas l'arbitre peut-il donner un avantage ?",
            options: ["Seulement pour les fautes", "Pour toutes les infractions", "Jamais en surface", "Seulement hors surface"],
            answer: "Pour toutes les infractions",
            difficulty: "medium",
            explanation: "L'arbitre peut donner l'avantage pour toute infraction, y compris en surface de réparation"
        },

        // LOI 6 : LES ARBITRES ASSISTANTS
        {
            id: 18,
            theme: "Loi 6 - Les arbitres assistants",
            question: "Dans quelle situation l'arbitre assistant peut-il entrer sur le terrain ?",
            options: ["Jamais", "Pour signaler une faute grave", "Si l'arbitre le demande", "En cas de blessure de l'arbitre"],
            answer: "Si l'arbitre le demande",
            difficulty: "hard",
            explanation: "L'arbitre assistant ne peut entrer sur le terrain que si l'arbitre central le lui demande expressément"
        },

        // LOI 7 : DURÉE DU MATCH
        {
            id: 19,
            theme: "Loi 7 - Durée du match",
            question: "Quelle est la durée réglementaire d'une mi-temps ?",
            options: ["40 minutes", "45 minutes", "50 minutes", "Variable selon la compétition"],
            answer: "45 minutes",
            difficulty: "easy",
            explanation: "Chaque mi-temps dure 45 minutes, plus le temps additionnel accordé par l'arbitre"
        },
        {
            id: 20,
            theme: "Loi 7 - Durée du match",
            question: "Quelle est la durée maximum de la pause entre les deux mi-temps ?",
            options: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"],
            answer: "15 minutes",
            difficulty: "medium",
            explanation: "La pause ne doit pas dépasser 15 minutes, sauf autorisation de l'arbitre"
        },

        // LOI 8 : LE COUP D'ENVOI
        {
            id: 21,
            theme: "Loi 8 - Le coup d'envoi",
            question: "Au coup d'envoi, les joueurs adverses doivent être à quelle distance minimum du ballon ?",
            options: ["7,32 m", "9,15 m", "10 m", "Dans leur moitié de terrain"],
            answer: "Dans leur moitié de terrain",
            difficulty: "medium",
            explanation: "Tous les joueurs adverses doivent être dans leur propre moitié de terrain au coup d'envoi"
        },
        {
            id: 22,
            theme: "Loi 8 - Le coup d'envoi",
            question: "Peut-on marquer directement sur coup d'envoi ?",
            options: ["Oui, dans les deux buts", "Oui, seulement dans le but adverse", "Non, jamais", "Seulement après rebond"],
            answer: "Oui, seulement dans le but adverse",
            difficulty: "medium",
            explanation: "On peut marquer directement dans le but adverse, mais pas dans son propre but sur coup d'envoi"
        }
    ],

    // Questions pour Arbitre Assistant
    assistant: [
        // Questions spécifiques aux arbitres assistants
        {
            id: 101,
            theme: "Hors-jeu",
            question: "Un joueur en position de hors-jeu devient-il fautif s'il ne touche pas le ballon ?",
            options: ["Oui, toujours", "Non, jamais", "Seulement s'il gêne", "Seulement s'il participe au jeu"],
            answer: "Seulement s'il participe au jeu",
            difficulty: "hard",
            explanation: "Un joueur en position de hors-jeu n'est fautif que s'il participe activement au jeu en touchant le ballon, en gênant un adversaire ou en tirant avantage de sa position"
        },
        {
            id: 102,
            theme: "Hors-jeu",
            question: "Un joueur peut-il être en hors-jeu dans sa propre moitié de terrain ?",
            options: ["Oui", "Non", "Seulement au coup d'envoi", "Seulement sur corner"],
            answer: "Non",
            difficulty: "easy",
            explanation: "Un joueur ne peut jamais être en position de hors-jeu dans sa propre moitié de terrain"
        },
        {
            id: 103,
            theme: "Hors-jeu",
            question: "Y a-t-il hors-jeu sur une remise en jeu ?",
            options: ["Oui", "Non", "Seulement si directe", "Seulement en surface"],
            answer: "Non",
            difficulty: "medium",
            explanation: "Il n'y a pas de hors-jeu sur remise en jeu, corner ou coup de pied de but"
        },
        {
            id: 104,
            theme: "Touche",
            question: "À quelle distance minimum les adversaires doivent-ils se tenir lors d'une remise en jeu ?",
            options: ["1 m", "2 m", "9,15 m", "Aucune distance minimum"],
            answer: "2 m",
            difficulty: "medium",
            explanation: "Les joueurs adverses doivent se tenir à au moins 2 mètres du point de remise en jeu"
        },
        {
            id: 105,
            theme: "Touche",
            question: "Les pieds du joueur effectuant la remise en jeu doivent :",
            options: ["Être sur la ligne", "Être derrière la ligne", "Toucher la ligne ou être derrière", "Peu importe"],
            answer: "Toucher la ligne ou être derrière",
            difficulty: "medium",
            explanation: "Les pieds doivent être sur la ligne de touche ou au sol derrière cette ligne"
        },
        {
            id: 106,
            theme: "Corner",
            question: "À quelle distance du drapeau de corner le ballon doit-il être placé ?",
            options: ["Exactement sur le drapeau", "Dans l'arc de cercle", "À 1 m maximum", "Peu importe"],
            answer: "Dans l'arc de cercle",
            difficulty: "easy",
            explanation: "Le ballon doit être placé à l'intérieur de l'arc de cercle de coin"
        },
        {
            id: 107,
            theme: "Arbitrage assistant",
            question: "Comment l'arbitre assistant doit-il signaler un hors-jeu ?",
            options: ["Lever le drapeau verticalement", "Lever le drapeau à 45°", "Agiter le drapeau", "Siffler"],
            answer: "Lever le drapeau verticalement",
            difficulty: "easy",
            explanation: "Le drapeau doit être levé verticalement pour signaler un hors-jeu"
        },
        {
            id: 108,
            theme: "Arbitrage assistant",
            question: "Que signifie un drapeau levé à 45° vers le bas ?",
            options: ["Hors-jeu", "Faute", "Remplacement", "Corner équipe proche"],
            answer: "Corner équipe proche",
            difficulty: "medium",
            explanation: "Le drapeau à 45° vers le bas indique un corner pour l'équipe la plus proche de l'assistant"
        },
        {
            id: 109,
            theme: "Arbitrage assistant",
            question: "L'arbitre assistant peut-il signaler une faute que l'arbitre n'a pas vue ?",
            options: ["Oui, toujours", "Non, jamais", "Seulement les fautes graves", "Seulement dans sa zone"],
            answer: "Seulement les fautes graves",
            difficulty: "hard",
            explanation: "L'assistant ne peut signaler que les fautes graves que l'arbitre n'a pas vues, particulièrement hors de son champ de vision"
        },
        {
            id: 110,
            theme: "Hors-jeu",
            question: "Un joueur en position de hors-jeu qui court vers le ballon sans le toucher :",
            options: ["N'est jamais fautif", "Est toujours fautif", "Est fautif s'il influence le jeu", "Est fautif s'il gêne le gardien"],
            answer: "Est fautif s'il influence le jeu",
            difficulty: "hard",
            explanation: "S'il influence un adversaire ou tire avantage de sa position, il devient fautif même sans toucher le ballon"
        },
        {
            id: 111,
            theme: "Touche",
            question: "Peut-on marquer directement sur remise en jeu ?",
            options: ["Oui, dans les deux buts", "Oui, seulement but adverse", "Non, jamais", "Seulement après rebond"],
            answer: "Non, jamais",
            difficulty: "medium",
            explanation: "Il est impossible de marquer directement sur remise en jeu, ni dans son but ni dans le but adverse"
        },
        {
            id: 112,
            theme: "Arbitrage assistant",
            question: "Dans quelle situation l'arbitre assistant doit-il absolument intervenir ?",
            options: ["Faute légère", "Hors-jeu passif", "Brutalité hors vue arbitre", "Contestation joueur"],
            answer: "Brutalité hors vue arbitre",
            difficulty: "medium",
            explanation: "L'assistant doit impérativement signaler les actes de brutalité ou de violence que l'arbitre n'a pas vus"
        }
    ]
};

// Fonction utilitaire pour mélanger un array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fonction pour obtenir des questions par rôle et niveau
function getQuestionsByRoleAndLevel(role, level, count = 15) {
    const roleQuestions = questionsByRole[role] || [];
    
    // Filtrer par niveau si nécessaire (pour l'instant toutes les questions sont accessibles à tous les niveaux)
    let filteredQuestions = roleQuestions;
    
    // Mélanger et prendre le nombre demandé
    const shuffled = shuffleArray(filteredQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export pour utilisation dans le script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questionsByRole, getQuestionsByRoleAndLevel };
}