from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['POST'])
def handle_post():
    try:
        data = request.get_json()
        full_name = "john_doe"
        dob = "17091999"
        email = "john@xyz.com"
        roll_number = "ABCD123"
        numbers = [str(x) for x in data.get("data", []) if x.isdigit()]
        alphabets = [x for x in data.get("data", []) if x.isalpha()]
        highest_alphabet = sorted(alphabets, key=lambda c: c.lower(), reverse=True)[:1]
        
        user_id = f"{full_name}_{dob}"
        response = {
            "is_success": True,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highest_alphabet
        }
    except Exception as e:
        response = {
            "is_success": False,
            "error": str(e)
        }

    return jsonify(response)

@app.route('/bfhl', methods=['GET'])
def handle_get():
    return jsonify({"operation_code": 1}), 200

if __name__ == '__main__':
    app.run(debug=True)
