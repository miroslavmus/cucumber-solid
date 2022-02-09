package uni.coolcode.services;

import uni.coolcode.iservices.BooleanParserService;

public class DefaultBoolParserService implements BooleanParserService {

    @Override
    public boolean parseBoolean(String string) throws Exception {

        boolean bool = Boolean.parseBoolean(string);
        if (bool || string.equals("false")) {
            return bool;
        }

        throw new Exception();
    }
}
