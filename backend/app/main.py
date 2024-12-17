# main.py
from fastapi import FastAPI, WebSocket
import json
from typing import List
import asyncio
from datetime import datetime
import random

with open("fake_robot_data.json") as f:
    robots = json.load(f)

app = FastAPI()

@app.get("/robots")
async def get_robots():
    return {"robots": robots}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            for robot in robots:
                if robot["Battery Percentage"] <= 0:
                    robot["Battery Percentage"] = 100
                else:
                    robot["Battery Percentage"] = max(0, robot["Battery Percentage"] - random.randint(0, 5))
                
                robot["Online/Offline"] = robot["Battery Percentage"] > 10
                robot["CPU Usage"] = random.randint(0, 100)
                robot["RAM Consumption"] = random.randint(1000, 9999)
                robot["Last Updated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                lat, lng = robot["Location Coordinates"]
                lat += random.uniform(-0.01, 0.01)
                lng += random.uniform(-0.01, 0.01)
                robot["Location Coordinates"] = [round(lat, 6), round(lng, 6)]

            online_robots = [robot for robot in robots if robot["Online/Offline"]]
            
            await websocket.send_json({"all": robots, "online": online_robots})
            await asyncio.sleep(5)
    except Exception as e:
        print("WebSocket connection closed:", e)
