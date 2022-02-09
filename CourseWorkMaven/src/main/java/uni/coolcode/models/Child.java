package uni.coolcode.models;

import java.util.*;

/**
 * 
 */
public class Child extends Person {

    /**
     * Default constructor
     */
    public Child() {
    }

    private boolean hasSiblingInSameKG;
    private boolean hasTwin;
    private int parents;


    /**
     * @return
     */
    public boolean getHasTwin() {
        // TODO implement here
        return hasTwin;
    }

    /**
     * @param hasTwin 
     * @return
     */
    public void setHasTwin(boolean hasTwin) {
        // TODO implement here
        this.hasTwin = hasTwin;
    }

    public void setHasSiblingInSameKG(boolean hasSiblingInSameKG) {
        this.hasSiblingInSameKG = hasSiblingInSameKG;
    }

    public boolean getHasSiblingInSameKG() {
        return hasSiblingInSameKG;
    }

    public int getWorkingParents() {
        return parents;
    }

    public void setParents(int parents) {
        this.parents = parents;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Child)) return false;
        Child child = (Child) o;
        return this.getEgn().equals(child.getEgn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.getEgn());
    }
}