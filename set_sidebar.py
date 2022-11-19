import glob
import os


seiderbarPath = 'docs\.vuepress\config\sidebar.js'
docsPath = r'docs'
docsList = glob.glob(f'{docsPath}/**/*.md', recursive=True)

temp = {}
for doc in docsList:
    path, filename = os.path.split(doc)
    name, _ = os.path.splitext(filename)

    if filename in ['README.md']:
        continue

    if path.split(os.sep)[-1] in temp:
        temp[path.split(os.sep)[-1]].append(filename)
    else:
        temp[path.split(os.sep)[-1]] = [filename]

with open(seiderbarPath, 'w', encoding="utf-8", errors='ignore') as f:
    f.write('module.exports = {\n')

    for p in temp:
        title = p.split(os.sep)[-1]
        f.write(f"\t'/{title}/': [\n")
        for c in temp[p]:
            f.write(f"\t\t'{c}',\n")
        f.write('\t],\n')
    f.write('}')