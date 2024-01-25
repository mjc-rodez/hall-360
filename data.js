var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall-entre",
      "name": "Hall entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.019896566249834,
        "pitch": 0.09894361235698135,
        "fov": 1.3337680586201845
      },
      "linkHotspots": [
        {
          "yaw": -2.959161885981244,
          "pitch": 0.2843596532444792,
          "rotation": 0,
          "target": "1-hall-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall-accueil",
      "name": "Hall accueil",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.6155748130427341,
        "pitch": 0.0300991381353235,
        "fov": 1.3337680586201845
      },
      "linkHotspots": [
        {
          "yaw": -1.2009759678327256,
          "pitch": 0.07251540676739587,
          "rotation": 0,
          "target": "2-hall-spectacle"
        },
        {
          "yaw": 1.5872877875663818,
          "pitch": 0.22622805102493793,
          "rotation": 0,
          "target": "0-hall-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-spectacle",
      "name": "Hall spectacle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7344709937966947,
        "pitch": 0.09218047419811626,
        "fov": 1.3337680586201845
      },
      "linkHotspots": [
        {
          "yaw": -0.15185723241750182,
          "pitch": -0.13168691278034927,
          "rotation": 0,
          "target": "1-hall-accueil"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "hall",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
