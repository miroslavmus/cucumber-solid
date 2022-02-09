package uni.coolcode.services;

import uni.coolcode.iservices.NameValidationService;

public class SingleNameValidationService implements NameValidationService {
    @Override
    public boolean validate(String name) {
        return name != null && !name.isBlank() && nameIsPure(name);
    }

    private boolean nameIsPure(String name) {
        String validSymbols = "qwertyuiopasdfghjklzxcvbnmявертъуиопасдфгхйклзьцжбнм";

        if (name.toLowerCase().toCharArray()[0] == name.toCharArray()[0]) {
            // starts with a lowercase letter for sure
            return false;
        }

        //check if all symbols comply
        for (var letter: name.toLowerCase().toCharArray()) {
            if (!validSymbols.contains(String.valueOf(letter))) {
                return false;
            }
        }
        return true;
    }
}
