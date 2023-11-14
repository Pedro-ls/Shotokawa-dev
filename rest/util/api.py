from ninja import NinjaAPI


def createApi(**settings) -> NinjaAPI:
    api = NinjaAPI(**settings)

    return api
