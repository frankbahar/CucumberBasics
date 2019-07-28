@bvt @prod
Feature: Login to Production
  
  In order to perform successful login to Prodcuction
  As a user
  I want to enter correct username and password

  Background: 
    Given user navigates to facebook website
    When user validates the homepage title

  Scenario: In order to verify the login to facebook production
    Then user entered the "valid" username
    And user entered the "valid" password
    And user validates the captured image
    Then user "shouldbe" successfully logged in

  Scenario: In order to verify the login to facebook production
    Then user entered the "invalid" username
    And user entered the "invalid" password
    And user validates the captured image
    Then user "shouldnot" successfully logged in
