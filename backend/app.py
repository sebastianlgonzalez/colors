from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #change later

@app.route('/', methods=['POST'])
def handle_request():
    try:
        data = request.json
        input_string = data['input']
        return jsonify({'message': f'Backend received: {input_string}'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
