# .bower.json
Dùng để tự động dịch SCSS ra CSS
```json
{ "path": {
        "scss/main.scss": {
            "sass.enabled": true,
            "sass.options": {
                "outputDir": "../css/",
                "imagePath": null,
                "sourceComments": false,
                "outputStyle": "nested"
            }
        },
        "sass/include/*.scss": {
            "sass.enabled": false,
            "linting.collapsed": false
        }
    }
}
```
1. "outputStyle"=  nested(default) VS compressed
2. "sourceComments" = false(default) VS true 
3. sass/include/ = các file được include vào main và ko cần compress

# .bower.json
Để sử dụng được Bower: 
1. bower install
2. bower list --path >fi.txt : lấy src dependencies
```json
{
  "name": "project",
  "version": "0.0.0",
  "authors": [
    "tranvd2010"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "jquery": "~2.1.4",
    "bootstrap": "~3.3.5",
  }
}
```
dependencies : 
1. Version thay vào khi dùng.
2. Thêm các framework mình cần = bower search frName

# .bowerrc
Chỉ đường đẫn cho bower lưu xuống đâu => lưu ngay ngoài root

```json
{
"directory": ""
}
```



