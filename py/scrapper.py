import requests
import csv
from bs4 import BeautifulSoup
from exporter import export_to_csv

with open('search.csv', newline='\n', encoding='UTF8') as f:
    reader = csv.reader(f)
    movies = list(reader)

basicUrl = "https://search.naver.com/search.naver?query="
content_movies = []

for movie in movies[1:]:
    try:
        print(f"스크랩 : {movie[0]}")
        url = f"{basicUrl}영화 {movie[0]} 정보"
        soup = BeautifulSoup(requests.get(url).text, "html.parser")
        synopsys = soup.find("div", {"class":"_cm_content_area_synopsis"}).find("p").text.replace(',',"")
        print(synopsys)
    except:
        synopsys = "Coming Soon!"
    content_movies.append({"search": movie[0], "synopsys": synopsys})

print(content_movies)
export_to_csv(content_movies, "content_movies")