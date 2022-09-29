import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor_count')
def lambda_handler(event, context):
    response = table.get_item(Key={
       'part_key':'0'
    })
return response['Item']['count']
