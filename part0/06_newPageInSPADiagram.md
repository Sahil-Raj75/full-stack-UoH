```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note right of browser:{content: "hey there", date: "2024-07-13T03:20:31.075Z"}
note right of browser:Content-Type:application/json
    server-->> browser: status code 201
note left of server: new resource created by server
```