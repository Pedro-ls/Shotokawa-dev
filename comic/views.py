from ninja.router import Router

route = Router()


@route.api_operation()
def test(request, payload):
    return None
