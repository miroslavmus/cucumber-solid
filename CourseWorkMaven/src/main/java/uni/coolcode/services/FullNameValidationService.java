package uni.coolcode.services;

import uni.coolcode.iservices.NameValidationService;

public class FullNameValidationService implements NameValidationService {
    @Override
    public boolean validate(String name) {
        NameValidationService singleNameValidation = new SingleNameValidationService();

        String[] names = name.split(" ");
        if (names.length < 2) return false;

        for (String string : names) {

            if (!singleNameValidation.validate(string)) {

                return false;
            }
        }
        return true;
    }
}
