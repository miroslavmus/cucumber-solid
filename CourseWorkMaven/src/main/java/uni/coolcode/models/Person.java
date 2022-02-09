package uni.coolcode.models;

/**
 * 
 */
public class Person {

    /**
     * Default constructor
     */
    public Person() {
    }

    private String name;
    private boolean hasDisability;
    private String egn;

    /**
     * @return
     */
    public String getName() {
        // TODO implement here
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return
     */
    public boolean getIfDisabled() {
        // TODO implement here
        return hasDisability;
    }

    /**
     * @param isDisabled 
     * @return
     */
    public void setIfDisabled(boolean isDisabled) {
        // TODO implement here
        this.hasDisability = isDisabled;
    }

    /**
     * @return
     */
    public String getEgn() {
        // TODO implement here
        return egn;
    }

    /**
     * @param egn 
     * @return
     */
    public void setEgn(String egn) {
        // TODO implement here
        this.egn = egn;
    }

}