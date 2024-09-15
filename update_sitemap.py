import xml.etree.ElementTree as ET
from datetime import datetime

# Путь к файлу карты сайта
sitemap_path = 'sitemap.xml'

# Получаем текущую дату в формате YYYY-MM-DD
current_date = datetime.today().strftime('%Y-%m-%d')

# Загружаем XML-карту сайта
tree = ET.parse(sitemap_path)
root = tree.getroot()

# Обновляем дату в каждом элементе <lastmod>
for url in root.findall('url'):
    lastmod = url.find('lastmod')
    if lastmod is not None:
        lastmod.text = current_date

# Сохраняем обновленную карту сайта
tree.write(sitemap_path, encoding='utf-8', xml_declaration=True)

print(f"Дата в 'sitemap.xml' обновлена на {current_date}")
