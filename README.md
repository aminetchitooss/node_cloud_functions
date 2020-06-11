# Firebase cloud functions


## So in a nutshell I'm using:

  > **dialogFlow** to communicate Google voice assistant with Dialog flow (webhook)

  > **ngrok** to run Dialog flow fulfilment and debug it locally

      ngrok http 4200 -host-header="localhost:4200"
      ngrok http --host-header=rewrite 4200


## How to use
  
  Make sure to set up a "config.json" file to get the following variables
  
    
```json
project_id  :  XXXX
privateKey  :  -----BEGIN PRIVATE KEY-----\XXXXXX
clientEmail :  firebase-adminsdk- XXXX
```
  > Run locally
  
        firebase emulators:start --only functions
        
  > Debugging in VS Code
 
 ### 1- Create a new launch configuration (in the <ins>launch.json</ins> file) for your project:
 
       {
        "configurations": [
          {
            "name": "Debug Function",
            "type": "node",
            "request": "attach",
            "port": 9229
          }
        ]
      }
      
 ### 2- Run these commands

      
      functions deploy --trigger-http --timeout 600s helloWorld
      functions inspect helloWorld
      
      #to reset
      functions reset helloWorld
      
### 3- Click on debug in VSCode
