import wikipedia as wp
from bs4 import BeautifulSoup
import difflib

################################################################################################
wiki_search = "SEARCH GOES HERE"
################################################################################################



search = wp.search(wiki_search)
page = wp.page(search[0])
print(page.title)
content = page.content
html_doc = page.html()
#print(html_doc)

search_words = len(wiki_search.split(" "))
content_split = content.split(" ")
#print(content_split)
content_arrays = []
i = 0
for word in content_split:
	content_arrays.append(" ".join(content_split[i:i+(3*search_words)]))
	i += 1

#print(content_arrays)



first = difflib.get_close_matches(wiki_search, content_arrays, n=3, cutoff=0.2)[0]
print()
print(first)
#print(html_doc)

html_first = difflib.get_close_matches(first, html_doc.split("."), n=3, cutoff=0.2)[0]
#print()
#print(html_first)

index1 = html_doc.lower().find(html_first.lower())
split = html_doc[index1:]
#print(split)

soup = BeautifulSoup(html_doc, "html.parser")
soup_split = BeautifulSoup(split, "html.parser")


#source_num = int(soup_split.find(class_="reference").getText()[1:].replace("]",""))
source_id = soup_split.find(class_="reference").find("a",href = True)["href"][1:]
#print()
#print(source_id)
reference = soup.find(id=source_id).find_all("cite")[0].getText()
print()
print(reference)
#soup_ref = BeautifulSoup(,"html.parser")
#reference = soup.find_all(class_="reference-text")[source_num - 1]
#print(reference.getText())

# print()
# i = 0
# for reference in soup.find_all(class_="reference-text"):
# 	print(str(i) + " " + reference.getText())
# 	print()
# 	i += 1
