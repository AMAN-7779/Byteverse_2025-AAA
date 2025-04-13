# from flask import Blueprint, request, jsonify
# from app.utils import get_traffic_prediction
# from app.model import dummy_model_predict

# main_routes = Blueprint('main_routes', __name__)

# @main_routes.route('/predict-traffic', methods=['POST'])
# def predict_traffic():
#     data = request.get_json()
#     source = data.get('source')
#     destination = data.get('destination')

#     if not source or not destination:
#         return jsonify({'error': 'Missing source or destination'}), 400

#     try:
#         # Dummy logic (replace with ML model later)
#         traffic_data = get_traffic_prediction(source, destination)
#         congestion_level = dummy_model_predict(traffic_data)

#         return jsonify({
#             'source': source,
#             'destination': destination,
#             'congestion_level': congestion_level
#         })
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500






# from flask import Blueprint, request, jsonify
# from app.utils import get_traffic_prediction
# from app.model import dummy_model_predict

# main = Blueprint('main', __name__)

# @main.route('/predict-traffic', methods=['POST'])
# def predict_traffic():
#     data = request.get_json()
#     source = data.get('source')
#     destination = data.get('destination')

#     if not source or not destination:
#         return jsonify({'error': 'Missing source or destination'}), 400

#     try:
#         traffic_data = get_traffic_prediction(source, destination)
#         congestion_level = dummy_model_predict(traffic_data)

#         return jsonify({
#             'source': source,
#             'destination': destination,
#             'congestion_level': congestion_level
#         })
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500










# from flask import Blueprint, request, jsonify
# from app.utils import get_traffic_prediction
# from app.model import dummy_model_predict

# main = Blueprint('main', __name__)

# # ✅ Home route to remove 404 error
# @main.route('/', methods=['GET'])
# def home():
#     return jsonify({'message': 'Traffic Prediction API is running ✅'})

# # 🚗 Traffic prediction route
# @main.route('/predict-traffic', methods=['POST'])
# def predict_traffic():
#     data = request.get_json()
#     source = data.get('source')
#     destination = data.get('destination')

#     if not source or not destination:
#         return jsonify({'error': 'Missing source or destination'}), 400

#     try:
#         # Dummy logic (replace with ML model later)
#         traffic_data = get_traffic_prediction(source, destination)
#         congestion_level = dummy_model_predict(traffic_data)

#         return jsonify({
#             'source': source,
#             'destination': destination,
#             'congestion_level': congestion_level
#         })
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

















# from flask import Blueprint, request, jsonify
# from .utils import get_traffic_prediction

# routes = Blueprint('routes', __name__)

# @routes.route('/predict-traffic', methods=['POST'])
# def predict_traffic():
#     data = request.get_json()
#     source = data.get('source')
#     destination = data.get('destination')

#     if not source or not destination:
#         return jsonify({'error': 'Please provide both source and destination'}), 400

#     try:
#         traffic_data = get_traffic_prediction(source, destination)
#         return jsonify({'traffic_data': traffic_data})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500











from flask import Blueprint, request, jsonify
from .utils import get_traffic_prediction

main = Blueprint('main', __name__)

@main.route('/predict-traffic', methods=['POST'])
def predict_traffic():
    data = request.get_json()
    # print(data,'adkfa;l')
    source = data.get('source')
    destination = data.get('destination')

    if not source or not destination:
        return jsonify({'error': 'Please provide both source and destination'}), 400

    try:
        traffic_data = get_traffic_prediction(source, destination)
        return jsonify({'traffic_data': traffic_data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
