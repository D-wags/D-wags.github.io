from bs4 import BeautifulSoup
import urllib.request
import requests
import re
import json

base_url = 'http://www.hotsaucefever.com/hotsauce'
r = requests.get(base_url)

soup = BeautifulSoup(r.text)

num_pages = 14

url_list = [base_url + '/page/' + str(page) for page in range(1, num_pages + 1)]

sauces = []

for url in url_list:
	r_new = requests.get(url)
	soup = BeautifulSoup(r_new.text)
	names = soup.select('.detail h2')
	location = soup.select('.list-txt')
	for i in range(len(names)):
		sauceDict = {'name': '', 'maker': '', 'peppers': '', 'heat': ''}
		sauceDict['name'] = names[i].getText()

		parts = location[i].getText().replace('            ', '').replace('\n', ' ').split("  ")
		
		if len(parts) == 2:
			parts.append('')

		for i in range (len(parts)):
			sauceDict['maker'] = parts[0]
			sauceDict['peppers'] = parts[1]
			sauceDict['heat'] = parts[2]

		sauces.append(sauceDict)

with open('sauces.json', 'w') as fp:
	json.dump(sauces, fp, indent=2)



