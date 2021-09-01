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
        url = f"{basicUrl}영화 {movie[0]}"
        url_info = f"{basicUrl}영화 {movie[0]} 정보"

        soup = BeautifulSoup(requests.get(url).text, "html.parser")
        soup_info = BeautifulSoup(requests.get(url_info).text, "html.parser")

        summary = soup.find("div", {"class": "detail_info"}).find("dl",{"class":"info txt_3"}).findAll("div",{"class":"info_group"})[0].find("dd").get_text(" | ", strip=True)
        starPoint = soup.find("div", {"class": "detail_info"}).find("dl",{"class":"info txt_3"}).findAll("div",{"class":"info_group"})[2].find("dd").text
        audienceCount = soup.find("div", {"class": "detail_info"}).find("dl",{"class":"info txt_3"}).findAll("div",{"class":"info_group"})[3].find("dd").text
        synopsys = soup_info.find("div", {"class":"_cm_content_area_synopsis"}).find("p").text.replace(',',".")

        print(summary)
    except:
        synopsys = "Coming Soon!"
        starPoint = "-"
        audienceCount = "-"
        summary = "-"

    content_movies.append({"search": movie[0], "synopsys": synopsys, "starPoint":starPoint, "audienceCount":audienceCount, "summary":summary})


print(content_movies)
export_to_csv(content_movies, "content_movies")