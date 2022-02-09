package register;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;
import register.models.RegisterScreenModel;

public class RegisterSteps {

    private RegisterScreenModel registerModel;

    @Given("^Родителя отваря екрана за регистриране$")
    public void isOpenRegisterScreen() throws Throwable {
        registerModel = new RegisterScreenModel();
    }

    @When("^въвежда колко работещи родители има детето: \"([^\"])\"$")
    public void workingParentsCount(String string) throws Throwable {
        registerModel.setWorkingParents(string);
    }

    @When("^натиска бутон за вписване$")
    public void isRegisterButtonClick() throws Throwable {
        registerModel.isRegisterButtonClicked();
    }

    @Then("^Вижда съобщение: \"([^\"]*)\"$")
    public void checkMessage(String message) throws Throwable {
        assertEquals(message, registerModel.getMessage());
    }

    @When("^въвежда дали детето е близнак: \"([^\"]*)\"$")
    public void hasTwin(String flag) throws Throwable {
        registerModel.setHasTwin(flag);
    }

    @When("^въвежда ЕГН: \"([^\"]*)\"$")
    public void addEGN(String egn) throws Throwable {
        registerModel.setEGN(egn);
    }

    @When("^въвежда дали детето има брат или сестра в заведението: \"([^\"]*)\"$")
    public void hasSibling(String flag) throws Throwable {
        registerModel.setHasSibling(flag);
    }

    @When("^въвежда дали детето има увреждане: \"([^\"]*)\"$")
    public void addDisability(String flag) throws Throwable {
        registerModel.setHasDisability(flag);
    }

    @When("^Въведе име и фамилия: \"([^\"]*)\"$")
    public void addNames(String names) throws Throwable {
        registerModel.setNames(names);
    }




}
