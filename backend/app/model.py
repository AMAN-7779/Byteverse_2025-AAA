# Dummy ML model (replace with actual model later)
def dummy_model_predict(data):
    duration = data['duration']
    if duration > 1800:  # > 30 min
        return "High Congestion"
    elif duration > 900:  # > 15 min
        return "Moderate Congestion"
    else:
        return "Low Congestion"
