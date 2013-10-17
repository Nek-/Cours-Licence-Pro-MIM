package velo;

import java.util.Scanner;

class Bike {
    
    private Hour start;
    private Hour end;
    private int  age;
    
    /**
     * Méthode de base de java
     * exécutée automatiquement
     */
    public static void main(String[] args)
    {
        Bike v = new Bike();
    }
    
    /**
     * Construit la classe vélo
     * en demandant les informations à l'utilisateur
     */
    public Bike()
    {
        Scanner sc = new Scanner(System.in);
        
        // Demande de l'heure de départ
        System.out.println("Entrez une heure de départ :");
        this.start = Hour.createHourFromString(Scanner.nextLine());

        // Demande de l'heure d'arrivée
        System.out.println("Entrez une heure d'arrivée :");
        this.end   = Hour.createHourFromString(Scanner.nextLine());
        
        // Demande de l'âge
        // Note: le programme va planter si l'utilisateur ne rentre pas un nombre
        System.out.println("Entrez votre âge :");
        this.age   = Scanner.nextInt();
    }
}

