require 'rails_helper'

feature "User sorts contacts by email", js: true, server_rendering: true do

  scenario "User creates contacts and sorts." do
    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob@bob.net"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob@bob.com"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    expect(page).to have_content("Bob@bob.net")
    expect(page).to have_content("Bob@bob.com")
    ("Bob@bob.net").should appear_before("Bob@bob.com")

    click_button "Sort by email"
    expect(page).to have_content("Bob@bob.net")
    expect(page).to have_content("Bob@bob.com")
    ("Bob@bob.com").should appear_before("Bob@bob.net")
  end

end
