from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# opens chrome/google doc
driver = webdriver.Chrome(
    '/Users/jason/OneDrive - University of North Georgia/CSCI 1301/chromedriver')
driver.get('https://docs.google.com/document/u/0/')
driver.implicitly_wait(10)
# inputs email
driver.find_element_by_id('identifierId').send_keys("j.lu7000@gmail.com")
driver.find_element_by_id('identifierNext').click()
driver.find_element_by_name('password').send_keys("Jl214755!")
driver.find_element_by_id('passwordNext').click()

print("shitbot")
