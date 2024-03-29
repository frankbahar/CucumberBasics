package steps;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	@Before
	public void setUp() {
		System.out.println("Launch the browser");
	}
	
	@After
	public void tearDown() {
		System.out.println("Quiting the browser");
	}
	
	@Before("@prod")
	public void setUpProd() {
		System.out.println("Launch the browser for Production");
	}
	
	@After("@prod")
	public void tearDownProd() {
		System.out.println("Quiting the browser for Production");
	}
	
	@Given("^user navigates to facebook website$")
	public void user_navigates_to_facebook_website() throws Throwable {
		System.out.println("@Given -- User navigates to Facebook.com");
	}

	@When("^user validates the homepage title$")
	public void user_validates_the_homepage_title() throws Throwable {
	 System.out.println("@When -- user validates the home page title");
	}

	@Then("^user entered the \"([^\"]*)\" username$")
	public void user_entered_the_valid_username(String username) throws Throwable {
	    System.out.println("@Then -- user entered the " + username + " username");
	}

	@And("^user entered the \"([^\"]*)\" password$")
	public void user_entered_the_valid_password(String password) throws Throwable {
		System.out.println("@And -- user entered the " + password + " password");
	}

	@Then("^user \"([^\"]*)\" successfully logged in$")
	public void user_shouldbe_successfully_logged_in(String validateLogin) throws Throwable {
		System.out.println("@Then -- user validate " + validateLogin + " successfuly logged in");
	}
	
	@And("^user select the age category$")
	public void user_select_the_age_category(DataTable table) throws Throwable {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);
	    System.out.println("@And user select the age category " + data.get(1).get("Age") +
	    		" Selected location as : " + data.get(0).get("location"));
	}
}
