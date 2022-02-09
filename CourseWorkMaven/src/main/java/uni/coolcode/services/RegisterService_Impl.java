package uni.coolcode.services;

import uni.coolcode.models.Child;
import uni.coolcode.iservices.BooleanParserService;
import uni.coolcode.iservices.LocalizationService;
import uni.coolcode.iservices.NameValidationService;
import uni.coolcode.iservices.PointsService;
import uni.coolcode.businessobj.ChildRegistration;

import java.security.InvalidParameterException;

public class RegisterService_Impl {

    private NameValidationService nameValidationService;
    private LocalizationService localization;
    private final EGNValidationService serviceEGN;
    private PointsService pointsService;
    private final RegistrationStorage childrenStorage;
    private final BooleanParserService boolParser;

    public RegisterService_Impl() {
        this(null, null, null);
    }

    public RegisterService_Impl(NameValidationService nameService, LocalizationService localization, PointsService points) {
        setNameValidationService(nameService);
        setLocalization(localization);
        setPointsService(points);
        boolParser = new DefaultBoolParserService();
        childrenStorage = RegistrationStorage.getInstance();
        serviceEGN = new EGNValidationService();
    }
    public String registrationEntered(String names, String disability, String egn, String sibling, String twin, String workingParents) {

        if (!nameValidationService.validate(names)) { return localization.invalidNameMessage(); }
        if (!serviceEGN.validate(egn)) { return localization.invalidEGNMessage(); }

        int parents = 0;
        try {

            parents = Integer.parseInt(workingParents.trim());
            if (parents > 2 || parents < 0) { throw new InvalidParameterException(); }
        } catch (Exception ignore) {

            return localization.invalidParentsCountMessage();
        }

        try {

            return register(build(names, disability, egn, sibling, twin), parents);
        } catch (Exception ignore) {

            return localization.invalidBoolMessage();
        }
    }

    //utility methods
    private Child build(String names, String disability, String egn, String sibling, String twin) throws Exception {

        Child child = new Child();

        child.setEgn(egn);
        child.setName(names);
        child.setHasTwin(boolParser.parseBoolean(twin));
        child.setIfDisabled(boolParser.parseBoolean(disability));
        child.setHasSiblingInSameKG(boolParser.parseBoolean(sibling));

        return child;
    }

    private String register(Child child, int workingParents) {

        child.setParents(workingParents);
        int points = pointsService.calculatePoints(child);

        ChildRegistration registration = new ChildRegistration(child, points);

        return childrenStorage.tryRegister(registration) ?
                localization.successMessage() :
                localization.unknownErrorMessage();
    }

    //service setter methods
    public void setNameValidationService(NameValidationService nameValidationService) {
        if (nameValidationService != null) {
            this.nameValidationService = nameValidationService;
        } else {
            this.nameValidationService = new FullNameValidationService();
        }
    }

    public void setLocalization(LocalizationService localization) {
        if (localization == null) {
            this.localization = LocalizationService.getDefaultLocalicationService();
        } else {
            this.localization = localization;
        }
    }

    public void setPointsService(PointsService pointsService) {
        if (pointsService == null) {
            this.pointsService = new DefaultPointsService();
            return;
        }
        this.pointsService = pointsService;
    }
}
