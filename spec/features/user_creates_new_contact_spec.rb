require 'rails_helper'

feature "User adds new contact", js: true, server_rendering: true do
  scenario "User visits page" do
    visit root_path
    expect(page).to have_content("First Name")
    expect(page).to have_content("Last Name")
    expect(page).to have_content("Email")
    expect(page).to have_content("Phone Number")
    expect(page).to have_content("Company")
    expect(page).to have_button("submit")
  end

  scenario "User creates contact" do
    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    expect(page).to have_content("Bob")
  end

end
