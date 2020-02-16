import wikipedia as wp
import re
from bs4 import BeautifulSoup

###
wiki_search = "9/11 was an inside job"
page_match = "obama"
##


search = wp.search(wiki_search)
page = wp.page(search[0])
print(page)
content = page.content



html_doc = page.html()
index1 = html_doc.lower().find(page_match)
split = html_doc[index1:]
#print(split)

soup = BeautifulSoup(html_doc, "html.parser")
soup_split = BeautifulSoup(split, "html.parser")


source_num = int(soup_split.find(class_="reference").getText()[1:].replace("]",""))
reference = soup.find_all(class_="reference-text")[source_num - 1]
print(reference.getText())