import os

file_path = "data/data.docx"

if os.path.exists(file_path):
    print("檔案存在:", file_path)
else:
    print("檔案不存在:", file_path)
