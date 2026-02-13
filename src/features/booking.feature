@booking @smoke
Feature: Booking API

  Scenario: Get all booking IDs
    When I fetch all the booking ids
    Then I should receive a list of booking ids



  @token

  Scenario: generate a Token with giving username and password
    Given I create a token with the username and password


  @bookingdetails
  
  Scenario: Get all booking details
    When I fetch all the booking details

