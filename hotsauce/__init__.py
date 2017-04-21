from flask import Flask, render_template

app = Flask(__name__)

# index page


@app.route('/')
def index():
    try:
        return render_template("index.html", title="HotSauce")
    except Exception as e:
        return str(e)


@app.route('/about/')
def about():
    try:
        return render_template("about.html", title="About")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/')
def hotsauces():
    try:
        return render_template("hotsauces.html", title="Hot Sauces")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/cholula/')
def cholula():
    try:
        return render_template("cholula.html", title="Hot Sauces - Cholula")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/davesGhostPepperSauce/')
def daves_ghost_pepper():
    try:
        return render_template("daves_ghost_pepper.html", title="Hot Sauces - Daves Ghost Pepper")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/sriracha/')
def sriracha():
    try:
        return render_template("sriracha.html", title="Hot Sauces - Sriracha")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/slingblade/')
def slingblade():
    try:
        return render_template("slingblade.html", title="Hot Sauces - Slingblade")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/FranksRedHot/')
def franks_red_hot():
    try:
        return render_template("franks_red_hot.html", title="Hot Sauces - Franks Red Hot")
    except Exception as e:
        return str(e)


@app.route('/hotsauces/tabasco/')
def tabasco():
    try:
        return render_template("tabasco.html", title="Hot Sauces - Tabasco")
    except Exception as e:
        return str(e)


@app.route('/brands/')
def brands():
    try:
        return render_template("brands.html", title="Brands")
    except Exception as e:
        return str(e)


@app.route('/brands/cholula_sauce/')
def cholula_sauce():
    try:
        return render_template("cholula_brand.html", title="Brands - Cholula")
    except Exception as e:
        return str(e)


@app.route('/brands/cajohns_sauce/')
def cajohns_sauce():
    try:
        return render_template("cajohns_brand.html", title="Brands - Cajohns")
    except Exception as e:
        return str(e)


@app.route('/brands/daves_sauce/')
def daves_sauce():
    try:
        return render_template("davesgourmet_brand.html", title="Brands - Daves")
    except Exception as e:
        return str(e)


@app.route('/brands/franksredhot_sauce/')
def franksredhot_sauce():
    try:
        return render_template("franksredhot_brand.html", title="Brands - Franks")
    except Exception as e:
        return str(e)


@app.route('/brands/huyfong_sauce/')
def huyfong_sauce():
    try:
        return render_template("huyfong_brand.html", title="Brands - Huyfong")
    except Exception as e:
        return str(e)


@app.route('/brands/tabasco_sauce/')
def tabasco_sauce():
    try:
        return render_template("tabasco_brand.html", title="Brands - Tabasco")
    except Exception as e:
        return str(e)


@app.route('/peppers/')
def peppers():
    try:
        return render_template("peppers.html", title="Peppers")
    except Exception as e:
        return str(e)


@app.route('/peppers/carolinaReaper/')
def carolina_pepper():
    try:
        return render_template("carolinareaper.html", title="Peppers - Carolina Reaper")
    except Exception as e:
        return str(e)


@app.route('/peppers/cayennePepper/')
def cayenne_pepper():
    try:
        return render_template("cayennepepper.html", title="Peppers - Cayenne Pepper")
    except Exception as e:
        return str(e)


@app.route('/peppers/ghostPepper/')
def ghost_pepper():
    try:
        return render_template("ghostpepper.html", title="Peppers - Ghost Pepper")
    except Exception as e:
        return str(e)


@app.route('/peppers/pequinPepper/')
def pequin_pepper():
    try:
        return render_template("pequinpepper.html", title="Peppers - Pequin Pepper")
    except Exception as e:
        return str(e)


@app.route('/peppers/tabascoPepper/')
def tabasco_pepper():
    try:
        return render_template("tabascopepper.html", title="Peppers - Tabasco Pepper")
    except Exception as e:
        return str(e)


@app.route('/peppers/JalapenoPepper/')
def jalapeno_pepper():
    try:
        return render_template("redjalapenopepper.html", title="Peppers - Jalapeno Pepper")
    except Exception as e:
        return str(e)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", title="404 oops!")


if __name__ == "__main__":
    app.run(debug=True)
