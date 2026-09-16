Feature: Smoke Test
    Scenario: Index page loads with some content
        When the user visits "/selenium/web/web-form.html"
        Then the h1 contains the text "Web form"

    Scenario: Main menu contains a link
        When the user visits "/selenium/web/web-form.html"
        Then the link to "./indexfoo.html" is within "container"
