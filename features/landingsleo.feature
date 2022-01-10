Feature: Sign in as user from the landing page

  Scenario: As a user, I can sign in from landing page

    Given I am on the landing page
    When I click on sign in button
    Then I should see log in page
