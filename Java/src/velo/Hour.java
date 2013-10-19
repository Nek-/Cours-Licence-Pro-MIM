package velo;

/**
 * Classe permettant de simplifier le traitement
 * des heures
 */
class Hour {
    
    /**
     * L'heure (un nombre entier)
     * @var int hour
     */
    private int hour;
    
    /**
     * Les minutes (un nombre entier)
     * @var int minute
     */
    private int minute;
    
    /**
     * Méthode statique qui permet d'instancier
     * une "Hour" à l'aide d'une chaîne de caractères
     * 
     * @param String hour Chaîne de caractères sous la forme "8h15"
     */
    public static Hour createHourFromString(String hour)
    {
        // On coupe la chaîne de caractères en deux dans un tableau
        // de chaînes de caractères.
        // On utilise la méthode split dont la doc est disponible ici:
        // http://docs.oracle.com/javase/7/docs/api/java/lang/String.html#split%28java.lang.String%29
        String[] hourSplitted = hour.split("h");
        
        // La méthode static Integer.parseInt() permet de transformer les
        // chaînes de caractères en nombres
        return new Hour(
            hourSplitted[0],
            hourSplitted[1]
        );
    }
    
    /**
     * Le constructeur de la classe
     * il initialise les variables contenues
     * 
     * @param int hour Un nombre représentant l'heure
     * @param int minute Un nombre représentant les minutes
     */
    public Hour(int hour, int minute)
    {
        this.hour   = hour;
        this.minute = minute;
    }
    
    /**
     * Calcule la différence entre l'heure courante et l'heure passée
     * en paramètres
     * 
     * @param Hour otherHour
     * @return int toujours positif représentant la différence entre les deux heures
     */
    public int diff(Hour otherHour)
    {
        // TODO
        return 0;
    }
    
    /**
     * Retourne "vrai" si l'heure précède l'heure donnée en paramètres
     * 
     * @param Hour otherHour
     * @return boolean
     */
    public boolean before(Hour otherHour)
    {
        // TODO
        return false;
    }
    
    
    /**
     * Retourne "vrai" si l'heure suit l'heure donnée en paramètres
     * 
     * @param Hour otherHour
     * @return boolean
     */
    public boolean after(Hour otherHour)
    {
        // TODO
        return false;
    }
}