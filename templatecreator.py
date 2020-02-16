from selenium import webdriver
from selenium.webdriver.common.keys import Keys

isMLA = True


# opens chrome/google doc
driver = webdriver.Chrome(
    '/Users/jason/OneDrive - University of North Georgia/CSCI 1301/chromedriver')
driver.get('https://office.live.com/start/word.aspx/')
driver.implicitly_wait(30)
# checks if you are logged in
while True:
    if driver.current_url == 'https://www.office.com/launch/word?auth=1':
        break
#opens new blank doc  
driver.find_element_by_xpath(
        '//*[@id="officeHome__content"]/ohp-wac-start/div/div/div[2]/div/div[1]/ohp-template-item/a').click()
print('shitbot')
# if its is MLA
#if isMLA:

def typeMLA(name, subject, professor, due_date):
    print(name+subject+professor+due_date)
