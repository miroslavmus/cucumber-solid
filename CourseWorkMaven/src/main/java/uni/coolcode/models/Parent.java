package uni.coolcode.models;

import uni.coolcode.models.Person;

/**
 * 
 */
public class Parent extends Person {

    /**
     * Default constructor
     */
    public Parent() {
    }

    private String address;
    private boolean isWorking;
    private String email;

    /**
     * @return
     */
    public String getAddress() {
        // TODO implement here
        return address;
    }

    /**
     * @param address 
     * @return
     */
    public void setAddress(String address) {
        // TODO implement here
        this.address = address;
    }

    /**
     * @return
     */
    public boolean getIfWorking() {
        // TODO implement here
        return isWorking;
    }

    /**
     * @param isWorking 
     * @return
     */
    public void setIfWorking(boolean isWorking) {
        // TODO implement here
        this.isWorking = isWorking;
    }

    /**
     * @return
     */
    public String getEmail() {
        // TODO implement here
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        // TODO implement here
        this.email = email;
    }

}