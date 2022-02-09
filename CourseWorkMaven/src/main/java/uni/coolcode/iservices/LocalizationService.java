package uni.coolcode.iservices;

import uni.coolcode.localizations.BulgarianLocalization;

public interface LocalizationService {
    static LanguageCode getDefaultLanguageCode() { return LanguageCode.bg; }
    static LocalizationService getDefaultLocalicationService() { return getDefaultLanguageCode().getLocalizationService(); }

    String invalidNameMessage();
    String successMessage();
    String pleaseEnterSurnameMessage();
    String invalidEGNMessage();
    String unknownErrorMessage();
    String invalidBoolMessage();
    String invalidParentsCountMessage();

    enum LanguageCode {
        bg,
        tr,
        en,
        de,
        //ru, //- we do not want to support the russian language
        it;

        public LocalizationService getLocalizationService() {
            //just indicate that we can support multiple localizations
            switch (this) {
                default -> { return new BulgarianLocalization(); }
            }
        }
    }
}
