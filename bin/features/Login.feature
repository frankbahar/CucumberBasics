@sanity
Feature: Login

In order to perform successful login
As a user
I want to enter correct username and password
 
Scenario Outline: In order to verify the login to facebook
				Given user navigates to facebook website
				When user validates the homepage title
				Then user entered the "<username>" username
				And user entered the "<password>" password
				And user select the age category
				|Age 		 |location|
				|below 18|Turkey	|
				|above 18|USA			|
				Then user "<loginType>" successfully logged in
				
Examples:
	|username | password | loginType|
	|valid		| valid		 | should		|
	|invalid	| invalid	 | shouldnot|