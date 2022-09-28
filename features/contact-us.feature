# features/contact-us.feature
Feature: Contact us
  Scenario: Submit Contact us
    Given I am on Contact us section
    When I fill the formulary and Submit
    Then Page displays confirmation for submitting