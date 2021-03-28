Feature: Smoke Test
    Scenario: Index page loads correctly
        When the user visits "/"
        Then the page loads with the title "W3C"

    Scenario: Main menu works
        When the user visits "/"
        Then open the link to "/standards/" within "main_nav"
