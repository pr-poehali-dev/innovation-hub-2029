import os
import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    course = body.get('course', '—')

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    text = (
        f"📋 Новая заявка с сайта!\n\n"
        f"👦 Имя ребёнка: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🎓 Курс: {course}"
    )

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({'chat_id': chat_id, 'text': text}).encode()

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
