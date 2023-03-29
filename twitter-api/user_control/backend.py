from oauth2_provider.oauth2_backends import OAuthLibCore

from .claims import get_claims


class OAuth(OAuthLibCore):
    def _get_extra_credentials(self, request):
        """
        Produce extra credentials for token response. This dictionary will be
        merged with the response.
        See also: `oauthlib.oauth2.rfc6749.TokenEndpoint.create_token_response`

        :param request: The current django.http.HttpRequest object
        :return: dictionary of extra credentials or None (default)
        """
        return {"claims": get_claims(request.POST.get('username'))}
