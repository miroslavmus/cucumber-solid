package uni.coolcode.businessobj;

import uni.coolcode.models.Child;

public class ChildRegistration {
    final Child child;
    final int points;

    public ChildRegistration(Child child, int points) {
        this.child = child;
        this.points = points;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ChildRegistration)) return false;
        ChildRegistration that = (ChildRegistration) o;
        return child.equals(that.child) && points == that.points;
    }

    @Override
    public int hashCode() {
        return this.child.hashCode();
    }
}
