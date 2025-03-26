/**
 * Jeu du nombre mystère
 * @author  Ewan Pfister
 * @version 1.0
 * @since   2025-03-26 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Retourne la saisie utilisateur après avoir vérifié qu'il s'agit bien d'un nombre
 * @returns {number}
 */
function saisieUtilisateur() {
    let saisie = ``;
    let isNumber = false;

    do {
        saisie = prompt(`Choisis un nombre de 1 à 100 et tente ta chance !`);

        if (isNaN(parseInt(saisie))) {
            alert(`La saisie \"${saisie}\" n'est pas un nombre !`);
            isNumber = false;
        } else {
            isNumber = true;
        }
    } while (!isNumber);

    return parseInt(saisie);
}

/**
 * Test si le nombre mystère est plus petit, plus grand ou égal à la saisie utilisateur
 * @param nombreMystere
 * @param saisieUtilisateur
 * @returns {boolean}
 */
function testerNombre(nombreMystere, saisieUtilisateur) {
    if (nombreMystere !== saisieUtilisateur) {
        if (nombreMystere < saisieUtilisateur) {
            alert(`C'est moins que ${saisieUtilisateur} ! (${nombreMystere})`);
            return false;
        } else {
            alert(`C'est plus que ${saisieUtilisateur} ! (${nombreMystere})`);
            return false;
        }
    } else {
        alert(`Félicitations, c'était bien ${saisieUtilisateur} !`);
        return true;
    }
}

/**
 * Gère l'appe des fonctions du jeu du nombre mystère
 */
function jouer() {
    let nombreMystere = tireNombre(50, 100);
    let saisie = ``;
    let nombreTrouve = false;

    do {
        saisie = saisieUtilisateur();
        nombreTrouve = testerNombre(nombreMystere, saisie);
    } while (!nombreTrouve);
}

jouer();
