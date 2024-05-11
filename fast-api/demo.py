import json

authentication = {}


authentication ['talal'] = 'talal'
authentication ['zainab'] = 'zainab'
authentication ['hamza'] = 'hamza'

print(authentication)

save_file = open("savedata.json", "w")  
json.dump(authentication, save_file, indent = 6)  
save_file.close()

