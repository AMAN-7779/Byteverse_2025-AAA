from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # ✅ Enable CORS for frontend-backend communication
    CORS(app)   
    @app.get("/")
    def main():
        return "Hello-world"
    # ✅ Import and register blueprint
    from app.routes import main
    app.register_blueprint(main)

    return app
