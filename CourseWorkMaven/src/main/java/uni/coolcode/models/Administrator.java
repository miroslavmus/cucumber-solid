package uni.coolcode.models;

import uni.coolcode.models.Person;

/**
 * 
 */
public class Administrator extends Person {

    /**
     * Default constructor
     */
    public Administrator() {
    }

    private String username;
    private String password;
    private String email;

    /**
     * @return
     */
    public String getUsername() {
        // TODO implement here
        return username;
    }

    /**
     * @param username 
     * @return
     */
    public void setUsername(String username) {
        // TODO implement here
        this.username = username;
    }

    /**
     * @return
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password 
     * @return
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        this.email = email;
    }
}