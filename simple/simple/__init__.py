from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include('pyramid_chameleon')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_static_view('js', 'js', cache_max_age=3600)
    config.add_static_view('fonts', 'fonts', cache_max_age=3600)
    config.add_static_view('css', 'css', cache_max_age=3600)
    config.add_static_view('images', 'images', cache_max_age=3600)
    config.add_route('home', '/home/')
    config.add_route("index_route","/")
    config.add_route("login_route","/login/")
    config.add_route("logout_route","/logout/")
    config.add_route("request_route","/request/")
    config.scan()
    return config.make_wsgi_app()
