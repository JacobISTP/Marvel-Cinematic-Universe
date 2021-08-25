import csv

def export_to_csv(movies, file_name):

  file = open(f"{file_name}.csv", mode="w", encoding='UTF8', newline='\n', )
  writer = csv.writer(file)
  writer.writerow(["search", "synopsys"])

  for movie in movies:
    writer.writerow([movie["search"], movie["synopsys"]])