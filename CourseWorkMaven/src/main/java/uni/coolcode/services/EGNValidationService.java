package uni.coolcode.services;

import uni.coolcode.iservices.NameValidationService;

public class EGNValidationService implements NameValidationService {

    @Override
    public boolean validate(String name) {
        String validSymbols = "1234567890";

        if (name.trim().length() != 10) {
            return false;
        }

        for (var digit : name.toCharArray()) {
            if (validSymbols.contains(String.valueOf(digit))) {
                continue;
            }
            return false;
        }
        return true;
    }
}
