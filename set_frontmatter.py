import contextlib
from fileinput import filename
import os
import re
import random
import time
import glob


# 判断一个字符串是否为数字
def isNumber(s):
    with contextlib.suppress(ValueError):
        float(s)
        return True
    with contextlib.suppress(TypeError, ValueError):
        import unicodedata
        unicodedata.numeric(s)
        return True
    return False


# 生成一个新的permalink
def getNewPermalink():
    return hex(random.randint(1118481, 16777215))[2:]


# 得到所有的已有的permalink
def getExistsPermalinks(docsList):
    permalinks = []
    for doc in docsList:
        _, filename = os.path.split(doc)

        if filename in ['README.md']:
            continue

        with open(doc, encoding="utf-8", errors='ignore') as f:
            content = f.read()
            result = re.finditer(r'---+', content)
            positions = [i.span() for i in result]
            if not positions:
                continue
            temp = content[positions[0][1] + 1: positions[0][1] + 6]
            if temp != 'title':
                continue

            frontMatter = content[positions[0][1]: positions[1][0]]
            permalinkSpan = re.search(r'permalink', frontMatter).span()
            categoriesSpan = re.search(r'categories', frontMatter).span()
            permalink = frontMatter[permalinkSpan[1] + 1: categoriesSpan[0] - 1]
            permalink = permalink.strip('/').split('/')[-1]
            permalinks.append(permalink)
    return permalinks


# 生成新的FrontMatter
def getFrontMatter(title, ct, permalink):
    date = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())

    frontMatter = '---\n' + f'title: {title}\n'
    frontMatter += f'date: {date}\n'
    frontMatter += f'permalink: /{ct}/{permalink}/\n'
    frontMatter += f'categories: \n - {ct}\n'
    frontMatter += f'tags: \n - {ct}\n'
    frontMatter += '---\n\n'

    return frontMatter


if __name__=="__main__":
    docsPath = r'docs'
    docsList = glob.glob(f'{docsPath}/**/*.md', recursive=True)
    permalinks = getExistsPermalinks(docsList)
    for doc in docsList:
        path, filename = os.path.split(doc)
        name, _ = os.path.splitext(filename)
        if filename in ['README.md']:
            continue
        with open(doc, 'r+', encoding="utf-8", errors='ignore') as f:
            content = f.read()
            result = re.finditer(r'---+', content)
            if positions := [i.span() for i in result]:
                temp = content[positions[0][1] + 1: positions[0][1] + 6]
                if temp == 'title':
                    continue
            print(doc)
            ct = path.split(os.sep)[-1]
            title = name
            permalink = getNewPermalink()
            while permalink in permalinks:
                permalink = getNewPermalink()
            frontMatter = getFrontMatter(title, ct, permalink)
            f.seek(0, 0)
            f.write(frontMatter + content)
    print('done!')