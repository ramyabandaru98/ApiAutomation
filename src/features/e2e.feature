Feature: Booking API Validation

@e2e
  Scenario: Verify created booking ID is present in booking list

    # Given I create a new booking using the POST API
     Then I should store the Token
    And I store the generated booking ID
    # When I retrieve all booking IDs using the GET API
    Then I should delete the bookingdetails by ID
    # Then I should see the created booking ID in the booking list response
    
