const FakeServer = require('test-fake-server');

const fakeServer = new FakeServer(3000);

fakeServer.get({ 
  path: '/', 
  response: {
    "products": "/products"
  }
});


fakeServer.get({ 
  path: '/products', 
  response: {
    "products": [
        {
            "id": 1,
            "obj": "carrot",
            "packages" : {
                "single" : {
                    "id" : 9,
                    "price" : 0.9
                },
                "kilo" : {
                    "id" : 10,
                    "price" : 0.5
                }
            }
        },
        {
            "id": 2,
            "obj": "milk",
            "packages" : {
                "liter" : {
                    "id" : 13,
                    "price" : 1.3
                },
                "decaliter" : {
                    "id" : 14,
                    "price" : 1.1
                }
            }
        },
        {
            "id": 3,
            "obj": "bread",
            "packages" : {
                "single" : {
                    "id" : 15,
                    "price" : 2.2
                },
                "kilo" : {
                    "id" : 16,
                    "price" : 2
                }
            }
        },
        {
            "id": 4,
            "obj": "fish",
            "packages" : {
                "single" : {
                    "id" : 18,
                    "price" : 20
                },
                "kilo" : {
                    "id" : 19,
                    "price" : 19.5
                }
            }
        }
    ]
}
});


fakeServer.get({ 
  path: '/products/1', 
  response: {
    "data": 
        {
            "id": 1,
            "obj": "carrot",
            "packages" : {
                "single" : {
                    "id" : 9,
                    "price" : 0.9
                },
                "kilo" : {
                    "id" : 10,
                    "price" : 0.5
                }
            }
        }
}
});

fakeServer.get({ 
  path: '/products/2', 
  response: {
    "data":
        {
            "id": 2,
            "obj": "milk",
            "packages" : {
                "liter" : {
                    "id" : 13,
                    "price" : 1.3
                },
                "decaliter" : {
                    "id" : 14,
                    "price" : 1.1
                }
            }
        }
}
});

fakeServer.get({ 
  path: '/products/3', 
  response: {
    "data": 
        {
            "id": 3,
            "obj": "bread",
            "packages" : {
                "single" : {
                    "id" : 15,
                    "price" : 2.2
                },
                "kilo" : {
                    "id" : 16,
                    "price" : 2
                }
            }
        }
  }
});

fakeServer.get({ 
  path: '/products/4', 
  response: {
    "data": 
        {
          "id": 4,
          "obj": "fish",
          "packages" : {
              "single" : {
                  "id" : 18,
                  "price" : 20
              },
              "kilo" : {
                  "id" : 19,
                  "price" : 19.5
              }
          }
        }
      }
});

fakeServer.start();