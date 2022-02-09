package uni.coolcode.localizations;

import uni.coolcode.iservices.LocalizationService;

public class BulgarianLocalization implements LocalizationService {

    public String invalidNameMessage() { return "Въведете нормално име..."; }
    public String successMessage() { return "Детето Ви е регистрирано!"; }
    public String pleaseEnterSurnameMessage() { return "Въведете фамилия!"; }
    public String invalidEGNMessage() { return "ЕГН тр. да съдържа точно 10 цифри и нищо друго бе неандърталиц!"; }
    public String invalidBoolMessage() { return "Използвайте [true] & [false] за да записвате стойностите с да и не."; }
    public String invalidParentsCountMessage() { return "Въведете правилно брой работещи родители [0, 1, 2]."; }
    public String unknownErrorMessage() { return "Неизвестна грешка."; }
}
