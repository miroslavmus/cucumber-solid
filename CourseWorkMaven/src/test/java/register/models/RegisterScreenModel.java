package register.models;

import uni.coolcode.services.RegisterService_Impl;

public class RegisterScreenModel {

    //fields
    private String names;
    private String disability;
    private String egn;
    private String hasSibling;
    private String twin;
    private String workingParents;

    //output message
    private String message;

    //service
    private final RegisterService_Impl registerService;

    public RegisterScreenModel() {
        registerService = new RegisterService_Impl();
    }

    //setter methods
    public void setNames(String names) {
        this.names = names;
    }

    public void setHasDisability(String disability) {
        this.disability = disability;
    }

    public void setEGN(String egn) {
        this.egn = egn;
    }

    public void setHasSibling(String flag) {
        this.hasSibling = flag;
    }

    public void setHasTwin(String twin) {
        this.twin = twin;
    }

    public void setWorkingParents(String parents) {
        this.workingParents = parents;
    }

    //trigger api
    public void isRegisterButtonClicked() {
        message = registerService.registrationEntered(names, disability, egn, hasSibling, twin, workingParents);
    }

    //output api
    public String getMessage() {
        return message;
    }
}
