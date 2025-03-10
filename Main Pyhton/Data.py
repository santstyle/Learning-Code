data1 = {1,2,3,4}
data2 = {1,2,7,8}
print(data1 & data2)

data3 = data1.intersection(data2)
print(data3)

data3 = data1.symmetric_difference (data2)
print (data3)

data = {1:"PHP", 2:"HTML", 3:"Java", 4:"Pyhton"}
del(data[1])
print(data)

data.pop(2)
print(data)

data.popitem()
print(data)