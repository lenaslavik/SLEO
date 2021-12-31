Feature: Click on SLConferences image

  Scenario: As a loged in user, I can click on SLConferences

    Given I am on the home page 
    When I click on SLConferences button
    Then I should see SLC page
