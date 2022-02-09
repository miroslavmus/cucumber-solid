package uni.coolcode.services;

import uni.coolcode.businessobj.Storage;
import uni.coolcode.businessobj.ChildRegistration;

public class RegistrationStorage extends Storage<ChildRegistration> {

    private static RegistrationStorage container = null;

    public static RegistrationStorage getInstance() {
        if (container == null) {
            container = new RegistrationStorage();
        }
        return container;
    }
    private RegistrationStorage() {
        super();
    }

    public boolean tryRegister(ChildRegistration registration) {

        return !this.hasItem(registration);
    }
}
