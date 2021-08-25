import requests
from bs4 import BeautifulSoup
from flask import render_template, send_file, request, Flask

basicUrl = "https://search.naver.com/search.naver?query="
app = Flask("content_scrape")

@app.route("/")
def home():
    return render_template("../index.html")

@app.route("/search")
def search():
    word=request.args.get("word")

    # url = basicUrl+word+" 정보"
    url = basicUrl+"아이언맨1"+" 정보"
    soup = BeautifulSoup(requests.get(url).text, "html.parser")
    synopsys = soup.find("div", {"class":"_cm_content_area_synopsis"}).find("p").text

    return render_template("../content_movie.html", word=word, synopsys=synopsys)