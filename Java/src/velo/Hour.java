package velo;

/**
 * Classe permettant de simplifier le traitement
 * des heures
 */
class Hour {
    
    private int hour;
    private int minute;
    
    /**
     * Méthode statique qui permet d'instancier
     * une "Hour" à l'aide d'une chaîne de caractères
     * 
     * @param String hour Chaîne de caractères sous la forme "8h15"
     */
    public static Hour createHourFromString(String hour)
    {
        
    }
    
    public Hour (int hour, int minute)
    {
        this.hour   = hour;
        this.minute = minute;
    }
}