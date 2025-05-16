from stats import Stats
from functools import wraps

class ProfileManager:
    profiles = {}
    
    @classmethod
    def profile(cls, func):
        @wraps(func)
        def profiled_func(*args, **kwargs):
            profile_key = cls._get_profile_key(func)
            if profile_key not in cls.profiles:
                cls.profiles[profile_key] = []
            error_occured = False
            result = None
            try:
                result = func(*args, **kwargs)
            except Exception as e:
                error_occured = True
                result = e
                raise e
            finally:
                stats = Stats((args, kwargs), result, error_occured)
                cls.profiles[profile_key].append(stats)
            return result
            
        return profiled_func

    @classmethod
    def get_profile(cls, func):
        """
        Return the profile of the function `func`, which is a list of `Stats` objects.
        """
        profile_key = cls._get_profile_key(func)
        return cls.profiles.get(profile_key,[])
        
    @staticmethod
    def _get_profile_key(func):
        return f"{func.__module__}.{func.__qualname__}"