from flask import Flask, render_template

app = Flask(__name__)
main = []

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/blog/")
def projects():
    return render_template("blog.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run()